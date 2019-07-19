/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex, Promise) {
  return knex('projects').insert([
    {
      name: 'Complete Node.js and Express Challenge',
      description: 'Build and Awesome API Using Node.js and Express to Manage Projects and Actions GTD Style!',
    },
    {
      name: 'Clean your shoe',
      description: 'Clean your white shoe for the dinner party',
    },
  ]);
};
