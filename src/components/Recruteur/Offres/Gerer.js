import 'antd/dist/antd.css';
import './Gerer.css';
import { Button, Table, Modal, Input } from 'antd';
import { useState } from 'react';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import SideBar from '../SideBar/SideBar';
import { Box } from '@mui/material';

function Gerer() {
    const [isEditing, setIsEditing] = useState(false);
    const [editingStudent, setEditingStudent] = useState(null);
    const [dataSource, setDataSource] = useState([
        {
            id: 1,
            name: 'Full Stack Developer',
            email: '3',
            address: '21/03/2022'
        },
        {
            id: 2,
            name: 'Software enginner',
            email: '2',
            address: '05/04/2022'
        },
        {
            id: 3,
            name: 'Senior Backend',
            email: '4',
            address: '06/06/2022'
        },
        {
            id: 4,
            name: 'Sam',
            email: 'sam@gmail.com',
            address: 'Sam Address'
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
            title: 'Les évènements',
            dataIndex: 'name'
        },
        {
            key: '3',
            title: 'Nombre des participants',
            dataIndex: 'email'
        },
        {
            key: '4',
            title: 'Date de création',
            dataIndex: 'address'
        },
        {
            key: '5',
            title: 'Actions',
            render: (record) => {
                return (
                    <>
                        <EditOutlined
                            onClick={() => {
                                onEditStudent(record);
                            }}
                        />
                        <DeleteOutlined
                            onClick={() => {
                                onDeleteStudent(record);
                            }}
                            style={{ color: 'red', marginLeft: 12 }}
                        />
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
                <Button onClick={onAddStudent}>Ajouter un nouveau évènement</Button>
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

export default Gerer;
