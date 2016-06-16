const rootReducer = defineReducer({})
  .scopedOver(  /*2*/
    'Nested', ['nested'], nestedReducer)

  .mapEffects(function (effect) {
    switch (effect.type) {

      case 'RequestData':         /*3*/
        return call(              /*3*/
          async () => await api.getData()
        );

      default:
        return effect;

    }
  });
