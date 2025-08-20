// TechSplore Questions Database
// Questions organized by difficulty level
console.log('🔄 QUESTIONS.JS LOADED - VERSION 2.0 - UPDATED ADVANCED QUESTIONS!');
console.log('🚀 Advanced questions include: Mistral AI, FastAPI, Docker, SDLC & DevOps');

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
    // MISTRAL AI QUESTIONS
    {
        question: "In a requests.post() call to the Mistral AI API, which element of the request is responsible for specifying the target model and instructions?",
        options: ["URL", "Headers", "Body", "API Key"],
        correct: 2,
        category: "Mistral AI",
        difficulty: "medium",
        points: 200
    },
    
    {
        question: "To make your chatbot handle both cultural and history questions, which part of the code should you modify?",
        options: ["The API endpoint URL", "The request headers", "The system role message", "The API key storage location"],
        correct: 2,
        category: "Mistral AI",
        difficulty: "medium",
        points: 200
    },
    
    // FASTAPI QUESTIONS
    {
        question: "Which HTTP method in a FastAPI To-Do list application should be used to change a task's status from incomplete to complete?",
        options: ["GET", "POST", "PUT", "DELETE"],
        correct: 2,
        category: "FastAPI",
        difficulty: "medium",
        points: 200
    },
    
    {
        question: "Which feature of FastAPI allows it to serve many requests at once without blocking?",
        options: ["ORM integration", "Asynchronous support", "Auto-generated HTML pages", "WebSocket support"],
        correct: 1,
        category: "FastAPI",
        difficulty: "medium",
        points: 200
    },
    
    {
        question: "What is one main advantage of building your own FastAPI backend instead of relying on a hosted model API?",
        options: ["Free hosting from FastAPI", "Built-in pre-trained models", "Full control over backend logic and deployment", "Requires no coding"],
        correct: 2,
        category: "FastAPI",
        difficulty: "medium",
        points: 220
    },
    
    {
        question: "What documentation tools does FastAPI provide by default?",
        options: ["Swagger UI & ReDoc", "Postman Collections", "Markdown Pages", "Jupyter Notebooks"],
        correct: 0,
        category: "FastAPI",
        difficulty: "medium",
        points: 180
    },
    
    // SDLC AND DEVOPS QUESTIONS
    {
        question: "Why can software projects still fail even if the code runs correctly?",
        options: ["Lack of comments in the code", "Weak processes and changing requirements", "Too many developers", "Old programming languages"],
        correct: 1,
        category: "SDLC & DevOps",
        difficulty: "medium",
        points: 210
    },
    
    {
        question: "Which statement correctly matches each term? Design Pattern: Common solution for recurring design issues. Design Principle: Guideline for writing clean, maintainable code. System Architecture: Overall structure and interaction of components.",
        options: [
            "Pattern = structure, Principle = recurring issue, Architecture = coding style",
            "Pattern = recurring issue, Principle = clean code, Architecture = overall structure",
            "Pattern = coding style, Principle = structure, Architecture = recurring problem",
            "Pattern = recurring problem, Principle = coding syntax, Architecture = component list"
        ],
        correct: 1,
        category: "SDLC & DevOps",
        difficulty: "hard",
        points: 250
    },
    
    {
        question: "Which of the following best demonstrates applying a DevOps practice to a project?",
        options: [
            "Writing global variables for quick access",
            "Automating deployment and running unit tests on every commit",
            "Using the same password for all servers",
            "Hardcoding API keys in the code"
        ],
        correct: 1,
        category: "SDLC & DevOps",
        difficulty: "medium",
        points: 230
    },
    
    // DOCKER QUESTIONS
    {
        question: "What does containerization achieve?",
        options: [
            "Runs multiple operating systems on a single virtual machine",
            "Packages an application with its dependencies into a portable unit",
            "Encrypts source code automatically",
            "Stores container data in the cloud by default"
        ],
        correct: 1,
        category: "Docker",
        difficulty: "medium",
        points: 200
    },
    
    {
        question: "Which is TRUE about containers compared to VMs?",
        options: [
            "Containers always include their own OS kernel",
            "Containers share the host OS kernel and start faster than VMs",
            "Containers require more RAM than VMs",
            "Containers run without an operating system"
        ],
        correct: 1,
        category: "Docker",
        difficulty: "medium",
        points: 220
    },
    
    {
        question: "In Docker, what does docker build -t user/app:1.0 . do?",
        options: [
            "Tags an existing container as 1.0",
            "Builds an image from the current directory and tags it",
            "Pushes an image to Docker Hub",
            "Starts a container in detached mode"
        ],
        correct: 1,
        category: "Docker",
        difficulty: "medium",
        points: 210
    },
    
    {
        question: "In docker run -p 8080:8000 image, what does -p 8080:8000 do?",
        options: [
            "Maps container port 8080 to host 8000",
            "Maps host port 8080 to container port 8000",
            "Opens port 8080 internally only",
            "Publishes port 8000 on all networks"
        ],
        correct: 1,
        category: "Docker",
        difficulty: "medium",
        points: 200
    },
    
    {
        question: "Which command shows only running containers?",
        options: ["docker images", "docker ps", "docker ps -a", "docker service ls"],
        correct: 1,
        category: "Docker",
        difficulty: "easy",
        points: 150
    },
    
    {
        question: "A Docker image is best described as…",
        options: [
            "A running process inside a container",
            "A read-only template used to create containers",
            "A container network definition",
            "An image of the container's UI"
        ],
        correct: 1,
        category: "Docker",
        difficulty: "medium",
        points: 180
    },
    
    {
        question: "In a Dockerfile, what does EXPOSE 5000 do?",
        options: [
            "Automatically publishes port 5000",
            "Documents the intended port for the container",
            "Blocks external access to port 5000",
            "Creates a firewall rule"
        ],
        correct: 1,
        category: "Docker",
        difficulty: "medium",
        points: 190
    },
    
    {
        question: "What will the following command do? docker service create --name hello --replicas 3 --publish 80:8000 user/hello:1.0",
        options: [
            "Creates a service with 3 replicas and publishes port 80 to container port 8000",
            "Builds the image and uploads it to Docker Hub",
            "Runs a single container only on the manager node",
            "Only exposes port 8000 on localhost"
        ],
        correct: 0,
        category: "Docker",
        difficulty: "hard",
        points: 280
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
