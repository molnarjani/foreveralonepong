function setup() {
    PADDLE_WIDTH = 75
    PADDLE_HEIGHT = 20
    PADDING_BOTTOM = 20
    BALL_RADIUS = 10
    createCanvas(600, 400)
    game_started = false
    ball_x = width / 2
    ball_y = height / 2
    velocity_x = random(5)
    velocity_y = random(5)
}

function draw() {
    background(51)
    noStroke()

    if(game_started) {
        ball_x = ball_x + velocity_x
        ball_y = ball_y + velocity_y
    }

    ellipse(ball_x, ball_y, BALL_RADIUS)
    
    rect(
        constrain(mouseX, 0, width - PADDLE_WIDTH),
        400 - PADDLE_HEIGHT - PADDING_BOTTOM,
        PADDLE_WIDTH,
        PADDLE_HEIGHT
    )
}

function mouseClicked() {
    if(!game_started) {
        game_started = true
    }
  }