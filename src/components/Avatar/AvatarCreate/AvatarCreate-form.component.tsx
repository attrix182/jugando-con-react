import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { MuiColorInput } from 'mui-color-input';
import { saveAvatar } from '../Avatar.service';
import React from 'react';
import './AvatarCreate-form.styles.css';
function AvatarCreateForm() {
  const [color, setColor] = React.useState('#ffffff');

  const submitAvatar = () => {
    let avatar = { nickname: '', color: '' };
    avatar.nickname = (document.getElementById('avatar-name') as HTMLInputElement).value;
    avatar.color = color;
    saveAvatar(avatar);
  };

  const handleChange = (color: string) => {
    setColor(color);
  };

  return (
    <div className="container">
      <Card className="card">
        <CardContent>
          <Typography sx={{ fontSize: 24, textAlign: 'center' }} gutterBottom>
            ¡Create your avatar!
          </Typography>
          <Typography component={'div'} variant="body1">
            <div className="form">
              <TextField id="avatar-name" label="Nickname" variant="outlined" />
              <MuiColorInput value={color} onChange={handleChange} />
            </div>
          </Typography>
        </CardContent>

        <CardActions>
          <Button sx={{ margin: 'auto' }} variant="contained" onClick={submitAvatar}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default AvatarCreateForm;
