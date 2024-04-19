const database = {
    djiboutiCities:[
        {
            id: 1,
            img: `https://www.blackpast.org/wp-content/uploads/prodimages/files/Djibouti_City_Djibouti_2009.jpg`,
            name: 'Djibouti City',
            population: '626,512'
        },
        {
            id: 2,
            img: `https://upload.wikimedia.org/wikipedia/commons/6/63/View_of_Ali_Sabieh.JPG`,
            name: 'Ali Sabieh',
            population: '50,006'
        },
        {
            id: 3,
            img: `https://upload.wikimedia.org/wikipedia/commons/7/7f/Porte_de_Dikhil.JPG`,
            name: 'Dikhil',
            population: '31,801'
        }
    ],
    djiboutiLandmarks: [
        {
            id: 1,
            img: `https://d2dzi65yjecjnt.cloudfront.net/1207502-1.jpg`,
            name: 'Hamoudi Mosque',
            description: 'The Hamoudi Mosque was built by Haji Hamoudi in 1906. Built using the Abbassid style of architecture, this mosque has one minaret and is considered as one of the oldest mosques in Djibouti. Located in Place Mahmoud Harbi, there is a market right outside the mosque that sells fruits, vegetables, meat and clothing.'
        },
        {
            id: 2,
            img: `https://d2dzi65yjecjnt.cloudfront.net/1207499-1.jpg`,
            name: 'Khor Ambado Beach',
            description: 'Khor Ambado Beach is known for its coral reefs and underwater life. With such rich marine life, this beach is frequented by snorkelers and scuba divers. Owing to its rough terrain, this idyllic beach cannot be accessed by foot and can only be accessed by a 4WD. After a hearty swim in the waters, you can either order refreshments from the beach’s restaurants or you can cook up your meal.'
        },
        {
            id: 3,
            img: `https://d2dzi65yjecjnt.cloudfront.net/1180583.jpeg`,
            name: `The People's Palace`,
            description: `Sitting by the waters, The People's Palace is a pristine monument built to commemorate the freedom struggle of the people of Djibouti. A tribute built to honor the memory of the valiant individuals who fought and rallied for their emancipation, the large complex includes a grand columnar pavilion, fronted by a pedestal with the solemn Monument of Martyrs. The complex was built in 1984 and is a prominent sight along the Rue de Geneve.`
        }

    ],
    djiboutiCitizens:[
        {
            id: 1,
            img: `https://www.discoverwalks.com/blog/wp-content/uploads/2022/10/409px-mumin_gala_2012.jpg`,
            name: 'Mumin Gala',
            description: `Mumin Gala is an Olympic athlete hailing from Djibouti City. He competed in the 2012 and 2016 Summer Olympic Games.`
        },
        {
            id: 2,
            img:'url',
            name: `https://img4.bdbphotos.com/images/230x300/e/k/ek7brks65xi5kbsr.jpg?skj2io4l`,
            description: `Dileita was born on March 12, 1958, and is a Djiboutian politician. He served as Prime Minister of Djibouti from 2001 to 2013.`
        },
        {
            id: 3,
            img: `https://img4.bdbphotos.com/images/230x300/0/e/0ed3tp37apkgkg.jpg?skj2io4l`,
            name: 'Hassan Gouled Aptidon',
            description: `Hassan Aptidon was the first president of Djibouti, serving from 1977 to 1999.`
        }
    ]

}

export const getCities = () => {
    return database.djiboutiCities.map(city => ({...city}))
}

export const getLandmarks= () => {
    return database.djiboutiLandmarks.map(landmark => ({...landmark}))
}

export const getCitizens= () => {
    return database.djiboutiCitizens.map(citizen => ({...citizen}))
}