import './App.css';
// import Body from './utils/Body';
// import { Offers } from './utils/Offers';
// import { SignIn } from './utils/SignIn';
// import { Help } from './utils/Help';
// import { Cart } from './utils/Cart';

import Header from './utils/Header'
import { Outlet } from 'react-router-dom';
import Footer from './utils/Footer';
// import Collapsible from './utils/Collapsible';

// Provider provided by react-redux,
// Provider helps us to provide Redux appStore to our entire application 
import { Provider } from 'react-redux';
import appStore from './functions.js/appStoreRedux.js';

import UserContext from './functions.js/userContext.js';
import { useState } from 'react';

function App() {

  const [userName, setUserName] = useState('Person 1');
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Provider store={appStore}>
    <UserContext.Provider 
    value={{user : userName, setUserName,
    visible: isVisible, setIsVisible
    }}>
    <Header/>
    <Outlet/>
    {/* <Collapsible /> */}
    <Footer/>
    </UserContext.Provider>
    </Provider>
);
    // Here we are providing appStore to the whole document.
    

  // {/* providing the userContext created,currentUser and setUserName inside the Provider value can be used by the whole document*/}
    
  
}

export default App;
