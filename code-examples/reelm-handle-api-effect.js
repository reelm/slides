import { defineReducer } from 'reelm/fluent';

// ...

const rootReducer = defineReducer({})
  .scopedOver('Nested', ['nested'], nestedReducer)

  .mapEffects(function (effect) {
    switch (effect.type) {
      case 'RequestData':
        return call(async () => await api.getData());
      default:
        return effect;
    }
  })
  // ...
