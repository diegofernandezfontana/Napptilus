import { actionTypes as at } from './constants';

export const setLshOompaLoompasToState = ({ lshOompaLoompas }) => ({
  type: at.SET_LOCAL_STORAGE_OOMPALOOMPAS_TO_STATE,
  lshOompaLoompas,
});

export const getLshToState = () => ({
  type: at.GET_LOCALSTORAGE,
});
