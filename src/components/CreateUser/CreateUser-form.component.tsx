import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';
import { setUser } from './CreateUser.service';
import './CreateUser-form.styles.css';

function CreateUserForm() {
  const submitUser = () => {
    let user = { nickname: '', email: '' };
    setUser(user);
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
              <TextField id="outlined-basic" label="Nickname" variant="outlined" />
              <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            </div>
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" onClick={submitUser}>
            Submit
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
export default CreateUserForm;
