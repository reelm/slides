import { defineReducer } from 'reelm/fluent';

// ...

const rootReducer = defineReducer({})
  .scopedOver('Nested', ['nested'], nestedReducer)

  .mapEffects(function (effect) {
    switch (effect.type) {
      case 'RequestConfirmation':
        return call(function* () {
          yield put({ type: 'ConfirmDialog.Show' });

          const action = yield take([
            'ConfirmDialog.Confirm',
            'ConfirmDialog.Discard']);

          return action.type === 'ConfirmDialog.Confirm';
        });
      default:
        return effect;
    }
  })
  // ...
