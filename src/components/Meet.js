import React from 'react';
import SideBar from './Recruteur/SideBar/SideBar';

function Meet() {
    return (
        <React.Fragment>
            <SideBar></SideBar>
            <div style={{ marginLeft: '5%', marginTop: '-2em' }}>
                <iframe
                    allow='camera; microphone; fullscreen; display-capture; autoplay'
                    id='inlineFrameExample'
                    title='Inline Frame Example'
                    width='1400'
                    height='700'
                    src='https://meet.jit.si/RedPensEliminateDowntown'
                ></iframe>
            </div>
        </React.Fragment>
    );
}

export default Meet;
