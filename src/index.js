import "./style.css"
// const h1 = document.createElement("h1")
// h1.innerText ="Hello Webpack"
// h1.classList.add("colortext")

// document.getElementById("root").appendChild(h1)
import { createImage } from "./createImg"
const myImage = createImage(Icon);

import Icon from "./icon.jpg"

    const h1 = document.createElement("h1")
    h1.innerText = "Hello Webpack";
    h1.classList.add("colortext");

    const p = document.createElement("p")
    p.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?"
    
    document.getElementById("note").appendChild(p)
    document.getElementById("root").appendChild(h1)
    document.getElementById("image-cont").appendChild( myImage )

