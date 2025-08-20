// Advanced Coding Challenges for TechSplore
// 2-minute mini coding challenges for advanced players

const CODING_CHALLENGES = [
    {
        id: 1,
        title: "Array Manipulation",
        description: "Write a function that removes duplicates from an array and returns the unique elements in sorted order.",
        starterCode: `function removeDuplicates(arr) {
    // Your code here
    
}

// Test cases:
console.log(removeDuplicates([3, 1, 4, 1, 5, 9, 2, 6, 5])); 
// Expected: [1, 2, 3, 4, 5, 6, 9]`,
        solution: `function removeDuplicates(arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
}`,
        testCases: [
            { input: [[3, 1, 4, 1, 5, 9, 2, 6, 5]], expected: [1, 2, 3, 4, 5, 6, 9] },
            { input: [[1, 1, 1]], expected: [1] },
            { input: [[]], expected: [] }
        ],
        category: "Arrays",
        points: 200,
        timeLimit: 120 // 2 minutes
    },
    
    {
        id: 2,
        title: "String Palindrome",
        description: "Create a function that checks if a string is a palindrome (reads the same forwards and backwards), ignoring spaces and case.",
        starterCode: `function isPalindrome(str) {
    // Your code here
    
}

// Test cases:
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome("race a car")); // false`,
        solution: `function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
}`,
        testCases: [
            { input: ["A man a plan a canal Panama"], expected: true },
            { input: ["race a car"], expected: false },
            { input: [""], expected: true }
        ],
        category: "Strings",
        points: 180,
        timeLimit: 120
    },
    
    {
        id: 3,
        title: "Fibonacci Sequence",
        description: "Write a function that returns the nth number in the Fibonacci sequence (0, 1, 1, 2, 3, 5, 8, ...).",
        starterCode: `function fibonacci(n) {
    // Your code here
    
}

// Test cases:
console.log(fibonacci(0)); // 0
console.log(fibonacci(7)); // 13`,
        solution: `function fibonacci(n) {
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        [a, b] = [b, a + b];
    }
    return b;
}`,
        testCases: [
            { input: [0], expected: 0 },
            { input: [7], expected: 13 },
            { input: [10], expected: 55 }
        ],
        category: "Algorithms",
        points: 220,
        timeLimit: 120
    },
    
    {
        id: 4,
        title: "Object Transformation",
        description: "Create a function that takes an array of objects and groups them by a specified property.",
        starterCode: `function groupBy(array, key) {
    // Your code here
    
}

// Test case:
const users = [
    {name: 'Alice', role: 'admin'},
    {name: 'Bob', role: 'user'},
    {name: 'Charlie', role: 'admin'}
];
console.log(groupBy(users, 'role'));`,
        solution: `function groupBy(array, key) {
    return array.reduce((groups, item) => {
        const group = item[key];
        groups[group] = groups[group] || [];
        groups[group].push(item);
        return groups;
    }, {});
}`,
        testCases: [
            { 
                input: [[{name: 'Alice', role: 'admin'}, {name: 'Bob', role: 'user'}], 'role'], 
                expected: {admin: [{name: 'Alice', role: 'admin'}], user: [{name: 'Bob', role: 'user'}]}
            }
        ],
        category: "Objects",
        points: 250,
        timeLimit: 120
    },
    
    {
        id: 5,
        title: "API Data Processing",
        description: "Write a function that processes API response data: extract names, filter active users, and sort by join date.",
        starterCode: `function processUsers(apiResponse) {
    // Your code here
    // Return array of active user names sorted by joinDate
    
}

// Test data:
const data = {
    users: [
        {name: 'John', active: true, joinDate: '2023-01-15'},
        {name: 'Jane', active: false, joinDate: '2023-01-10'},
        {name: 'Bob', active: true, joinDate: '2023-01-20'}
    ]
};`,
        solution: `function processUsers(apiResponse) {
    return apiResponse.users
        .filter(user => user.active)
        .sort((a, b) => new Date(a.joinDate) - new Date(b.joinDate))
        .map(user => user.name);
}`,
        testCases: [
            { 
                input: [{
                    users: [
                        {name: 'John', active: true, joinDate: '2023-01-15'},
                        {name: 'Jane', active: false, joinDate: '2023-01-10'},
                        {name: 'Bob', active: true, joinDate: '2023-01-20'}
                    ]
                }], 
                expected: ['John', 'Bob']
            }
        ],
        category: "Data Processing",
        points: 280,
        timeLimit: 120
    },
    
    {
        id: 6,
        title: "Tree Traversal",
        description: "Implement a function that finds the maximum depth of a binary tree.",
        starterCode: `function maxDepth(root) {
    // Your code here
    // root structure: {val: number, left: TreeNode|null, right: TreeNode|null}
    
}

// Test case:
const tree = {
    val: 1,
    left: {val: 2, left: null, right: null},
    right: {val: 3, left: {val: 4, left: null, right: null}, right: null}
};`,
        solution: `function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`,
        testCases: [
            { 
                input: [{
                    val: 1,
                    left: {val: 2, left: null, right: null},
                    right: {val: 3, left: {val: 4, left: null, right: null}, right: null}
                }], 
                expected: 3
            },
            { input: [null], expected: 0 }
        ],
        category: "Trees",
        points: 300,
        timeLimit: 120
    }
];

// Configuration for coding challenges
const CODING_CONFIG = {
    timeLimit: 120, // 2 minutes in seconds
    autoSubmit: true, // Auto-submit when time runs out
    showHints: false, // No hints in advanced mode
    allowMultipleAttempts: false // One shot only!
};
