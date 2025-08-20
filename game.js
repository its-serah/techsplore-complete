// Game State
const gameState = {
    playerName: '',
    teamName: '',
    teamNumber: '',
    difficulty: 'beginner',
    score: 0,
    lives: 3,
    starsCollected: 0,
    isPaused: false,
    isGameOver: false,
    selectedCharacter: 'astronaut',
    selectedBackground: 'space',
    selectedMusic: 'theme',
    currentQuestionIndex: 0,
    combo: 0,
    maxCombo: 0,
    perfectJumps: 0,
    distance: 0,
    powerUpActive: null,
    powerUpTimer: 0,
    achievements: [],
    totalCoins: 0
};

// Game Objects
let player = {
    x: 100,
    y: 300,
    width: 40,
    height: 60,
    velocityX: 0,
    velocityY: 0,
    speed: 5,
    jumpPower: 18,
    doubleJumpAvailable: true,
    tripleJumpAvailable: false,
    isJumping: false,
    isGrounded: true,
    isDashing: false,
    dashCooldown: 0,
    invincible: false,
    invincibleTimer: 0,
    magnetRadius: 0,
    color: '#4CAF50',
    character: 'astronaut',
    trail: []
};

let obstacles = [];
let stars = [];
let particles = [];
let powerUps = [];
let coins = [];
let backgroundElements = [];
let ground = {
    y: 450,
    height: 50
};

// Power-up types
const POWER_UP_TYPES = {
    SHIELD: { icon: 'shield', color: '#4FC3F7', duration: 5000 },
    MAGNET: { icon: 'magnet', color: '#9C27B0', duration: 7000 },
    SPEED: { icon: 'speed', color: '#FFD700', duration: 4000 },
    TRIPLE_JUMP: { icon: 'triple_jump', color: '#FF6B6B', duration: 8000 },
    COIN_MULTIPLIER: { icon: 'coin_multiplier', color: '#4CAF50', duration: 6000 }
};

// Achievements
const ACHIEVEMENTS = {
    FIRST_STAR: { name: 'Star Collector', desc: 'Collect your first star', icon: 'star' },
    COMBO_5: { name: 'Combo Master', desc: 'Get a 5x combo', icon: 'combo' },
    PERFECT_10: { name: 'Perfect Runner', desc: '10 perfect jumps', icon: 'perfect' },
    SURVIVOR: { name: 'Survivor', desc: 'Survive for 2 minutes', icon: 'survivor' },
    RICH: { name: 'Coin Collector', desc: 'Collect 100 coins', icon: 'coin' },
    SPEEDSTER: { name: 'Speed Demon', desc: 'Use dash 20 times', icon: 'speedster' }
};

// Canvas Setup
let canvas, ctx;
let animationId;
let gameSpeed = 2;

// Use questions from questions.js or fallback to default
let questions = typeof BEGINNER_QUESTIONS !== 'undefined' ? BEGINNER_QUESTIONS : [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
        correct: 0
    }
];

// Function to set questions based on difficulty
function setQuestionsForDifficulty(difficulty) {
    if (difficulty === 'advanced' && typeof ADVANCED_QUESTIONS !== 'undefined') {
        questions = ADVANCED_QUESTIONS;
        console.log(`Loaded ${questions.length} advanced questions`);
    } else {
        questions = typeof BEGINNER_QUESTIONS !== 'undefined' ? BEGINNER_QUESTIONS : [
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language"],
                correct: 0
            }
        ];
        console.log(`Loaded ${questions.length} beginner questions`);
    }
}

// Question tracking
let questionQueue = [];
let mandatoryQuestionPending = false;
let questionTimer = null;
let questionStartTime = 0;

// Coding challenge tracking
let currentCodingChallenge = null;
let codingTimer = null;
let codingStartTime = 0;
let codingTimeLeft = 120; // 2 minutes

// Input handling
const keys = {
    ArrowLeft: false,
    ArrowRight: false,
    Space: false
};

// Initialize Game
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    initializeCanvas();
});

function setupEventListeners() {
    // Welcome Screen - Both difficulty modes
    document.getElementById('beginnerBtn').addEventListener('click', () => {
        if (validateUserInfo()) {
            gameState.difficulty = 'beginner';
            gameSpeed = 2; // Beginner speed
            setQuestionsForDifficulty('beginner');
            showDifficultyInfo('beginner');
            showCustomizationScreen();
        }
    });
    
    document.getElementById('advancedBtn').addEventListener('click', () => {
        if (validateUserInfo()) {
            gameState.difficulty = 'advanced';
            gameSpeed = 3.5; // Faster speed for advanced
            setQuestionsForDifficulty('advanced');
            showDifficultyInfo('advanced');
            showCustomizationScreen();
        }
    });

    // Customization Screen
    document.querySelectorAll('.character-option').forEach(option => {
        option.addEventListener('click', (e) => {
            document.querySelectorAll('.character-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            gameState.selectedCharacter = option.dataset.character;
            player.character = option.dataset.character;
        });
    });

    document.querySelectorAll('.bg-option').forEach(option => {
        option.addEventListener('click', (e) => {
            document.querySelectorAll('.bg-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            gameState.selectedBackground = option.dataset.bg;
        });
    });

    // Set default selections
    document.querySelector('.character-option[data-character="astronaut"]').classList.add('selected');
    document.querySelector('.bg-option[data-bg="space"]').classList.add('selected');

    // Navigation buttons
    document.getElementById('nextToMusicBtn').addEventListener('click', showMusicSelectionScreen);
    
    // Music Selection
    document.querySelectorAll('.music-option').forEach(option => {
        option.addEventListener('click', (e) => {
            document.querySelectorAll('.music-option').forEach(opt => opt.classList.remove('selected'));
            option.classList.add('selected');
            gameState.selectedMusic = option.dataset.music;
            
            // Preview the selected music
            if (typeof musicManager !== 'undefined') {
                musicManager.previewSong(option.dataset.music);
            }
        });
    });
    
    // Set default music selection
    document.querySelector('.music-option[data-music="theme"]').classList.add('selected');
    
    // Add hover effects for difficulty buttons
    document.getElementById('beginnerBtn').addEventListener('mouseenter', () => {
        showDifficultyInfo('beginner');
    });
    
    document.getElementById('advancedBtn').addEventListener('mouseenter', () => {
        showDifficultyInfo('advanced');
    });

    document.getElementById('startGameBtn').addEventListener('click', startGame);

    // Game Controls
    document.getElementById('pauseBtn').addEventListener('click', togglePause);
    document.getElementById('resumeBtn').addEventListener('click', togglePause);
    document.getElementById('restartBtn').addEventListener('click', restartGame);
    document.getElementById('restartFromPause').addEventListener('click', restartGame);
    document.getElementById('quitBtn').addEventListener('click', quitToMenu);

    // Keyboard Controls
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') keys.ArrowLeft = true;
        if (e.key === 'ArrowRight') keys.ArrowRight = true;
        if (e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            if (!keys.Space) {
                keys.Space = true;
                handleJump();
            }
        }
        if (e.key === 'Shift' && player.dashCooldown <= 0) {
            handleDash();
        }
        if (e.key === 'Escape') togglePause();
    });

    document.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft') keys.ArrowLeft = false;
        if (e.key === 'ArrowRight') keys.ArrowRight = false;
        if (e.key === ' ' || e.key === 'Spacebar') keys.Space = false;
    });
}

