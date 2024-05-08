// import logo from './logo.svg';
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

function App2(){
    var root = ReactDOM.createRoot(document.getElementById('root'));

    var th = (id,data)=>{
        var th_ele = React.createElement('th', {id:`${id}`}, `${data}`);
        return th_ele
    }

    var td = (id, data)=>{
        var td_ele = React.createElement('td', {id:`${id}`}, `${data}`);
        return td_ele
    }

    var student1 = React.createElement('tr', {id:'idrow'},
    [td('01', '01'),td('name1', 'Rohan'),td('crs1', 'BTech.'),td('br1', 'CSE')]
    );


    var student2 = React.createElement('tr', {id:'namerow'}, 
    [td('02', '02'),td('name2', 'Ramesh'),td('crs2', 'MTech.'),td('br2', 'CSIT')]
    );

    var student3 = React.createElement('tr', {id:'courserow'},
    [td('03', '03'),td('name3', 'Rajeev'),td('crs3', 'BCA'),td('br3', 'CSE'),]
    );

    var student4 = React.createElement('tr', {id:'branchrow'},
    [td('04', '04'),td('name4', 'Rajesh'),td('crs4', 'MCA'),td('br4', 'CSE')]
    );

    var table = React.createElement('table', {id:'studenttable'},[
        // Table Head and Row element variables
        React.createElement('tr', {id:'tablehead'}, [
            th('id', 'Id'),
            th('name', 'Name'),
            th('course', 'Course'),
            th('branch', 'Branch'),
        ]),
        student1,
        student2,
        student3,
        student4
    ]);


    var pdiv = React.createElement('div', {id:'pdiv'}, [
        React.createElement('h1',{id:'heading'}, 'Table Heading'),
        // Table variable
        table
    ]);

    root.render(pdiv);
};



// function App(){
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );}

export default App2;
