import messages from '../../reducers/messages';
import data from '../../data/data';

const defaultState = [
  {
    id: 1,
    date: '6/14',
    text: 'Test 1',
  },
  {
    id: 2,
    date: '6/11',
    text: 'Test 2',
  },
];

describe('messages', () => {

  it('has a default state', () => {
    expect(messages(undefined, { type: 'N/A' })).toEqual(data.messages)
  })

  it('can delete messages', () => {
    expect(messages(defaultState, {
      type: 'DELETE_MESSAGE',
      id: 1
    })).toEqual([{
      id: 2,
      date: '6/11',
      text: 'Test 2'
    }])
  });

});