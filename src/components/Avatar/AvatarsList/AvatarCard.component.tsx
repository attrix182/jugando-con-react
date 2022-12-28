import { Avatar, Card, Typography } from '@mui/material';
import { AvatarModel } from '../Avatar.model';

function AvatarCard(avatar: AvatarModel) {
  return (
    <div>
      <Card className='card-avatar'>
        <Avatar sx={{ bgcolor: `${avatar.color}` }}>{avatar.nickname[0]}</Avatar>
        <Typography variant="subtitle1" sx={{ textAlign: 'center' }}>
          {avatar.nickname}
        </Typography>
      </Card>
    </div>
  );
}

export default AvatarCard;