function validateUserInfo() {
    const playerName = document.getElementById('playerName').value.trim();
    const teamName = document.getElementById('teamName').value.trim();
    const teamNumber = document.getElementById('teamNumber').value.trim();

    if (!playerName || !teamName || !teamNumber) {
        alert('Please fill in all fields!');
        return false;
    }

    gameState.playerName = playerName;
    gameState.teamName = teamName;
    gameState.teamNumber = teamNumber;
    return true;
}

function showCustomizationScreen() {
    document.getElementById('welcomeScreen').classList.remove('active');
    document.getElementById('customizationScreen').classList.add('active');
}

function showMusicSelectionScreen() {
    document.getElementById('customizationScreen').classList.remove('active');
    document.getElementById('musicSelectionScreen').classList.add('active');
}

function showDifficultyInfo(difficulty) {
    // Hide all difficulty details first
    document.querySelectorAll('.difficulty-details').forEach(detail => {
        detail.style.display = 'none';
    });
    
    // Show the selected difficulty info
    if (difficulty === 'advanced') {
        document.querySelector('.advanced-details').style.display = 'block';
    } else {
        document.querySelector('.beginner-details').style.display = 'block';
    }
}

function initializeCanvas() {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    
    // Make canvas focusable and focus it
    canvas.tabIndex = 1000;
    canvas.focus();
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Ensure canvas stays focused during gameplay
    canvas.addEventListener('click', () => canvas.focus());
    
    // Add canvas-specific keyboard event listeners for better reliability
    canvas.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') keys.ArrowLeft = true;
        if (e.key === 'ArrowRight') keys.ArrowRight = true;
        if (e.key === ' ' || e.key === 'Spacebar') {
            e.preventDefault();
            if (!keys.Space) {
                keys.Space = true;
                handleJump();
            }
        }
        if (e.key === 'Shift' && player.dashCooldown <= 0) {
            handleDash();
        }
        if (e.key === 'Escape') togglePause();
    });

    canvas.addEventListener('keyup', (e) => {
        if (e.key === 'ArrowLeft') keys.ArrowLeft = false;
        if (e.key === 'ArrowRight') keys.ArrowRight = false;
        if (e.key === ' ' || e.key === 'Spacebar') keys.Space = false;
    });
}

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ground.y = canvas.height - 120; // Give more space from bottom
    ground.height = 70; // Make ground thicker
}

function startGame() {
    // Update UI with player info
    document.getElementById('displayPlayerName').textContent = gameState.playerName;
    document.getElementById('displayTeamInfo').textContent = `${gameState.teamName} #${gameState.teamNumber}`;
    
    // Apply background theme
    const gameScreen = document.getElementById('gameScreen');
    gameScreen.className = 'screen active ' + gameState.selectedBackground + '-theme';
    
    // Hide music selection screen
    document.getElementById('musicSelectionScreen').classList.remove('active');
    
    // Start music based on selected music
    if (typeof musicManager !== 'undefined') {
        musicManager.playTheme(gameState.selectedMusic);
    }
    
    // Reset game state
    resetGameState();
    
    // Generate initial obstacles and stars
    generateInitialObjects();
    
    // Focus canvas for keyboard input
    canvas.focus();
    
    // Start game loop
    gameLoop();
}

function resetGameState() {
    gameState.score = 0;
    gameState.lives = 3;
    gameState.starsCollected = 0;
    gameState.isPaused = false;
    gameState.isGameOver = false;
    gameState.currentQuestionIndex = 0;
    gameState.combo = 0;
    gameState.maxCombo = 0;
    gameState.perfectJumps = 0;
    gameState.distance = 0;
    gameState.powerUpActive = null;
    gameState.powerUpTimer = 0;
    gameState.totalCoins = 0;
    
    player.x = 100;
    player.y = ground.y - player.height - 10;
    player.velocityX = 0;
    player.velocityY = 0;
    player.doubleJumpAvailable = true;
    player.tripleJumpAvailable = false;
    player.isJumping = false;
    player.isGrounded = true;
    player.isDashing = false;
    player.dashCooldown = 0;
    player.invincible = false;
    player.invincibleTimer = 0;
    player.magnetRadius = 0;
    player.trail = [];
    
    obstacles = [];
    stars = [];
    particles = [];
    powerUps = [];
    coins = [];
    backgroundElements = [];
    
    updateUI();
}

