import CreateUserForm from '../components/Avatar/AvatarCreate/AvatarCreate-form.component';
import AvatarsList from '../components/Avatar/AvatarsList/Avatars-list.component';
import Navbar from '../components/Navbar.component';

function Home() {
  return (
    <div>
      <Navbar />
      <CreateUserForm />
      <AvatarsList />
    </div>
  );
}

export default Home;
