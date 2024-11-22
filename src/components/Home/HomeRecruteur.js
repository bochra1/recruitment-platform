import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import './HomeRecruteur.css';
import Addjob from '../../assets/img/Addjob.jpg';
import Addevent from '../../assets/img/Addevent.jpg';
import jobs from '../../assets/img/jobs.jpg';
import candidates from '../../assets/img/candidates.jpg';
import editUser from '../../assets/img/editUser.jpg';
import SideBar from '../Recruteur/SideBar/SideBar';
import { useNavigate } from 'react-router';
export default function HomeRecruteur() {
    const Navigate = useNavigate();
    const handleClick = () => Navigate('/creer-offres');
    const handleChange = () => Navigate('/creer-evenements');
    const onClick = () => Navigate('/consulter  ');
    const onChange = () => Navigate('/recruteur-profile  ');
    return (
        <div>
            <SideBar></SideBar>{' '}
            <Grid
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    placeContent: 'center',
                    justifyContent: ' center'
                }}
            >
                <Card
                    className='Card'
                    sx={{ minWidth: 200 }}
                    style={{ boxShadow: '4px 4px 28px 4px rgba(0, 0, 0, 0.1)' }}
                    onClick={handleClick}
                >
                    <CardContent>
                        <img src={Addjob} />

                        <Typography variant='h5' textAlign={'center'}>
                            Ajouter une offre
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    className='Card'
                    sx={{ minWidth: 200 }}
                    style={{ boxShadow: '4px 4px 28px 4px rgba(0, 0, 0, 0.1)' }}
                    onClick={handleChange}
                >
                    <CardContent>
                        <img src={Addevent} />
                        <Typography variant='h5' textAlign={'center'}>
                            Ajouter un événement
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    className='Card'
                    sx={{ minWidth: 200 }}
                    style={{ boxShadow: '4px 4px 28px 4px rgba(0, 0, 0, 0.1)' }}
                    onClick={onClick}
                >
                    <CardContent>
                        <img src={jobs} />
                        <Typography variant='h5' textAlign={'center'}>
                            5 offres d'emploi
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    placeContent: 'center',
                    justifyContent: ' center'
                }}
            >
                <Card
                    className='Card'
                    sx={{ minWidth: 200 }}
                    style={{ boxShadow: '4px 4px 28px 4px rgba(0, 0, 0, 0.1)' }}
                    onClick={onClick}
                >
                    <CardContent>
                        <img src={candidates} />
                        <Typography variant='h5' textAlign={'center'}>
                            12 candidats postulants{' '}
                        </Typography>
                    </CardContent>
                </Card>
                <Card
                    className='Card'
                    sx={{ minWidth: 200 }}
                    style={{
                        boxShadow: '4px 4px 28px 4px rgba(0, 0, 0, 0.1)'
                    }}
                    onClick={onChange}
                >
                    <CardContent>
                        <img
                            src={editUser}
                            style={{
                                marginLeft: '20%'
                            }}
                        />
                        <br></br>
                        <br></br>

                        <Typography variant='h5' textAlign={'center'}>
                            profil/modifier{' '}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}
