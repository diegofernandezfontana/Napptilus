import { actionTypes as at } from './constants';

const initialState = {
  oompaLoompas: [],
  currentPage: 1,
  isLoading: false,
};

const oompaLompasReducer = (state = initialState, { type, ...action }) => {
  switch (type) {
    case at.SET_CURRENTPAGE: {
      const { newPage } = action;
      return Object.assign({}, state, { currentPage: newPage });
    }
    case at.GET_OOMPALOOMPAS_SUCCESS: {
      const { oompaLompaData } = action;

      return Object.assign({}, state, { oompaLoompas: [...state.oompaLoompas, ...oompaLompaData] });
    }
    default:
      return state;
  }
};

export default oompaLompasReducer;
