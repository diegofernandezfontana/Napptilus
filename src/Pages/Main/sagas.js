import { takeLatest, put, select } from 'redux-saga/effects';
import axios from 'axios';

import { getUrl } from './utils/getUrl';
import { handleLocalStorage } from '../../Global/sagas';

import { actionTypes as at } from './constants';
import {
  getOompaLoompaSuccess,
  getOompaLoompaError,
  setCurrentPage,
  setSelectedOompaLoompa,
  setOompaLoompaExists,
} from './actions';
import { selectCurrentPage, selectAllOompaLoompas } from './selectors';

function* sagaHandleRequest() {
  const currentPage = yield select(selectCurrentPage());

  try {
    const fetchOompaLoompa = () => {
      return axios.get(getUrl(currentPage)).then(res => {
        const { data } = res;
        return data.results;
      });
    };

    const oompaLompaData = yield fetchOompaLoompa();
    yield put(getOompaLoompaSuccess({ oompaLompaData }));
  } catch (e) {
    yield put(getOompaLoompaError);
  }
}
function* sagaHandleGetOompaLoompaSucces() {
  const currentPage = yield select(selectCurrentPage());

  yield put(setCurrentPage({ newPage: currentPage + 1 }));
  yield handleLocalStorage();
}

function* sagaHandleSelectOompaLoompa(action) {
  const { id } = action;
  const allOompaLoompas = yield select(selectAllOompaLoompas());
  const oompaLoompaIndex = allOompaLoompas.findIndex(oompa => oompa.id === +id);

  const oompaLoompa = allOompaLoompas[oompaLoompaIndex];

  if (oompaLoompa) {
    yield put(setOompaLoompaExists(true));
    yield put(setSelectedOompaLoompa({ oompaLoompa }));
  } else {
    yield put(setOompaLoompaExists(false));
  }
}

export function* oompaLoompasWatcher() {
  yield takeLatest(at.GET_OOMPALOOMPAS_REQUEST, sagaHandleRequest);
  yield takeLatest(at.GET_OOMPALOOMPAS_SUCCESS, sagaHandleGetOompaLoompaSucces);
  yield takeLatest(at.GET_SELECTED_OOMPALOOMPA_BY_ID, sagaHandleSelectOompaLoompa);
}
