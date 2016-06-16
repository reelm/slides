const nestedReducer = defineReducer({})
  .on('RefreshData', perform(function* () {
    try {

      const data =                     /*1*/
        yield { type: 'RequestData' }; /*1*/

      yield put({ /* Success */ });
    }
    catch (e) {
      yield put({ /* Fail */ });
    }
  }));
