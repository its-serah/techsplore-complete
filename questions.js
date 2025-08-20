// TechSplore Questions Database
// Questions organized by difficulty level

// BEGINNER LEVEL QUESTIONS
const BEGINNER_QUESTIONS = [
    // EXAMPLE FORMAT:
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Tech Modern Language", 
            "Home Tool Markup Language",
            "Hyperlinks and Text Markup Language"
        ],
        correct: 0,  // Index of correct answer (0 = first option)
        category: "Web Development",
        difficulty: "easy",
        points: 100
    },
    
    // ADD YOUR QUESTIONS BELOW THIS LINE:
    // Copy the format above and modify with your questions
    
    {
        question: "Which programming language is known as the 'language of the web'?",
        options: ["Python", "Java", "JavaScript", "C++"],
        correct: 2,
        category: "Programming",
        difficulty: "easy",
        points: 100
    },
    
    {
        question: "What does CSS stand for?",
        options: [
            "Computer Style Sheets",
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],
        correct: 2,
        category: "Web Development",
        difficulty: "easy",
        points: 100
    },
    
    // ADD MORE QUESTIONS HERE:
    // You can add as many questions as you want!
    // Just follow the same format
    
    {
        question: "What is the purpose of the 'useEffect' hook in React?",
        options: [
            "To manage component state",
            "To handle side effects in functional components",
            "To create custom hooks",
            "To render JSX elements"
        ],
        correct: 1,
        category: "React",
        difficulty: "easy",
        points: 120
    },
    
    {
        question: "Which of the following is NOT a primitive data type in JavaScript?",
        options: ["string", "boolean", "array", "number"],
        correct: 2,
        category: "JavaScript",
        difficulty: "easy",
        points: 100
    },
    
    // BEGINNER TRACK - PROMPT ENGINEERING
    {
        question: "In the CLEAR framework, which element ensures your prompt gives enough information for context?",
        options: ["Action", "Context", "Reflection", "Length"],
        correct: 1,
        category: "Prompt Engineering",
        difficulty: "easy",
        points: 80
    },
    
    {
        question: "If your prompt to an AI is too vague, what is the most likely outcome?",
        options: [
            "AI will refuse to answer",
            "AI will ask for more details", 
            "AI may generate a broad or irrelevant answer",
            "AI will always give the perfect answer"
        ],
        correct: 2,
        category: "Prompt Engineering",
        difficulty: "medium",
        points: 120
    },
    
    // BEGINNER TRACK - BLOCK-BASED MACHINE LEARNING
    {
        question: "Teachable Machine can be used for both image and sound classification projects.",
        options: ["True", "False"],
        correct: 0,
        category: "Block-Based ML",
        difficulty: "easy",
        points: 80
    },
    
    {
        question: "Which factor has the biggest impact on how quickly a block-based model learns?",
        options: [
            "Number of layers in the block",
            "Learning rate",
            "Name of the project",
            "Background color in training images"
        ],
        correct: 1,
        category: "Block-Based ML",
        difficulty: "medium",
        points: 120
    },
    
    // BEGINNER TRACK - BUILDING CULTURAL AI MODEL
    {
        question: "What is the main purpose of using base_model.trainable = False in transfer learning?",
        options: [
            "To delete pre-trained weights",
            "To keep the pre-trained weights unchanged during initial training",
            "To freeze the optimizer settings",
            "To reduce image size"
        ],
        correct: 1,
        category: "Cultural AI Models",
        difficulty: "easy",
        points: 90
    },
    
    {
        question: "If your dataset has only 40 images and you set validation_split = 0.2, how many images go to the validation set?",
        options: ["6", "8", "10", "12"],
        correct: 1,
        category: "Cultural AI Models",
        difficulty: "medium",
        points: 130
    },
    
    // BEGINNER TRACK - DATA BIAS & ETHICS
    {
        question: "Which of these is a sign of bias in an AI model?",
        options: [
            "Equal recommendations for all groups",
            "Systematic errors favoring one demographic",
            "Random output each time",
            "Use of transfer learning"
        ],
        correct: 1,
        category: "AI Ethics",
        difficulty: "easy",
        points: 100
    },
    
    {
        question: "One way to detect AI bias is to test it with multiple versions of the same profile that differ only by gender or ethnicity.",
        options: ["True", "False"],
        correct: 0,
        category: "AI Ethics",
        difficulty: "medium",
        points: 130
    },
    
    // BEGINNER TRACK - MISTRAL AI
    {
        question: "What is the purpose of an API key when working with Mistral AI?",
        options: [
            "To speed up model training",
            "To prove you have permission to use the API",
            "To change the model's architecture",
            "To encrypt data locally"
        ],
        correct: 1,
        category: "Mistral AI",
        difficulty: "easy",
        points: 90
    },
    
    {
        question: "In Mistral's API, what is the role of 'system' messages?",
        options: [
            "They store API keys",
            "They define instructions that shape the AI's behavior",
            "They contain user prompts",
            "They update the model"
        ],
        correct: 1,
        category: "Mistral AI",
        difficulty: "medium",
        points: 130
    },
    
    // BEGINNER TRACK - FASTAPI
    {
        question: "FastAPI can automatically generate API documentation using Swagger UI.",
        options: ["True", "False"],
        correct: 0,
        category: "FastAPI",
        difficulty: "easy",
        points: 90
    },
    
    {
        question: "If you want to update an existing resource in FastAPI, which HTTP method should you use?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correct: 2,
        category: "FastAPI",
        difficulty: "medium",
        points: 120
    },
    
    // BEGINNER TRACK - SDLC & DEVOPS
    {
        question: "Which of these best describes the SDLC?",
        options: [
            "A programming language",
            "A step-by-step process to build and maintain software",
            "A database schema",
            "A set of API endpoints"
        ],
        correct: 1,
        category: "SDLC & DevOps",
        difficulty: "easy",
        points: 85
    },
    
    {
        question: "Clean code is only about making code run without errors.",
        options: ["True", "False"],
        correct: 1,
        category: "SDLC & DevOps",
        difficulty: "medium",
        points: 110
    },
    
    // BEGINNER TRACK - DOCKER
    {
        question: "Which of these is the best description of a Docker container?",
        options: [
            "A virtual machine with its own OS",
            "A lightweight package that includes an app and its dependencies",
            "A Python library for machine learning",
            "A tool for creating APIs"
        ],
        correct: 1,
        category: "Docker",
        difficulty: "easy",
        points: 95
    },
    
    {
        question: "Which Docker command shows all containers, including stopped ones?",
        options: ["docker ps", "docker ps -a", "docker images", "docker stop"],
        correct: 1,
        category: "Docker",
        difficulty: "medium",
        points: 125
    }
];

