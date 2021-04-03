import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Header } from "./components/index";
import { connect } from "react-redux";
import {
  Home,
  AboutUs,
  Cart,
  ContactUs,
  Orders,
  Profile,
  TermsCondition,
} from "./pages/index";
import { FooterMobile } from "./components/index";

const ProtectedRoute = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/" />)}
    />
  );
};

const ProtectedProfile = ({ auth, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() => (auth ? <Component /> : <Redirect to="/" />)}
    />
  );
};

function Routes(props) {
  const { user } = props;
  const { isLogged } = user;
  let location = useLocation();
  return (
    <>
      {location.pathname !== "/cart" && <Header />}
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoute exact path="/cart" auth={isLogged} component={Cart} />
        <ProtectedProfile
          exact
          path="/profile"
          auth={true}
          component={Profile}
        />
        <ProtectedRoute
          exact
          path="/orders"
          auth={isLogged}
          component={Orders}
        />
        <ProtectedRoute exact path="/aboutus" auth={true} component={AboutUs} />
        <ProtectedRoute
          exact
          path="/contactus"
          auth={true}
          component={ContactUs}
        />
        <ProtectedRoute
          exact
          path="/termscondition"
          auth={true}
          component={TermsCondition}
        />
      </Switch>
      {location.pathname === "/" && <FooterMobile />}
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Routes);
