const bcrypt = require("bcryptjs");

exports.seed = async function(knex) {
    const hash = bcrypt.hashSync('1234');
    return knex('users').insert([   
      {
          username: 'yoshi',
          password: hash,
          phone: 5556669999,
      }
    ]);
  };
  