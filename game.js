document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll('.grid div')
    const resultDisplay = document.querySelector('#result')
    const audio = document.getElementById("title-music");
    const playpause = document.getElementById("play-pause");
    const laserAudioContainer = document.getElementById("laser-sound");
    const boomAudioContainer = document.getElementById("boom-sound");
    const winLossModal = document.getElementById("win-loss-modal");
    const modalTitle = document.getElementById("modal-title");
    const modalTitle2 = document.getElementById("modal-title-2");
    const leftControl = document.getElementById("left-control");
    const rightControl = document.getElementById("right-control");
    const fireButton = document.getElementById("fire-button");

    let width = 20
    let currentShooterIndex = 390
    let currentInvaderIndex = 0
    let alienInvadersTakenDown = []
    let result = 0
    let direction = 1
    let invaderId
    let gameActive = true

    // play game music on load
    audio.play();
    playpause.innerHTML = '<i class="fa-solid fa-pause"></i>';

    // define the alien invaders
    const alienInvaders = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
        40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50,
        60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70
    ]

    // draw the alien invaders
    alienInvaders.forEach(invader => squares[currentInvaderIndex + invader].classList.add('invader'))

    // draw the shooter
    squares[currentShooterIndex].classList.add('shooter')

    // move the shooter along a line
    function moveShooter(e, isClick = false, direction = "left") {
        if (gameActive) {
            squares[currentShooterIndex].classList.remove('shooter')
            switch (e.keyCode) {
                case 37:
                    if (currentShooterIndex % width !== 0) currentShooterIndex -= 1
                    break
                case 39:
                    if (currentShooterIndex % width < width - 1) currentShooterIndex += 1
                    break
            }
            squares[currentShooterIndex].classList.add('shooter')
        }
        if (gameActive && direction === "left" && isClick) {
            squares[currentShooterIndex].classList.remove('shooter')
            if (currentShooterIndex % width !== 0) {
                currentShooterIndex -= 1
            }
            squares[currentShooterIndex].classList.add('shooter')
        } else if (gameActive && direction === "right" && isClick) {
            squares[currentShooterIndex].classList.remove('shooter')
            if (currentShooterIndex % width < width - 1) {
                currentShooterIndex += 1
            }
            squares[currentShooterIndex].classList.add('shooter')
        }
    }

    document.addEventListener('keydown', moveShooter)

    // moves the alien invaders
    function moveInvaders() {
        const leftEdge = alienInvaders[0] % width === 0
        const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1

        if ((leftEdge && direction === -1) || (rightEdge && direction === 1)) {
            direction = width
        } else if (direction === width) {
            if (leftEdge) direction = 1
            else direction = -1
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            squares[alienInvaders[i]].classList.remove('invader')
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            alienInvaders[i] += direction
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            if (!alienInvadersTakenDown.includes(i)) {
                squares[alienInvaders[i]].classList.add('invader')
            }
        }

        // decide a game is over
        if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
            squares[currentShooterIndex].classList.add('boom')
            makeBoomSound()
            clearInterval(invaderId)
            gameActive = false
            // makes booms all over the screen at random for game over explosion
            squares.forEach(square => {
                setTimeout(() => {
                    square.classList = 'boom'
                }, Math.random() * 750)
                setTimeout(() => {
                    square.classList = ''
                }, 750)
            })
            // make modal appear with game over
            winLossModal.style.display = "block";

        }

        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            if (alienInvaders[i] > (squares.length - (width - 1))) {
                clearInterval(invaderId)
                gameActive = false
                // makes booms all over the screen at random for game over explosion
                squares.forEach(square => {
                    setTimeout(() => {
                        square.classList = 'boom'
                    }, Math.random() * 750)
                    setTimeout(() => {
                        square.classList = ''
                    }, 750)
                })
                // make modal appear with game over
                winLossModal.style.display = "block";
            }
        }
        //  decide a win
        if (alienInvadersTakenDown.length === alienInvaders.length) {
            clearInterval(invaderId)
            gameActive = false
            // make ship fly off on win condition scenario
            squares.forEach((square, index) => {
                if (currentShooterIndex % 20 === index % 20) {
                    setTimeout(() => {
                        square.classList = 'shooter'
                    }, Math.random() * 950)
                    setTimeout(() => {
                        square.classList = ''
                    }, 950)
                }
            })
            // make modal appear with win
            modalTitle.textContent = 'WAY TO GO!';
            modalTitle2.textContent = 'YOU WIN!';
            winLossModal.style.display = "block";
        }
    }
    invaderId = setInterval(moveInvaders, 490)
    // add audio element and remove it for shoot sound
    function makeShotSound() {
        if (gameActive) {
            laserAudioContainer.innerHTML = `<audio id="laser-audio-element">
            <source src="./assets/sounds/laser-gun-sound.wav" type="audio/wav">
            </audio>`
            const laserAudio = document.getElementById("laser-audio-element")
            laserAudio.play()
        }
    }

    // play boom sound effect
    function makeBoomSound() {
        if (gameActive) {
            boomAudioContainer.innerHTML = `<audio id="boom-audio-element">
            <source src="./assets/sounds/boom-sound.mp3" type="audio/mp3">
            </audio>`
            const boomAudio = document.getElementById("boom-audio-element")
            boomAudio.play()
        }
    }

    // shoot at aliens
    function shoot(e, isClick = false) {
        if (gameActive) {
            let laserId
            let currentLaserIndex = currentShooterIndex

            // move laser to the alien from the shooter
            function moveLaser() {
                squares[currentLaserIndex].classList.remove('laser')
                currentLaserIndex -= width
                squares[currentLaserIndex].classList.add('laser')
                if (squares[currentLaserIndex].classList.contains('invader')) {
                    squares[currentLaserIndex].classList.remove('laser')
                    squares[currentLaserIndex].classList.remove('invader')
                    squares[currentLaserIndex].classList.add('boom')
                    makeBoomSound()

                    setTimeout(() => squares[currentLaserIndex].classList.remove('boom'), 250)
                    clearInterval(laserId)

                    const alienTakenDown = alienInvaders.indexOf(currentLaserIndex)
                    alienInvadersTakenDown.push(alienTakenDown)
                    result += 100
                    resultDisplay.textContent = result
                }

                if (currentLaserIndex < width) {
                    clearInterval(laserId)
                    setTimeout(() => squares[currentLaserIndex].classList.remove('laser'), 100)
                }
            }

            if (isClick) {
                laserId = setInterval(moveLaser, 100)
                // play firing sound effect
                makeShotSound();
            } else {
                switch (e.keyCode) {
                    case 32:
                        laserId = setInterval(moveLaser, 100)
                        // play firing sound effect
                        makeShotSound();
                        break
                }
            }
        }
    }
    document.addEventListener('keyup', shoot)

    // add listener event for shoot touchscreen button on click and double click
    fireButton.addEventListener('click', (event) => {
        console.log(event)
        shoot(event, true)
    })
    fireButton.addEventListener('dblclick', (event) => {
        shoot(event, true)
    })

    // add listener event for left and right touchscreen buttons on click
    leftControl.addEventListener('click', (event) => {
        moveShooter(event, true, "left")
    })
    leftControl.addEventListener('dblclick', (event) => {
        moveShooter(event, true, "left")
    })

    rightControl.addEventListener('click', (event) => {
        moveShooter(event, true, "right")
    })
    rightControl.addEventListener('dblclick', (event) => {
        moveShooter(event, true, "right")
    })
})