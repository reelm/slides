import { defineReducer } from 'reelm/fluent';

const personReducer = defineReducer({})
  .on('Change', (person, action) => {
    ...person,
    ...action.data,
  })

const applicationReducer = defineReducer({})
  .scopedOver(
    'Person', ['person'], personReducer)
