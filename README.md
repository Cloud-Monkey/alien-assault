![alien assaulter img](/assets/read-me-images/ALIEN-ASSAULT-19-08-2024.png)

![alien assaulter img](/assets/images/alien1.png) ![alien assaulter img](/assets/images/alien1.png) ![alien assaulter img](/assets/images/alien1.png) ![alien assaulter img](/assets/images/alien1.png) ![alien assaulter img](/assets/images/alien1.png) ![alien assaulter img](/assets/images/alien1.png) ![alien assaulter img](/assets/images/alien1.png) ![alien assaulter img](/assets/images/alien1.png) ![alien assaulter img](/assets/images/alien1.png)

# Project overview

Alien Assault is a retro-style alien invader video game and a nostalgic nod to classic titles like Space Invaders. Featuring iconic 8-bit music and sound effects, it promises an immersive throwback experience. Simple yet engaging, it brings back the thrill of old-school gaming with a modern twist. The game includes an eye-catching title screen, a straightforward play button, and a dynamic game screen where the action unfolds.

### Live site
https://cloud-monkey.github.io/alien-assault/index.html

![am I responsive home screen img](/assets/read-me-images/project-overview-image.png)

![am I responsive home screen img](/assets/read-me-images/project-overview-image2.png)

### How To Play

- Click "Play" button to enter game screen, the game will then start.

 - Use the left and right arrow keys on your keyboard to move your Starship.
  
 - Press the Space bar key to shoot the laser and destroy Alien Assaulters.

 - Try to destroy all the Alien Assaulters before they reach your Starship.



# List of features

### Home screen

![features diagram home](/assets/read-me-images/features-home-img.png)

#### Animated Pixel Letters Game title GIF (1)
Retro style game title with 5 second "Bounce" animation.

#### Animated Alien GIF (2)
Retro theme title hero with simple animation loop.

#### "Play" call to action button (3)
Clearly visible and appropiately styled play button.

#### Audio controls (Play/Pause Mute and volume slider) (4)
Controls for title music.

#### Credits readout in pixel font (5)
Pixel type font used to enhance overall look inspiration taking from original Space Invaders.

#### 8bit title music and sound fx (6)
See citation section for full details.

### Game screen

![features diagram game](/assets/read-me-images/features-game-img.png)

#### Alien Assaulters GIF (Explosion effect/sound when hit, attack movement sequence) (1)
Retro theme "Alien" with simple animation, png file for explosion and mp3 for sound fx

#### StarShip (Laser shot graphic/sound, ability to move left and right) (2)
Retro theme "Starship" png, laser png and mp3 for sound fx

#### Win Modal and StarShip hyperspace animation on win (Destroy all Alian Assaulters) (3)
Pop up "win" noification modal when all "aliens" are destroyed with "hyperspace" effect on "starship".

![win modal img](/assets/read-me-images/win-modal-img.png)

#### Loss Modal and screen explosion animation on loss (Get hit by Alien or Aliens reach the bottom of the game screen) (4)
Pop up "loss" noification modal when "aliens" either reach the bottom of the game screen or collide with the "starship" causing "explosions" animation across the game screen.

![loss modal img](/assets/read-me-images/loss-modal-img.png)

#### Touch Screen Controls (5)
Hidden overlay touchscreen controls for "left", "right", and "fire-laser" only show on mobile devices where no keyboard is present.

![touch screen controls img](/assets/read-me-images/touchscreen-controls.png)

#### Audio controls (Play/Pause Mute and volume slider) (6)
Same control feature for audio as home page

#### Working score readout in pixel font (7)
Pixel type font used to enhance overall look inspiration taking from original Space Invaders.

#### Credits readout in pixel font (8)
Same "credits" feature as home page.

#### 8bit game screen music and sound fx (9)
See citation section for full details


# UX/UI

### Audience Properties:
- Key Demographics: Ages 30-50, retro gamers, tech enthusiasts, early adopters.
- Key Psychographics: Values nostalgia, enjoys simple yet challenging gameplay, detail-focused.
- Pain Points: Lack of authentic retro gaming experiences, poor-quality remakes.
- Buying Process: Seeks recommendations from retro gaming communities, influenced by gameplay footage, opts for instant downloads.
- Brands & Tone: Drawn to brands like Atari, Nintendo, Midway and appreciates a straightforward yet enthusiastic tone.

### Job
The main job of this website is to convert visitors into players. It needs to showcase the game’s nostalgia and authenticity, enticing users to engage, download, and play.

### Messaging and tone

Tone Characteristics:
Humorous, Informative: Make the gaming experience fun and clarify how it brings nostalgia.

Passionate, Upbeat: Show excitement about reviving a beloved classic.

