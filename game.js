document.addEventListener("DOMContentLoaded", () => {
    const squares = document.querySelectorAll('.grid div')
    const resultDisplay = document.querySelector('#result')
    const audio = document.getElementById("title-music");
    const playpause = document.getElementById("play-pause");
    const laserAudioContainer = document.getElementById("laser-sound");
    const boomAudioContainer = document.getElementById("boom-sound");
    let width = 20
    let currentShooterIndex = 390
    let currentInvaderIndex = 0
    let alienInvadersTakenDown = []
    let result = 0
    let direction = 1
    let invaderId

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
    function moveShooter(e) {
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
            resultDisplay.textContent = 'Game Over';
            squares[currentShooterIndex].classList.add('boom')
            makeBoomSound()
            clearInterval(invaderId)
        }

        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            if (alienInvaders[i] > (squares.length - (width - 1))) {
                resultDisplay.textContent = 'Game Over';
                clearInterval(invaderId)
            }
        }
        //  decide a win
        if (alienInvadersTakenDown.length === alienInvaders.length) {
            resultDisplay.textContent = 'You Win!'
            clearInterval(invaderId)
        }
    }
    invaderId = setInterval(moveInvaders, 500)
    // add audio element and remove it for shoot sound
    function makeShotSound() {
        laserAudioContainer.innerHTML = `<audio id="laser-audio-element">
        <source src="/assets/sounds/laser-gun-sound.wav" type="audio/wav">
    </audio>`
        const laserAudio = document.getElementById("laser-audio-element")
        laserAudio.play()
    }

    // play boom sound effect
    function makeBoomSound() {
        boomAudioContainer.innerHTML = `<audio id="boom-audio-element">
        <source src="/assets/sounds/boom-sound.mp3" type="audio/mp3">
        </audio>`
        const boomAudio = document.getElementById("boom-audio-element")
        boomAudio.play()
    }

    // shoot at aliens
    function shoot(e) {
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

        switch (e.keyCode) {
            case 32:
                laserId = setInterval(moveLaser, 100)
                // play firing sound effect
                makeShotSound();
                break
        }
    }

    document.addEventListener('keyup', shoot)
})