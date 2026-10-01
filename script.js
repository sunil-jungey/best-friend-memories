/* =========================================================
   FOR INDU — FRIENDSHIP MEMORY WEBSITE
   COMPLETE SCRIPT.JS
   ========================================================= */


/* =========================
   SCENES
   ========================= */

const scenes =
    document.querySelectorAll(".scene");


function showScene(id) {

    const currentScene =
        document.querySelector(".scene.active");

    const nextScene =
        document.getElementById(id);


    if (!nextScene) {
        return;
    }


    if (currentScene === nextScene) {
        return;
    }


    if (currentScene) {

        currentScene.classList.add(
            "scene-leaving"
        );


        setTimeout(function () {

            currentScene.classList.remove(
                "active",
                "scene-leaving"
            );

            nextScene.classList.add(
                "active"
            );

        }, 450);

    } else {

        nextScene.classList.add(
            "active"
        );

    }
}


/* =========================
   MUSIC
   ========================= */

const backgroundMusic =
    document.getElementById(
        "backgroundMusic"
    );

const musicButton =
    document.getElementById(
        "musicButton"
    );

let musicPlaying = false;


/* =========================
   OPENING
   ========================= */

document
    .getElementById("startButton")
    .addEventListener(
        "click",
        function () {

            showScene(
                "distanceScene"
            );


            backgroundMusic.volume =
                0.30;


            backgroundMusic
                .play()
                .then(function () {

                    musicPlaying = true;

                    musicButton.textContent =
                        "🔊";

                })
                .catch(function () {

                    musicPlaying = false;

                    musicButton.textContent =
                        "🎵";

                });

        }
    );


/* =========================
   STORY FLOW
   ========================= */

document
    .getElementById("distanceNext")
    .addEventListener(
        "click",
        function () {

            showScene(
                "thankYouScene"
            );

        }
    );


document
    .getElementById("birthdayButton")
    .addEventListener(
        "click",
        function () {

            showScene(
                "birthdayIntro"
            );

        }
    );


document
    .getElementById(
        "birthdayPhotoButton"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "birthdayPhotoOne"
            );

        }
    );


document
    .getElementById(
        "birthdayPhotoNext"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "birthdayPhotoTwo"
            );

        }
    );


document
    .getElementById(
        "skyIntroButton"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "skyIntro"
            );

        }
    );


/* =========================
   SKY TOWER FLY-IN
   ========================= */

document
    .getElementById(
        "skyFlyButton"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "skyFlyScene"
            );


            const skyImage =
                document.querySelector(
                    ".sky-fly-image"
                );


            const skyCaption =
                document.querySelector(
                    ".sky-fly-caption"
                );


            skyImage.classList.remove(
                "fly"
            );

            skyCaption.classList.remove(
                "show"
            );


            void skyImage.offsetWidth;


            skyImage.classList.add(
                "fly"
            );


            setTimeout(function () {

                skyCaption.classList.add(
                    "show"
                );

            }, 2100);

        }
    );


/* =========================
   SKY SLIDESHOW DATA
   ========================= */

const skySlides = [

    {
        image:
            "IMG_0539.jpeg",

        text:
            "Another little piece of that day ✨"
    },

    {
        image:
            "IMG_0540.jpeg",

        text:
            "Some places become special because of who was there."
    },

    {
        image:
            "IMG_0541.jpeg",

        text:
            "A simple photo, but a memory worth keeping. 🤍"
    }

];


let currentSkySlide = 0;


/* =========================
   SKY FLY → SLIDESHOW
   ========================= */

document
    .getElementById(
        "skyNextButton"
    )
    .addEventListener(
        "click",
        function () {

            const skyImage =
                document.querySelector(
                    ".sky-fly-image"
                );


            const skyCaption =
                document.querySelector(
                    ".sky-fly-caption"
                );


            skyCaption.classList.remove(
                "show"
            );


            skyImage.style.transition =
                "transform 0.8s ease, opacity 0.8s ease";


            skyImage.style.transform =
                "scale(1.18)";


            skyImage.style.opacity =
                "0";


            setTimeout(function () {

                currentSkySlide = 0;


                const slideshowImage =
                    document.getElementById(
                        "slideshowImage"
                    );


                const slideshowText =
                    document.getElementById(
                        "slideshowText"
                    );


                slideshowImage.src =
                    skySlides[0].image;


                slideshowText.textContent =
                    skySlides[0].text;


                showScene(
                    "nextScene"
                );

            }, 650);

        }
    );


/* =========================
   SKY SLIDESHOW
   ========================= */

document
    .getElementById(
        "slideshowNext"
    )
    .addEventListener(
        "click",
        function () {

            currentSkySlide++;


            if (
                currentSkySlide <
                skySlides.length
            ) {

                const image =
                    document.getElementById(
                        "slideshowImage"
                    );


                const text =
                    document.getElementById(
                        "slideshowText"
                    );


                image.classList.remove(
                    "change"
                );


                void image.offsetWidth;


                image.src =
                    skySlides[
                        currentSkySlide
                    ].image;


                text.textContent =
                    skySlides[
                        currentSkySlide
                    ].text;


                image.classList.add(
                    "change"
                );

            } else {

                showScene(
                    "afterSkyScene"
                );

            }

        }
    );


