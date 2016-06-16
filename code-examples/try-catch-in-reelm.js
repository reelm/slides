const reducer = defineReducer({})
  .on('RefreshData', perform(function* () {
    try {
      const data =                                   /*1*/
        yield call(async () => await api.getData()); /*1*/
      yield put({ type: 'DataRefreshed', data });
    }
    catch (e) {
      yield put({
        type: 'FailRefreshData',
        message: e.toString(),
      });
    }
  }));
