import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/auth/auth-operations';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  return (
    <div>
      <h1>Registration</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            style={styles.label}
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            style={styles.label}
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            style={styles.label}
          />
        </label>

        <button type="submit">Registration</button>
      </form>
    </div>
  );
}
