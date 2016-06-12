import { defineReducer } from 'reelm/fluent';

const applicationReducer = defineReducer({})
  .scopedOver(
    'Person', ['person'], personReducer)

const personReducer = defineReducer({})
  .on('Change', (person, action) => {
    ...person,
    ...action.data,
  })
