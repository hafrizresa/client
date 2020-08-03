import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    maxWidth: 700,
  },
  tableContainer: {
    maxWidth: 700
  }
});

export default function SpanningTable({ data, total }) {
  const classes = useStyles();

  return (
    <TableContainer className={classes.tableContainer} component={Paper}>
      <Table className={classes.table} aria-label="spanning table">
        <TableHead>
          <TableRow>
            <TableCell align="left" colSpan={1}>
              Details
            </TableCell>
            <TableCell align="right">Qty</TableCell>
          </TableRow>

        </TableHead>
        <TableBody>
          {
            data.map(value => {
              return (
                <TableRow key={value.id}>
                  <TableCell>{value.title}</TableCell>
                  <TableCell align="right">{value.qty}</TableCell>
                </TableRow>
              )
            })
          }
          <TableRow>
            <TableCell colSpan={1}>Total</TableCell>
            <TableCell align="right">{total}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
