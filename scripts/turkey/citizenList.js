import { getTurkeyCitizens } from "./turkeyDatabase.js"

export const citizenList = () => {
    // Invoke the function that you imported from the turkeyDatabase module
    const citizens = getTurkeyCitizens()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="citizenList">'

    // Create HTML representations of each citizen here
    for (const citizen of citizens) {


        htmlString += `<section class="citizen card">
            <div><img  class="citizen_image image--card" src="${citizen.image}" /></div>
            <div class="citizen_name">${citizen.name}</div>
            <div class="citizen_description">${citizen.description}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString

    
    }

