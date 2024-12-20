import { Vector2 } from "./Vector2";

export class Sprite {
    constructor({
        resource, // Image we want to draw
        frameSize, // Size of the crop
        hFrames,
        vFrames,
        frame, // Which frame to show
        scale, // How large to draw the sprite
        position // Where to draw on the canvas (Top left corner)
    }) {
        this.resource = resource;
        this.frameSize = frameSize ?? new Vector2(16,16);
        this.hFrames = hFrames ?? 1;
        this.vFrames = vFrames ?? 1;
        this.frame = frame ?? 0;
        this.frameMap = new Map();
        this.scale = scale ?? 1;
        this.position = position ?? new Vector2(0, 0);

        this.buildFrameMap();
    }

    buildFrameMap() {
        let frameCount = 0;

        for (let v = 0; v < this.vFrames; v++) {
            for (let h = 0; h < this.hFrames; h++) {
                console.log("frame", h, v);
                this.frameMap.set(
                    frameCount, 
                    new Vector2(h * this.frameSize.x, v * this.frameSize.y)
                )
                frameCount++;
            }
        }
    }

    drawImage(ctx, x, y) {
        if (!this.resource.isLoaded) {
            return;
        }

        let frameCoordX = 0;
        let frameCoordY = 0;
        const frame = this.frameMap.get(this.frame);
        if (frame) {
            frameCoordX = frame.x;
            frameCoordY = frame.y;
        }

        const frameSizeX = this.frameSize.x;
        const frameSizeY = this.frameSize.y;

        ctx.drawImage(
            this.resource.image,
            frameCoordX,
            frameCoordY,
            frameSizeX,
            frameSizeY,
            x,
            y,
            frameSizeX * this.scale,
            frameSizeY * this.scale
        );
    }
}