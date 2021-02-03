import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
