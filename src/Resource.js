class Resources {
    constructor() {

        // Everything to download. Our whole sprite folder basically
        this.toLoad = {
            sky: "/sprites/sky.png",
            ground: "/sprites/ground.png",
            hero: "/sprites/hero-sheet.png",
            shadow: "/sprites/shadow.png",
            rod: "/sprites/rod.png",
            spritesheet: "/sprites/spritesheet.png"
        };
        
        // Empty dictionary that will contain each of our images
        this.images = {};

        // Loop through each toLoad key
        Object.keys(this.toLoad).forEach(key => {
            // Create a new image 
            const img = new Image();
            // Set the image source to the path from the toLoad key
            img.src = this.toLoad[key];

            this.images[key] = {
                image: img,
                // Requires isLoaded because images take a bit to load
                isLoaded: false
            };

            // Use this to let the program know the image is loaded
            img.onload = () => {
                this.images[key].isLoaded = true
            };
        })
    }
}

// Create one instance for the whole app to use
export const resources = new Resources();