function generateInitialObjects() {
    // Generate obstacles
    for (let i = 0; i < 5; i++) {
        generateObstacle(canvas.width + i * 300);
    }
    
    // Generate stars
    for (let i = 0; i < 3; i++) {
        generateStar(canvas.width + i * 500);
    }
    
    // Generate coins
    for (let i = 0; i < 8; i++) {
        generateCoin(canvas.width + i * 150);
    }
    
    // Generate power-ups
    generatePowerUp(canvas.width + 800);
    
    // Generate background elements
    for (let i = 0; i < 10; i++) {
        backgroundElements.push({
            x: Math.random() * canvas.width,
            y: Math.random() * (ground.y - 200),
            type: Math.random() > 0.5 ? 'cloud' : 'planet',
            speed: 0.5 + Math.random() * 0.5,
            size: 30 + Math.random() * 50
        });
    }
}

function generateObstacle(x = canvas.width) {
    const types = ['low', 'medium', 'high', 'moving'];
    const type = types[Math.floor(Math.random() * types.length)];
    
    let obstacle = {
        x: x,
        y: ground.y,
        width: 40,
        height: 60,
        type: type,
        color: '#FF5252',
        passed: false
    };
    
    switch(type) {
        case 'low':
            obstacle.height = 30;
            obstacle.y = ground.y - 30;
            break;
        case 'medium':
            obstacle.height = 50;
            obstacle.y = ground.y - 50;
            break;
        case 'high':
            obstacle.height = 80;
            obstacle.y = ground.y - 80;
            break;
        case 'moving':
            obstacle.height = 40;
            obstacle.baseY = ground.y - 100;
            obstacle.y = obstacle.baseY;
            obstacle.moveSpeed = 2;
            obstacle.moveRange = 50;
            obstacle.moveDirection = 1;
            break;
    }
    
    obstacles.push(obstacle);
}

function generateStar(x = canvas.width) {
    const star = {
        x: x || canvas.width + Math.random() * 300,
        y: ground.y - 150 - Math.random() * 200,
        width: 30,
        height: 30,
        collected: false,
        rotation: 0
    };
    stars.push(star);
}

function handleJump() {
    if (player.isGrounded) {
        player.velocityY = -player.jumpPower;
        player.isJumping = true;
        player.isGrounded = false;
        player.doubleJumpAvailable = true;
        if (gameState.powerUpActive === 'TRIPLE_JUMP') {
            player.tripleJumpAvailable = true;
        }
        createJumpParticles();
    } else if (player.doubleJumpAvailable && player.isJumping) {
        player.velocityY = -player.jumpPower * 0.85;
        player.doubleJumpAvailable = false;
        createJumpParticles();
        gameState.combo++;
    } else if (player.tripleJumpAvailable && player.isJumping) {
        player.velocityY = -player.jumpPower * 0.75;
        player.tripleJumpAvailable = false;
        createJumpParticles('rainbow');
        gameState.combo += 2;
    }
}

function handleDash() {
    if (player.dashCooldown <= 0 && !player.isDashing) {
        player.isDashing = true;
        player.dashCooldown = 60; // 1 second cooldown at 60fps
        player.velocityX = player.velocityX > 0 ? 15 : -15;
        
        // Create dash effect
        for (let i = 0; i < 20; i++) {
            particles.push({
                x: player.x + player.width / 2,
                y: player.y + player.height / 2,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                life: 1,
                color: '#00FFFF'
            });
        }
        
        // Check for achievement
        if (!gameState.achievements.includes('SPEEDSTER')) {
            player.dashCount = (player.dashCount || 0) + 1;
            if (player.dashCount >= 20) {
                unlockAchievement('SPEEDSTER');
            }
        }
    }
}

function createJumpParticles(type = 'normal') {
    const count = type === 'rainbow' ? 20 : 10;
    for (let i = 0; i < count; i++) {
        const color = type === 'rainbow' 
            ? `hsl(${Math.random() * 360}, 100%, 50%)`
            : `hsl(${Math.random() * 60 + 200}, 100%, 50%)`;
        
        particles.push({
            x: player.x + player.width / 2,
            y: player.y + player.height,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * -2,
            life: 1,
            color: color
        });
    }
}

function updatePlayer() {
    // Apply speed boost if active
    const speedMultiplier = gameState.powerUpActive === 'SPEED' ? 1.5 : 1;
    
    // Horizontal movement
    if (keys.ArrowLeft && player.x > 0) {
        player.velocityX = -player.speed * speedMultiplier;
    } else if (keys.ArrowRight && player.x < canvas.width - player.width) {
        player.velocityX = player.speed * speedMultiplier;
    } else {
        if (!player.isDashing) {
            player.velocityX *= 0.85; // Friction
        }
    }
    
    // Apply horizontal velocity
    player.x += player.velocityX;
    
    // Apply vertical velocity
    player.y += player.velocityY;
    
    // Gravity (more realistic acceleration)
    if (!player.isGrounded) {
        player.velocityY += 0.6; // Gravity
        
        // Terminal velocity (max fall speed)
        if (player.velocityY > 20) {
            player.velocityY = 20;
        }
    }
    
    // Ground collision with proper landing
    const groundLevel = ground.y - player.height;
    if (player.y >= groundLevel) {
        player.y = groundLevel;
        
        // Only reset if actually falling
        if (player.velocityY > 0) {
            player.velocityY = 0;
            player.isJumping = false;
            player.isGrounded = true;
            player.doubleJumpAvailable = true;
            player.tripleJumpAvailable = false;
            player.isDashing = false;
        }
    } else {
        player.isGrounded = false;
    }
    
    // Prevent going above screen
    if (player.y < 0) {
        player.y = 0;
        player.velocityY = 0;
    }
    
    // Horizontal boundaries
    player.x = Math.max(0, Math.min(canvas.width - player.width, player.x));
    
    // Update dash cooldown
    if (player.dashCooldown > 0) {
        player.dashCooldown--;
    }
    
    // Update invincibility
    if (player.invincibleTimer > 0) {
        player.invincibleTimer--;
        if (player.invincibleTimer <= 0) {
            player.invincible = false;
        }
    }
    
    // Update trail for visual effect
    player.trail.push({ x: player.x, y: player.y, life: 1 });
    if (player.trail.length > 10) {
        player.trail.shift();
    }
    player.trail.forEach(t => t.life *= 0.9);
    
    // Update distance traveled
    gameState.distance += Math.abs(player.velocityX) * 0.1;
}

