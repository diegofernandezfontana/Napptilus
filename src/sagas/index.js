import { all, takeEvery } from 'redux-saga/effects';

function* requestUmpalumpa() {
  yield console.log('This is a request');
}

function* requestWatcher() {
  yield takeEvery('REQUEST_UMPALUMPA', requestUmpalumpa);
}

export default function* rootSaga() {
  yield all([requestWatcher()]);
}
