exports.seed = async function (knex) {
  return knex("plants").insert([
    {
      nickname: "Iris",
      species: "Iris domestica",
      h2o_frequency: 1,
      image: "https://davesgarden.com/static/img/browse/plants/iris.jpg",
    },
    {
      nickname: "Peppers",
      species: "Capsicum annuum",
      h2o_frequency: 3,
      image: "https://davesgarden.com/guides/pf/go/2200",
    },
    {
      nickname: "Hibiscus",
      species: "Hibiscus moscheutos",
      h2o_frequency: 4,
      image: "https://davesgarden.com/guides/pf/go/40919",
    },
    {
      nickname: "Roses",
      species: "Rosa",
      h2o_frequency: 2,
      image: "https://davesgarden.com/guides/pf/go/56186",
    },
    {
      nickname: "Tomatoes",
      species: "Lycopersicon lycopersicum",
      h2o_frequency: 1,
      image: "https://davesgarden.com/guides/pf/go/40127",
    },
    {
      nickname: "Lilies",
      species: "Lilium longiflorum",
      h2o_frequency: 1,
      image: "https://davesgarden.com/guides/pf/go/1026",
    },
  ]);
};
