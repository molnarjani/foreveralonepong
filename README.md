# foreveralonepong

Setup Steps:
- Create git repo
- Add p5js files https://p5js.org/get-started/ (loading p5.sound.js caused issues for some reason)
- Install and open an editor of choice (Vim obviously :D)
- Open HTML and refresh every once in a while to make sure your changes work
- Run through getting started section to makesure everything is nice
- Commit and push, once you have an empty page that loads p5js


Pong:
- Create canvas and background
- Add a `rect` call to create a paddle
- Add an `ellipse` call to create a ball in center of the canvas
- Make paddle follow the mouse
- Add mouseClicked listener to start the game
- Add random velocity, move ball by velocity in update loop
- Add collision checks for boundaries, invert velocity when collision happens
- Add collision checks for paddle and ball
