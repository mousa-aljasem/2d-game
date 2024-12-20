export class GameLoop {
    constructor(update, render) {

        this.lastFrameTime = 0;
        this.accumulatedTime = 0;
        this.timeStep = 1000 / 60; // 60 FPS
        
        this.update = update;
        this.render = render;

        // Request Animation Frame ID
        this.rafId = null;

        this.isRunning = false;
    }

    mainLoop = (timeStamp) => {
        if (!this.isRunning) {
            return;
        }

        let deltaTime = timeStamp - this.lastFrameTime;
        this.lastFrameTime = timeStamp;

        // Accumulate all the time since the last frame
        this.accumulatedTime += deltaTime;

        // Fixed time step updates
        // If theres enoguh accumulated time to run one or more fixed updates
        while (this.accumulatedTime >= this.timeStep) {
            this.update(this.timeStep);
            this.accumulatedTime -= this.timeStep;
        }

        this.render();

        this.rafId = requestAnimationFrame(this.mainLoop);
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.rafId = requestAnimationFrame(this.mainLoop);
        }
    }

    stop() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        this.isRunning = false;
    }
}