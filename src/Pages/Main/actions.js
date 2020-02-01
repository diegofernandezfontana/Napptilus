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
