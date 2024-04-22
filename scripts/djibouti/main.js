import { getCities } from "../djibouti/database.js";
import { cityList } from "../djibouti/lists.js";
import { landmarkList } from "../djibouti/lists.js";
import { citizensList } from "../djibouti/lists.js";

const allCities = getCities()

for (const city of allCities) {
    console.log(city)
}

const parentCitiesHTMLElement = document.querySelector(".cities")

parentCitiesHTMLElement.innerHTML = cityList()

const parentLandmarksHTMLElement = document.querySelector(".landmarks")

parentLandmarksHTMLElement.innerHTML = landmarkList()

const parentCitizensHTMLElement = document.querySelector(".citizens")

parentCitizensHTMLElement.innerHTML = citizensList()