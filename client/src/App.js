import React, { lazy, Suspense, useEffect } from "react";
import Header from "./components/header/header.component";
import { GlobalStyled, Container } from "./global.styles";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentUser, checkUserSession } from "./redux/user/user.actions";
import SideDrawer from "./components/navigation/side-drawer/side-drawer.component";
import Spinner from "./components/spinner/spinner.component";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
const Homepage = lazy(() => import("./pages/home/home.component"));
const Shoppage = lazy(() => import("./pages/shop/shop.component"));
const Orderedpage = lazy(() => import("./pages/ordered/ordered.component"));
const AuthPage = lazy(() => import("./pages/auth/auth.component"));
const CheckoutPage = lazy(() => import("./pages/checkout/checkout.component"));
const App = ({ setCurrentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

  return (
    <div>
      <SideDrawer />
      <Header />

      <GlobalStyled />
      <ErrorBoundary>
        <Container>
          <Suspense fallback={<Spinner />}>
            <Switch>
              <Route exact path="/" component={Homepage} />
              <Route path="/shop" component={Shoppage} />
              <Route path="/ordered" component={Orderedpage} />
              <Route path="/auth" component={AuthPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
            </Switch>
          </Suspense>
        </Container>
      </ErrorBoundary>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  checkUserSession: () => dispatch(checkUserSession()),
});
export default connect(null, mapDispatchToProps)(App);
