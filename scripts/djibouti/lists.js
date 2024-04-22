import { getCities } from "./database.js";
import { getLandmarks } from "./database.js";
import { getCitizens } from "./database.js";

export const cityList = () => {
    const cities = getCities();
    let htmlString =`<article class='cityContainer'>`;
    for (const city of cities) {
        htmlString += `<section>
            <div><img src='${city.img}' /></div>
            <div><b>${city.name}</b></div>
            <div>The population of ${city.name} is ${city.population}</div>
        </section>`
    }
    htmlString += `</article>`
    return htmlString;
};

export const landmarkList = () => {
    const landmarks = getLandmarks();
    let htmlString =`<article class='landmarkContainer'>`;
    for (const landmark of landmarks) {
        htmlString += `<section>
            <div><img src='${landmark.img}' /></div>
            <div><b>${landmark.name}</b></div>
            <div>${landmark.description}</div>
        </section>`
    }
    htmlString += `</article>`
    return htmlString;
}

export const citizensList = () => {
    const citizens = getCitizens();
    let htmlString =`<article class='citizenContainer'>`;
    for (const citizen of citizens) {
        htmlString += `<section>
            <div><img src='${citizen.img}' /></div>
            <div><b>${citizen.name}</b></div>
            <div>${citizen.description}</div>
        </section>`
    }
    htmlString += `</article>`
    return htmlString;
}