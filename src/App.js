import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import AppBar from './components/AppBar';
// import Container from './components/Container';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { fetchCurrentUser } from './redux/auth/auth-operations';
import { getIsRefreshingUser } from './redux/auth/auth-selectors';

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
      <>
        <AppBar />

        <Suspense fallback={<p>Loading...</p>}>
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
      </>
    )
  );
}
