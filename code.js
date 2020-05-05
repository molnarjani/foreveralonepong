function setup() {
    PADDLE_WIDTH = 75
    PADDLE_HEIGHT = 20
    PADDING_BOTTOM = 20
    BALL_RADIUS = 10
    createCanvas(600, 400)
}

function draw() {
    background(51)
    noStroke()

    ellipse(width/2, height/2, BALL_RADIUS)
    
    rect(
        constrain(mouseX, 0, width - PADDLE_WIDTH),
        400 - PADDLE_HEIGHT - PADDING_BOTTOM,
        PADDLE_WIDTH,
        PADDLE_HEIGHT
    )
}