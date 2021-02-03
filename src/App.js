import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

//Redux
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/userActions";

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

//firebase
import { auth, createUserProfileDocument } from "./firebase/firebase";
import Plan from "./pages/Plan";
import Cart from "./pages/Cart";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });

          console.log(this.state);
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
      <Fragment>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/plan" component={Plan} />
          <Route path="/cart" component={Cart} />
        </Switch>

        <Footer />
      </Fragment>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
