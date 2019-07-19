/* eslint-disable func-names */
import knexCleaner from 'knex-cleaner';

exports.seed = function (knex) {
  return knexCleaner.clean(knex);
};
