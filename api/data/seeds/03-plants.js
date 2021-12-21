exports.seed = async function (knex) {
  return knex("plants").insert([
    {
      nickname: "Louisiana Iris 'Black Gamecock'",
      species: "Iris",
      h2o_frequency: 1,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Purple-Iris_pn.jpg/1200px-Purple-Iris_pn.jpg"
    },
    {
      nickname: "Jalapeno Pepper",
      species: "Capsicum annuum",
      h2o_frequency: 3,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Immature_jalapeno_capsicum_annuum_var_annuum.jpeg",
    },
    {
      nickname: "Hardy Hibiscus 'Kopper King'",
      species: "Hibiscus moscheutos",
      h2o_frequency: 4,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Hibiscus_Brilliant.jpg/1200px-Hibiscus_Brilliant.jpg",
    },
    {
      nickname: "Devil's Lettuce",
      species: "Sativa subsp. Indica",
      h2o_frequency: 3,
      image_url: "https://image.freepik.com/free-photo/background-from-marijuana-plants-top-view-industrial-cultivation-cannabis_135745-110.jpg",
    },
    {
      nickname: "Shrub Rose 'Belinda's Dream'",
      species: "Rosa",
      h2o_frequency: 2,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Rosa_damascena5.jpg",
    },
    {
      nickname: "Tomato 'Juliet'",
      species: "Lycopersicon lycopersicum",
      h2o_frequency: 1,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Tomato.jpg",
    },
    {
      nickname: "Diviner's Sage, Seer's Sage",
      species: "Salvia divinorum",
      h2o_frequency: 10,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/8/82/Salvia_divinorum_-_Herba_de_Maria.jpg",
    },
    {
      nickname: "Darwin Hybrid Tulip 'Daydream'",
      species: "Tulipa",
      h2o_frequency: 3,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Tulipa_suaveolens_floriade_to_Canberra.jpg",
    },
    {
      nickname: "Easter Lily",
      species: "Lilium longiflorum",
      h2o_frequency: 1,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Lilium_longiflorum_%28Easter_Lily%29.JPG/1200px-Lilium_longiflorum_%28Easter_Lily%29.JPG",
    },
    {
      nickname: "Fingerling Potato 'Ozette'",
      species: "Solanum tuberosum",
      h2o_frequency: 5,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Almond_potato.JPG",
    },
    {
      nickname: "Tall Bearded Iris 'Wabash'",
      species: "Iris",
      h2o_frequency: 1,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Iris_germanica_%28Purple_bearded_Iris%29%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg/800px-Iris_germanica_%28Purple_bearded_Iris%29%2C_Wakehurst_Place%2C_UK_-_Diliff.jpg",
    },
    {
      nickname: "Blood Sage, Scarlet Sage",
      species: "Salvia coccinea",
      h2o_frequency: 10,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Texas_sage_%281571020768%29.jpg/1200px-Texas_sage_%281571020768%29.jpg",
    },
    {
      nickname: "Strawberry 'Sequoia'",
      species: "Fragaria x ananassa",
      h2o_frequency: 3,
      image_url: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Strawberries_for_sale_at_Mahabaleshwar.jpg",
    },
  ]);
};
