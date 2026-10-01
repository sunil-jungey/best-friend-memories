const openButton = document.getElementById("openButton");

openButton.addEventListener("click", function () {

    const opening = document.querySelector(".opening");

    // Fade the opening screen away
    opening.style.transition = "all 0.8s ease";
    opening.style.opacity = "0";
    opening.style.transform = "translateY(-25px)";

    setTimeout(function () {

        opening.innerHTML = `
            <div class="friendship-screen">

                <div class="distance-icon">🌙✨</div>

                <p class="small-text">
                    SOME PEOPLE STAY CLOSE
                </p>

                <h1>
                    Even From Far Away
                </h1>

                <p class="message">
                    Distance changes a lot of things...
                    <br><br>

                    But it doesn't change how grateful
                    I am for the memories we've made.
                    🫶
                </p>

                <button id="continueButton">
                    Keep going ✨
                </button>

            </div>
        `;

        opening.style.opacity = "1";
        opening.style.transform = "translateY(0)";

        document
            .getElementById("continueButton")
            .addEventListener("click", showThankYou);

    }, 800);
});


function showThankYou() {

    const opening = document.querySelector(".opening");

    opening.style.opacity = "0";
    opening.style.transform = "translateY(-25px)";

    setTimeout(function () {

        opening.innerHTML = `
            <div class="thank-you-screen">

                <div class="distance-icon">
                    🌼🫶🌼
                </div>

                <p class="small-text">
                    SOMETHING I SHOULD SAY MORE OFTEN
                </p>

                <h1>
                    Thank You.
                </h1>

                <p class="message">
                    Thank you for being there.
                    <br><br>

                    Thank you for the laughs,
                    the conversations,
                    the little moments,
                    and the memories.
                    <br><br>

                    And especially...
                    <br><br>

                    thank you for making one particular
                    day unforgettable. 🎂
                </p>

                <button id="birthdayButton">
                    Which day? 👀
                </button>

            </div>
        `;

        opening.style.opacity = "1";
        opening.style.transform = "translateY(0)";

    }, 700);
}