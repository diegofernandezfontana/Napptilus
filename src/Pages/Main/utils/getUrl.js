const url = `https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas`;

export const getUrl = pageNumber => {
  return `${url}?page=${pageNumber}`;
};
