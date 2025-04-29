import { AllProject } from './All-Project';
import { arr } from './api';
import './style.css'
import Lenis from 'lenis'
import v1 from './Video/1.mp4'
import v2 from './Video/2.mp4'
import v3 from './Video/3.mp4'
import resume from './public/resume.pdf'


function landingPage() {
    const el = document.getElementById('downloadResume');
    el.href = resume;

    const hellos = [
        "Hello",       // English
        "Bonjour",     // French
        "Ciao",        // Italian
        "こんにちは",  // Japanese
        "안녕하세요"     // Korean
    ];

    const helloEl = document.getElementById("hello-text");
    let index = 0;

    function showNextHello() {
        if (index < hellos.length) {
            helloEl.textContent = hellos[index];
            helloEl.style.animation = 'none';
            void helloEl.offsetWidth; // trigger reflow for animation reset
            helloEl.style.animation = 'fadeIn 1s ease';
            index++;
            setTimeout(showNextHello, 300); // show next after 1.2s
        } else {
            setTimeout(() => {
                document.querySelector('.landing_page').classList.add("hide-page");
            }, 100);
        }
    }

    setTimeout(showNextHello, 300); // start after 1s
}

const lenis = new Lenis();
// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Shery js start
gsap.registerPlugin(ScrollTrigger)

function Sheryjs() {

    Shery.mouseFollower({
        skew: false,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 0.8,
    });

    // Shery.imageMasker(".banner", {
    //     mouseFollower: true,
    //     debug: true,
    //     ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    //     duration: 1,
    // });

    Shery.makeMagnet(".right h3", ".menuIcon", {
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

    // let colors = ["#3B82F6", "#22C55E", "#A855F7"]
    // let colors = ["#2563EB", "#059669", "#7C3AED", "#DB2777", "#EA580C", "#0891B2"]

    function makeMagnet(className) {
        Shery.makeMagnet(`.${className}`, {
            ease: "cubic-bezier(0.23, 1, 0.320, 1)",
            duration: 1,
        });
    }

    makeMagnet("Skillelm")
    makeMagnet("contectMe")

    Shery.hoverWithMediaCircle(".headding h1", {
        videos: [v1, v2, v3],
    });

    Shery.textAnimate(".headding h1", {
        //Parameters are optional.
        style: 1,
        y: 30,
        duration: 0.5,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        multiplier: 0.1,
    });
}
// Shery js end


// Project part start
function showProjectsAnimaetion() {
    var tl = gsap.timeline({
        scrollTrigger: {
            duration: 2,
            trigger: "#Project",
            start: "50% 50%",
            // end: "100% 50%",
            scrub: true,
            pin: true
        }
    })

    tl.to("#top", {
        top: "-50%",
    }, "start")
    tl.to("#bottom", {
        bottom: "-50%",
    }, "start")

    tl.to("#top h1", {
        bottom: "-100%",
    }, "start")
    tl.to("#bottom h1", {
        bottom: "85%",
    }, "start")

    tl.from(".center", {
        y: 500,
        opacity: 0
    }, "start")

    tl.from(".center h1", {
        scale: 0.3,
    }, "start")
    tl.from(".center h4", {
        scale: 0.3,
    }, "start")
}
// Project part end 


function showProjects() {

    arr.filter((el) => {
        if (el.feture == true) {
            let create = document.createElement("div")
            create.innerHTML = `
            <div class='h-[7vw] items-center flex border border-gray-400 relative fCard'>
                <div class="flex w-full items-center justify-between px-[2vw]">
                    <h2 class='text-black text-[2.3vw] font-bold font-serif ProjectName'>${el.name}</h2>
                    <h3 class='text-black text-[1vw] lowercase ProjectType'>${el.type}</h3>
                </div>

                <a>
                    <div class="w-[20vw] h-[15vw] border-[0.4vw] scale-0 absolute top-[50%] translate-y-[-50%] hidden">
                    <img src="" alt="" class='w-[100%] h-[100%]  absolute' />
                    </div>
                </a>

                <div class="h-[280px] w-[300px] absolute border-2 scale-0 -top-1/2 duration-500 bg-transparent hoverCard1 z-[999]">
                    <a href="${el.path}" target="_blank">
                        <img src="${el.image}" alt="${el.image}" class="w-full h-[280px] object-cover">
                    </a>
                </div>
            </div>`

            document.querySelector('.ProjectlistParent').append(create)
        }
    })

    var tl2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".skill_Part",
            start: "top 50%",
            end: "top 0%",
            scrub: true,
        }
    })

    tl2.from('.first1', {
        x: -100,
        opacity: 0,
    }, 'first')
    tl2.from('.first2', {
        x: 100,
        opacity: 0,
    }, 'first')

    tl2.from('.two1', {
        x: -100,
        opacity: 0,
    }, 'two')
    tl2.from('.two2', {
        x: 100,
        opacity: 0,
    }, 'two')


    let fCard = document.querySelectorAll(".fCard")
    fCard.forEach((item, idx) => {
        item.addEventListener("mouseover", ((e) => {
            gsap.to(item.querySelector(".hoverCard1"), {
                scale: 1
            })
        }))
        item.addEventListener("mouseleave", ((e) => {
            gsap.to(item.querySelector(".hoverCard1"), {
                scale: 0
            })
        }))
        item.addEventListener("mousemove", ((e) => {
            gsap.to(item.querySelector(".hoverCard1"), {
                x: e.screenX - 200,
            })
        }))

        // item.forEach((itm, id) => {
        //     item.addEventListener("mousemove", ((e) => {
        //         if (idx == id) {

        //         }

        //     }))

        // });

    });

}

landingPage()
Sheryjs()
showProjectsAnimaetion()
showProjects()
AllProject()

