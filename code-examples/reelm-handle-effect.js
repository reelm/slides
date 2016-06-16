const rootReducer = defineReducer({})
  .scopedOver(
    'Nested', ['nested'], nestedReducer)
  .mapEffects(function (effect) {
    switch (effect.type) {
      case 'RequestConfirmation':
        return call(function* () {    /*2*/
          yield put({                 /*2*/
            type: 'ConfirmDialog.Show'/*2*/
          });                         /*2*/
                                      /*2*/
          const action = yield take([ /*2*/
            'ConfirmDialog.Confirm',  /*2*/
            'ConfirmDialog.Discard'   /*2*/
          ]);                         /*2*/
                                      /*2*/
          return action.type ===      /*2*/
            'ConfirmDialog.Confirm';  /*2*/
        });
      default:
        return effect;
    }
  });
