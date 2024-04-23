import { getLandmarks } from "../database.js"
export const landmarksList = () => {
    // Invoke the function that you imported from the database module
    const landmarks = getLandmarks()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="landmarksList">'
    // Create HTNL representations of each landmark here
    for (const landmark of landmarks) {
        htmlString += `<section class="landmark card">
        <div class="landmark__name">${landmark.name}</div>    
        <div><img class="landmark__image image--card" src="${landmark.image}"/></div>
        <div class="landmark__description">${landmark.description}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}