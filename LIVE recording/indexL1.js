import React from 'react';
import ReactDOM from 'react-dom';

    // var root = ReactDOM.createRoot(document.getElementById('root'));

    // // syntax => React.createElement(tagname, {attrib calls}, element body)
    // var parentdiv = React.createElement('div', {id:'parentdiv'}, [
    //     React.createElement('div', {id:'child1'}, React.createElement('h3', {id:'Child1head'}, 'Hello world this is h3 tag!!')),
    //     React.createElement('div', {id:'child2'}, React.createElement('h5', {id:'Child2head'}, 'Hello world this is h5 tag!!')),
    //     React.createElement('div', {id:'child3'}, [
    //         React.createElement('h2',{id:'Child3head1'}, 'Hello world this is Child3 head 1!!'),
    //         React.createElement('h2',{id:'Child3head2'}, 'Hello world this is Child3 head 2!!')
    //     ])
    // ]);

    // root.render(parentdiv);


    var Parentdiv = ()=>{
        return (
            // React Fragement => <> </>
            // JSX => HTML like syntax
            <>
            <h1>Hello There!!</h1>
            <h3>Hello World!!</h3>
            <h5>It's been a while!!</h5>

            <table>

            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Course</th>
            </tr>

            <tr>
                <td>01</td>
                <td>Rohan Katyal</td>
                <td>CSE</td>
            </tr>

            <tr>
                <td>02</td>
                <td>Mohd. Haris</td>
                <td>CSE</td>
            </tr>

            <tr>
                <td>03</td>
                <td>Nasir Kamal</td>
                <td>ECE</td>
            </tr>

            <tr>
                <td>04</td>
                <td>Aditya Singh</td>
                <td>EE</td>
            </tr>

            </table>

            </>
        )
    }
        

    var root = ReactDOM.createRoot(document.getElementById('root'));

    root.render(<Parentdiv />);



// npx parcel index_live.html