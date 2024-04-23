import { citiesList } from './cities/CityDataProvider.js'
import { landmarksList } from './landmarks/LandmarkDataProvider.js'
import { celebritiesList } from './celebrities/CelebritiesDataProvider.js'

const parentHTMLElement = document.querySelector("#cities")

parentHTMLElement.innerHTML = citiesList()

const parentHTMLElementLandmarks = document.querySelector("#landmarks")

parentHTMLElementLandmarks.innerHTML = landmarksList()

const parentHTMLElementCelebrities = document.querySelector("#celebrities")

parentHTMLElementCelebrities.innerHTML = celebritiesList()