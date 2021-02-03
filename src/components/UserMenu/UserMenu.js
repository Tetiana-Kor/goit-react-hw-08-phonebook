import { useSelector, useDispatch } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import { logOut } from '../../redux/auth/auth-operations';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const name = useSelector(getUserName);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <span style={styles.name}>Welcome, {name}!</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
}
