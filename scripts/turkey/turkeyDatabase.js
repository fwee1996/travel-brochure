

const turkeyDatabase = {


    turkeyCities: [
        {
            id: 1,
            
            name: "Istanbul",

            image: "https://media.timeout.com/images/105859738/750/422/image.jpg",

            population: "Population: 15.2 Mil",
        },
        {
            id: 2,
            
            name: "Ankara",

            image: "https://skyticket.com/guide/wp-content/uploads/2017/12/iStock-498704215.jpg",

            population: "Population: 5.15 Mil",
        },
        {
            id:3,
            
            name: "Izmir",

            image: "https://europeinwinter.com/wp-content/uploads/2022/06/iStock-1402620799.jpeg",

            population: "Population: 2.95 Mil",
        }
    ],


    turkeyLandmarks: [
        {
            id: 1,
            
            name: "LAKE VAN",

            image: "https://travel2next.com/wp-content/uploads/turkey-landmarks-altinsac-church-ruins.jpg",
        
            description: "Lake Van is Turkey’s largest lake covering 1434 square miles (3713 square km). To locals, the lake is known as the Sea of Van.",
        },
        {
            id: 2,
            
            name: "MANAVGANT WATERFALLS",

            image: "https://travel2next.com/wp-content/uploads/natural-turkey-landmark-manavgant-waterfall.jpg",
        
            description: "Manavgant Waterfalls is Antalya’s most famous waterfall. The waterfall is sourced from Mount Seytan.",        },
        {
            
            id: 3,
            
            name: "BLUE LAGOON",

            image: "https://travel2next.com/wp-content/uploads/landmarks-in-turkey.jpg",
        
            description: "Ölüdeniz, or Blue Lagoon as it is known the world over, is a serene aquamarine body of water.",        }
    ],

    
    turkeyCitizens: [
        {
            id: 1,
            
            name: "Mustafa Kemal Atatürk",
            
            image: "https://tourismteacher.com/wp-content/uploads/2024/01/Mustafa_Kemal_Ataturk.jpg.webp",

            description: "Mustafa Kemal Atatürk, the founder of the Republic of Turkey, is one of the most transformative figures in Turkish history. He was a military leader and statesman and led the country through radical reforms.",
        },
        {
            id: 2,
            
            name: "Elif Şafak",
            
            image: "https://tourismteacher.com/wp-content/uploads/2024/01/Elif_Safak.jpg.webp",

            description: "Elif Şafak is a contemporary Turkish-British novelist and one of the most famous people from Turkey. She is renowned for her rich storytelling, often bridging Eastern and Western cultural themes. Her novels, including ‘The Bastard of Istanbul’ and ‘The Forty Rules of Love,’ have gained international acclaim. They explore complex characters, historical depth, and cultural diversity.",
        },        {
            id: 3,
            
            name: "Orhan Pamuk",
            
            image: "https://tourismteacher.com/wp-content/uploads/2024/01/Orhan_Pamuk.jpg.webp",

            description: "Orhan Pamuk, a Nobel Prize-winning novelist, is one of Turkey’s most prominent literary figures. His works include ‘My Name is Red’ and ‘Snow.’ They are celebrated for profoundly exploring themes of identity, memory, and the intersection between past and present. ",
        }
    ]
}



    export const getTurkeyCities = () => {
        return turkeyDatabase.turkeyCities.map(city => ({...city}))
    }

    export const getTurkeyLandmarks = () => {
        return turkeyDatabase.turkeyLandmarks.map(landmark => ({...landmark}))
    }
    
    export const getTurkeyCitizens = () => {
        return turkeyDatabase.turkeyCitizens.map(citizen => ({...citizen}))


    }
