import { getCelebrities } from "../database.js"
export const celebritiesList = () => {
    // Invoke the function that you imported from the database module
    const celebrities = getCelebrities()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="celebritiesList">'
    // Create HTNL representations of each celebrities here
    for (const celebrity of celebrities) {
        htmlString += `<section class="celebrity card">
            <div class="celebrity__name">${celebrity.name}</div>  
            <div><img class="celebrity__image image--card" src="${celebrity.image}" /></div>
            <div class="celebrity__description">${celebrity.description}</div>
        </section>`
    }
    htmlString += `</article>`

    return htmlString
}