import helpers from '../../helpers/helpers';

const sampleData = [
  {
    chargeNumber: 'Test',
    chargeNumberDescription: 'Test',
    location: 'Test',
    telework: false,
    hours: {
      day0: 8,
      day1: 0,
      day2: 4,
      day3: 0,
      day4: 0,
      day5: 0,
      day6: 9,
      day7: 0,
      day8: 0,
      day9: 0,
      day10: 2.5,
      day11: 0,
      day12: 0,
      day13: 0,
    }
  },
  {
    chargeNumber: 'Test',
    chargeNumberDescription: 'Test',
    location: 'Test',
    telework: true,
    hours: {
      day0: 0,
      day1: 5,
      day2: 0,
      day3: 0,
      day4: 6,
      day5: 0,
      day6: 0,
      day7: 0,
      day8: 0,
      day9: 1.25,
      day10: 0,
      day11: 0,
      day12: 0,
      day13: 0,
    }
  },
];

const sampleData2 = [
  {
    chargeNumber: 'Test',
    chargeNumberDescription: 'Test',
    location: 'Test',
    telework: false,
    hours: {
      day0: 8,
      day1: 0,
      day2: 4,
      day3: 0,
      day4: 0,
      day5: 0,
      day6: 9,
      day7: 0,
      day8: 0,
      day9: 0,
      day10: 2.5,
      day11: 0,
      day12: 0,
      day13: 0,
    }
  },
  {
    chargeNumber: 'Test',
    chargeNumberDescription: 'Test',
    location: 'Test',
    telework: false,
    hours: {
      day0: 0,
      day1: 5,
      day2: 0,
      day3: 0,
      day4: 6,
      day5: 0,
      day6: 0,
      day7: 0,
      day8: 0,
      day9: 1.25,
      day10: 0,
      day11: 0,
      day12: 0,
      day13: 0,
    }
  },
];

describe('helpers', () => {

  it('finds the total hours for one time row', () => {
    expect(helpers.findRowHours(sampleData[0])).toEqual(23.5)
  });
  
  it('finds the total hours for one time sheet', () => {
    expect(helpers.findTotalHours(sampleData)).toEqual(35.75)
  });

  it('returns 0 for an empty time sheet', () => {
    expect(helpers.findTotalHours([])).toEqual(0)
  })

  it('finds the total telework hours for one time sheet', () => {
    expect(helpers.findTotalTeleworkHours(sampleData)).toEqual(12.25)
  });

  it('returns 0 when there are no telework hours', () => {
    expect(helpers.findTotalTeleworkHours(sampleData2)).toEqual(0)
  });

})