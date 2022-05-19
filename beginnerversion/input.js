document.addEventListener("keydown", function(event) {
    console.log("1.2")
    // start the game if the startkey is pressed
    if(gameState == "menu" && event.key == startKey) {
        if (music.paused) music.play();
        gameState = "action";
        birdCanFlap = true;
        return; 
    }

    console.log("2.2")
    // flap the wings of the bird if the flapkey is pressed
    if (gameState == "action" && event.key == birdFlapKey && birdCanFlap == true) {
        if(birdYAccelleration == 0) birdYAccelleration = birdBeginningYAccelleration;
        birdYSpeed = birdFlapForce;
        birdCanFlap = false;
        birdFlapSound.currentTime = 0.1;
        birdFlapSound.play();
        birdFlapForce = -12;
        return;
    
    }
    console.log("3.2")
    // reset the game if the restart key is pressed
    if(gameState == "gameover" && event.key == restartKey) {
        gameState = "menu";
        birdYPosition = birdStartYPosition;
        birdYSpeed = birdStartYSpeed;
        birdYAccelleration = birdStartYAccelleration;
        birdCanFlap = false;
        fireballs = [];
        fireballTimeSinceLastSpawn = fireballSpawnInterval;
        scoreValue = 0;
        coins = [];
        return; 
    }

});

document.addEventListener("keyup", function(event) {
    console.log("3.3")
    // make the bird able to flap again if the flapkey is released
    if (gameState == "action" && event.key == birdFlapKey) {
        birdCanFlap = true;
        return;
    }

});