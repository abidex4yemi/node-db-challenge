/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
exports.seed = function (knex) {
  return knex('actions').insert([
    {
      project_id: 1,
      description: 'Fork and Clone Repository',
      notes: 'Repo URL: https://github.com/LambdaSchool/Sprint-Challenge-Node-Express',
    },
    {
      project_id: 1,
      description: 'Install Dependencies',
      notes: 'Remember to cd into the folder where the Project was cloned',
    },
    {
      project_id: 1,
      description: 'Design and Build API Endpoints',
      notes: 'This is where the magic happens!',
    },
    {
      project_id: 2,
      description: 'Wash the shoe lace',
      notes: 'You need to clean it because is a white lace',
    },
    {
      project_id: 2,
      description: 'Dry shoe in the sun',
      notes: 'Dry you shoe for 3 hours, remember not to over dry',
    },
  ]);
};
