import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './ListEvent.css';
import SocialCard from './SocialCard';

function ListEvent() {
    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        (async () => {
            let userData;
            try {
                const response = await fetch('https://randomuser.me/api/?results=10');
                userData = await response.json();
            } catch (error) {
                console.log(error);
                userData = [];
            }
            setAllUsers(userData.results);
            setUsers(userData.results);
        })();
    }, []);

    return (
        <div className='cards-container'>
            {users.map((user, index) => (
                <SocialCard key={index} userData={user} />
            ))}
        </div>
    );
}

export default ListEvent;
