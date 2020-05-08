exports.seed = (knex) => {
  knex('Category').insert([
    {
      id: 1,
      name: 'Macskálkodás',
      status: 'important'
    },
    {
      id: 2,
      name: 'Cicáaskodás',
      status: 'important'
    }
  ]);
};