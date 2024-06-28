import './App.css';
import Header from './utils/Header'
// import Body from './utils/Body';
// import { Offers } from './utils/Offers';
// import { SignIn } from './utils/SignIn';
// import { Help } from './utils/Help';
// import { Cart } from './utils/Cart';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <Header/>
    <Outlet />
    </>
  );
}

export default App;