Example Messaging:
“Relive the arcade magic!”
“Blast from the past? More like blast off!”
“Your favorite 8-bit alien assault awaits.”

### Design direction
Retro aesthetics: Embrace a pixelated 8-bit visual style.
Bold, vibrant colors: Catching eyes, invoking classic game vibes.
Intuitive interface: Easy access to play and navigate.
Nostalgic elements: Include familiar arcade icons, sprites, and fonts.

### Website Structure
Hero Section: Appealing title screen, a play button, and an introduction.
Game Scree: Play area with retro graphics and sound, win and loss scenarios with modals and effects.
Benefits: Highlights of the nostalgic and authentic experience.
CTAs: Buttons to start playing immediately and return home once won or lost.
Touch Screen controls for mobile devices.

### Wireframes

![ui image 1](/assets/read-me-images/UI-img1.png)

![ui image 2](/assets/read-me-images/UI-img2.png)

- Initial designs produced using https://app.scene.io/ 
- Design rolled back to a simple two page design during the iterative process.


# Testing

Website tested for responsivity of all pages and components by sight and manual testing, for three screen sizes Mobile, Laptop, and Desktop.

One console error due to async nature of the laser sound effect function sometimes returns an uncaught promise, can be fixed by writing an Async function, due to the current project scope this is raised as a backlog ticket for the next iteration.

## HTML Validation
HTML run through W3 validator. Some warnings and changes required in current deployed HTML, bug tickets raised for character format attribute removal in script tag element and button child element of a link element.

![HTML error img 1](/assets/read-me-images/HTML-errors1.png)
![HTML error img 1](/assets/read-me-images/HTML-errors2.png)

Current build works with no errors in browser and mobile views.
Bugs prioritsed to next iteration due to hard stop deadline.

## CSS Validation
All CSS run through Jigsaw validator no issues.

![css valid img1](/assets/read-me-images/css-valid1.png) ![css valid img2](/assets/read-me-images/css-valid2.png)


## Lighthouse
All pages run through Lighthouse to check scores. 
 - Performance issues adressed with removal of Bootstrap button component. 
 - Accessibility contrast issues and Aria labels addressed to achieve scores. 
 - SEO optimised with Meta Head description and key words to achieve scores. 
 - Further work to convert GIF formats to improve performance score added to backlog for next iteration.
 - Further work to use downloaded SVG formats for font awesome icons to improve performance scores added to backlog for next iteration

![lighthouse scores img1](/assets/read-me-images/lighthouse-scores1.png)
![lighthouse scores img2](/assets/read-me-images/lighthouse-scores2.png)


## Deployment

Deployment to Github pages. Quick start guide screenshot below.

![deployment guide screenshot img](/assets/read-me-images/deployment-img.png) 

https://cloud-monkey.github.io/alien-assault/index.html

## Citation of ALL sources(code, images, text, tutorials and UX/UI tools)

Learn Javascript by building 7 small games tutorial https://youtu.be/lhNdUVh3qCc?si=KW2_5c5o5-oXu9D2

Space game pixel images free for commercial use https://grafxkid.itch.io/mini-pixel-pack-3

Space background images free https://screamingbrainstudios.itch.io/seamless-space-backgrounds

Title GIF Font generator https://www.textstudio.com/

Title screen chill music by Lesiakower Pixabay https://pixabay.com/users/lesiakower-25701529/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=178551 

Custom audio player controls https://www.geeksforgeeks.org/custom-video-player-using-html-css-and-javascript/

Alien gif for title screen https://id.picmix.com/stamp/alien-ufo-2626116

Favicon generated using https://favicon.io/

Laser sound effect https://mixkit.co/free-sound-effects/space-shooter/

Explosion sound effect from Pixabay https://pixabay.com/?utm_source=link-attribution&utm_medium=referral&utm_campaign=music&utm_content=43814

Deployment to Github pages guide https://docs.github.com/en/pages/quickstart

Modal base code https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal

Wireframes made using https://app.scene.io

## Future features

Future planned features added to backlog for next iteration.

#### Larger/animated ship sprite - backlog
#### Hi score display and scoreboard using local storage - backlog
#### Alien enemies shoot back at starship and can cause loss scenario - backlog
#### More Stages with faster alien speeds to increase difficulty - backlog
#### Lives display and increment on loss conditions - backlog
#### Coin in button for Coin-op type interface - backlog
#### Credits display increment/decrement - backlog
#### How to play/comtrols information section or display - backlog
#### Custom Assests (Pixel art animations and 8bit music and sfx composition) - backlog
#### Pause/restart gameplay

## Known Bugs

Slight stretch on Ipad type devices - "Bug" ticket raised.

Cannot move and shoot at the same time - "Wont have" ticket raised.

Console error(uncaught promise due to Async nature of "laser" sound play) - "Bug" ticket raised.