function updateObstacles() {
    obstacles.forEach((obstacle, index) => {
        obstacle.x -= gameSpeed;
        
        // Handle moving obstacles
        if (obstacle.type === 'moving') {
            obstacle.y += obstacle.moveSpeed * obstacle.moveDirection;
            if (obstacle.y > obstacle.baseY + obstacle.moveRange || 
                obstacle.y < obstacle.baseY - obstacle.moveRange) {
                obstacle.moveDirection *= -1;
            }
        }
        
        // Check collision with player
        if (checkCollision(player, obstacle)) {
            if (!obstacle.hit && !player.invincible && gameState.powerUpActive !== 'SHIELD') {
                obstacle.hit = true;
                loseLife();
                createHitParticles(player.x + player.width / 2, player.y + player.height / 2);
                gameState.combo = 0; // Reset combo on hit
            } else if (gameState.powerUpActive === 'SHIELD' && !obstacle.hit) {
                // Shield blocks damage
                obstacle.hit = true;
                createShieldParticles(player.x + player.width / 2, player.y + player.height / 2);
                gameState.score += 25;
            }
        }
        
        // Add points for passing obstacles
        if (!obstacle.passed && obstacle.x + obstacle.width < player.x) {
            obstacle.passed = true;
            const basePoints = 10;
            const comboBonus = gameState.combo * 5;
            gameState.score += basePoints + comboBonus;
            
            // Perfect jump detection
            if (player.isJumping && Math.abs(obstacle.x - player.x) < 50) {
                gameState.perfectJumps++;
                gameState.score += 50;
                createPerfectJumpEffect();
                
                if (gameState.perfectJumps >= 10 && !gameState.achievements.includes('PERFECT_10')) {
                    unlockAchievement('PERFECT_10');
                }
            }
            
            updateUI();
        }
        
        // Remove off-screen obstacles
        if (obstacle.x + obstacle.width < 0) {
            obstacles.splice(index, 1);
            generateObstacle();
        }
    });
}

function updateStars() {
    stars.forEach((star, index) => {
        star.x -= gameSpeed;
        star.rotation += 0.05;
        
        // Check collision with player
        if (!star.collected && checkCollision(player, star)) {
            star.collected = true;
            collectStar();
            stars.splice(index, 1);
            generateStar();
        }
        
        // Remove off-screen stars
        if (star.x + star.width < 0) {
            stars.splice(index, 1);
            generateStar();
        }
    });
}

function updateParticles() {
    particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.2;
        particle.life -= 0.02;
        
        if (particle.life <= 0) {
            particles.splice(index, 1);
        }
    });
}

function checkCollision(obj1, obj2) {
    return obj1.x < obj2.x + obj2.width &&
           obj1.x + obj1.width > obj2.x &&
           obj1.y < obj2.y + obj2.height &&
           obj1.y + obj1.height > obj2.y;
}

function collectStar() {
    gameState.starsCollected++;
    gameState.combo++;
    const comboBonus = gameState.combo * 10;
    gameState.score += 50 + comboBonus;
    updateUI();
    createStarParticles(player.x + player.width / 2, player.y + player.height / 2);
    
    // Show obligatory question if configured
    const isObligatory = QUESTION_CONFIG && QUESTION_CONFIG.obligatory;
    showQuestion(isObligatory);
    
    // Check for first star achievement
    if (gameState.starsCollected === 1 && !gameState.achievements.includes('FIRST_STAR')) {
        unlockAchievement('FIRST_STAR');
    }
}

function createStarParticles(x, y) {
    for (let i = 0; i < 20; i++) {
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8,
            life: 1,
            color: '#FFD700'
        });
    }
}

function createHitParticles(x, y) {
    for (let i = 0; i < 15; i++) {
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 6,
            vy: (Math.random() - 0.5) * 6,
            life: 1,
            color: '#FF5252'
        });
    }
}

