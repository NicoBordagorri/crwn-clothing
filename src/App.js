import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'
import {connect} from 'react-redux'
import {Switch,Route,Redirect} from 'react-router-dom'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {setCurrentUser} from './redux/user/user.action'
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'


class App extends React.Component {
  unsuscribeFromAuth = null

  componentDidMount() {
    const {setCurrentUser} = this.props
    this.unsuscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDocument(userAuth)
          userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            })
          })
        } else {
          setCurrentUser(userAuth)
        }
      }
    )
  }

  componentWillUnmount() {
    this.unsuscribeFromAuth()
  }

  

  render() {
    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route path='/shop' component = {ShopPage} />
          <Route exact path='/signin' 
            render= {
                () => this.props.currentUser ? 
                  (<Redirect to='/'/>)
                  : 
                  (<SignInAndSignUp/>) } 
          />
          <Route exact path='/checkout' component= {CheckoutPage}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
