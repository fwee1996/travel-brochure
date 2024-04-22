import { getCities } from "../database.js"
export const citiesList = () => {
    // Invoke the function that you imported from the database module
    const cities = getCities()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="citiesList">'
    // Create HTNL representations of each city here
    for (const city of cities) {
        htmlString += `<section class="city card">
        <div class="city__name">${city.name}</div>  
        <div class="city__population">Population: ${city.population}</div>  
        <div><img class="city__image image--card" src="${city.image}" /></div>
        <div class="city__description">${city.description}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}