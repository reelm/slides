function* confirmPushBigRedButtonSaga() {
    yield put({ type: 'ConfirmDialog.Show'});

    const action = yield take([
       'ConfirmDialog.Confirm', 'ConfirmDialog.Discard'
    ]);

    if (action.type === 'ConfirmDialog.Confirm')
        yield put({ type: 'BigRedButtonPressed' });
}
