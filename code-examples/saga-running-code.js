// Application root
// ...

const sagaRunner = createSagaMiddleware();

// ...

// then run the saga
sagaRunner.run(confirmPushBigRedButtonSaga);
