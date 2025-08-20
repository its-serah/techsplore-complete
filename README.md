# TechSplore Complete 🚀

Welcome to TechSplore Complete, the ultimate tech learning adventure game with **dual difficulty modes**! This interactive web-based platform combines gaming with education to make learning technology concepts fun and engaging for both beginners and advanced developers.

## 🎮 Features

- **🆕 Dual Difficulty Modes**: Choose between Beginner and Advanced levels
- **📚 Comprehensive Question Database**: 41 total questions across multiple categories
- **🎯 Interactive Gameplay**: Navigate through space-themed worlds as your character
- **👥 Character Customization**: Choose from multiple characters representing different cultures
- **🎨 Background Themes**: Select from beautiful space-themed backgrounds
- **🎵 Music Selection**: Enjoy Taylor Swift, Olivia Rodrigo, or classic Gilmore Girls themes
- **⭐ Power-ups & Collectibles**: Collect stars, coins, and special abilities
- **🚀 Advanced Features**: Dash mechanics, double jumps, particle effects, and more
- **📱 Responsive Design**: Works on desktop and mobile devices

## 🎯 Difficulty Modes

### 🌱 Beginner Mode
- **21 Beginner-Friendly Questions** covering:
  - Prompt Engineering
  - Block-Based Machine Learning
  - Building Cultural AI Models
  - Data Bias & Ethics in AI
  - Mistral AI
  - FastAPI
  - SDLC & DevOps
  - Docker
- **Slower game speed** for comfortable learning
- **Perfect for newcomers** to tech

### 🔥 Advanced Mode
- **20 Complex Technical Questions** covering:
  - Data Structures & Algorithms
  - System Architecture
  - Database Systems
  - Functional Programming
  - Design Patterns
  - Distributed Systems
  - Cybersecurity
  - API Technologies
- **Faster gameplay** for experienced developers
- **Higher point values** and complex scenarios

## 🌟 Game Mechanics

### Controls
- **← →**: Move left/right
- **SPACE**: Jump (double-tap for double jump)
- **SHIFT**: Dash forward
- **ESC**: Pause game

### Objectives
- Collect stars to unlock tech questions
- Answer questions correctly to earn points
- Avoid obstacles to preserve lives
- Collect coins for bonus points
- Use power-ups strategically

### Scoring System
- Correct answers: Variable points based on difficulty
- Speed bonus: Up to +50 points for quick answers
- Combo multipliers for consecutive correct answers
- Perfect jump bonuses: +50 points
- Achievement unlocks: +100 points each

## 📚 Question Categories

### Beginner Track
- **Prompt Engineering**: CLEAR framework, AI interaction best practices
- **Block-Based ML**: Teachable Machine, learning rates, model training
- **Cultural AI Models**: Transfer learning, validation splits, model training
- **AI Ethics**: Bias detection, fairness in AI systems
- **Mistral AI**: API usage, system messages, authentication
- **FastAPI**: Documentation, HTTP methods, API development
- **SDLC & DevOps**: Development lifecycle, clean code principles
- **Docker**: Containerization, commands, deployment

### Advanced Track
- **Data Structures**: Time complexity, hash tables, binary trees
- **Algorithms**: Sorting algorithms, Big O notation
- **System Architecture**: Microservices, design patterns
- **Database Systems**: ACID properties, SQL vs NoSQL
- **Distributed Systems**: CAP theorem, scalability
- **Cybersecurity**: SQL injection, security practices
- **API Design**: REST vs GraphQL, best practices
- **Network Architecture**: Reverse proxies, load balancing

## 🏆 Achievements

- **Star Collector**: Collect your first star
- **Combo Master**: Achieve a 5x combo
- **Perfect Runner**: Land 10 perfect jumps
- **Survivor**: Survive for 2 minutes
- **Coin Collector**: Collect 100 coins
- **Speed Demon**: Use dash 20 times

## 🛠 Technologies Used

- **HTML5 Canvas**: For game rendering
- **JavaScript**: Game logic and interactions
- **CSS3**: Styling and animations
- **Web Audio API**: Background music and sound effects
- **Local Storage**: Save preferences and high scores

## 📁 Project Structure

```
techsplore-complete/
├── index.html          # Main game page
├── game.js            # Core game logic with difficulty modes
├── questions.js       # Comprehensive question database
├── customQuestions.js # User-customizable questions
├── codingChallenges.js # Advanced coding challenges
├── musicManager.js    # Audio management
├── assetConfig.js     # Asset configuration
├── styles.css         # Game styling
├── README.md          # This file
└── assets/
    ├── characters/    # Character sprites
    ├── backgrounds/   # Background images
    ├── icons/         # Game icons
    └── audio/         # Background music
```

## 🚀 Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/its-serah/techsplore-complete.git
   cd techsplore-complete
   ```

2. **Open the game**:
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   ```

3. **Start playing**:
   - Enter your name and team information
   - **Choose your difficulty level** (Beginner or Advanced)
   - Select your character and theme
   - Pick your background music
   - Start your tech learning adventure!

## 🎨 Customization

### Adding Questions

Edit `questions.js` to add questions to either difficulty level:

```javascript
// For Beginner Questions
const BEGINNER_QUESTIONS = [
    {
        question: "Your beginner question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0, // Index of correct answer
        category: "Your Category",
        difficulty: "easy",
        points: 100
    }
];

// For Advanced Questions
const ADVANCED_QUESTIONS = [
    {
        question: "Your advanced question here?",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        correct: 0,
        category: "Your Category",
        difficulty: "hard",
        points: 250
    }
];
```

### Configuration

Modify `questions.js` settings:

```javascript
const QUESTION_CONFIG = {
    obligatory: true,        // Make questions mandatory
    timeLimit: 30,          // Seconds per question
    showCorrectAnswer: true, // Show answer on wrong selection
    randomizeOrder: true,   // Randomize question order
    speedBonus: true,       // Award speed bonuses
    // ... more options
};
```

## 🌐 Live Demo

🎮 **Play the game**: Coming soon! (Set up GitHub Pages to get your live URL)

## 🆚 Comparison with Previous Version

| Feature | Previous (techsplore-advanced) | New (techsplore-complete) |
|---------|--------------------------------|---------------------------|
| Question Count | ~20 mixed questions | 41 organized questions |
| Difficulty Modes | Single advanced mode | Beginner + Advanced modes |
| Topics Coverage | Limited categories | 8 beginner + 8 advanced categories |
| User Experience | One-size-fits-all | Tailored to skill level |
| Learning Path | Random questions | Progressive difficulty |

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature-name`
3. **Add your changes**:
   - New questions for beginner or advanced tracks
   - Bug fixes or improvements
   - New features or game mechanics
4. **Commit your changes**: `git commit -m 'Add some feature'`
5. **Push to the branch**: `git push origin feature-name`
6. **Submit a pull request**

### Question Contributions

We especially welcome:
- **Beginner-friendly questions** about emerging technologies
- **Advanced questions** on system design and architecture
- Questions about new frameworks and tools
- Real-world scenario-based problems

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Acknowledgments

- Built for comprehensive tech education
- Features questions from beginner to advanced levels
- Character designs inspired by diverse global representation
- Music selections for enhanced gaming experience
- Community-driven question database

## 📞 Support

If you have questions or need help:
1. Check the [Issues](https://github.com/its-serah/techsplore-complete/issues) page
2. Create a new issue with detailed description
3. Join our community discussions

---

**Happy Learning and Gaming at Every Level! 🎮📚✨**