function showQuestion(isMandatory = false) {
    gameState.isPaused = true;
    mandatoryQuestionPending = isMandatory;
    
    const modal = document.getElementById('questionModal');
    const questionText = document.getElementById('questionText');
    const answerOptions = document.getElementById('answerOptions');
    const feedback = document.getElementById('questionFeedback');
    
    // Get current question
    let question;
    if (QUESTION_CONFIG && QUESTION_CONFIG.randomizeOrder) {
        question = questions[Math.floor(Math.random() * questions.length)];
    } else {
        question = questions[gameState.currentQuestionIndex % questions.length];
    }
    gameState.currentQuestionIndex++;
    
    // Add timer display if configured
    if (QUESTION_CONFIG && QUESTION_CONFIG.timeLimit > 0) {
        questionStartTime = Date.now();
        const timerDiv = document.createElement('div');
        timerDiv.id = 'questionTimer';
        timerDiv.className = 'question-timer';
        timerDiv.textContent = `Time: ${QUESTION_CONFIG.timeLimit}s`;
        modal.querySelector('.modal-content').insertBefore(timerDiv, questionText);
        
        startQuestionTimer(QUESTION_CONFIG.timeLimit);
    }
    
    // Display question with category if available
    if (question.category) {
        questionText.innerHTML = `<span class="question-category">${question.category}</span><br>${question.question}`;
    } else {
        questionText.textContent = question.question;
    }
    
    answerOptions.innerHTML = '';
    feedback.innerHTML = '';
    feedback.className = 'feedback';
    
    // Randomize options if configured
    let options = [...question.options];
    let correctIndex = question.correct;
    
    if (QUESTION_CONFIG && QUESTION_CONFIG.randomizeOptions) {
        const correctAnswer = options[correctIndex];
        options.sort(() => Math.random() - 0.5);
        correctIndex = options.indexOf(correctAnswer);
    }
    
    // Create answer buttons
    options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'answer-btn';
        button.textContent = option;
        button.addEventListener('click', () => handleAnswer(index, correctIndex, button, question));
        answerOptions.appendChild(button);
    });
    
    // Add "Cannot Skip" notice if obligatory
    if (isMandatory && QUESTION_CONFIG && QUESTION_CONFIG.obligatory) {
        const notice = document.createElement('p');
        notice.className = 'obligatory-notice';
        notice.textContent = '⚠️ This question must be answered to continue!';
        modal.querySelector('.modal-content').appendChild(notice);
    }
    
    modal.classList.add('active');
}

function startQuestionTimer(seconds) {
    let timeLeft = seconds;
    const timerDisplay = document.getElementById('questionTimer');
    
    questionTimer = setInterval(() => {
        timeLeft--;
        if (timerDisplay) {
            timerDisplay.textContent = `Time: ${timeLeft}s`;
            if (timeLeft <= 5) {
                timerDisplay.style.color = '#ff4444';
            }
        }
        
        if (timeLeft <= 0) {
            clearInterval(questionTimer);
            // Auto-select wrong answer
            handleAnswer(-1, 0, null, null);
        }
    }, 1000);
}

function handleAnswer(selected, correct, button, question) {
    // Clear timer if exists
    if (questionTimer) {
        clearInterval(questionTimer);
        questionTimer = null;
    }
    
    const answerButtons = document.querySelectorAll('.answer-btn');
    answerButtons.forEach(btn => btn.disabled = true);
    
    const feedback = document.getElementById('questionFeedback');
    let pointsEarned = 0;
    
    if (selected === correct) {
        if (button) button.classList.add('correct');
        
        // Calculate points with speed bonus
        pointsEarned = question?.points || QUESTION_CONFIG?.correctPoints || 100;
        
        if (QUESTION_CONFIG && QUESTION_CONFIG.speedBonus && questionStartTime > 0) {
            const timeTaken = (Date.now() - questionStartTime) / 1000;
            const timeLimit = QUESTION_CONFIG.timeLimit || 30;
            const speedBonus = Math.floor(QUESTION_CONFIG.speedBonusMax * (1 - timeTaken / timeLimit));
            if (speedBonus > 0) {
                pointsEarned += speedBonus;
                feedback.textContent = `✓ Correct! +${pointsEarned} points (includes ${speedBonus} speed bonus!)`;
            } else {
                feedback.textContent = `✓ Correct! +${pointsEarned} points!`;
            }
        } else {
            feedback.textContent = `✓ Correct! +${pointsEarned} points!`;
        }
        
        feedback.className = 'feedback correct';
        gameState.score += pointsEarned;
        
        // Continue game normally
        mandatoryQuestionPending = false;
    } else {
        if (button) button.classList.add('incorrect');
        if (answerButtons[correct]) answerButtons[correct].classList.add('correct');
        
        // Apply penalty if configured
        if (QUESTION_CONFIG && QUESTION_CONFIG.wrongPenalty) {
            gameState.score += QUESTION_CONFIG.wrongPenalty;
            feedback.textContent = `✗ Incorrect! ${QUESTION_CONFIG.wrongPenalty} points.`;
        } else {
            feedback.textContent = '✗ Incorrect!';
        }
        
        if (QUESTION_CONFIG && QUESTION_CONFIG.showCorrectAnswer) {
            feedback.textContent += ' The correct answer is highlighted.';
        }
        
        feedback.className = 'feedback incorrect';
        
        // If obligatory, player must answer another question
        if (mandatoryQuestionPending && QUESTION_CONFIG && QUESTION_CONFIG.obligatory) {
            feedback.textContent += ' You must answer correctly to continue!';
            setTimeout(() => {
                document.getElementById('questionModal').classList.remove('active');
                // Clean up timer display
                const timerDiv = document.getElementById('questionTimer');
                if (timerDiv) timerDiv.remove();
                const notice = document.querySelector('.obligatory-notice');
                if (notice) notice.remove();
                
                // Show another question
                setTimeout(() => showQuestion(true), 500);
            }, 2000);
            return;
        }
    }
    
    updateUI();
    
    // Clean up and close modal
    setTimeout(() => {
        document.getElementById('questionModal').classList.remove('active');
        gameState.isPaused = false;
        
        // Clean up timer display
        const timerDiv = document.getElementById('questionTimer');
        if (timerDiv) timerDiv.remove();
        const notice = document.querySelector('.obligatory-notice');
        if (notice) notice.remove();
    }, 2000);
}

function loseLife() {
    gameState.lives--;
    updateUI();
    
    if (gameState.lives <= 0) {
        gameOver();
    }
}

