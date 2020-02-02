import { actionTypes as at } from './constants';
import { actionTypes as globalAt } from '../../Global/constants';

const initialState = {
  oompaLoompas: [],
  currentPage: 1,
  isLoadingInit: true,
  selectedOompaLoompa: {},
  doesOompaLoompaExist: true,
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
    case globalAt.SET_LOCAL_STORAGE_OOMPALOOMPAS_TO_STATE: {
      const { lshOompaLoompas } = action;

      return Object.assign({}, state, { oompaLoompas: lshOompaLoompas });
    }
    case globalAt.SET_LOCAL_STORAGE_PAGENUMBER_TO_STATE: {
      const { lshPageNumber } = action;

      return Object.assign({}, state, { currentPage: lshPageNumber });
    }
    case at.SELECT_OOMPA_LOOMPA: {
      const { selectedOompaLoompa } = action;
      return Object.assign({}, state, { selectedOompaLoompa: selectedOompaLoompa });
    }
    case at.SET_SELECTED_OOMPALOOMPA: {
      const { oompaLoompa } = action;

      return Object.assign({}, state, { selectedOompaLoompa: oompaLoompa });
    }
    case at.SET_IS_LOADING_INITIALIZATION: {
      return Object.assign({}, state, { isLoadingInit: false });
    }
    case at.SET_OOMPALOOMPA_EXISTS: {
      console.log(action, 'actions');
      return Object.assign({}, state, { doesOompaLoompaExist: false });
    }
    default:
      return state;
  }
};

export default oompaLompasReducer;
