import { takeLatest, select, put } from 'redux-saga/effects';
import moment from 'moment';

import LocalStorage from '../utils/LocalStorage';

import { actionTypes as at } from './constants';
import { setLshOompaLoompasToState } from './actions';

import { selectAllOompaLoompas, selectCurrentPage } from '../Pages/Main/selectors';

export function* handleLocalStorage() {
  const allOompaLoompas = yield select(selectAllOompaLoompas());

  const dateNow = moment();
  const oneDayFromNow = moment().add(1, 'day');
  const timeStamp = LocalStorage.get('timeStamp');

  if (!timeStamp || dateNow > timeStamp) {
    LocalStorage.set('timeStamp', oneDayFromNow);
    LocalStorage.clear();
  }

  const allOompaLoompasInLs = LocalStorage.get('allOompaLoompas');

  if (!allOompaLoompasInLs || allOompaLoompas.length > allOompaLoompasInLs.length) {
    LocalStorage.set('allOompaLoompas', allOompaLoompas);
    LocalStorage.set('timeStamp', oneDayFromNow);
  }

  const currentPage = yield select(selectCurrentPage());
  if (currentPage > 1) {
    LocalStorage.set('currentPage', currentPage);
  }
}

function* sagaSetLsToStore() {
  const lshOompaLoompas = LocalStorage.get('allOompaLoompas');
  const currentPage = LocalStorage.get('currentPage');
  const lsTimeStamp = moment(LocalStorage.get('timeStamp'));
  const dateNow = moment();

  if (lsTimeStamp > dateNow && lshOompaLoompas.length && currentPage > 1) {
    yield put(setLshOompaLoompasToState({ lshOompaLoompas: lshOompaLoompas }));
  }
}

export function* globalWatcher() {
  yield takeLatest(at.GET_LOCALSTORAGE, sagaSetLsToStore);
}
