import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IGetNumber } from '@/types/IGetNumber';

export default function BasicTable({data}:{data: IGetNumber[]}) { 
  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Введенное число</TableCell>
            <TableCell>Предыдущее число</TableCell>
            <TableCell>Среднее число</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.number}</TableCell>
              <TableCell>{row.lastNumber}</TableCell>
              <TableCell>{row.averageNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}