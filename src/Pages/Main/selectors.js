import { createSelector } from 'reselect';

const getOompaLompasDomain = () => state => state.oompaLompasReducer;

const selectCurrentPage = state =>
  createSelector(getOompaLompasDomain(state), oompaLompasDomain => oompaLompasDomain.currentPage);

const selectAllOompaLoompas = state =>
  createSelector(getOompaLompasDomain(state), oompaLompasDomain => oompaLompasDomain.oompaLoompas);

const selectSelectedOompaLoompa = state =>
  createSelector(getOompaLompasDomain(state), oompaLompasDomain => oompaLompasDomain.selectedOompaLoompa);

const selectIsLoadingInit = state =>
  createSelector(getOompaLompasDomain(state), oompaLompasDomain => oompaLompasDomain.isLoadingInit);

export { selectAllOompaLoompas, selectCurrentPage, selectSelectedOompaLoompa, selectIsLoadingInit };
