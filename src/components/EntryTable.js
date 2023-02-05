import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Launch from '@mui/icons-material/Launch';
import EntryModal from './EntryModal';
import { getCategory } from '../utils/categories';

// Table component that displays entries on home screen

export default function EntryTable({ entries }) {
   return (
      <TableContainer component={Paper}>
         <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
               <TableRow sx={{backgroundColor:"#A2C692"}}>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Description</TableCell>
                  <TableCell align="center">Category</TableCell>
                  <TableCell align="center">Visit Site</TableCell>
                  <TableCell align="center">Edit</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {entries.map((entry) => (
                  <TableRow
                     key={entry.id}
                     sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                     <TableCell component="th" scope="row">
                        {entry.name}
                     </TableCell>
                     <TableCell align="center">{entry.description}</TableCell>
                     <TableCell align="center">{getCategory(entry.category).name}</TableCell>
                     <TableCell align="center"><a href={entry.link} target="_blank" rel="noreferrer"><Launch /></a></TableCell>
                     <TableCell sx={{ "padding-top": 0, "padding-bottom": 0 }} align="center">
                        <EntryModal entry={entry} type="edit" />
                     </TableCell>
                  </TableRow>
               ))}
            </TableBody>
         </Table>
      </TableContainer>
   );
}
