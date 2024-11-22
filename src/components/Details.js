import { Card, Typography } from '@mui/material';
import { fontWeight } from '@mui/system';
import React from 'react';
import SideBar from './Candidat/SideBar/Sidebar';
import './Details.css';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import 'bootstrap-css-only/css/bootstrap.min.css';
import { Editor } from '@tinymce/tinymce-react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4
};

function Details() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <React.Fragment>
            <SideBar></SideBar>
            <div style={{ marginLeft: '5%' }}>
                <section class='articles'>
                    <div class='article'>
                        <div class='left'>
                            {/* <img src="https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415_1280.jpg" alt=""> */}
                        </div>
                        <div class='right'>
                            <Typography variant='h4'>Description de l'offre</Typography>
                            <p class='description'>
                                En collaboration avec notre équipe marketing et éditorial, vous
                                serez en charge d’enquêter auprès de nos équipes de développement
                                afin de fournir du contenu textuel à destination de nos blog et
                                média sociaux. Vous avez de l’appétence pour les métiers de
                                l’innovation et de la technologie (Cryptomonnaie, Réalité
                                virtuelle/augmentée…) ? Vous êtes dynamique et entreprenant ? Ce
                                poste est fait pour vous. Rejoignez notre équipe jeune et
                                talentueuse.
                            </p>
                            <br></br>
                            <br></br>
                            <Typography variant='h4'>Exigences de l'emploi</Typography>{' '}
                            <label style={{ fontWeight: 'bold', color: 'Black' }}>
                                COMPÉTENCES REQUISES
                            </label>
                            <br></br>
                            *Aisance rédactionnelle <br></br> *Maîtrise parfaite de la langue
                            Française et/ou Anglaise<br></br>
                            *Bonne connaissance de l’environnement web et des tendances/pratiques
                            <br></br>* Maîtrise des outils de bureautique collaboratifs (Google
                            Drive) <br></br>* Expertise en « content management »
                        </div>
                    </div>
                    <div>
                        <div>
                            <Button onClick={handleOpen}>Postuler</Button>
                            <Modal
                                style={{ marginLeft: '20%' }}
                                aria-labelledby='transition-modal-title'
                                aria-describedby='transition-modal-description'
                                open={open}
                                onClose={handleClose}
                                closeAfterTransition
                                BackdropComponent={Backdrop}
                                BackdropProps={{
                                    timeout: 500
                                }}
                            >
                                <Fade in={open}>
                                    <Box sx={style}>
                                        <Typography
                                            id='transition-modal-title'
                                            variant='h6'
                                            component='h2'
                                        >
                                            Postuler pour cette offre
                                        </Typography>
                                        <Typography
                                            id='transition-modal-description'
                                            sx={{ mt: 2 }}
                                        >
                                            <div class='d-flex align-items-start py-3 border-bottom'>
                                                {' '}
                                                <img
                                                    src='https://bootdey.com/img/Content/avatar/avatar7.png'
                                                    class='img'
                                                    alt=''
                                                />
                                                <div
                                                    class='pl-sm-4 pl-2'
                                                    id='img-section'
                                                    style={{ marginLeft: '20%' }}
                                                >
                                                    {' '}
                                                    <b>Sélectionnez votre CV</b>
                                                    <br></br>
                                                    <div
                                                        class='file btn btn-m btn-primary'
                                                        style={{
                                                            position: 'relative',
                                                            overFlow: 'hidden'
                                                        }}
                                                    >
                                                        Upload
                                                        <input
                                                            className='upload'
                                                            type='file'
                                                            name='file'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div class='py-2'>
                                                <div class='row py-2'>
                                                    <div
                                                        class='col-md-6'
                                                        style={{ marginLeft: '20%' }}
                                                    >
                                                        {' '}
                                                        <label for='username'>Votre nom</label>{' '}
                                                        <input
                                                            type='text'
                                                            class='bg-white form-control'
                                                            placeholder=''
                                                        />{' '}
                                                    </div>
                                                </div>
                                                <div class='row py-2'>
                                                    <div
                                                        class='col-md-6'
                                                        style={{ marginLeft: '20%' }}
                                                    >
                                                        {' '}
                                                        <label for='password'>Password</label>{' '}
                                                        <input
                                                            type='password'
                                                            class='bg-white form-control'
                                                            placeholder=''
                                                        />{' '}
                                                    </div>
                                                </div>
                                                <div
                                                    class='d-sm-flex align-items-center pt-3'
                                                    id='deactivate'
                                                ></div>
                                                <label for='username'>Lettre de motivation</label>{' '}
                                                <Editor
                                                    init={{
                                                        plugins: 'table',
                                                        table_default_attributes: {
                                                            border: '10'
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </Typography>
                                        <div class='py-3 pb-4 border-bottom'>
                                            {' '}
                                            <button class='btn btn-primary mr-3'>
                                                Postuler
                                            </button>{' '}
                                            <button class='btn border button'>Annuler</button>{' '}
                                        </div>
                                    </Box>
                                </Fade>
                            </Modal>
                        </div>
                    </div>
                </section>
            </div>
        </React.Fragment>
    );
}

export default Details;
