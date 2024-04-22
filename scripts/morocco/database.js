//city array, landmark array, citizen array and export to main
//moroccoCities/moroccoLandmarks/moroccoCitizens
//city: name, population, image
//landmarks: image, name, location, description
//citizens: image, name, description
//put in tilda to help formatting



const database = {
    
    moroccoCities: [
        {
            id: 1,
            name: "Casablanca",
            population: "3,665,954",
            image: `https://www.tripsavvy.com/thmb/Ele8VRskHfVMNkFJDohpE422JqQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-84288050-8c2e8442ebcc4d1ba50214f0b1ed4b8d.jpg`

        },
        {
            id: 2,
            name: "Rabat",
            population: "1,655,753",
            image: `https://media.cntraveler.com/photos/65dfc055e781ac22c9a500e9/16:9/w_2560%2Cc_limit/GettyImages-1450546518.jpg`

        },
        {
            id: 3,
            name: "Fes",
            population: "1,191,905",
            image: `https://miro.medium.com/v2/resize:fit:1400/1*eacaFJxNqGR5-IB1PTzrSA.png`

        }
    ],

    moroccoLandmarks: [
        {
            id: 1,
            image: `https://upload.wikimedia.org/wikipedia/commons/9/97/Kasbah_Oudayas_exterior.jpg`,
            name: "Kasbah des Oudaias",
            location: "Rabat",
            description: "A beautiful bed and breakfast with flower-filled gardens and a Moorish Cafe."
        },
        {
            id: 2,
            image: `https://media.worldnomads.com/Travel-Safety/morocco/souksafety-Pavliha.jpg`,
            name: "Medina of Marrakesh",
            location: "Marrakesh",
            description: "A quarter filled with captivating markets and architectural wonders."
        },
        {
            id: 3,
            image: `https://upload.wikimedia.org/wikipedia/commons/3/3a/Coranic_School_%28106589859%29.jpeg`,
            name: "Ben Youssef of Madrasa",
            location: "Marrakesh",
            description: "An Islamic college, considered to be one of the most beautiful buildings in Morocco."
        }

    ],
    
    moroccoCitizens: [
        {
            id: 1,
            image: `https://upload.wikimedia.org/wikipedia/commons/7/7a/Hassan_II_%281983%29.jpg`,
            name: "King Hassan II",
            description: "King Hassan II ruled from 1961 to to 1999, focusing on modernization and improving country infrastructure."
        },
        {
            id: 2,
            image: `https://www.blackpast.org/wp-content/uploads/King-Mohammed-VI-of-Morocco-Mustafa-Yalcin-Anadoulu-Agency.jpg`,
            name: "King Mohamed VI",
            description: "Ruling from 1999, King Mohamed VI worked on improving Women's Rights in Morocco during his reign."
        },
        {
            id: 3,
            image: `https://jerryratcliffe.com/wp-content/uploads/2022/10/17924B8E-D0D7-4CB8-B383-E62A1766A8F4.jpeg`,
            name: "Hicham El Guerrouj",
            description: "An iconic figure for his middle-distance running, setting world records in the 1,500m, one mile, and 2,000m events."
        }
    ]
}

export const getCities = () => {
    return database.moroccoCities.map(city => ({...city}))
}

export const getLandmarks = () => {
    return database.moroccoLandmarks.map(landmark => ({...landmark}))
}

export const getCitizens = () => {
    return database.moroccoCitizens.map(citizen => ({...citizen}))
}