function gameOver() {
    gameState.isGameOver = true;
    cancelAnimationFrame(animationId);
    
    const modal = document.getElementById('gameOverModal');
    const title = document.getElementById('gameOverTitle');
    const finalScore = document.getElementById('finalScore');
    const starsInfo = document.getElementById('starsInfo');
    
    if (gameState.score >= 500) {
        title.textContent = 'Excellent Work!';
    } else if (gameState.score >= 300) {
        title.textContent = 'Good Job!';
    } else {
        title.textContent = 'Game Over!';
    }
    
    finalScore.textContent = `Final Score: ${gameState.score}`;
    starsInfo.textContent = `Stars Collected: ${gameState.starsCollected}`;
    
    modal.classList.add('active');
}

function togglePause() {
    if (gameState.isGameOver) return;
    
    gameState.isPaused = !gameState.isPaused;
    const pauseMenu = document.getElementById('pauseMenu');
    
    if (gameState.isPaused) {
        pauseMenu.classList.add('active');
    } else {
        pauseMenu.classList.remove('active');
    }
}

function restartGame() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    
    resetGameState();
    generateInitialObjects();
    gameLoop();
}

function quitToMenu() {
    cancelAnimationFrame(animationId);
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
    document.getElementById('gameScreen').classList.remove('active');
    document.getElementById('welcomeScreen').classList.add('active');
}

function updateUI() {
    document.getElementById('score').textContent = gameState.score;
    document.getElementById('starsCollected').textContent = gameState.starsCollected;
    
    const livesContainer = document.getElementById('lives');
    livesContainer.innerHTML = '';
    for (let i = 0; i < gameState.lives; i++) {
        const heartImg = document.createElement('img');
        heartImg.className = 'heart';
        heartImg.src = 'assets/characters/icon 5.jpg';
        heartImg.alt = 'Life';
        livesContainer.appendChild(heartImg);
    }
}

function drawPlayer() {
    ctx.save();
    ctx.translate(player.x + player.width / 2, player.y + player.height / 2);
    
    // Draw character based on selection using images
    if (gameAssets && gameAssets.characters) {
        const characterImg = gameAssets.characters[player.character];
        if (characterImg && characterImg.complete) {
            ctx.drawImage(characterImg, -player.width/2, -player.height/2, player.width, player.height);
        } else {
            // Fallback rectangle if image not loaded
            ctx.fillStyle = player.color;
            ctx.fillRect(-player.width/2, -player.height/2, player.width, player.height);
        }
    } else {
        // Fallback rectangle if assets not loaded
        ctx.fillStyle = player.color;
        ctx.fillRect(-player.width/2, -player.height/2, player.width, player.height);
    }
    
    ctx.restore();
}

function drawObstacles() {
    obstacles.forEach(obstacle => {
        ctx.fillStyle = obstacle.color;
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        
        // Add some detail to obstacles
        ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
        ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, 5);
        
        if (obstacle.type === 'moving') {
            // Draw indicator for moving obstacles
            ctx.strokeStyle = '#FF9800';
            ctx.lineWidth = 2;
            ctx.strokeRect(obstacle.x - 2, obstacle.y - 2, obstacle.width + 4, obstacle.height + 4);
        }
    });
}

