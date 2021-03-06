import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TableFooter from '@material-ui/core/TableFooter';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import ClearIcon from '@material-ui/icons/Clear';
import ReactLoading from 'react-loading';

import FormDialog from './FormDialog';
import data from '../data/data';
import helpers from '../helpers/helpers';
import { fetchTime } from '../actions/actions';

const CustomTableCell = withStyles(() => ({
  head: {
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  body: {
    fontSize: 14,
  },
  footer: {
    fontSize: 14,
  }
}))(TableCell);

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
let dayIndex = 0;

let isLoading = true;

export class TimeReport extends React.Component {
  handleChangeTime = (row, day) => {
    let newHours = window.prompt('Enter hours for this day:');
    if (newHours % .25 !== 0) {
      alert('Please enter time in quarter-hour increments');
      return;
    } else if (newHours > 24) {
      alert('Please enter a number between 0 and 24');
      return;
    } else if (newHours === '') {
      newHours = 0;
    } else if (newHours === null) {
      return;
    }
    return this.props.changeTime(row, day, parseFloat(newHours));
  };

  handleDeleteRow = (id) => {
    if (window.confirm('Are you sure you want to delete this row?')) return this.props.deleteRow(id);
  };

  componentDidMount() {
    fetchTime()
      .then(results => {
        if (results.type === 'SET_ERROR') {
          this.props.setError();
        } else {
          this.props.resetError();
          isLoading = false;
          this.props.setTime(results);
        }
      });
  }

  render() {
    const {time, open, toggleDialog, addTime, chargeNumber, location, checked, changeChargeNumber, changeLocation, toggleCheck} = this.props;
    return (
      <div style={{display: 'flex', flexDirection: 'column'}} className='center'>
        {isLoading ? <ReactLoading type='bars' className='loading' color='#3f51b5' height={50} width={50} /> : <Table>
          <TableHead>
            <TableRow>
              <CustomTableCell className='table-cell' style={{width: 20}}></CustomTableCell>
              <CustomTableCell className='table-cell'>Charge Number</CustomTableCell>
              <CustomTableCell className='table-cell'>Location</CustomTableCell>
              <CustomTableCell className='table-cell'>Telework</CustomTableCell>
              {data.dates.map(date => <CustomTableCell className='table-cell' key={date}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <span>{days[dayIndex++ % 7]}</span>
                  <span>{date}</span>
                </div>
              </CustomTableCell>)}
              <CustomTableCell className='table-cell'>Total</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {time.map(row => {
              const table = [];
              for (let i = 0; i < 14; i++) {
                const day = 'day' + i;
                table.push(<CustomTableCell 
                  className='table-cell time-cell' 
                  style={{cursor: 'pointer'}} 
                  key={row._id + i} 
                  onClick={() => {this.handleChangeTime(row, day);}}
                >
                  {row.hours[day] === 0 ? '': (row.hours[day]).toFixed(2)}
                </CustomTableCell>);
              }
              return (<TableRow key={row._id} hover={true}>
                <CustomTableCell className='table-cell'>
                  <IconButton onClick={() => this.handleDeleteRow(row._id)} >
                    <ClearIcon />
                  </IconButton>
                </CustomTableCell>
                <CustomTableCell className='table-cell'>
                  <Tooltip id={row._id + 'tooltip'} title={row.chargeNumberDescription} placement='right'>
                    <div style={{width: '65%'}}>
                      {row.chargeNumber}
                    </div>
                  </Tooltip>
                </CustomTableCell>
                <CustomTableCell className='table-cell'>{row.location}</CustomTableCell>
                <CustomTableCell className='table-cell'>{row.telework ? 'Y' : 'N'}</CustomTableCell>
                {table.map(hours => hours)}
                <CustomTableCell className='table-cell'>{helpers.findRowHours(row).toFixed(2)}</CustomTableCell>
              </TableRow>);
            })}
          </TableBody>
          <TableFooter>
            <TableRow>
              <CustomTableCell className='table-cell'></CustomTableCell>
              <CustomTableCell className='table-cell'>Total telework hours: {helpers.findTotalTeleworkHours(time)}</CustomTableCell>
              <CustomTableCell className='table-cell'></CustomTableCell>
              <CustomTableCell className='table-cell'><b>Total: </b></CustomTableCell>
              {data.dates.map(date => {
                const day = 'day' + (data.dates.indexOf(date));
                const total = time.reduce((sum, row) => {
                  return (parseFloat(sum) + parseFloat(row.hours[day])).toFixed(2);
                }, 0);
                return <CustomTableCell className='table-cell' key={date + ' total'}>{total}</CustomTableCell>;
              })}
              <CustomTableCell className='table-cell'><b>{helpers.findTotalHours(time)}</b></CustomTableCell>
            </TableRow>
          </TableFooter>
        </Table>}
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <FormDialog 
            open={open}
            time={time}
            toggleDialog={toggleDialog}
            changeChargeNumber={changeChargeNumber}
            changeLocation={changeLocation}
            toggleCheck={toggleCheck}
            addTime={addTime}
            chargeNumber={chargeNumber}
            location={location}
            checked={checked}
          />
          <Button 
            variant='contained' 
            color='primary' 
            className='add-time'
            style={{margin: 10}}
          >Submit Time Report</Button>
        </div>
      </div>
    );
  }
}

TimeReport.propTypes = {
  time: PropTypes.array,
  open: PropTypes.bool,
  toggleDialog: PropTypes.func,
  addTime: PropTypes.func,
  setTime: PropTypes.func,
  changeTime: PropTypes.func,
  deleteRow: PropTypes.func,
  chargeNumber: PropTypes.string,
  location: PropTypes.string,
  checked: PropTypes.bool,
  changeChargeNumber: PropTypes.func,
  changeLocation: PropTypes.func,
  toggleCheck: PropTypes.func,
  setError: PropTypes.func,
  resetError: PropTypes.func
};

export default TimeReport;