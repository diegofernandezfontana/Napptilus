import { actionTypes as at } from './constants';

export const getOompaLoompaRequest = () => ({
  type: at.GET_OOMPALOOMPAS_REQUEST,
});

export const getOompaLoompaError = () => ({
  type: at.GET_OOMPALOOMPAS_ERROR,
});

export const getOompaLoompaSuccess = ({ oompaLompaData }) => ({
  type: at.GET_OOMPALOOMPAS_SUCCESS,
  oompaLompaData,
});

export const setCurrentPage = ({ newPage }) => ({
  type: at.SET_CURRENTPAGE,
  newPage,
});

export const setSelectedOompaLoompa = ({ oompaLoompa }) => ({
  type: at.SET_SELECTED_OOMPALOOMPA,
  oompaLoompa,
});

export const getSelectedOompaLoompaById = ({ id }) => ({
  type: at.GET_SELECTED_OOMPALOOMPA_BY_ID,
  id,
});

export const setIsLoadingInit = value => ({
  type: at.SET_IS_LOADING_INITIALIZATION,
  value,
});

export const setOompaLoompaExists = value => ({
  type: at.SET_OOMPALOOMPA_EXISTS,
  value,
});
