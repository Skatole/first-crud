exports.seed = (knex) => {
  knex('users').insert([
    {
      firstName: 'Jakab',
      lastName: 'Gipsz',
      email: 'jakab@gipsz.com',
      password: 'abc123',
      age: 33,
      groupId: 1,
      role: 'admin'
    },
    {
      firstName: 'Tasi',
      lastName: 'Test',
      email: 'tasi@teszt.com',
      password: 'asdf123',
      age: 18,
      groupId: 2,
      role: 'user'
    },
    {
      firstName: 'Geza',
      lastName: 'Gipsz',
      email: 'GezA@gipsz.com',
      password: 'abc123',
      age: 33,
      groupId: 1,
      role: 'admin'
    },
    {
      firstName:  'Feri',
      lastName: 'Test',
      email: 'Feri@teszt.com',
      password: 'asdf123',
      age: 18,
      groupId: 2,
      role: 'user'
    },
    {
      firstName: 'Gyuri',
      lastName: 'Gipsz',
      email: 'Gyuri@gipsz.com',
      password: 'abc123',
      age: 33,
      groupId: 1,
      role: 'admin'
    }
  ]);
};
