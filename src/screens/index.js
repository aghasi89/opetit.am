import { Route, Switch, Redirect } from 'react-router-dom';
import Login from '../screens/login/Login';
import Registration from '../screens/registration/Registration';

import App from '../App';
import Error from './Error/Error';

const Home = () => {
    return (
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Registration} />
            <Route path="/404" component={Error} exact />
            <Redirect to="/404" />
        </Switch>
    );
};

export default Home;
