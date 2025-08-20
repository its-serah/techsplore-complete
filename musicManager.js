// Music Manager for TechSplore 2025 Hackathon
// Manages background music based on character selection

const MUSIC_CONFIG = {
    // Available songs for selection
    taylor: {
        name: "Taylor Swift - Welcome to New York",
        audioFile: "assets/audio/taylor.mp3",
        description: "Pop music by Taylor Swift"
    },
    olivia: {
        name: "Olivia Rodrigo - Teenage Dream",
        audioFile: "assets/audio/olivia.mp3",
        description: "Pop-rock by Olivia Rodrigo"
    },
    theme: {
        name: "Gilmore Girls Theme",
        audioFile: "assets/audio/theme.mp3",
        description: "Classic theme music"
    }
};

// Character-based music mapping (legacy support)
const CHARACTER_MUSIC_MAP = {
    astronaut: 'taylor',
    robot: 'theme',
    alien: 'olivia',
    explorer: 'theme',
    hellokitty: 'theme',
    blondie: 'taylor'
};

class MusicManager {
    constructor() {
        this.currentAudio = null;
        this.currentTheme = null;
        this.volume = 0.3; // Default volume
        this.isMuted = false;
        this.audioContext = null;
        
        // Initialize audio context on user interaction
        this.initAudioContext();
    }
    
    initAudioContext() {
        // Create audio context (required for modern browsers)
        try {
            window.AudioContext = window.AudioContext || window.webkitAudioContext;
            this.audioContext = new AudioContext();
        } catch (e) {
            console.warn('Web Audio API not supported:', e);
        }
    }
    
    // Play theme music based on character selection
    playTheme(characterType) {
        // Only stop if we're switching to a different theme
        if (this.currentTheme && this.currentTheme !== characterType) {
            this.stopMusic();
        }
        
        // If same theme is already playing, don't restart it
        if (this.currentTheme === characterType && this.currentAudio && !this.currentAudio.paused) {
            return;
        }
        
        const theme = MUSIC_CONFIG[characterType];
        if (!theme) {
            console.warn('No theme found for character:', characterType);
            return;
        }
        
        this.currentTheme = characterType;
        
        // Create and play audio element with MP3 file
        this.currentAudio = new Audio(theme.audioFile);
        this.currentAudio.volume = this.isMuted ? 0 : this.volume;
        this.currentAudio.loop = true; // Loop the music
        
        // Play the audio
        this.currentAudio.play().catch(e => {
            console.log('Audio playback failed:', e);
            // Browser may block autoplay, user interaction required
        });
    }
    
    // No longer needed - using actual MP3 files
    createBackgroundMusic(characterType) {
        // Deprecated - now using real audio files
    }
    
    // Stop current music
    stopMusic() {
        if (this.currentAudio) {
            if (this.currentAudio instanceof Audio) {
                this.currentAudio.pause();
                this.currentAudio.currentTime = 0;
            }
            this.currentAudio = null;
        }
        this.currentTheme = null;
    }
    
    // Toggle mute
    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.currentAudio && this.currentAudio instanceof Audio) {
            this.currentAudio.volume = this.isMuted ? 0 : this.volume;
        }
        return this.isMuted;
    }
    
    // Set volume (0-1)
    setVolume(value) {
        this.volume = Math.max(0, Math.min(1, value));
        if (this.currentAudio && this.currentAudio instanceof Audio && !this.isMuted) {
            this.currentAudio.volume = this.volume;
        }
    }
    
    // Get current theme info
    getCurrentThemeInfo() {
        if (!this.currentTheme) return null;
        return MUSIC_CONFIG[this.currentTheme];
    }
    
    // Preview a song (play for a few seconds)
    previewSong(songKey) {
        // Stop current preview but don't stop main game music
        if (this.previewAudio) {
            this.previewAudio.pause();
            this.previewAudio = null;
        }
        
        const theme = MUSIC_CONFIG[songKey];
        if (!theme) {
            console.warn('No theme found for song:', songKey);
            return;
        }
        
        this.previewAudio = new Audio(theme.audioFile);
        this.previewAudio.volume = this.isMuted ? 0 : this.volume * 0.5; // Lower volume for preview
        this.previewAudio.currentTime = 30; // Start 30 seconds in for preview
        
        // Play for 10 seconds then stop
        this.previewAudio.play().catch(e => {
            console.log('Audio preview failed:', e);
        });
        
        // Auto-stop after 10 seconds
        setTimeout(() => {
            if (this.previewAudio) {
                this.previewAudio.pause();
                this.previewAudio = null;
            }
        }, 10000);
    }
}

// Create global music manager instance
const musicManager = new MusicManager();

// Add music controls to the game UI
function addMusicControls() {
    const musicControlsHTML = `
        <div id="musicControls" style="position: fixed; bottom: 20px; right: 20px; z-index: 1000; background: rgba(0,0,0,0.7); padding: 10px; border-radius: 10px;">
            <button id="muteBtn" style="padding: 5px 10px; margin: 0 5px; cursor: pointer;">🔊 Mute</button>
            <input type="range" id="volumeSlider" min="0" max="100" value="30" style="width: 100px; vertical-align: middle;">
            <span id="volumeLabel" style="color: white; margin-left: 10px;">30%</span>
        </div>
    `;
    
    // Add controls to the game screen
    document.addEventListener('DOMContentLoaded', () => {
        const gameScreen = document.getElementById('gameScreen');
        if (gameScreen) {
            gameScreen.insertAdjacentHTML('beforeend', musicControlsHTML);
            
            // Set up event listeners
            const muteBtn = document.getElementById('muteBtn');
            const volumeSlider = document.getElementById('volumeSlider');
            const volumeLabel = document.getElementById('volumeLabel');
            
            if (muteBtn) {
                muteBtn.addEventListener('click', () => {
                    const isMuted = musicManager.toggleMute();
                    muteBtn.textContent = isMuted ? '🔇 Unmute' : '🔊 Mute';
                });
            }
            
            if (volumeSlider) {
                volumeSlider.addEventListener('input', (e) => {
                    const volume = e.target.value / 100;
                    musicManager.setVolume(volume);
                    volumeLabel.textContent = `${e.target.value}%`;
                });
            }
        }
    });
}

// Initialize music controls
addMusicControls();
