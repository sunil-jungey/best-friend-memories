const scenes = document.querySelectorAll(".scene");

const backgroundMusic =
    document.getElementById("backgroundMusic");

const musicButton =
    document.getElementById("musicButton");

let musicPlaying = false;

function showScene(id) {
    scenes.forEach(scene => {
        scene.classList.remove("active");
    });

    const nextScene = document.getElementById(id);

    nextScene.classList.add("active");
}


/* OPENING */

document
    .getElementById("startButton")
    .addEventListener("click", function () {

        showScene("distanceScene");

        backgroundMusic.volume = 0.3;

        backgroundMusic.play()
            .then(function () {

                musicPlaying = true;
                musicButton.textContent = "🔊";

            })
            .catch(function () {

                musicPlaying = false;
                musicButton.textContent = "🎵";

            });

    });


/* DISTANCE */

document
    .getElementById("distanceNext")
    .addEventListener("click", function () {

        showScene("thankYouScene");

    });


/* THANK YOU */

document
    .getElementById("birthdayButton")
    .addEventListener("click", function () {

        showScene("birthdayIntro");

    });


/* BIRTHDAY INTRO */

document
    .getElementById("birthdayPhotoButton")
    .addEventListener("click", function () {

        showScene("birthdayPhotoOne");

    });


/* BIRTHDAY PHOTO 1 */

document
    .getElementById("birthdayPhotoNext")
    .addEventListener("click", function () {

        showScene("birthdayPhotoTwo");

    });


/* BIRTHDAY PHOTO 2 */

document
    .getElementById("skyIntroButton")
    .addEventListener("click", function () {

        showScene("skyIntro");

    });


/* SKY TOWER FLY-IN */

document
    .getElementById("skyFlyButton")
    .addEventListener("click", function () {

        showScene("skyFlyScene");

        const skyImage =
            document.querySelector(".sky-fly-image");

        const skyCaption =
            document.querySelector(".sky-fly-caption");


        /* Reset animation first */

        skyImage.classList.remove("fly");
        skyCaption.classList.remove("show");


        /*
        Force browser to reset the animation.
        This allows it to replay if needed.
        */

        void skyImage.offsetWidth;


        /* Start flying photo */

        skyImage.classList.add("fly");


        /* Show caption after photo arrives */

        setTimeout(function () {

            skyCaption.classList.add("show");

        }, 2100);

    });


/* AFTER SKY TOWER */

document
    .getElementById("skyNextButton")
    .addEventListener("click", function () {

        showScene("nextScene");

    });


const skySlides = [

    {
        image: "IMG_0539.jpeg",
        text: "Another little piece of that day ✨"
    },

    {
        image: "IMG_0540.jpeg",
        text: "Some places become special because of who was there."
    },

    {
        image: "IMG_0541.jpeg",
        text: "A simple photo, but a memory worth keeping. 🤍"
    }

];


let currentSkySlide = 0;


document
    .getElementById("slideshowNext")
    .addEventListener("click", function () {

        currentSkySlide++;

        if (currentSkySlide < skySlides.length) {

            const image =
                document.getElementById("slideshowImage");

            const text =
                document.getElementById("slideshowText");

            image.classList.remove("change");

            void image.offsetWidth;

            image.src =
                skySlides[currentSkySlide].image;

            text.textContent =
                skySlides[currentSkySlide].text;

            image.classList.add("change");

        } else {

            showScene("afterSkyScene");

        }

    });


document
    .getElementById("afterSkyButton")
    .addEventListener("click", function () {

        showScene("groupPhotoOne");

    });


document
    .getElementById("groupNextOne")
    .addEventListener("click", function () {

        showScene("groupPhotoTwo");

    });


document
    .getElementById("groupNextTwo")
    .addEventListener("click", function () {

        showScene("scenicScene");

    });


document
    .getElementById("scenicNext")
    .addEventListener("click", function () {

        showScene("funMemory");

    });


document
    .getElementById("funNext")
    .addEventListener("click", function () {

        showScene("smallMemory");

    });


document
    .getElementById("letterIntroButton")
    .addEventListener("click", function () {

        showScene("letterIntro");

    });


document
    .getElementById("openLetterButton")
    .addEventListener("click", function () {

        showScene("letterScene");

    });


document
    .getElementById("finalButton")
    .addEventListener("click", function () {

        showScene("finalScene");

    });
    musicButton.addEventListener("click", function () {

    if (musicPlaying) {

        backgroundMusic.pause();

        musicPlaying = false;

        musicButton.textContent = "🔇";

    } else {

        backgroundMusic.play();

        musicPlaying = true;

        musicButton.textContent = "🔊";

    }

});
/* =========================
   FLOATING FRIENDSHIP PARTICLES
   ========================= */

const particleContainer =
    document.getElementById("particles");

const particleSymbols = [
    "✨",
    "💛",
    "🤍",
    "🌼",
    "⭐"
];


function createParticle() {

    const particle =
        document.createElement("span");

    particle.classList.add("particle");

    particle.textContent =
        particleSymbols[
            Math.floor(
                Math.random() * particleSymbols.length
            )
        ];

    particle.style.left =
        Math.random() * 100 + "vw";

    particle.style.animationDuration =
        (5 + Math.random() * 4) + "s";

    particle.style.fontSize =
        (16 + Math.random() * 16) + "px";

    particleContainer.appendChild(particle);


    setTimeout(function () {

        particle.remove();

    }, 9000);
}


setInterval(createParticle, 1100);


/* =========================
   FINAL CONFETTI
   ========================= */

function launchConfetti() {

    const symbols = [
        "✨",
        "💛",
        "🤍",
        "🌼",
        "⭐",
        "🎉"
    ];

    for (let i = 0; i < 45; i++) {

        const piece =
            document.createElement("span");

        piece.classList.add("confetti");

        piece.textContent =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        piece.style.left =
            Math.random() * 100 + "vw";

        piece.style.animationDelay =
            Math.random() * 1.5 + "s";

        piece.style.animationDuration =
            (2.5 + Math.random() * 2) + "s";

        document.body.appendChild(piece);


        setTimeout(function () {

            piece.remove();

        }, 5000);
    }
}