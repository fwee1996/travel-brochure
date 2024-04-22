//import countryList js

import { citiesList } from "../morocco/countryList.js";
import { landmarksList } from "../morocco/countryList.js";
import { citizensList } from "../morocco/countryList.js";

const parentCitiesHTMLElement = document.querySelector(".cities")
parentCitiesHTMLElement.innerHTML = citiesList()


const parentLandmarksHTMLElement = document.querySelector(".landmarks")
parentLandmarksHTMLElement.innerHTML = landmarksList()


const parentCitizensHTMLElement = document.querySelector(".citizens")
parentCitizensHTMLElement.innerHTML = citizensList()








// document.querySelector("#container").innerHTML = citiesList()
// document.querySelector("#container").innerHTML = landmarksList()
// document.querySelector("#container").innerHTML = citizensList()