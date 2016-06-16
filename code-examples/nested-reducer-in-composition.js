// 4. Nested reducer

const nestedReducer = defineReducer({})
  .on('Change', (person, action) => {
    ...person,
    ...action.data,
  });

