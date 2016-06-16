// 3. Root reducer

const applicationReducer = defineReducer({})
  .scopedOver(
    'Person', ['person'], personReducer);
