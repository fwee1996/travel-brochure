import { getTurkeyCities } from "./turkeyDatabase.js"

export const cityList = () => {
    // Invoke the function that you imported from the turkeyDatabase module
    const cities = getTurkeyCities()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="cityList">'

    // Create HTML representations of each city here
    for (const city of cities) {


        htmlString += `<section class="city card">
            <div><img  class="city_image image--card" src="${city.image}" /></div>
            <div class="city_name">${city.name}</div>
            <div class="city_population">${city.population}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString

    
    }



