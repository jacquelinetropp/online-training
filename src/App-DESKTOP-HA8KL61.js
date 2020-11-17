import React from "react";
import { Route, Switch } from "react-router-dom";

//bootstrap
import "./scss/custom.scss";

//css
import "./App.scss";

//components
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/footer";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Cart from "./pages/Cart";

//firebase
import { auth, createUserProfileDocument } from "./firebase/firebase";
import Plan from "./pages/Plan";

//redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/plan" component={Plan} />
          <Route path="/cart" component={Cart} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
export default connect(null, mapDispatchToProps)(App);