function drawStars() {
    stars.forEach(star => {
        ctx.save();
        ctx.translate(star.x + star.width / 2, star.y + star.height / 2);
        ctx.rotate(star.rotation);
        
        // Draw star using notepad image
        if (gameAssets && gameAssets.collectibles && gameAssets.collectibles.star) {
            const starImg = gameAssets.collectibles.star;
            if (starImg.complete) {
                // Add glow effect
                ctx.shadowColor = '#FFD700';
                ctx.shadowBlur = 15;
                ctx.drawImage(starImg, -star.width/2, -star.height/2, star.width, star.height);
            }
        } else {
            // Fallback star shape
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            for (let i = 0; i < 5; i++) {
                const angle = (Math.PI * 2 / 5) * i - Math.PI / 2;
                const x = Math.cos(angle) * 15;
                const y = Math.sin(angle) * 15;
                if (i === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.closePath();
            ctx.fill();
        }
        
        ctx.restore();
    });
}

function drawGround() {
    // Draw road/ground
    ctx.fillStyle = '#333';
    ctx.fillRect(0, ground.y, canvas.width, ground.height);
    
    // Draw road lines
    ctx.strokeStyle = '#FFF';
    ctx.lineWidth = 3;
    ctx.setLineDash([20, 10]);
    ctx.beginPath();
    ctx.moveTo(0, ground.y + ground.height / 2);
    ctx.lineTo(canvas.width, ground.y + ground.height / 2);
    ctx.stroke();
    ctx.setLineDash([]);
}

function drawParticles() {
    particles.forEach(particle => {
        ctx.globalAlpha = particle.life;
        ctx.fillStyle = particle.color;
        ctx.fillRect(particle.x - 2, particle.y - 2, 4, 4);
    });
    ctx.globalAlpha = 1;
}

function drawBackground() {
    // Add some animated background elements based on theme
    const time = Date.now() * 0.001;
    
    if (gameState.selectedBackground === 'space' || gameState.selectedBackground === 'galaxy') {
        // Draw stars in background
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        for (let i = 0; i < 50; i++) {
            const x = (i * 73 + time * 10) % canvas.width;
            const y = (i * 37) % canvas.height;
            ctx.fillRect(x, y, 2, 2);
        }
    }
    
    if (gameState.selectedBackground === 'nebula') {
        // Draw floating particles
        ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
        for (let i = 0; i < 30; i++) {
            const x = (i * 97 + time * 20) % canvas.width;
            const y = Math.sin(time + i) * 50 + (i * 51) % canvas.height;
            ctx.beginPath();
            ctx.arc(x, y, 3, 0, Math.PI * 2);
            ctx.fill();
        }
    }
}

function draw() {
    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Draw background elements
    drawBackground();
    drawBackgroundElements();
    
    // Draw game elements
    drawGround();
    drawTrail();
    drawCoins();
    drawStars();
    drawPowerUps();
    drawObstacles();
    drawPlayer();
    drawParticles();
    
    // Draw UI elements
    drawPowerUpIndicator();
    drawComboIndicator();
}

function update() {
    if (gameState.isPaused || gameState.isGameOver) return;
    
    updatePlayer();
    updateObstacles();
    updateStars();
    updateCoins();
    updatePowerUps();
    updateParticles();
    updateBackgroundElements();
    
    // Check for survivor achievement
    if (gameState.distance > 7200 && !gameState.achievements.includes('SURVIVOR')) {
        unlockAchievement('SURVIVOR');
    }
}

function gameLoop() {
    update();
    draw();
    
    if (!gameState.isGameOver) {
        animationId = requestAnimationFrame(gameLoop);
    }
}

// Auto-save preferences to localStorage
function savePreferences() {
    localStorage.setItem('techsplore_character', gameState.selectedCharacter);
    localStorage.setItem('techsplore_background', gameState.selectedBackground);
    localStorage.setItem('techsplore_highscore', Math.max(
        gameState.score, 
        parseInt(localStorage.getItem('techsplore_highscore') || 0)
    ));
}

// Load preferences on start
function loadPreferences() {
    const savedCharacter = localStorage.getItem('techsplore_character');
    const savedBackground = localStorage.getItem('techsplore_background');
    
    if (savedCharacter) {
        gameState.selectedCharacter = savedCharacter;
        player.character = savedCharacter;
    }
    
    if (savedBackground) {
        gameState.selectedBackground = savedBackground;
    }
}

// Call loadPreferences on page load
window.addEventListener('load', loadPreferences);

// New helper functions for enhanced features
function generateCoin(x = canvas.width) {
    const coin = {
        x: x || canvas.width + Math.random() * 200,
        y: ground.y - 100 - Math.random() * 150,
        width: 25,
        height: 25,
        collected: false,
        bounce: 0
    };
    coins.push(coin);
}

function generatePowerUp(x = canvas.width) {
    const types = Object.keys(POWER_UP_TYPES);
    const type = types[Math.floor(Math.random() * types.length)];
    
    const powerUp = {
        x: x,
        y: ground.y - 200,
        width: 40,
        height: 40,
        type: type,
        collected: false,
        float: 0
    };
    powerUps.push(powerUp);
}

function updateCoins() {
    coins.forEach((coin, index) => {
        coin.x -= gameSpeed;
        coin.bounce += 0.1;
        coin.y += Math.sin(coin.bounce) * 0.5;
        
        // Magnet effect
        if (gameState.powerUpActive === 'MAGNET' || player.magnetRadius > 0) {
            const dist = Math.sqrt(Math.pow(coin.x - player.x, 2) + Math.pow(coin.y - player.y, 2));
            if (dist < 150) {
                coin.x += (player.x - coin.x) * 0.1;
                coin.y += (player.y - coin.y) * 0.1;
            }
        }
        
        // Check collision
        if (!coin.collected && checkCollision(player, coin)) {
            coin.collected = true;
            const multiplier = gameState.powerUpActive === 'COIN_MULTIPLIER' ? 2 : 1;
            gameState.totalCoins += multiplier;
            gameState.score += 5 * multiplier;
            createCoinParticles(coin.x, coin.y);
            coins.splice(index, 1);
            
            // Check achievement
            if (gameState.totalCoins >= 100 && !gameState.achievements.includes('RICH')) {
                unlockAchievement('RICH');
            }
        }
        
        // Remove off-screen
        if (coin.x + coin.width < 0) {
            coins.splice(index, 1);
            generateCoin();
        }
    });
}

function updatePowerUps() {
    powerUps.forEach((powerUp, index) => {
        powerUp.x -= gameSpeed;
        powerUp.float += 0.05;
        powerUp.y += Math.sin(powerUp.float) * 1;
        
        // Check collision
        if (!powerUp.collected && checkCollision(player, powerUp)) {
            powerUp.collected = true;
            activatePowerUp(powerUp.type);
            powerUps.splice(index, 1);
        }
        
        // Remove off-screen and generate new one
        if (powerUp.x + powerUp.width < 0) {
            powerUps.splice(index, 1);
            setTimeout(() => generatePowerUp(), 5000 + Math.random() * 5000);
        }
    });
    
    // Update power-up timer
    if (gameState.powerUpTimer > 0) {
        gameState.powerUpTimer--;
        if (gameState.powerUpTimer <= 0) {
            deactivatePowerUp();
        }
    }
}

function activatePowerUp(type) {
    gameState.powerUpActive = type;
    gameState.powerUpTimer = POWER_UP_TYPES[type].duration / 16.67; // Convert to frames
    
    // Apply power-up effects
    switch(type) {
        case 'SHIELD':
            player.invincible = true;
            break;
        case 'MAGNET':
            player.magnetRadius = 150;
            break;
        case 'TRIPLE_JUMP':
            player.tripleJumpAvailable = true;
            break;
    }
    
    // Visual feedback
    createPowerUpParticles(player.x + player.width / 2, player.y + player.height / 2, type);
}

function deactivatePowerUp() {
    switch(gameState.powerUpActive) {
        case 'SHIELD':
            player.invincible = false;
            break;
        case 'MAGNET':
            player.magnetRadius = 0;
            break;
    }
    gameState.powerUpActive = null;
}

function createCoinParticles(x, y) {
    for (let i = 0; i < 10; i++) {
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 4,
            vy: (Math.random() - 0.5) * 4,
            life: 1,
            color: '#FFD700'
        });
    }
}

function createPowerUpParticles(x, y, type) {
    const color = POWER_UP_TYPES[type].color;
    for (let i = 0; i < 30; i++) {
        particles.push({
            x: x,
            y: y,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8,
            life: 1,
            color: color
        });
    }
}

