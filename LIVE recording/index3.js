import React from 'react';
import ReactDOM from 'react-dom';


$(document).ready(function(){
    
    var Html = (props)=>{
        let code = <div>
        <h2>Heading 1</h2>
        <h3>Heading 2</h3>
        <h4>Heading 3</h4>
        <h1>Heading 4</h1>
        </div>
        return code};
                

    var root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(<Html />);

});