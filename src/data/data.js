const dates = [
  '6/17',
  '6/18',
  '6/19',
  '6/20',
  '6/21',
  '6/22',
  '6/23',
  '6/24',
  '6/25',
  '6/26',
  '6/27',
  '6/28',
  '6/29',
  '6/30'
]

const chargeNumbers = {
  G0MGC7000000000000000: 'NEW HIRE ORIENTATION',
  G0S000000002000000000: 'SIG Jr-Mid Hiring Dig Anly&Str'
}

const rows = [
  {
    chargeNumber: 'G0MGC7000000000000000',
    chargeNumberDescription: 'NEW HIRE ORIENTATION',
    location: 'VAFC',
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
  },
  {
    chargeNumber: 'G0S000000002000000000',
    chargeNumberDescription: 'SIG Jr-Mid Hiring Dig Anly&Str',
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
  },
]

const info = {
  name: 'Matthew Forjan',
  id: '598403',
  approver: 'Ali Alemi',
  rc: '0ZAD5',
  participation: 100,
  hireDate: '6/18/2018',
  benefitServiceDate: '6/18/2018',
  monthlyPto: 10,
  maxPto: 160,
  cytdPto: 0,
}

const absenceReasons = [
  'Adoption and Surrogacy Leave',
  'Bereavement',
  'Civic Responsibilites',
  'Family & Medical Leave w/o Pay',
  'Holiday',
  'Leave Sharing',
  'Leave w/o Pay',
  'Military Activation Leave',
  'Military Leave - Singapore Staff Only',
  'Military Short Term Leave',
  'Paid Time Off',
  'Parental Leave',
  'Short Term Disability',
  'Special Programs',
  'Unworked Day'
]

let messageId = 0;
const messages = [
  {
    id: messageId++,
    date: '6/19',
    text: 'Your TOL approver has been changed to Ali Alemi.',
  },
  {
    id: messageId++,
    date: '7/3',
    text: 'Reminder: Effective July 2, 2018, to be a TOL Approver you must be approved as a Job Leader and complete the Job Leader People Certification. Questions? Email Propel@bah.com.',
  },
  {
    id: messageId++,
    date: '6/14',
    text: 'Test 1',
  },
  {
    id: messageId++,
    date: '6/11',
    text: 'Test 2',
  },
]

const holidays = [
  {
    name: 'New Year\'s Day',
    date: new Date('January 1, 2018')
  },
  {
    name: 'Martin Luther King, Jr. Day',
    date: new Date('January 15, 2018')
  },
  {
    name: 'President\'s Day',
    date: new Date('February 19, 2018')
  },
  {
    name: 'Memorial Day',
    date: new Date('May 28, 2018')
  },
  {
    name: 'Independence Day',
    date: new Date('July 4, 2018')
  },
  {
    name: 'Labor Day',
    date: new Date('September 3, 2018')
  },
  {
    name: 'Columbus Day',
    date: new Date('October 8, 2018')
  },
  {
    name: 'Veterans\' Day',
    date: new Date('November 12, 2018')
  },
  {
    name: 'Thanksgiving',
    date: new Date('November 22, 2018')
  },
  {
    name: 'Christmas',
    date: new Date('December 25, 2018')
  },
]

const absences = [
  {
    startDate: new Date('December 26, 2018'),
    endDate: new Date('December 28, 2018'),
    absenceReason: 'Paid Time Off',
    travelReason: '',
  },
]

const data = {
  dates, 
  rows, // changes
  info, 
  chargeNumbers, 
  absenceReasons, 
  messages, // changes
  holidays, 
  absences, // changes
};

export default data;