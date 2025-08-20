// Techsplore 2025 Hackathon Questions - Combined Technical and Cultural
const TECHSPLORE_QUESTIONS = [
    // NEW QUESTIONS - AI, Tech, Culture & STEAM
    {
        question: "Which technology helps translate endangered languages and restore manuscripts—AI or VR?",
        options: ["AI", "VR", "Blockchain", "IoT"],
        correct: 0,
        category: "Technology & Culture"
    },
    {
        question: "You need to be 'tech savvy' and not creative in order to succeed in the tech industry.",
        options: ["True", "False"],
        correct: 1,
        category: "Tech Careers"
    },
    {
        question: "What does the A in STEAM stand for?",
        options: ["Art", "Algorithm", "Analytics", "Application"],
        correct: 0,
        category: "Education"
    },
    {
        question: "Does culture include the ideas and values of people?",
        options: ["Yes", "No"],
        correct: 0,
        category: "Culture"
    },
    {
        question: "Which of these is a form of art?",
        options: ["Photography", "Drawing", "Poetry", "All of the above"],
        correct: 3,
        category: "Arts"
    },
    {
        question: "Prompts for AI chatbots shouldn't be specific.",
        options: ["True", "False"],
        correct: 1,
        category: "AI"
    },
    // TECHNICAL QUESTIONS - Prompt Engineering
    {
        question: "In the CLEAR framework, what does the 'R' stand for?",
        options: ["Reasoning", "Reflection", "Relevance", "Response"],
        correct: 1,
        category: "Prompt Engineering"
    },
    {
        question: "Which is the strongest rewritten version of 'Explain space exploration'?",
        options: [
            "Tell me a bit about space",
            "List five milestones in space exploration, each with a short explanation",
            "Write about space exploration in general terms",
            "What's space exploration?"
        ],
        correct: 1,
        category: "Prompt Engineering"
    },
    {
        question: "In CLEAR framework, which element ensures you check clarity and beginner-friendliness?",
        options: ["Context", "Action", "Reflection", "Length"],
        correct: 2,
        category: "Prompt Engineering"
    },
    // TECHNICAL QUESTIONS - Machine Learning
    {
        question: "Why is Teachable Machine considered beginner-friendly?",
        options: [
            "It requires no coding and offers a visual interface",
            "It uses advanced GPU clusters",
            "It provides built-in bias detection",
            "It works only with large datasets"
        ],
        correct: 0,
        category: "Machine Learning"
    },
    {
        question: "If your batch size is extremely large compared to your dataset, what might happen?",
        options: [
            "The model will train faster without side effects",
            "The model might overfit immediately",
            "The model may generalize poorly due to fewer updates per epoch",
            "There will be no impact"
        ],
        correct: 2,
        category: "Machine Learning"
    },
    {
        question: "Training an image classifier with only 10 samples per class works because of:",
        options: ["Random initialization", "Transfer learning", "Dropout regularization", "Overfitting prevention"],
        correct: 1,
        category: "Machine Learning"
    },
    // TECHNICAL QUESTIONS - AI & Transfer Learning
    {
        question: "Why does transfer learning save time?",
        options: [
            "It skips validation steps",
            "It uses pre-trained features instead of starting from zero",
            "It trains only the output layer",
            "It reduces image size automatically"
        ],
        correct: 1,
        category: "AI Fundamentals"
    },
    {
        question: "Why do we normalize pixel values in preprocessing?",
        options: [
            "To make them easier for the model to process",
            "To compress the dataset",
            "To improve image resolution",
            "To remove color channels"
        ],
        correct: 0,
        category: "Data Processing"
    },
    {
        question: "If validation_split = 0.25 and you have 60 images, how many are for validation?",
        options: ["15", "20", "25", "30"],
        correct: 0,
        category: "Data Science"
    },
    {
        question: "Why do we freeze the base layers of a CNN when fine-tuning?",
        options: [
            "To reduce GPU memory usage only",
            "To preserve learned features from the pre-trained model",
            "To make training faster without affecting accuracy",
            "To remove bias in data"
        ],
        correct: 1,
        category: "Deep Learning"
    },
    {
        question: "Why track both loss and accuracy during training?",
        options: [
            "Accuracy is more important than loss",
            "Loss measures error magnitude, accuracy measures prediction rate",
            "Loss measures speed, accuracy measures correctness",
            "They are interchangeable"
        ],
        correct: 1,
        category: "Model Training"
    },
    {
        question: "What's a unique challenge when training on handwriting vs food images?",
        options: [
            "Handwriting lacks labels",
            "Greater variation in shape and style",
            "Lower resolution images",
            "Overfitting is impossible"
        ],
        correct: 1,
        category: "Computer Vision"
    },
    {
        question: "Which method could help detect gender bias in a job recommendation AI?",
        options: [
            "Ignore gender data",
            "Compare recommendations for male and female profiles with identical skills",
            "Reduce dataset size",
            "Randomize all outputs"
        ],
        correct: 1,
        category: "AI Ethics"
    },
    {
        question: "Which is the best real-life example of transfer learning?",
        options: [
            "Learning guitar after mastering piano",
            "Learning to cook from watching videos",
            "Memorizing facts for a test",
            "Reading a book twice"
        ],
        correct: 0,
        category: "AI Concepts"
    },
    // CULTURAL & TECH QUESTIONS (keeping unique ones only)
    {
        question: "Which traditional art form inspired the pixel style used in early video games?",
        options: ["Mosaic tiles", "Oil painting", "Origami", "Sand art"],
        correct: 0,
        category: "Culture & Tech"
    },
    {
        question: "In Japan, which traditional cultural value strongly influenced the design of robotics?",
        options: ["Wabi-sabi (embracing imperfection)", "Shinto animism (belief objects can have spirit)", "Ikigai (reason for being)", "Bushido (samurai code)"],
        correct: 1,
        category: "Culture & Tech"
    },
    {
        question: "Which of these ancient cultures is credited with developing the earliest known algorithm?",
        options: ["Ancient Egypt", "Ancient Greece", "Ancient Babylon", "Ancient India"],
        correct: 2,
        category: "Tech History"
    },
    {
        question: "The cryptographic method of 'frequency analysis,' which laid foundations for codebreaking, was first described by:",
        options: ["Ada Lovelace", "Ibn Khaldun", "Al-Kindi", "Alan Turing"],
        correct: 2,
        category: "Cryptography"
    },
    {
        question: "Which is an example of 'human-computer interaction' shaped by culture?",
        options: ["Voice assistants recognizing local accents", "Computers only working in English", "Robots that refuse to move", "A printer running out of ink"],
        correct: 0,
        category: "HCI"
    },
    {
        question: "The design of foldable satellites and solar panels was inspired by which traditional art?",
        options: ["Pottery", "Origami", "Calligraphy", "Mosaic"],
        correct: 1,
        category: "Innovation"
    },
    {
        question: "The word 'algorithm' comes from:",
        options: ["A Greek word meaning 'logic'", "A Latin word meaning 'number'", "A Persian mathematician's name", "A Sanskrit poem"],
        correct: 2,
        category: "Tech History"
    },
    {
        question: "The earliest known use of cryptography (secret writing) was in:",
        options: ["Ancient Egypt", "The Cold War", "The Roman Empire", "The 1970s"],
        correct: 0,
        category: "Cryptography"
    },
    {
        question: "The idea of 'zero' as a number, which is essential to coding, first came from:",
        options: ["Ancient India", "Rome", "Greece", "Egypt"],
        correct: 0,
        category: "Math & Computing"
    },
    {
        question: "Which best shows culture + tech blending today?",
        options: ["Self-driving cars learning local traffic rules", "Emojis representing global feelings", "VR recreating historic cities", "All of the above"],
        correct: 3,
        category: "Modern Tech"
    },
    {
        question: "Which famous artist's paintings have been turned into an interactive VR exhibit?",
        options: ["Leonardo da Vinci", "Vincent van Gogh", "Frida Kahlo", "Pablo Picasso"],
        correct: 1,
        category: "Art & Tech"
    },
    {
        question: "Which major sports event used drones in its opening ceremony to create light shows?",
        options: ["Super Bowl", "Olympics", "FIFA World Cup", "NBA Finals"],
        correct: 1,
        category: "Tech Events"
    },
    {
        question: "Which ancient communication method is often compared to modern 'encryption' because only the trained could read it?",
        options: ["Morse code", "Hieroglyphs", "Cuneiform", "Semaphore"],
        correct: 1,
        category: "Communication"
    },
    {
        question: "Which modern invention directly draws on Polynesian navigation traditions?",
        options: ["GPS satellites", "AI route planning", "Virtual reality star maps", "All of the above"],
        correct: 3,
        category: "Navigation"
    },
    {
        question: "The design of modern noise-canceling headphones was partly inspired by which cultural practice?",
        options: ["Meditation chanting", "Echo chambers in cathedrals", "Indigenous sound-dampening architecture", "Military signal jamming"],
        correct: 3,
        category: "Audio Tech"
    },
    {
        question: "Which traditional art form has inspired modern circuit board design aesthetics?",
        options: ["Celtic knot patterns", "Islamic geometric art", "Aboriginal dot painting", "Origami folding"],
        correct: 1,
        category: "Design"
    },
    {
        question: "Which cultural practice inspired the idea of CAPTCHA tests ('prove you're human')?",
        options: ["Ancient riddles to test wisdom", "Medieval guild passwords", "Street performance call-and-response", "Secret handshakes"],
        correct: 0,
        category: "Security"
    },
    // True/False questions converted to multiple choice
    {
        question: "In the 18th century, 'mechanical turks' fooled people into thinking a machine could play chess.",
        options: ["True - it was actually a hidden human operator", "False - it was real AI", "False - this never happened", "True - but it was in the 19th century"],
        correct: 0,
        category: "Tech History"
    },
    {
        question: "There's a robot in Italy that can 'sing' opera.",
        options: ["False - robots can't sing", "True - robots are programmed to perform music", "False - only in Japan", "True - but only in movies"],
        correct: 1,
        category: "Robotics"
    },
    {
        question: "The first ever email was sent in:",
        options: ["1969", "1971", "1975", "1980"],
        correct: 1,
        category: "Internet History"
    },
    {
        question: "Blockchain technology has been used to track and protect indigenous art ownership.",
        options: ["True - part of cultural preservation", "False - blockchain is only for crypto", "True - but only in museums", "False - this is illegal"],
        correct: 0,
        category: "Blockchain"
    },
    // Spot the Lie questions
    {
        question: "Which statement is FALSE?",
        options: [
            "Some Indigenous groups used talking drums as long-distance communication",
            "The first 'computer bug' was literally a moth trapped in a machine",
            "The Vikings invented Bluetooth technology",
            "All of the above are true"
        ],
        correct: 2,
        category: "Spot the Lie"
    },
    {
        question: "Which statement is FALSE?",
        options: [
            "There's a robot in China that writes calligraphy",
            "Some languages have no direct translation for 'computer'",
            "The internet existed in ancient Egypt",
            "VR is used to recreate lost historical sites"
        ],
        correct: 2,
        category: "Spot the Lie"
    },
    {
        question: "Which statement is FALSE?",
        options: [
            "Algorithms can be found in ancient math texts",
            "VR is used to recreate lost historical sites",
            "Smartwatches existed in Ancient Rome",
            "Some people have had weddings in Animal Crossing"
        ],
        correct: 2,
        category: "Spot the Lie"
    },
    {
        question: "Which statement is FALSE?",
        options: [
            "Some people have had weddings inside Animal Crossing",
            "Virtual influencers like Lil Miquela have millions of followers",
            "Snapchat was first created in the 1980s",
            "All of the above are true"
        ],
        correct: 2,
        category: "Spot the Lie"
    }
];

// Override the default questions with Techsplore questions
const CUSTOM_QUESTIONS = TECHSPLORE_QUESTIONS;

// Question configuration
const QUESTION_CONFIG = {
    obligatory: false,          // Questions are optional
    timeLimit: 30,             // 30 seconds per question
    randomizeOrder: true,      // Randomize question order
    randomizeOptions: false,   // Keep answer options in order
    showCorrectAnswer: true,   // Show correct answer when wrong
    correctPoints: 100,        // Points for correct answer
    wrongPenalty: 0,          // No penalty for wrong answers
    speedBonus: true,         // Give bonus for quick answers
    speedBonusMax: 50         // Maximum speed bonus points
};
