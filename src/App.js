import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'react-loader-spinner';
import AppBar from './components/AppBar';
import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { getIsRefreshingUser } from './redux/auth/auth-selectors';
import s from './App.css';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

export default function App() {
  const dispatch = useDispatch();
  const isRefreshingUser = useSelector(getIsRefreshingUser);
  console.log(isRefreshingUser);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshingUser && (
      <Container>
        <AppBar />

        <Suspense
          fallback={
            <Loader
              style={{ display: 'flex', justifyContent: 'center' }}
              type="Circles"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
              className={s.loader}
            />
          }
        >
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>
            <PublicRoute path="/register" restricted>
              <RegisterView />
            </PublicRoute>
            <PublicRoute path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>

        <ToastContainer autoClose={3000} />
      </Container>
    )
  );
}
