import { defineReducer, perform } from 'reelm/fluent';


const nestedReducer = defineReducer({})
  .on('RefreshData', perform(function* () {

      yield put({ type: 'BeginRefreshData' });

      try {
        const data =
          yield { type: 'RequestData' };

        yield put({ type: 'EndRefreshData', data: data });
      }
      catch (e) {
        yield put({
          type: 'FailRefreshData',
          message: e.toString()
        });
      }
    }
  ))
  // ...
