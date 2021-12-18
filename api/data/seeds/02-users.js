exports.seed = async function(knex) {
    return knex('users').insert([   
      {
          username: 'yoshi',
          password: '1234',
          phone: 5556669999,
      }
    ]);
  };
  