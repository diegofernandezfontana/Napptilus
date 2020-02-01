import { takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { getUrl } from './utils/getUrl';
import { handleLocalStorage } from '../../Global/sagas';

import { actionTypes as at } from './constants';
import { getOompaLoompaSuccess, getOompaLoompaError, setCurrentPage } from './actions';
import { selectCurrentPage } from './selectors';

function* sagaHandleRequest() {
  const currentPage = yield select(selectCurrentPage());

  try {
    const fetchOompaLoompa = () => {
      return axios.get(getUrl(currentPage)).then(res => {
        const { data } = res;
        return data.results;
      });
    };

    const data = yield fetchOompaLoompa();
    yield put(getOompaLoompaSuccess({ oompaLompaData: data }));
  } catch (e) {
    yield put(getOompaLoompaError);
  }
}
function* sagaHandleGetOompaLoompaSucces() {
  const currentPage = yield select(selectCurrentPage());

  yield put(setCurrentPage({ newPage: currentPage + 1 }));
  yield handleLocalStorage();
}

export function* oompaLoompasWatcher() {
  yield takeLatest(at.GET_OOMPALOOMPAS_REQUEST, sagaHandleRequest);
  yield takeLatest(at.GET_OOMPALOOMPAS_SUCCESS, sagaHandleGetOompaLoompaSucces);
}
