import React from "react";
import { Route, Switch } from "react-router-dom";

//bootstrap
import "./scss/custom.scss";

//css
import "./App.scss";

//redux
import { Provider } from "react-redux";
import store from "./redux/store";

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
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
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

      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Provider store={store}>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/plan" component={Plan} />
          <Route path="/cart" component={Cart} />
        </Switch>

        <Footer />
      </Provider>
    );
  }
}

export default App;
