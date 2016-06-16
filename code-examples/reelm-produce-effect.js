const nestedReducer = defineReducer({})
  .on('ConfirmedBigRedButtonPress',
    perform(function* () {
      const confirmationResult =
        yield {                       /*1*/
          type: 'RequestConfirmation',/*1*/
        };                            /*1*/

      if (confirmationResult)
        yield put({
          type: 'BigRedButtonPressed',
        });
    }
  ));