// Advanced Questions for experienced developers
const ADVANCED_QUESTIONS = [
    {
        question: "What is the time complexity of inserting an element at the beginning of a dynamic array?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correct: 2,
        category: "Data Structures",
        difficulty: "hard",
        points: 250
    },
    
    {
        question: "In a Binary Search Tree, what is the average time complexity for search operations?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
        correct: 1,
        category: "Algorithms",
        difficulty: "hard",
        points: 300
    },
    
    {
        question: "Which design pattern ensures a class has only one instance and provides global access to it?",
        options: ["Factory Pattern", "Observer Pattern", "Singleton Pattern", "Strategy Pattern"],
        correct: 2,
        category: "Design Patterns",
        difficulty: "medium",
        points: 200
    },
    
    {
        question: "What does 'ACID' stand for in database transactions?",
        options: [
            "Atomicity, Consistency, Isolation, Durability",
            "Accuracy, Consistency, Integrity, Dependability",
            "Availability, Consistency, Isolation, Distribution",
            "Atomicity, Coherence, Independence, Durability"
        ],
        correct: 0,
        category: "Database Systems",
        difficulty: "medium",
        points: 220
    },
    
    {
        question: "In Big O notation, which of these represents the fastest growing function?",
        options: ["O(2^n)", "O(n!)", "O(n²)", "O(n log n)"],
        correct: 1,
        category: "Algorithm Complexity",
        difficulty: "hard",
        points: 280
    },
    
    {
        question: "What is the main advantage of using a Hash Table over a Binary Search Tree?",
        options: [
            "Better worst-case performance",
            "Maintains sorted order",
            "Better average-case performance for lookups",
            "Uses less memory"
        ],
        correct: 2,
        category: "Data Structures",
        difficulty: "medium",
        points: 240
    },
    
    {
        question: "Which of the following is true about microservices architecture?",
        options: [
            "All services must use the same programming language",
            "Services should share the same database",
            "Each service should be independently deployable",
            "Services must communicate only through REST APIs"
        ],
        correct: 2,
        category: "System Architecture",
        difficulty: "medium",
        points: 210
    },
    
    {
        question: "What is the purpose of the CAP theorem in distributed systems?",
        options: [
            "It defines how to scale databases horizontally",
            "It states you can only guarantee 2 out of 3: Consistency, Availability, Partition tolerance",
            "It explains how to implement caching strategies",
            "It describes load balancing techniques"
        ],
        correct: 1,
        category: "Distributed Systems",
        difficulty: "hard",
        points: 320
    },
    
    {
        question: "In functional programming, what is a 'pure function'?",
        options: [
            "A function that only uses built-in operators",
            "A function with no side effects that always returns the same output for the same input",
            "A function that doesn't use any variables",
            "A function written in a functional programming language"
        ],
        correct: 1,
        category: "Functional Programming",
        difficulty: "medium",
        points: 190
    },
    
    {
        question: "What is the difference between 'git merge' and 'git rebase'?",
        options: [
            "There is no difference, they do the same thing",
            "Merge creates a merge commit, rebase rewrites commit history",
            "Rebase only works with remote branches",
            "Merge is faster than rebase"
        ],
        correct: 1,
        category: "Version Control",
        difficulty: "medium",
        points: 180
    },
    
    {
        question: "Which sorting algorithm has the best average-case time complexity?",
        options: ["Bubble Sort", "Quick Sort", "Insertion Sort", "Selection Sort"],
        correct: 1,
        category: "Sorting Algorithms",
        difficulty: "medium",
        points: 200
    },
    
    {
        question: "What is the primary benefit of using Docker containers?",
        options: [
            "Faster code execution",
            "Better security",
            "Application portability and consistency across environments",
            "Reduced memory usage"
        ],
        correct: 2,
        category: "DevOps",
        difficulty: "medium",
        points: 160
    },
    
    {
        question: "In object-oriented programming, what does the 'L' in SOLID principles stand for?",
        options: [
            "Low Coupling",
            "Liskov Substitution Principle",
            "Linear Responsibility",
            "Lazy Loading"
        ],
        correct: 1,
        category: "OOP Principles",
        difficulty: "medium",
        points: 220
    },
    
    {
        question: "What is the space complexity of the merge sort algorithm?",
        options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
        correct: 2,
        category: "Algorithm Complexity",
        difficulty: "hard",
        points: 260
    },
    
    {
        question: "Which of these is NOT a characteristic of REST API design?",
        options: [
            "Stateless communication",
            "Uniform interface",
            "Persistent connections required",
            "Client-server architecture"
        ],
        correct: 2,
        category: "API Design",
        difficulty: "medium",
        points: 190
    },
    
    {
        question: "What is the main purpose of a reverse proxy?",
        options: [
            "To hide client IP addresses",
            "To cache responses and distribute load to backend servers",
            "To encrypt network traffic",
            "To compress data transfers"
        ],
        correct: 1,
        category: "Network Architecture",
        difficulty: "medium",
        points: 210
    },
    
    {
        question: "In machine learning, what is 'overfitting'?",
        options: [
            "When a model is too simple",
            "When a model performs well on training data but poorly on new data",
            "When training takes too long",
            "When the dataset is too large"
        ],
        correct: 1,
        category: "Machine Learning",
        difficulty: "medium",
        points: 230
    },
    
    {
        question: "What is the primary difference between SQL and NoSQL databases?",
        options: [
            "NoSQL is always faster",
            "SQL databases have fixed schemas, NoSQL databases are schema-flexible",
            "SQL databases can't handle large amounts of data",
            "NoSQL databases don't support queries"
        ],
        correct: 1,
        category: "Database Systems",
        difficulty: "medium",
        points: 170
    },
    
    {
        question: "In cybersecurity, what does 'SQL injection' attack?",
        options: [
            "Network protocols",
            "Database queries through user input",
            "File system permissions",
            "Memory allocation"
        ],
        correct: 1,
        category: "Cybersecurity",
        difficulty: "medium",
        points: 200
    },
    
    {
        question: "What is the main advantage of using GraphQL over REST?",
        options: [
            "Better security",
            "Faster execution",
            "Clients can request exactly the data they need",
            "Easier to implement"
        ],
        correct: 2,
        category: "API Technologies",
        difficulty: "medium",
        points: 190
    }
];

// Question settings
const QUESTION_CONFIG = {
    // Make questions obligatory (can't skip)
    obligatory: true,
    
    // Time limit per question in seconds (0 = no limit)
    timeLimit: 30,
    
    // Show correct answer after wrong selection
    showCorrectAnswer: true,
    
    // Randomize question order
    randomizeOrder: true,
    
    // Randomize option order
    randomizeOptions: false,
    
    // Minimum questions per game
    minQuestionsPerGame: 5,
    
    // Points for correct answer
    correctPoints: 100,
    
    // Points lost for wrong answer
    wrongPenalty: -25,
    
    // Bonus points for fast answers
    speedBonus: true,
    speedBonusMax: 50
};
