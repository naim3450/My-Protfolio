
let arr = [
    {
        id: 1,
        name: `LAZAREV`,
        type: `Product Design Agency`,
        image: `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAgKBe-A6wbawubAVr3nLA9BB0MuX75smkSQ&s`,
        path: `https://naim3450.github.io/LAZAREV/`,
        useInfo: ["HTML", "CSS", "Javascript", "GSAP"]
    },
    {
        id: 2,
        name: `Sundown-Studio`,
        type: `Design & Production Studio`,
        image: "public/Image/sundown.jpg",
        path: `https://naim3450.github.io/Sundown/`,
        useInfo: ["HTML", "CSS", "Javascript", "GSAP"]
    },
    {
        id: 3,
        name: `Gourmet-Gril`,
        type: `restaurants`,
        image: "public/Image/Gormet_Gril.jpg",
        path: `https://gourmet-gril-team.vercel.app/`,
        useInfo: ["React", "Context Api", "Talwind CSS", "GSAP"]
    },
    {
        id: 4,
        name: `Tack Store`,
        type: `e-commerce`,
        image: "public/Image/tackStore.png",
        path: `https://tack-store.vercel.app/`,
        useInfo: ["HTML", "CSS", "Vanilla JavaScript",]
    },
    {
        id: 5,
        name: `Emprise`,
        type: `travel site`,
        image: "public/Image/trav.jpg",
        path: `https://project-emprise.vercel.app/`,
        useInfo: ["React", "Context Api", "Talwind CSS"]
    },
    {
        id: 6,
        name: `Weather`,
        type: `Weather application`,
        image: "public/Image/weather.png",
        path: `https://naim3450.github.io/Weather_API/`,
        useInfo: ["HTML", "CSS", "JavaScript", "Weather Api"]
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
        document.querySelector('.allProjectlist').appendChild(clonetempelet)
    })
}
