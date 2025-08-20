# 🎮 TechSplore 2-25 Online Simulation Game

🎯 **[Play the Game Live Here!](https://its-serah.github.io/online-simulation/)**

📦 **Repository:** [github.com/its-serah/online-simulation](https://github.com/its-serah/online-simulation)

## 📝 How to Add Your Own Questions

### Step 1: Edit the Questions File
Open `questions.js` in any text editor and add your questions following this format:

```javascript
{
    question: "Your question here?",
    options: [
        "Option 1",
        "Option 2", 
        "Option 3",
        "Option 4"
    ],
    correct: 0,  // Index of correct answer (0=first, 1=second, etc.)
    category: "Category Name",  // Optional
    difficulty: "easy",  // Optional: easy, medium, hard
    points: 100  // Optional: custom points for this question
}
```

### Step 2: Configure Question Settings
In `questions.js`, modify the `QUESTION_CONFIG` object:

```javascript
const QUESTION_CONFIG = {
    obligatory: true,        // true = must answer correctly to continue
    timeLimit: 30,          // seconds per question (0 = no limit)
    showCorrectAnswer: true, // show correct answer after wrong selection
    randomizeOrder: true,    // randomize question order
    randomizeOptions: false, // randomize answer options
    minQuestionsPerGame: 5,  // minimum questions per game
    correctPoints: 100,      // points for correct answer
    wrongPenalty: -25,       // points lost for wrong answer
    speedBonus: true,        // give bonus for fast answers
    speedBonusMax: 50       // maximum speed bonus points
};
```

## 🎨 How to Add Custom Images/Backgrounds

### For Character Images:
1. Place your character images in: `assets/characters/`
2. Name them: `astronaut.png`, `robot.png`, `alien.png`, `explorer.png`
3. Images will automatically replace the emoji characters

### For Background Images:
1. Place background images in: `assets/backgrounds/`
2. Name them: `space.jpg`, `galaxy.jpg`, `nebula.jpg`, `cosmos.jpg`
3. Update the CSS in `styles.css`:

```css
#gameScreen.space-theme {
    background: url('assets/backgrounds/space.jpg') center/cover;
}
```

### For Obstacle Images:
1. Place obstacle images in: `assets/obstacles/`
2. Name them: `obstacle1.png`, `obstacle2.png`, etc.
3. The game will use them automatically

## 📁 Folder Structure
```
techsplore-game/
├── index.html          # Main game file
├── styles.css          # Game styles
├── game.js            # Game logic
├── questions.js       # Your custom questions
├── README.md          # This file
└── assets/
    ├── backgrounds/   # Background images
    ├── characters/    # Character sprites
    └── obstacles/     # Obstacle images
```

## 🎯 Making Questions Obligatory

Questions are already set to obligatory by default! When a player collects a star:
- A question appears that MUST be answered correctly
- Wrong answers will show another question
- The game pauses until answered correctly
- Timer can be added (set `timeLimit` in config)

## 🚀 Quick Start

1. **Add Your Questions:**
   - Open `questions.js`
   - Add your questions in the array
   - Save the file

2. **Add Images (Optional):**
   - Create the `assets` folders
   - Add your images with correct names
   - Images will be used automatically

3. **Test Your Game:**
   - Open `index.html` in a browser
   - Or run: `python3 -m http.server 8080`
   - Navigate to: `http://localhost:8080`

## 💡 Example: Adding a New Question

```javascript
// In questions.js, add this to CUSTOM_QUESTIONS array:
{
    question: "What year was Python created?",
    options: [
        "1989",
        "1991", 
        "1995",
        "2000"
    ],
    correct: 1,  // "1991" is correct (index 1)
    category: "Programming History",
    difficulty: "medium",
    points: 150  // Higher points for harder question
}
```

## 🎮 Game Features

- **Obligatory Questions:** Players must answer correctly to continue
- **Timer System:** Optional countdown for each question
- **Categories:** Organize questions by topic
- **Difficulty Levels:** Easy/Medium/Hard with different points
- **Speed Bonus:** Extra points for quick answers
- **Wrong Answer Penalty:** Lose points for incorrect answers
- **Custom Points:** Set different point values per question

## 📊 Question Statistics

The game tracks:
- Total questions answered
- Correct/incorrect ratio
- Average answer time
- Highest combo achieved
- Total points from questions

## 🔧 Advanced Customization

### Custom Question Types
You can extend the question system by modifying `game.js`:

```javascript
// Add image-based questions
{
    question: "What is this logo?",
    image: "assets/logos/logo1.png",  // Add image support
    options: ["Google", "Microsoft", "Apple", "Amazon"],
    correct: 0
}
```

### Custom Scoring Formula
Modify the scoring in `handleAnswer()` function:

```javascript
// Example: Difficulty multiplier
const difficultyMultiplier = {
    easy: 1,
    medium: 1.5,
    hard: 2
};
pointsEarned = basePoints * difficultyMultiplier[question.difficulty];
```

## 📞 Support

For help or questions:
- Check the code comments in `game.js`
- Modify `questions.js` for your content
- Update `styles.css` for visual changes

Enjoy your customized TechSplore game! 🎯✨
