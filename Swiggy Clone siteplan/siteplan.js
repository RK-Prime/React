import ReactDOM from 'react-dom';
import './App.css';

var Siteplan = ()=>{
    return (
        <div id='plandiv'>
            <h1>Site-Plan</h1>
            <h4 className="heading">Header</h4>
            <ul className="hul">
            <li>Logo</li>
            <li>Navigation Bar
                <ul className="innerul">
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </li>
            </ul>
            <h4 className="heading">Body</h4>
            <ul className="hul">
                <li>Search Component</li>
                <li>Restaurant Cards</li>
            </ul>
            <h4 className="heading">Footer</h4>
            <ul className="hul">
                <li>Copyright</li>
                <li>Links</li>
                <li>Addresses</li>
            </ul>
        </div>
    )
}


var root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Siteplan/>);