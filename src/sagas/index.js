import { all } from 'redux-saga/effects';
import { oompaLoompasWatcher } from '../Pages/Main/sagas';
import { globalWatcher } from '../Global/sagas';

export default function* rootSaga() {
  yield all([oompaLoompasWatcher(), globalWatcher()]);
}
