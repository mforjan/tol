const findRowHours = (row) => Object.values(row.hours).reduce((total, row) => total + row);

const findTotalHours = (arr) => {
  const array = arr.map(row => findRowHours(row));
  const answer = array.length ? array.reduce((total, row) => total + row) : 0;
  return answer.toFixed(2);
};

const findTotalTeleworkHours = (arr) => {
  const teleworkRows = arr.filter(row => row.telework === true);
  const array = teleworkRows.map(row => findRowHours(row));
  const answer = array.length ? array.reduce((total, row) => total + row) : 0;
  return answer.toFixed(2);
};

const helpers = {
  findRowHours,
  findTotalHours,
  findTotalTeleworkHours,
};

export default helpers;