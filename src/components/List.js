import React from 'react';
import 'antd/dist/antd.css';
// import './list.css';
import { Button, Table, Modal, Input } from 'antd';
import { useState } from 'react';
import { Box } from '@mui/material';
import SideBar from './Recruteur/SideBar/SideBar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const options = ['Planifier une réunion', 'Lancer une réunion'];

const ITEM_HEIGHT = 50;

function List() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: 'Matrouh Rania',
            email: 'matrouh.ranya.11@gmail.com',
            address: '+216 50 625 093'
        },
        {
            id: 2,
            name: 'Kriouane Adem',
            email: 'Kriouane.adem@gmail.com',
            address: '+216 50 896 322'
        },
        {
            id: 3,
            name: 'ala ben said ',
            email: 'alabensaid@gmail.com',
            address: '+216 50 940 077'
        },
        {
            id: 4,
            name: 'Naima ghedir',
            email: 'Naima.ghedir@gmail.com',
            address: '+216 24 441 538'
        }
    ]);
    const columns = [
        {
            key: '1',
            title: 'ID',
            dataIndex: 'id'
        },
        {
            key: '2',
            title: 'Les Candidats',
            dataIndex: 'name'
        },
        {
            key: '3',
            title: 'Email',
            dataIndex: 'email'
        },
        {
            key: '4',
            title: 'Téléphone',
            dataIndex: 'address'
        },
        {
            key: '5',
            title: 'Actions',
            render: (record) => {
                return (
                    <>
                        <IconButton
                            aria-label='more'
                            id='long-button'
                            aria-controls={open ? 'long-menu' : undefined}
                            aria-expanded={open ? 'true' : undefined}
                            aria-haspopup='true'
                            onClick={handleClick}
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id='long-menu'
                            MenuListProps={{
                                'aria-labelledby': 'long-button'
                            }}
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            PaperProps={{
                                style: {
                                    maxHeight: ITEM_HEIGHT * 4.5,
                                    width: '20ch',
                                    // -webkit-box-shadow: none;
                                    // -moz-box-shadow: none;
                                    boxShadow: '5px 10px white',
                                    border: ' 1px solid #F0F0F0'
                                }
                            }}
                        >
                            {options.map((option) => (
                                <MenuItem
                                    key={option}
                                    selected={option === 'Pyxis'}
                                    onClick={handleClose}
                                >
                                    {option}
                                </MenuItem>
                            ))}
                        </Menu>
                    </>
                );
            }
        }
    ];

    const onAddStudent = () => {
        const randomNumber = parseInt(Math.random() * 1000);
        const newStudent = {
            id: randomNumber,
            offre: 'Name ' + randomNumber,
            email: randomNumber + '@gmail.com',
            address: 'Address ' + randomNumber
        };
        setDataSource((pre) => {
            return [...pre, newStudent];
        });
    };
    const onDeleteStudent = (record) => {
        Modal.confirm({
            title: 'Êtes-vous sûr de vouloir supprimer cet évènement?',
            okText: 'Oui',
            okType: 'danger',
            onOk: () => {
                setDataSource((pre) => {
                    return pre.filter((student) => student.id !== record.id);
                });
            }
        });
    };
    const onEditStudent = (record) => {
        setIsEditing(true);
        setEditingStudent({ ...record });
    };
    const resetEditing = () => {
        setIsEditing(false);
        setEditingStudent(null);
    };
    return (
        <div className='bx'>
            <SideBar></SideBar>
            <header className='bx-header'>
                <Box style={{ width: '70%', left: '1%', marginBottom: '60%' }}>
                    <Table
                        style={{ marginTop: '5%' }}
                        columns={columns}
                        dataSource={dataSource}
                    ></Table>
                </Box>
                <Modal
                    style={{ marginLeft: '30%' }}
                    title='Edit Student'
                    visible={isEditing}
                    okText='Save'
                    onCancel={() => {
                        resetEditing();
                    }}
                    onOk={() => {
                        setDataSource((pre) => {
                            return pre.map((student) => {
                                if (student.id === editingStudent.id) {
                                    return editingStudent;
                                } else {
                                    return student;
                                }
                            });
                        });
                        resetEditing();
                    }}
                >
                    <label style={{ fontWeight: 'bold' }}>Nom de l'évènement</label>

                    <Input
                        value={editingStudent?.name}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, name: e.target.value };
                            });
                        }}
                    />
                    <label style={{ fontWeight: 'bold' }}>Date de l'évènement</label>

                    <Input
                        value={editingStudent?.email}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, email: e.target.value };
                            });
                        }}
                    />
                    <label style={{ fontWeight: 'bold' }}>Adresse</label>

                    <Input
                        value={editingStudent?.address}
                        onChange={(e) => {
                            setEditingStudent((pre) => {
                                return { ...pre, address: e.target.value };
                            });
                        }}
                    />
                    <label style={{ fontWeight: 'bold' }}>Téléphone</label>
                    <Input
                    // value={editingStudent?.address}
                    // onChange={(e) => {
                    //     setEditingStudent((pre) => {
                    //         return { ...pre, address: e.target.value };
                    //     });
                    // }}
                    />
                </Modal>
            </header>
        </div>
    );
}

export default List;
