import { getTurkeyLandmarks } from "./turkeyDatabase.js"

export const landmarkList = () => {
    // Invoke the function that you imported from the turkeyDatabase module
    const landmarks = getTurkeyLandmarks()

    // Start building a string filled with HTML syntax
    let htmlString = '<article class="landmarkList">'

    // Create HTML representations of each landmark here
    for (const landmark of landmarks) {

       
        htmlString += `<section class="landmark card">
            <div><img  class="landmark_image image--card" src="${landmark.image}" /></div>
            <div class="landmark_city">${landmark.name}</div>
            <div class="landmark_state">${landmark.description}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString

    
    }
