import React from 'react';
import Homepage from './pages/homepage/homepage.component';
import {Switch, Route} from 'react-router-dom';

import './App.css';
import ShopPage from './pages/shop/shop.component';
import Header from './component/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth, createUserProfileDocument } from '../src/firebase/firebase.util'

class App extends React.Component {
  constructor() {
    super();

    this.state= {
      currentUser: null
    }
  }

  unSubscribeFromAuth= null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if( userAuth ){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data()
            }
          });
          console.log(this.state);
        })
        
      } else { 
      this.setState({currentUser: userAuth})
      }
    })
  }

  componentWillUnmount(){
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={ SignInAndSignUp } />
        </Switch>
      </div>
    );
  }
  
}

export default App;
