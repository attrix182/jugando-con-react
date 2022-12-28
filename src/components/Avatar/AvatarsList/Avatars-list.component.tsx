import React, { useEffect } from 'react'
import { getAvatars } from '../Avatar.service';
import AvatarCard from './AvatarCard.component';
import './Avatar.styles.css'

function AvatarsList() {

    const [avatar, setAvatar] = React.useState([{ nickname: '', color: '' }]);

    useEffect(() => {
        getAvatarsStored();
       },[]);

    
    const getAvatarsStored = () => {
      let avatar = getAvatars();
      setAvatar(avatar);
      console.log(avatar);
    };

    return (
        <div className='avatars-container'>
            {avatar.map((avatar) => (
                <AvatarCard key={avatar.nickname}  {...avatar} />
            ))}
        </div>
    )
}

export default AvatarsList;
