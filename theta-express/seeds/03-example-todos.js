exports.seed = (knex) => {
  knex('todos').insert([
    {
      name: 'Valami',
      description: 'Fontos',
      status: 'asdfasdf',
      user_id: 2,
      category_id: 1,
    },
    {
      name: 'Csalami',
      description: 'Fontos',
      status: 'dsadsa',
      user_id: 1,
      category_id: 2
    }
  ]);
};
