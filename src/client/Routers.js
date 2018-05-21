import React from "react";
import { Home, SignUp, Login, Board, Boards } from './containers/index';
import { Switch , Route, Redirect } from "react-router-dom";
import Header from './containers/Header/Header';



export default store => {
        const { auth: { isAuth }} = store.getState();

        const PrivateRoute = ({ component: Component, ...rest }) => (
            <Route
                {...rest}
                render={props =>
                    isAuth ? (
                        <Component {...props} />
                    ) : (
                        <Redirect
                            to={{
                                    pathname: "login",
                                    state: { from: props.location }
                            }}
                        />
                    )
                }
            />
        );

        return (
        <div>
                <Header/>
                <Route exact path="/" component={Home} />
                <Route path="/signup" component={SignUp} />
                <Route path="/login" component={Login} />
                <Switch >
                        <PrivateRoute path="/boards" exact component={Boards}/>
                        <PrivateRoute path="/boards/:id" component={Board} />
                </Switch>

        </div>
    );
}
