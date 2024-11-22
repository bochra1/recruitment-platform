import { NavLink } from 'react-router-dom';
import * as React from 'react';
// import "./Sidebar.css";

import {
    FaBars,
    FaHome,
    FaAllergies,
    FaRegEye,
    FaFileSignature,
    FaCalendarWeek,
    FaRegChartBar,
    FaBriefcase,
    FaPencilAlt,
    FaTasks
} from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AnimatePresence, motion } from 'framer-motion';
import SideBarMenu from './SideBarMenu';

import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import GroupIcon from '@mui/icons-material/Group';
const routes = [
    {
        path: '/home-recruteur',
        name: 'Tableau de board',
        icon: <FaHome />
    },
    {
        path: '/users   ',
        name: 'Candidats',
        icon: <GroupIcon />
    },
    {
        path: '/offres',
        name: 'Offres',
        icon: <FaBriefcase />,
        subRoutes: [
            {
                path: '/creer-offres',
                name: 'créer ',
                icon: <FaPencilAlt />
            },
            {
                path: '/consulter',
                name: 'consulter',
                icon: <FaRegEye />
            }
        ]
    },

    {
        path: '/évenements',
        name: 'événements',
        icon: <FaCalendarWeek />,
        exact: true,
        subRoutes: [
            {
                path: '/creer-evenements',
                name: 'créer ',
                icon: <FaFileSignature />
            },
            {
                path: '/participer',
                name: 'participer',
                icon: <FaAllergies />
            }
        ]
    },
    {
        path: '/Test',
        name: 'Test',
        icon: <FaTasks />,
        exact: true,
        subRoutes: [
            {
                path: '/creer-test',
                name: 'créer ',
                icon: <FaFileSignature />
            },
            {
                path: '/consulter-test',
                name: 'consulter',
                icon: <FaRegEye />
            }
        ]
    }
];
const SideBar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const inputAnimation = {
        hidden: {
            width: 0,
            padding: 0,
            transition: {
                duration: 0.2
            }
        },
        show: {
            width: '140px',
            padding: '5px 15px',
            transition: {
                duration: 0.2
            }
        }
    };

    const showAnimation = {
        hidden: {
            width: 0,
            opacity: 0,
            transition: {
                duration: 0.5
            }
        },
        show: {
            opacity: 1,
            width: 'auto',
            transition: {
                duration: 0.5
            }
        }
    };
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleChange = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const Navigate = useNavigate();
    const handleClick = () => Navigate('/user-profile');

    return (
        <>
            <div className='main-container'>
                <motion.div
                    animate={{
                        width: isOpen ? '200px' : '45px',

                        transition: {
                            duration: 0.5,
                            type: 'spring',
                            damping: 10
                        }
                    }}
                    className={`sidebar `}
                >
                    <div className='top_section'>
                        <AnimatePresence>
                            {isOpen && (
                                <motion.h1
                                    variants={showAnimation}
                                    initial='hidden'
                                    animate='show'
                                    exit='hidden'
                                    className='logo'
                                >
                                    {' '}
                                </motion.h1>
                            )}
                        </AnimatePresence>

                        <div className='bars'>
                            <FaBars onClick={toggle} />
                        </div>
                    </div>

                    <section className='routes'>
                        {routes.map((route, index) => {
                            if (route.subRoutes) {
                                return (
                                    <SideBarMenu
                                        setIsOpen={setIsOpen}
                                        route={route}
                                        showAnimation={showAnimation}
                                        isOpen={isOpen}
                                    />
                                );
                            }

                            return (
                                <NavLink
                                    to={route.path}
                                    key={index}
                                    className='link'
                                    activeClassName='active'
                                >
                                    <div className='icon'>{route.icon}</div>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                variants={showAnimation}
                                                initial='hidden'
                                                animate='show'
                                                exit='hidden'
                                                className='link_text'
                                            >
                                                {route.name}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </NavLink>
                            );
                        })}
                    </section>
                </motion.div>

                <main>{children}</main>
                <div
                    style={{
                        marginTop: '0.5%',
                        marginLeft: '76em'
                    }}
                >
                    <React.Fragment>
                        <Box
                            style={{ marginRight: '80%' }}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <Tooltip title='Account settings'>
                                <IconButton
                                    onClick={handleChange}
                                    size='small'
                                    sx={{ ml: 30 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup='true'
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            id='account-menu'
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0
                                    }
                                }
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem>
                                <Avatar /> Profile
                            </MenuItem>
                            <MenuItem>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <PersonAdd fontSize='small' />
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize='small' onClick={handleClick} />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem  onClick={()=>{Navigate('/login')}}>
                                <ListItemIcon>
                                    <Logout fontSize='small' />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </React.Fragment>
                </div>
            </div>
        </>
    );
};

export default SideBar;
