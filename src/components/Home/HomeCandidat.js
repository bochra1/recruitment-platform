import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import './HomeCandidat.css';
import postuler from '../../assets/img/postuler.jpg';
import participe from '../../assets/img/participe.jpg';
import postulation from '../../assets/img/postulation.jpg';
import tests from '../../assets/img/tests.jpg';
import editUser from '../../assets/img/editUser.jpg';
// import SideBar from '../../../Candidat/SideBar/Sidebar';
import { useNavigate } from 'react-router';
import SideBar from '../Candidat/SideBar/Sidebar';
export default function HomeCandidat() {
    const Navigate = useNavigate();
    const handleClick = () => Navigate('/creer-offres');
    const handleChange = () => Navigate('/creer-evenements');
    const onClick = () => Navigate('/consulter  ');
    const onChange = () => Navigate('/recruteur-profile  ');
    return (
        <div>
            <SideBar></SideBar>
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
                        <img src={postuler} />

                        <Typography variant='h5' textAlign={'center'}>
                            Postuler pour une offre
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
                        <img src={participe} />
                        <Typography variant='h5' textAlign={'center'}>
                            Participer à un événement
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
                        <img src={postulation} />
                        <Typography variant='h5' textAlign={'center'}>
                            5 offres postulées
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
                        <img src={tests} />
                        <Typography variant='h5' textAlign={'center'}>
                            <br></br> Mes tests réalisés{' '}
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
                            Modifier mon CV{' '}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    );
}
