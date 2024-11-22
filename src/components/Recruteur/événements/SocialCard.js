import './SocialCard.css';
import Location from './Location';
import Phone from './Phone';
import { Button } from '@mui/material';

const SocialCard = ({ userData }) => {
    return (
        <div className='card'>
            <div className='card__title'>
                {userData.name.first} {userData.name.last}
            </div>
            <div className='card__body'>
                <Location location={userData.location} />
                <Phone number={userData.phone} type='Home' />
                <Phone number={userData.cell} type='Cell' />
                {/* <img src={userData.picture.medium} /> */}
                <div className='card__image'>
                    <Button variant='contained'>Participer</Button>
                </div>
            </div>{' '}
        </div>
    );
};

export default SocialCard;
