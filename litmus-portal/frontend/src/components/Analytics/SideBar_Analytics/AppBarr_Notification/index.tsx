import React from 'react';
import './style.css'
import notificationAppBar from '../../assets/notificationAppBar.png'
import queen from '../../assets/queen.png'
import Avatar from '../../assets/Avatar.png'



const Notification_AppBar: React.FC = () => {
    return (
        <div className='contenier'>
            <div className='notificationIcone'>
                <div className='elipse'></div>
                 <img src={notificationAppBar} />
            </div>
            <div>
                <img src={Avatar} />
            </div>
            <div className='infoUser'>
                <p className='fullname'> <img src={queen} /> Richard Hill</p>
                <p className='owner'>Owner · Flyunder-project-1</p>
            </div>

        </div>
    )
}

export default Notification_AppBar