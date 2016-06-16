const nestedReducer = defineReducer({})
  .on('RefreshData', perform(function* () {
    try {

/*1*/ const data =
/*1*/   yield { type: 'RequestData' };

      yield put({ /* Success */ });
    }
    catch (e) {
      yield put({ /* Fail */ });
    }
  }));
