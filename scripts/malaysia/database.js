const database ={
cities : [
    {
      name: "Kuala Lumpur",
      population: "1,982,112",
      image: "https://media.istockphoto.com/id/466842820/photo/petronas-towers.jpg?s=612x612&w=0&k=20&c=X_Kl-W_ulJEzjvaaT8gRNTQWHboyLKaedXol5EPhGdI=",
      description: "Kuala Lumpur, the capital city of Malaysia, is known for its iconic Petronas Twin Towers."
    },
    {
      name: "Johor Bahru",
      population: "858,118",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBxdf7AVNYf-QYa2iJCYA3f5ghSzQdZOddCqyq_KHDEbjZYGGZvvA_pwkPaFadOJ9wCoc&usqp=CAU",
      description: "Johor Bahru is the capital of the state of Johor in Malaysia, and is a gateway to Singapore."
    },
    {
      name: "George Town",
      //put numbers with comma in quotations
      population: "794,313",
      image: "https://findingbeyond.com/app/uploads/2017/03/george-town-georgetown-old-town-penang-island-malaysia-46.jpg",
      description: "George Town, located in the state of Penang, is famous for delicious local cuisine."
    }
  ],
  

landmarks : [
    {
      name: "Petronas Twin Towers",
      image: "https://lh3.googleusercontent.com/p/AF1QipMsjmJ8aYBT3yXp5LMOAQasXkkFzjg30sw6-zxX=s1360-w1360-h1020",
      description: "The Petronas Twin Towers is the iconic symbol of Malaysia, it offers a breathtaking view and a variety of shopping and dining options."
    },
    {
        name: "Batu Caves",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlZ3WOUyV9IQVsKznCJ2iJQrPAUsQHuxaU2pDKcUthIVES&s=4",
        description: "Batu Caves is a popular Hindu temple, known for the massive gold Murugan statue, limestone cave and colorful staircase up to the temple."
      },
      {
        name: "Malacca City",
        image: "https://th.bing.com/th/id/R.315de03fb41f86d7dc04d4bcac7275c9?rik=X4xb1SNXHMgtEw&pid=ImgRaw&r=0",
        description: "Malacca City is a UNESCO World Heritage Site, featuring colonial architecture and vibrant street markets."
      }
    ],
    
celebrities : [
      {
        name: "Michelle Yeoh",
        image: "https://th.bing.com/th/id/R.bc605b3d016ae0932d8da1e49e69d817?rik=EVAsXNu0ClUfwQ&pid=ImgRaw&r=0",
        description: "Michelle Yeoh is an Academy-Award winning Malaysian actress and producer, known for her roles in Crouching Tiger, Hidden Dragon, and The Mummy."
      },
      {
        name: "Nicol David",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCaQTE9vfCZU-M8WUMF-GH7lcczE08Spr3Tw&usqp=CAU",
        description: "Nicol David is a former professional squash player from Malaysia, regarded as one of the greatest female squash players of all time."
      },
      {
        name: "Henry Golding",
        image: "https://th.bing.com/th/id/OIP.FXcoYfdsJxPAcFCnYreqPwAAAA?rs=1&pid=ImgDetMain",
        description: "Henry Golding is a Malaysian-British actor, known for his breakout role in Crazy Rich Asians."
      }
    ]
}

export const getCities = () => 
      {
        return database.cities.map(city => ({...city}));
    }
export const getLandmarks = () => 
      {
        return database.landmarks.map(landmark => ({...landmark}));
    }
    
export const getCelebrities = () =>
      {
        return database.celebrities.map(celebrities => ({...celebrities}));
    }