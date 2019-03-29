/* eslint-disable */

class Obstacle {
    constructor() {
        const GAP_OPENING = 350
        this.width = 75

        const gapPos = Math.floor(Math.random() * (GAME_HEIGHT - GAME_HEIGHT * 0.8)) + GAME_HEIGHT * 0.4

        this.topEnd = gapPos - GAP_OPENING / 2
        this.botY = gapPos + GAP_OPENING / 2
        this.x = GAME_WIDTH
    }

    draw() {
        fill(0)
        this.x += game.obstacleVelocity
        rect(this.x, 0, this.width, this.topEnd)
        rect(this.x, this.botY, this.width, GAME_HEIGHT - this.botY)
        this.checkCollision()
    }

    checkCollision() {
        const upperRect = {
            left: this.x,
            right: this.x + this.width,
            top: 0,
            bottom: this.topEnd,
        }

        const lowerRect = {
            left: this.x,
            right: this.x + this.width,
            top: this.botY,
            bottom: GAME_HEIGHT,
        }

        if (intersectRect(upperRect, game.bird.rect) || intersectRect(lowerRect, game.bird.rect)) {
            game.over()
        }

        function intersectRect(r1, r2) {
            return !(
                r2.left > r1.right ||
                r2.right < r1.left ||
                r2.top > r1.bottom ||
                r2.bottom < r1.top
            )
        }
    }
}
