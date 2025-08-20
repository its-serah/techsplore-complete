// Asset Configuration - Maps game elements to custom images
const ASSET_CONFIG = {
    // Character images
    characters: {
        astronaut: 'assets/characters/taylor.png',
        robot: 'assets/characters/icon 2.jpg',
        alien: 'assets/characters/icon 3.jpg',
        explorer: 'assets/characters/icon 4.jpg',
        hellokitty: 'assets/characters/hellokityyyy.png',
        blondie: 'assets/characters/blondie.png',
        rory: 'assets/characters/rory.png',
        // Additional characters
        character5: 'assets/characters/icon 5.jpg',
        character6: 'assets/characters/icon 6.jpg',
        character7: 'assets/characters/icon 7.jpg'
    },
    
    // Collectible items
    collectibles: {
        star: 'assets/icons/notepad.jpg',
        coin: 'assets/icons/coin.jpg',
        question: 'assets/icons/envolpe.jpg'
    },
    
    // UI elements
    ui: {
        heart: 'assets/characters/icon 5.jpg', // Using icon 5 as heart
        shield: 'assets/characters/icon 6.jpg',
        powerup: 'assets/characters/icon 7.jpg'
    },
    
    // Background images
    backgrounds: {
        space: 'assets/backgrounds/bggame.jpg',
        galaxy: 'assets/backgrounds/Purple and Pink Pixel Retro Nostalgia Fever Fandom Game Presentation.jpg',
        nebula: 'assets/backgrounds/Purple and Pink Pixel Retro Nostalgia Fever Fandom Game Presentation (1).jpg',
        cosmos: 'assets/backgrounds/Purple and Pink Pixel Retro Nostalgia Fever Fandom Game Presentation (2).jpg',
        tech: 'assets/backgrounds/Game Background, a Technology Illustration by 2dvillShop.jpg',
        crafts: 'assets/backgrounds/crafts.jpg',
        park: 'assets/backgrounds/Cartoon Park Images - Free Download on Freepik.jpg',
        retro: 'assets/backgrounds/8805215.jpg'
    },
    
    // Achievement icons using available images
    achievements: {
        FIRST_STAR: 'assets/icons/notepad.jpg',
        COMBO_5: 'assets/characters/icon 1.jpg',
        PERFECT_10: 'assets/characters/icon 2.jpg',
        SURVIVOR: 'assets/characters/icon 3.jpg',
        RICH: 'assets/icons/coin.jpg',
        SPEEDSTER: 'assets/characters/icon 4.jpg'
    },
    
    // Power-up icons
    powerUps: {
        SHIELD: 'assets/characters/icon 6.jpg',
        MAGNET: 'assets/characters/icon 7.jpg',
        SPEED: 'assets/characters/icon 1.jpg',
        TRIPLE_JUMP: 'assets/characters/icon 2.jpg',
        COIN_MULTIPLIER: 'assets/icons/coin.jpg'
    }
};

// Helper function to preload images
function preloadAssets() {
    const images = {};
    const promises = [];
    
    // Preload all images
    Object.entries(ASSET_CONFIG).forEach(([category, items]) => {
        images[category] = {};
        Object.entries(items).forEach(([key, path]) => {
            const img = new Image();
            const promise = new Promise((resolve, reject) => {
                img.onload = () => resolve();
                img.onerror = () => {
                    console.warn(`Failed to load image: ${path}`);
                    resolve(); // Continue even if an image fails
                };
            });
            img.src = path;
            images[category][key] = img;
            promises.push(promise);
        });
    });
    
    return Promise.all(promises).then(() => images);
}

// Export for use in game
let gameAssets = null;
preloadAssets().then(assets => {
    gameAssets = assets;
    console.log('All assets loaded successfully');
});
