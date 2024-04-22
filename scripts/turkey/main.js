

import { cityList } from "./cityList.js"
import { landmarkList } from "./landmarkList.js"
import { citizenList } from "./citizenList.js"


/*
    What is the CSS selector for the element where you
    want to display the fish?

    Use . for elements with a "class" attribute
    Use # for elements with an "id" attribute
*/
    
const parentHTMLElement = document.querySelector(".main")

parentHTMLElement.innerHTML = cityList()
parentHTMLElement.innerHTML += landmarkList()
parentHTMLElement.innerHTML += citizenList()