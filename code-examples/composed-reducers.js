// Root reducer

import { defineReducer } from 'reelm/fluent';

const applicationReducer = defineReducer({})
  .scopedOver(
    'Person', ['person'], personReducer);
