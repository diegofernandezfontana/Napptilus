import { all, takeEvery } from 'redux-saga/effects';
import { oompaLoompasWatcher } from '../Pages/Main/sagas';

export default function* rootSaga() {
  yield all([oompaLoompasWatcher()]);
}
