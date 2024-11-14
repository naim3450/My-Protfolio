import { AllProject } from './All-Project';
import './style.css'
import Lenis from 'lenis'

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

    Shery.imageMasker(".banner", {
        mouseFollower: true,
        debug: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
    });

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
        videos: ["./Video/1.mp4", "./Video/2.mp4", "./Video/3.mp4",],
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


let Deatails = [
    {
        id: 1,
        name: `LAZAREV`,
        type: `Product Design Agency`,
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgKBe-A6wbawubAVr3nLA9BB0MuX75smkSQ&s`,
        path: `https://naim3450.github.io/LAZAREV/`
    },
    {
        id: 2,
        name: `Sundown-Studio`,
        type: `Weather application`,
        // image: sundown,
        // path: `https://naim3450.github.io/Sundown/`
    },
    {
        id: 3,
        name: `Weather`,
        type: `Weather application`,
        // image: weather,
        // path: `https://naim3450.github.io/Weather_API/`
    },
    {
        id: 4,
        name: `Tack Store`,
        type: `e-commerce`,
        // image: tackStore,
        // path: `https://tack-store.vercel.app/`
    },
]


function showProjects() {

    let firstTemPlet = document.getElementById('firstTemPlet')

    Deatails.map((el, idx) => {
        let clonettempelet = document.importNode(firstTemPlet.content, true)
        clonettempelet.querySelector('.ProjectName').innerHTML = el.name
        clonettempelet.querySelector('.ProjectType').innerHTML = el.type

        document.querySelector('.ProjectlistParent').appendChild(clonettempelet)
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

    AllProject()

}



Sheryjs()
showProjectsAnimaetion()
showProjects()

