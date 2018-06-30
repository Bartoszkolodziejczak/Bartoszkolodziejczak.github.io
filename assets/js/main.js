
window.onload = function () {

    //Particles initialize

    particlesJS("particles-js", {
        "particles": {
            "number": {
                "value": 40,
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ['#F02651', '#20204E', '#DBEDF3']
            },
            "shape": {
                "type": "image",
                "stroke": {
                    "width": 5,
                    "color": '#222222'
                },
                "polygon": {
                    "nb_sides": 5
                },
                "image": {
                    "src": "assets/img/close-tag.png",
                    "width": 50,
                    "height": 50
                }
            },
            "opacity": {
                "value": 0.5,
                "random": false,
                "anim": {
                    "enable": false,
                    "speed": 2,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 10,
                "random": true,
                "anim": {
                    "enable": false,
                    "speed": 50,
                    "size_min": 0.1,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 100,
                "color": "#000",
                "opacity": 0.5,
                "width": 2
            },
            "move": {
                "enable": true,
                "speed": 2,
                "direction": "none",
                "random": false,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "grab"
                },
                "onclick": {
                    "enable": true,
                    "mode": "push"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 150,
                    "line_linked": {
                        "opacity": 1
                    }
                },
                "bubble": {
                    "distance": 400,
                    "size": 20,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                },
                "repulse": {
                    "distance": 200,
                    "duration": 0.4
                },
                "push": {
                    "particles_nb": 4
                },
                "remove": {
                    "particles_nb": 2
                }
            }
        },
        "retina_detect": true
    });

    // requestAnimationFrame();



    // Particles.init({
    //     selector: '.background',
    //     color: ['#F02651', '#20204E', '#DBEDF3'],
    //     connectParticles: true,
    //     sizeVariations: 10,
    //     maxParticles: 150,
    //     speed: 0.5,
    //     particles: {
    //         shape: {
    //             type: "star",
    //         },
    //     },
    //     responsive: [
    //         {
    //             breakpoint:
    //                 768
    //             ,
    //             options: {
    //                 maxParticles:
    //                     200
    //                 ,
    //                 color:
    //                     '#48F2E3'
    //                 ,
    //                 connectParticles:
    //                     false
    //             }
    //         }, {
    //             breakpoint:
    //                 425
    //             ,
    //             options: {
    //                 maxParticles:
    //                     100
    //                 ,
    //                 connectParticles:
    //                     true
    //             }
    //         }, {
    //             breakpoint:
    //                 320
    //             ,
    //             options: {
    //                 maxParticles:
    //                     0

    //             }
    //         }
    //     ]
    // });




    //AOS initialize
    AOS.init();


    //Paralax
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
};



// set up text to print, each item in array is new line
var aText = new Array(
    "Front-end developer");
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById("typedtext");

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout("typewriter()", 2000);

        }
    } else {
        setTimeout("typewriter()", iSpeed);
    }
}


typewriter();




