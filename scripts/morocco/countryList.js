// actual functioning of website

import { getCities } from "../morocco/database.js";
import { getLandmarks } from "../morocco/database.js";
import { getCitizens } from "../morocco/database.js";





//CITIES
export const citiesList = () => {

        const cities = getCities()
    
        let htmlString = '<article class="cityList">'
    
        for (const city of cities) {
    
            htmlString += `<section class="city card">
                <div><img  class="city__image image--card" src="${city.image}" /></div>
                <div class="city__name">${city.name}</div>
                <div class="city__population">${city.population}</div>
            </section>`

        }
        htmlString += `</article>`
    
        return htmlString
      }





//LANDMARKS
export const landmarksList = () => {

        const landmarks = getLandmarks()
    
        let htmlString = '<article class="landmarkList">'
    
        for (const landmark of landmarks) {
    
            htmlString += `<section class="landmark card">
                <div><img  class="landmark__image image--card" src="${landmark.image}" /></div>
                <div class="landmark__name">${landmark.name}</div>
                <div class="landmark__location">${landmark.location}</div>
                <div class="landmark__description">${landmark.description}</div>
            </section>`

        }
        htmlString += `</article>`
    
        return htmlString
      }





//CITIZENS
export const citizensList = () => {

        const citizens = getCitizens()
    
        let htmlString = '<article class="citizenList">'
    
        for (const citizen of citizens) {
    
            htmlString += `<section class="citizen card">
                <div><img  class="citizen__image image--card" src="${citizen.image}" /></div>
                <div class="citizen__name">${citizen.name}</div>
                <div class="citizen__description">${citizen.description}</div>
            </section>`

        }
        htmlString += `</article>`
    
        return htmlString
      }

