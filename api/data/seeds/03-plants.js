exports.seed = async function (knex) {
  return knex("plants").insert([
    {
      nickname: "Louisiana Iris 'Black Gamecock'",
      species: "Iris",
      h2o_frequency: 1,
      image_url: "https://davesgarden.com/static/img/browse/plants/iris.jpg",
    },
    {
      nickname: "Jalapeno Pepper",
      species: "Capsicum annuum",
      h2o_frequency: 3,
      image_url: "https://davesgarden.com/guides/pf/go/2200",
    },
    {
      nickname: "Hardy Hibiscus 'Kopper King'",
      species: "Hibiscus moscheutos",
      h2o_frequency: 4,
      image_url: "https://davesgarden.com/guides/pf/go/40919",
    },
    {
      nickname: "Devil's Lettuce",
      species: "Sativa subsp. Indica",
      h2o_frequency: 3,
      image_url: "https://davesgarden.com/guides/pf/go/199452",
    },
    {
      nickname: "Shrub Rose 'Belinda's Dream'",
      species: "Rosa",
      h2o_frequency: 2,
      image_url: "https://davesgarden.com/guides/pf/go/56186",
    },
    {
      nickname: "Tomato 'Juliet'",
      species: "Lycopersicon lycopersicum",
      h2o_frequency: 1,
      image_url: "https://davesgarden.com/guides/pf/go/40127",
    },
    {
      nickname: "Diviner's Sage, Seer's Sage",
      species: "Salvia divinorum",
      h2o_frequency: 10,
      image_url: "https://davesgarden.com/guides/pf/go/71437",
    },
    {
      nickname: "Darwin Hybrid Tulip 'Daydream'",
      species: "Tulipa",
      h2o_frequency: 3,
      image_url: "https://davesgarden.com/guides/pf/go/64315",
    },
    {
      nickname: "Easter Lily",
      species: "Lilium longiflorum",
      h2o_frequency: 1,
      image_url: "https://davesgarden.com/guides/pf/go/1026",
    },
    {
      nickname: "Fingerling Potato 'Ozette'",
      species: "Solanum tuberosum",
      h2o_frequency: 5,
      image_url: "https://davesgarden.com/guides/pf/go/50366",
    },
    {
      nickname: "Tall Bearded Iris 'Wabash'",
      species: "Iris",
      h2o_frequency: 1,
      image_url: "https://davesgarden.com/guides/pf/go/36921",
    },
    {
      nickname: "Blood Sage, Scarlet Sage",
      species: "Salvia coccinea",
      h2o_frequency: 10,
      image_url: "https://davesgarden.com/guides/pf/go/639",
    },
    {
      nickname: "Strawberry 'Sequoia'",
      species: "Fragaria x ananassa",
      h2o_frequency: 3,
      image_url: "https://davesgarden.com/guides/pf/go/66150",
    },
  ]);
};
