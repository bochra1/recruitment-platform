import React from 'react';

import CVV from '../../../assets/img/CVV.jpg';

import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles.Container3}>
            <div className={styles.Left}>
                <p className={styles.Heading2}>
                    Un<span> CV</span> qui se démarque
                </p>
                <p className={styles.Heading2}>
                    <span> Faites votre propre CV.</span>
                </p>
            </div>
            <div className={styles.Right}>
                <img src={CVV} alt='Resume' />
            </div>
        </div>
    );
}

export default Header;
