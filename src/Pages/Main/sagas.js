import { takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { actionTypes as at } from './constants';
import { getOompaLoompaSuccess, getOompaLoompaError, setCurrentPage } from './actions';
import { selectCurrentPage } from './selectors';

import { getUrl } from './utils/getUrl';

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
    yield console.log(data, 'DATA');
    yield put(getOompaLoompaSuccess({ oompaLompaData: data }));
  } catch (e) {
    yield put(getOompaLoompaError);
  }
}

function* sagaHandleGetOompaLoompaSucces() {
  const currentPage = yield select(selectCurrentPage());

  yield put(setCurrentPage({ newPage: currentPage + 1 }));
}

export function* oompaLoompasWatcher() {
  yield takeLatest(at.GET_OOMPALOOMPAS_REQUEST, sagaHandleRequest);
  yield takeLatest(at.GET_OOMPALOOMPAS_SUCCESS, sagaHandleGetOompaLoompaSucces);
}
