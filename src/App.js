import React, { Component } from 'react';
import LogIn from './context/LogIn';
import MoviePage from './context/MoviePage';
import UserContext from './context/UserContext';
import CartContext from './context/CartContext';

class App extends Component {
  state = {
    currentUser:{name:''}
  };
  handleLoggedIn = userName =>{
    console.log('Getting user: ' + userName);
    const user = {name:'Scientist Muturi'};
    this.setState({currentUser:user});

  };
  render() {
    return (
      <CartContext.Provider value={{cart :['Muturi','Joseph']}}>
      <UserContext.Provider 
         value={{
           currentUser:this.state.currentUser,
           onLoggedIn:this.handleLoggedIn
         }}>
       <div>
        <MoviePage/>
        <LogIn/>
       </div>
      </UserContext.Provider>
      </CartContext.Provider>
    );
  }
}

export default App;
