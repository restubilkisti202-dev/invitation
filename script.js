/* ==========================================================
   SLIDE SYSTEM
========================================================== */

let currentSlide = 0;

const totalSlides = 5;

let transitionRunning = false;


/* ==========================================================
   ELEMENT
========================================================== */

const flowerTransition =
    document.getElementById(
        "flowerTransition"
    );


/* ==========================================================
   FLOWER COLORS
========================================================== */

const flowerColors = [

    {
        flower: "#e994aa",
        center: "#f3c85b"
    },

    {
        flower: "#f1c45b",
        center: "#d88954"
    },

    {
        flower: "#9bb3df",
        center: "#f0c45b"
    },

    {
        flower: "#e5a06d",
        center: "#f0c45b"
    },

    {
        flower: "#b497d1",
        center: "#f0c45b"
    },

    {
        flower: "#edb5c2",
        center: "#e6b94d"
    }

];


/* ==========================================================
   CREATE FLOWERS
========================================================== */

function createFlowerTransition() {

    flowerTransition.innerHTML = "";


    /*
        Jumlah bunga.

        Semakin banyak:
        semakin penuh layar.
    */

    const flowerCount = 90;


    for (
        let i = 0;
        i < flowerCount;
        i++
    ) {

        const flower =
            document.createElement("div");


        flower.classList.add(
            "transition-flower"
        );


        /*
            warna
        */

        const color =
            flowerColors[
                Math.floor(
                    Math.random() *
                    flowerColors.length
                )
            ];


        flower.style.setProperty(
            "--flower",
            color.flower
        );


        flower.style.setProperty(
            "--center",
            color.center
        );


        /*
            posisi

            sengaja dibuat memenuhi
            seluruh layar
        */

        flower.style.setProperty(
            "--x",
            `${Math.random() * 100}%`
        );


        flower.style.setProperty(
            "--y",
            `${Math.random() * 100}%`
        );


        /*
            ukuran
        */

        const size =
            25 +
            Math.random() * 55;


        flower.style.setProperty(
            "--size",
            `${size}px`
        );


        /*
            delay

            membuat bunga tidak
            muncul bersamaan
        */

        flower.style.setProperty(
            "--delay",
            `${Math.random() * .35}s`
        );


        flowerTransition.appendChild(
            flower
        );

    }

}


/* ==========================================================
   NEXT SLIDE
========================================================== */

function goNext() {

    if (transitionRunning) {
        return;
    }


    if (
        currentSlide >=
        totalSlides - 1
    ) {

        return;
    }


    changeSlide(
        currentSlide + 1
    );

}


/* ==========================================================
   CHANGE SLIDE
========================================================== */

function changeSlide(nextSlide) {

    if (transitionRunning) {
        return;
    }


    transitionRunning = true;


    const current =
        document.getElementById(
            `slide${currentSlide}`
        );


    const next =
        document.getElementById(
            `slide${nextSlide}`
        );


    /*
        buat bunga
    */

    createFlowerTransition();


    /*
        tampilkan layer
    */

    flowerTransition.classList.add(
        "active"
    );


    /*
        ketika bunga mulai memenuhi layar,
        slide diganti
    */

    setTimeout(
        () => {

            current.classList.remove(
                "active"
            );


            next.classList.add(
                "active"
            );


            currentSlide =
                nextSlide;

        },
        430
    );


    /*
        bunga selesai
    */

    setTimeout(
        () => {

            flowerTransition.classList.remove(
                "active"
            );


            transitionRunning = false;

        },
        1150
    );

}


/* ==========================================================
   RUN AWAY BUTTON
========================================================== */

function runAway(button) {

    const maxX = 110;

    const maxY = 80;


    const x =
        Math.random() *
        (maxX * 2) -
        maxX;


    const y =
        Math.random() *
        (maxY * 2) -
        maxY;


    button.style.transform =
        `translate(${x}px, ${y}px)`;

}


/* ==========================================================
   DATE NO
========================================================== */

const dateNo =
    document.getElementById(
        "dateNo"
    );


dateNo.addEventListener(
    "mouseenter",
    () => {

        runAway(dateNo);

    }
);


dateNo.addEventListener(
    "click",
    () => {

        runAway(dateNo);

    }
);


dateNo.addEventListener(
    "touchstart",
    (event) => {

        event.preventDefault();

        runAway(dateNo);

    }
);


/* ==========================================================
   STAYCATION NO
========================================================== */

const stayNo =
    document.getElementById(
        "stayNo"
    );


stayNo.addEventListener(
    "mouseenter",
    () => {

        runAway(stayNo);

    }
);


stayNo.addEventListener(
    "click",
    () => {

        runAway(stayNo);

    }
);


stayNo.addEventListener(
    "touchstart",
    (event) => {

        event.preventDefault();

        runAway(stayNo);

    }
);


/* ==========================================================
   MUSIC
========================================================== */

const music =
    document.getElementById(
        "music"
    );


const musicButton =
    document.getElementById(
        "musicButton"
    );


let musicPlaying = false;


musicButton.addEventListener(
    "click",
    () => {

        if (!musicPlaying) {

            music
                .play()
                .then(() => {

                    musicPlaying = true;

                    musicButton.textContent =
                        "♫";

                })
                .catch(() => {

                    alert(
                        "Tambahkan file music.mp3 ke folder assets."
                    );

                });

        } else {

            music.pause();

            musicPlaying = false;

            musicButton.textContent =
                "♪";

        }

    }
);


/* ==========================================================
   PRELOAD FIRST TRANSITION
========================================================== */

createFlowerTransition();