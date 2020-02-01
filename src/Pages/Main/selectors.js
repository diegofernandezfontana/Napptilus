import { createSelector } from 'reselect';

const getOompaLompasDomain = () => state => state.oompaLompasReducer;

const selectCurrentPage = state =>
  createSelector(getOompaLompasDomain(state), oompaLompasDomain => oompaLompasDomain.currentPage);

const selectAllOompaLoompas = state =>
  createSelector(getOompaLompasDomain(state), oompaLompasDomain => oompaLompasDomain.oompaLoompas);

export { selectAllOompaLoompas, selectCurrentPage };
