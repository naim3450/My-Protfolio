import { arr } from './api'

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
        clonetempelet.querySelector('.aboutProject').innerHTML = el.details

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
