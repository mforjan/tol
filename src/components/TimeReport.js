import React from 'react';
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

import FormDialog from './FormDialog';
import data from '../data/data';
import helpers from '../helpers/helpers';

const CustomTableCell = withStyles(theme => ({
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

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
let dayIndex = 0;

const TimeReport = ({time, open, toggleDialog, addTime, changeTime, deleteRow, checked, toggleCheck}) => {
  return (
    <div>
      <Table>
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
            let rowId = row.chargeNumber + row.location + row.telework
            const table = []
            for (let i = 0; i < 14; i++) {
              const day = 'day' + i;
              table.push(<CustomTableCell 
                className='table-cell' 
                style={{cursor: 'pointer'}} 
                key={rowId + i} 
                onClick={() => {changeTime(row.chargeNumber, row.location, row.telework, day)}}
              >
                {row.hours[day] === 0 ? '': (row.hours[day]).toFixed(2)}
              </CustomTableCell>)
            }
            return (<TableRow key={rowId} hover={true}>
              <CustomTableCell className='table-cell'>
                <IconButton onClick={() => deleteRow(rowId)} >
                  <ClearIcon />
                </IconButton>
              </CustomTableCell>
              <CustomTableCell className='table-cell'>
                <Tooltip id={rowId + 'tooltip'} title={row.chargeNumberDescription} placement='right'>
                  <div style={{width: '65%'}}>
                    {row.chargeNumber}
                  </div>
                </Tooltip>
              </CustomTableCell>
              <CustomTableCell className='table-cell'>{row.location}</CustomTableCell>
              <CustomTableCell className='table-cell'>{row.telework ? 'Y' : 'N'}</CustomTableCell>
              {table.map(hours => hours)}
              <CustomTableCell className='table-cell'>{helpers.findRowHours(row).toFixed(2)}</CustomTableCell>
            </TableRow>)
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
                return (parseFloat(sum) + parseFloat(row.hours[day])).toFixed(2)
              }, 0)
              return <CustomTableCell className='table-cell' key={date + ' total'}>{total}</CustomTableCell>
            })}
            <CustomTableCell className='table-cell'><b>{helpers.findTotalHours(time)}</b></CustomTableCell>
          </TableRow>
        </TableFooter>
      </Table>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <FormDialog 
          open={open}
          toggleDialog={toggleDialog}
          toggleCheck={toggleCheck}
          addTime={addTime}
          changeTime={changeTime}
          checked={checked}
        />
        <Button 
          variant='contained' 
          color='primary' 
          className='add-time'
          style={{margin: 10}}
          onClick={() => console.log(time)}
        >Submit Time Report</Button>
      </div>
    </div>
  )
}

export default TimeReport;