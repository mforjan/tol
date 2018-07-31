import timeReport from '../../reducers/timeReport';
import data from '../../data/data';

const defaultState = [{
  chargeNumber: 'F00000000000000000000',
  chargeNumberDescription: 'Holiday',
  location: 'VAHN',
  telework: false,
  hours: {
    day0: 0,
    day1: 0,
    day2: 0,
    day3: 0,
    day4: 0,
    day5: 0,
    day6: 0,
    day7: 0,
    day8: 0,
    day9: 0,
    day10: 0,
    day11: 0,
    day12: 0,
    day13: 0,
  }
}]

describe('timeReport', () => {

  it('has a default state', () => {
    expect(timeReport(undefined, { type: 'N/A' })).toEqual(data.rows);
  });

  it('can handle adding time', () => {
    expect(timeReport(undefined, {
      type: 'ADD_TIME',
      chargeNumber: 'F00000000000000000000',
      location: 'VAHN',
      telework: false
    })).toEqual([
      ...data.rows,
      {
        chargeNumber: 'F00000000000000000000',
        chargeNumberDescription: 'Holiday',
        location: 'VAHN',
        telework: false,
        hours: {
          day0: 0,
          day1: 0,
          day2: 0,
          day3: 0,
          day4: 0,
          day5: 0,
          day6: 0,
          day7: 0,
          day8: 0,
          day9: 0,
          day10: 0,
          day11: 0,
          day12: 0,
          day13: 0,
        }
      }
    ]);
  });

  it('does not add duplicate rows', () => {
    expect(timeReport(defaultState, {
      type: 'ADD_TIME',
      chargeNumber: 'F00000000000000000000',
      location: 'VAHN',
      telework: false
    })).toEqual(defaultState);
  });

  it('can handle changing time', () => {
    expect(timeReport(defaultState, {
      type: 'CHANGE_TIME',
      rowId: 'F00000000000000000000VAHNfalse',
      day: 'day0',
      newHours: 8
    })).toEqual([{
      chargeNumber: 'F00000000000000000000',
      chargeNumberDescription: 'Holiday',
      location: 'VAHN',
      telework: false,
      hours: {
        day0: 8,
        day1: 0,
        day2: 0,
        day3: 0,
        day4: 0,
        day5: 0,
        day6: 0,
        day7: 0,
        day8: 0,
        day9: 0,
        day10: 0,
        day11: 0,
        day12: 0,
        day13: 0,
      }
    }])
  });

  it('ignores time changes that are not entered in quarter hour increments', () => {
    expect(timeReport(defaultState, {
      type: 'CHANGE_TIME',
      rowId: 'F00000000000000000000VAHNfalse',
      day: 'day0',
      newHours: 8.1
    })).toEqual(defaultState);
  });

  it('ignores time changes that are greater than 24 hours', () => {
    expect(timeReport(defaultState, {
      type: 'CHANGE_TIME',
      rowId: 'F00000000000000000000VAHNfalse',
      day: 'day0',
      newHours: 25
    })).toEqual(defaultState);
  });

  it('can handle deleting rows', () => {
    expect(timeReport(defaultState, {
      type: 'DELETE_ROW',
      rowId: 'F00000000000000000000VAHNfalse'
    })).toEqual([]);
  });

});