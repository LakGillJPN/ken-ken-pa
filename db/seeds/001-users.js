/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {id: 1,  email: 'hoge1234@hotmail.com', UID: ''},
    {id: 2,  email: 'pushman@gmail.com', UID: ''},
    {id: 3,  email: 'inthepast@aol.com', UID: ''},
    {id: 4,  email: 'gitignore@gmail.com', UID: ''},
    {id: 5,  email: 'npmall@docomo.com', UID: ''},
  ]);
};
