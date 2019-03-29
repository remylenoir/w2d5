/* eslint-disable */

class Game {
    constructor() {
        // add some properties
        this.obstacles = []
        this.bird = new Bird()
        this.gameOver = false
        this.score = 0
        this.obstacleVelocity = -7
        this.spawnIntervalTimer = 1500
    }

    setup() {
        createCanvas(GAME_WIDTH, GAME_HEIGHT)
        frameRate(60)
        this.bird.setup()
        this.setSpawnInterval()
        this.setScoreInterval()
        setInterval(
            function() {
                this.obstacleVelocity -= 1
                this.setSpawnInterval()
            }.bind(this),
            1500
        )
    }

    setSpawnInterval() {
        this.spawnIntervalTimer -= 100
        if (this.spawnInterval) {
            clearInterval(this.spawnInterval)
        }

        this.spawnInterval = setInterval(
            function() {
                this.obstacles.push(new Obstacle())
                // if (this.obstacles.length > 3) this.obstacles.shift()
            }.bind(this),
            this.spawnIntervalTimer
        )
    }

    setScoreInterval() {
        this.scoreInterval = setInterval(
            function() {
                this.score++
                document.querySelector('h1').innerHTML = `Score: ${this.score}`
            }.bind(this),
            1000
        )
    }

    draw() {
        clear()
        background(180)
        if (this.gameOver) {
            textSize(50)
            text('Game Over', 10, 30)
        } else {
            this.bird.draw()
            this.obstacles.forEach(function(obstacle) {
                obstacle.draw()
            })
        }
    }

    over() {
        this.gameOver = true
        clearInterval(this.scoreInterval)
    }
}
