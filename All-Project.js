import Gormet_Gril from './Image/Gormet_Gril.jpg'
import sundown from './Image/sundown.jpg'
import tackStore from './Image/tackStore.png'
import trav from './Image/trav.jpg'
import weather from './Image/weather.png'


let arr = [
    {
        id: 1,
        name: `Gourmet-Gril`,
        type: `restaurants`,
        image: Gormet_Gril,
        path: `https://gourmet-gril-team.vercel.app/`,
        useInfo: ["React", "Context Api", "Talwind CSS", "GSAP"],
        GitHub: "https://github.com/naim3450/Gourmet-Gril"
    },
    {
        id: 2,
        name: `LAZAREV`,
        type: `Product Design Agency`,
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgKBe-A6wbawubAVr3nLA9BB0MuX75smkSQ&s`,
        path: `https://naim3450.github.io/LAZAREV/`,
        useInfo: ["HTML", "CSS", "Javascript", "GSAP"],
        GitHub: "https://github.com/naim3450/LAZAREV"
    },
    {
        id: 3,
        name: `Sundown-Studio`,
        type: `Design & Production Studio`,
        image: sundown,
        path: `https://naim3450.github.io/Sundown/`,
        useInfo: ["HTML", "CSS", "Javascript", "GSAP"],
        GitHub: "https://github.com/naim3450/Sundown"
    },

    {
        id: 4,
        name: `Tack Store`,
        type: `e-commerce`,
        image: tackStore,
        path: `https://tack-store.vercel.app/`,
        useInfo: ["HTML", "CSS", "Vanilla JavaScript",],
        GitHub: "https://github.com/naim3450/Tack_Store"
    },
    {
        id: 5,
        name: `Emprise`,
        type: `travel site`,
        image: trav,
        path: `https://project-emprise.vercel.app/`,
        useInfo: ["React", "Context Api", "Talwind CSS"],
        GitHub: "https://github.com/naim3450/Project-Emprise"
    },
    {
        id: 6,
        name: `Weather`,
        type: `Weather application`,
        image: weather,
        path: `https://naim3450.github.io/Weather_API/`,
        useInfo: ["HTML", "CSS", "JavaScript", "Weather Api"],
        GitHub: "https://github.com/naim3450/Weather_API"
    },

]

// let arr = [1, 2, 3, 4, 5, 6]
export const AllProject = () => {

    let secoundTemPlet = document.getElementById('secoundTemPlet')

    arr.map((el, idx) => {
        let colors = ["#2563EB", "#7C3AED", "#DB2777",]

        let clonetempelet = document.importNode(secoundTemPlet.content, true)


        clonetempelet.querySelector('.projectImg').src = el.image
        clonetempelet.querySelector('.typeProject').style.background = colors[idx % colors.length]
        clonetempelet.querySelector('.typeProject').innerHTML = el.type
        clonetempelet.querySelector('.typeProject').innerHTML = el.type
        clonetempelet.querySelector('.nameProject').innerHTML = el.name

        el.useInfo.forEach((elm) => {
            let info = document.createElement("span")
            info.innerHTML = `${elm} ${el.useInfo.at(-1) == elm ? "" : "/"}`
            clonetempelet.querySelector(".useInfoPart").appendChild(info)
        });

        clonetempelet.querySelector(".viewProject").href = el.path
        clonetempelet.querySelector(".GitHub").href = el.GitHub
        document.querySelector('.allProjectlist').appendChild(clonetempelet)
    })
}
