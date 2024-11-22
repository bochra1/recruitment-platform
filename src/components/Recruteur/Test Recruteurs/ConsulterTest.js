import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { red } from '@mui/material/colors';
import SideBar from '../../../components/Recruteur/SideBar/SideBar';

function Data(Name, Candidats, Edit, Delete) {
    return {
        Name,
        Candidats,
        Edit,
        Delete,
        history: [
            {
                date: '2020-01-05',
                customerId: '11091700'
            },
            {
                date: '2020-01-02',
                customerId: 'Anonymous'
            }
        ]
    };
}
// const handleDelete = async (id) => {
//   await axios.delete(`API`);
//   loadUsers();
// };
function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);
    const handleDelete = () => {
        const newProps = [...props];
        newProps.splice();
    };
    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton aria-label='expand row' size='small' onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component='th' scope='row'>
                    {row.name}
                </TableCell>
                <TableCell align='right'>{row.Name}</TableCell>
                <TableCell align='right'>
                    {' '}
                    {row.Candidats}{' '}
                    <ModeEditIcon
                        color='primary'
                        style={{ cursor: 'pointer', fontSize: '35px' }}
                        onClick={() => {
                            console.log('onClick');
                        }}
                    ></ModeEditIcon>
                </TableCell>
                <TableCell align='right'>
                    {row.Edit}{' '}
                    <DeleteIcon
                        style={{ color: 'red', cursor: 'pointer', fontSize: '35px' }}
                        onClick={() => {
                            handleDelete();
                        }}
                    ></DeleteIcon>
                </TableCell>
                <TableCell align='right'>{row.Delete}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout='auto' unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant='h6' gutterBottom component='div'>
                                History
                            </Typography>
                            <Table size='small' aria-label='purchases'>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component='th' scope='row'>
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align='right'></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        Name: PropTypes.number.isRequired,
        Candidats: PropTypes.number.isRequired,
        Edit: PropTypes.number.isRequired,
        Delete: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired
    }).isRequired
};

const rows = [Data(''), Data(''), Data(''), Data(''), Data(' ')];

export default function Consulter() {
    return (
        <div className='form-consulter'>
            {/* <SideBar></SideBar> */}
            <TableContainer component={Paper}>
                <Table aria-label='collapsible table'>
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell align='right'>Playlist</TableCell>
                            <TableCell align='right'>Candidats</TableCell>
                            <TableCell align='right'>Edit</TableCell>
                            <TableCell align='right'>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <Row key={row.Name} row={row} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}