function createShieldParticles(x, y) {
    for (let i = 0; i < 20; i++) {
        const angle = (Math.PI * 2 / 20) * i;
        particles.push({
            x: x,
            y: y,
            vx: Math.cos(angle) * 5,
            vy: Math.sin(angle) * 5,
            life: 1,
            color: '#4FC3F7'
        });
    }
}

function createPerfectJumpEffect() {
    for (let i = 0; i < 15; i++) {
        particles.push({
            x: player.x + player.width / 2,
            y: player.y + player.height,
            vx: (Math.random() - 0.5) * 6,
            vy: -Math.random() * 4,
            life: 1,
            color: '#00FF00'
        });
    }
}

function unlockAchievement(achievementKey) {
    if (!gameState.achievements.includes(achievementKey)) {
        gameState.achievements.push(achievementKey);
        const achievement = ACHIEVEMENTS[achievementKey];
        showAchievementNotification(achievement);
        gameState.score += 100;
    }
}

function showAchievementNotification(achievement) {
    // Create achievement popup
    const notification = document.createElement('div');
    notification.className = 'achievement-notification';
    notification.innerHTML = `
        <span class="achievement-icon">${achievement.icon}</span>
        <div>
            <div class="achievement-title">Achievement Unlocked!</div>
            <div class="achievement-name">${achievement.name}</div>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 500);
    }, 3000);
}

function drawCoins() {
    coins.forEach(coin => {
        ctx.save();
        ctx.translate(coin.x + coin.width / 2, coin.y + coin.height / 2);
        ctx.rotate(Date.now() * 0.005);
        
        // Draw coin using coin image
        if (gameAssets && gameAssets.collectibles && gameAssets.collectibles.coin) {
            const coinImg = gameAssets.collectibles.coin;
            if (coinImg.complete) {
                ctx.drawImage(coinImg, -coin.width/2, -coin.height/2, coin.width, coin.height);
            }
        } else {
            // Fallback coin circle
            ctx.fillStyle = '#FFD700';
            ctx.beginPath();
            ctx.arc(0, 0, coin.width/2, 0, Math.PI * 2);
            ctx.fill();
            ctx.strokeStyle = '#FFA500';
            ctx.lineWidth = 2;
            ctx.stroke();
        }
        
        ctx.restore();
    });
}

function drawPowerUps() {
    powerUps.forEach(powerUp => {
        ctx.save();
        ctx.translate(powerUp.x + powerUp.width / 2, powerUp.y + powerUp.height / 2);
        
        // Draw glowing circle background
        ctx.beginPath();
        ctx.arc(0, 0, 20, 0, Math.PI * 2);
        ctx.fillStyle = POWER_UP_TYPES[powerUp.type].color + '33';
        ctx.fill();
        
        // Draw power-up icon
        ctx.font = '30px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(POWER_UP_TYPES[powerUp.type].icon, 0, 0);
        
        ctx.restore();
    });
}

function drawPowerUpIndicator() {
    if (gameState.powerUpActive) {
        const remainingTime = Math.ceil(gameState.powerUpTimer / 60);
        ctx.save();
        
        // Draw power-up status
        ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
        ctx.fillRect(canvas.width - 200, 80, 180, 40);
        
        ctx.fillStyle = POWER_UP_TYPES[gameState.powerUpActive].color;
        ctx.font = '20px Arial';
        ctx.fillText(
            `${POWER_UP_TYPES[gameState.powerUpActive].icon} ${remainingTime}s`,
            canvas.width - 110, 105
        );
        
        ctx.restore();
    }
}

function drawComboIndicator() {
    if (gameState.combo > 0) {
        ctx.save();
        
        const comboScale = 1 + (gameState.combo * 0.1);
        ctx.translate(canvas.width / 2, 100);
        ctx.scale(comboScale, comboScale);
        
        ctx.fillStyle = gameState.combo >= 5 ? '#FF6B6B' : '#FFD700';
        ctx.font = 'bold 30px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`${gameState.combo}x COMBO!`, 0, 0);
        
        ctx.restore();
        
        // Check combo achievement
        if (gameState.combo >= 5 && !gameState.achievements.includes('COMBO_5')) {
            unlockAchievement('COMBO_5');
        }
        
        if (gameState.combo > gameState.maxCombo) {
            gameState.maxCombo = gameState.combo;
        }
    }
}

function drawTrail() {
    player.trail.forEach(point => {
        if (point.life > 0) {
            ctx.save();
            ctx.globalAlpha = point.life * 0.3;
            ctx.fillStyle = gameState.powerUpActive === 'SPEED' ? '#FFD700' : '#4CAF50';
            ctx.fillRect(point.x, point.y, player.width * 0.8, player.height * 0.8);
            ctx.restore();
        }
    });
}

function updateBackgroundElements() {
    backgroundElements.forEach(element => {
        element.x -= element.speed;
        
        if (element.x + element.size < 0) {
            element.x = canvas.width + Math.random() * 200;
            element.y = Math.random() * (ground.y - 200);
        }
    });
}

function drawBackgroundElements() {
    backgroundElements.forEach(element => {
        ctx.save();
        ctx.globalAlpha = 0.3;
        
        if (element.type === 'cloud') {
            ctx.fillStyle = 'white';
            ctx.beginPath();
            ctx.arc(element.x, element.y, element.size / 2, 0, Math.PI * 2);
            ctx.arc(element.x + element.size * 0.3, element.y, element.size / 3, 0, Math.PI * 2);
            ctx.arc(element.x - element.size * 0.3, element.y, element.size / 3, 0, Math.PI * 2);
            ctx.fill();
        } else {
            // Draw planet
            ctx.beginPath();
            ctx.arc(element.x, element.y, element.size / 2, 0, Math.PI * 2);
            ctx.fillStyle = `hsl(${element.x % 360}, 50%, 50%)`;
            ctx.fill();
        }
        
        ctx.restore();
    });
}
