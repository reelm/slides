import { defineReducer, perform } from 'reelm/fluent';


const nestedReducer = defineReducer({})
  .on('ConfirmedDoSomething', perform(function* () {
      const confirmationResult =
        yield { type: 'RequestConfirmation' };

      if (confirmationResult)
        yield put({ type: 'DoSomething' });
    }
  ))
  // ...
