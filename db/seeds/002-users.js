/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('table_name').insert([
    {id: 1, email_address: 'hoge1234@hotmail.com'},
    {id: 2, email_address: 'pushman@gmail.com'},
    {id: 3, email_address: 'inthepast@aol.com'},
    {id: 4, email_address: 'gitignore@gmail.com'},
    {id: 5, email_address: 'npmall@docomo.com'},
  ]);
};
