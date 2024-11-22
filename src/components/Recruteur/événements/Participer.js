import React from 'react';
import SideBar from '../../Candidat/SideBar/Sidebar';
import ListEvent from './ListEvent';

export default function Participer() {
    return (
        <div style={{ backgroundColor: '#F8F8FF' }}>
            <SideBar></SideBar>
            <ListEvent></ListEvent>
        </div>
    );
}
