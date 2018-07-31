import absences from '../../reducers/absences';
import data from '../../data/data';

const defaultState = [
  {
    startDate: new Date('December 26, 2018'),
    endDate: new Date('December 28, 2018'),
    absenceReason: 'Paid Time Off',
    travelReason: '',
  },
];

describe('absences', () => {

  it('has a default state', () => {
    expect(absences(undefined, { type: 'N/A' })).toEqual(data.absences);
  });

  it('can handle adding an absence', () => {
    expect(absences(defaultState, {
      type: 'ADD_ABSENCE',
      startDate: new Date('11/26/18'),
      endDate: new Date('11/28/18'),
      absenceReason: undefined,
      travelReason: 'Vacation'
    })).toEqual([
      ...defaultState,
      {
        startDate: new Date('11/26/18'),
        endDate: new Date('11/28/18'),
        absenceReason: undefined,
        travelReason: 'Vacation'
      }
    ])
  });

  it('can handle deleting an absence', () => {
    expect(absences(defaultState, {
      type: 'DELETE_ABSENCE',
      startDate: new Date('12/26/18'),
      endDate: new Date('12/28/28')
    })).toEqual([])
  });

})