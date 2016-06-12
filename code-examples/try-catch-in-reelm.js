import { defineReducer, perform } from 'reelm/fluent';


const reducer = defineReducer({})
  .on('RefreshData', perform(function* () {

      yield put({ type: 'BeginRefreshData' });

      try {
        const data =
          yield call(async () => await api.getData());

        yield put({ type: 'EndRefreshData', data: data });
      }
      catch (e) {
        yield put({ type: 'FailRefreshData', message: e.toString() });
      }
    }
  ))
  // ...