/* =========================
   OTHER MEMORIES
   ========================= */

document
    .getElementById(
        "afterSkyButton"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "groupPhotoOne"
            );

        }
    );


document
    .getElementById(
        "groupNextOne"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "groupPhotoTwo"
            );

        }
    );


document
    .getElementById(
        "groupNextTwo"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "scenicScene"
            );

        }
    );


document
    .getElementById(
        "scenicNext"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "funMemory"
            );

        }
    );


document
    .getElementById(
        "funNext"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "smallMemory"
            );

        }
    );


/* =========================
   LETTER
   ========================= */

document
    .getElementById(
        "letterIntroButton"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "letterIntro"
            );

        }
    );


document
    .getElementById(
        "openLetterButton"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "letterScene"
            );

        }
    );


document
    .getElementById(
        "finalButton"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "finalScene"
            );

        }
    );


/* =========================
   FINAL QUESTION
   ========================= */

document
    .getElementById(
        "questionButton"
    )
    .addEventListener(
        "click",
        function () {

            showScene(
                "questionScene"
            );

        }
    );


const yesButton =
    document.getElementById(
        "yesButton"
    );

const noButton =
    document.getElementById(
        "noButton"
    );


yesButton.addEventListener(
    "click",
    function () {

        showScene(
            "yesScene"
        );

    }
);


/* =========================
   MOVING NO BUTTON
   ========================= */

function moveNoButton() {

    const x =
        Math.random() * 220 - 110;

    const y =
        Math.random() * 140 - 70;


    noButton.style.transform =
        `translate(${x}px, ${y}px)`;
}


noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


noButton.addEventListener(
    "touchstart",
    function (event) {

        event.preventDefault();

        moveNoButton();

    }
);


noButton.addEventListener(
    "click",
    moveNoButton
);


/* =========================
   MUSIC CONTROL
   ========================= */

musicButton.addEventListener(
    "click",
    function () {

        if (musicPlaying) {

            backgroundMusic.pause();

            musicPlaying = false;

            musicButton.textContent =
                "🔇";

        } else {

            backgroundMusic
                .play()
                .then(function () {

                    musicPlaying = true;

                    musicButton.textContent =
                        "🔊";

                });

        }

    }
);


/* =========================================================
   RANDOM HEARTS
   ❤️

   IMPORTANT:
   These hearts start at random positions around
   the WHOLE SCREEN.

   They only gently move around their own area.
   They DO NOT travel from bottom to top.
   ========================================================= */

const heartSymbols = [
    "❤️",
    "❤️",
    "❤️",
];


const HEART_COUNT = 32;


function randomBetween(
    minimum,
    maximum
) {

    return (
        Math.random() *
        (maximum - minimum) +
        minimum
    );

}


function createHeart() {

    const heart =
        document.createElement(
            "span"
        );


    heart.className =
        "random-heart";


    heart.textContent =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];


    /*
       Random starting position
       ANYWHERE on the screen
    */

    heart.style.left =
        randomBetween(
            2,
            96
        ) + "vw";


    heart.style.top =
        randomBetween(
            4,
            94
        ) + "vh";


    /*
       Random sizes
    */

    heart.style.fontSize =
        randomBetween(
            10,
            25
        ) + "px";


    /*
       Slight opacity differences
    */

    heart.style.opacity =
        randomBetween(
            0.30,
            0.72
        );


    /*
       Slow independent movement
    */

    heart.style.setProperty(
        "--heart-duration",
        randomBetween(
            6,
            13
        ) + "s"
    );


    /*
       Small movement around its
       CURRENT position.

       No heart travels across
       the entire screen.
    */

    heart.style.setProperty(
        "--x1",
        randomBetween(
            -15,
            15
        ) + "px"
    );


    heart.style.setProperty(
        "--y1",
        randomBetween(
            -15,
            15
        ) + "px"
    );


    heart.style.setProperty(
        "--x2",
        randomBetween(
            -35,
            35
        ) + "px"
    );


    heart.style.setProperty(
        "--y2",
        randomBetween(
            -35,
            35
        ) + "px"
    );


    heart.style.setProperty(
        "--x3",
        randomBetween(
            -45,
            45
        ) + "px"
    );


    heart.style.setProperty(
        "--y3",
        randomBetween(
            -40,
            40
        ) + "px"
    );


    heart.style.setProperty(
        "--x4",
        randomBetween(
            -25,
            25
        ) + "px"
    );


    heart.style.setProperty(
        "--y4",
        randomBetween(
            -30,
            30
        ) + "px"
    );


    /*
       Different animation starting
       points so they don't move together
    */

    heart.style.animationDelay =
        randomBetween(
            -12,
            0
        ) + "s";


    document.body.appendChild(
        heart
    );

}


/* Fill the whole screen */

for (
    let i = 0;
    i < HEART_COUNT;
    i++
) {

    createHeart();

}