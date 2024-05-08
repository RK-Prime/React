import React from 'react';
import ReactDOM from 'react-dom';

$(document).ready(function(){
    var root = ReactDOM.createRoot(document.getElementById('root'));

    // syntax => React.createElement(tagname, {attrib calls}, element body)
    var parentdiv = React.createElement('div', {id:'parentdiv'}, [
        React.createElement('div', {id:'child1'}, React.createElement('h3', {id:'Child1head'}, 'Hello world this is h3 tag!!')),
        React.createElement('div', {id:'child2'}, React.createElement('h5', {id:'Child2head'}, 'Hello world this is h5 tag!!')),
        React.createElement('div', {id:'child3'}, [
            React.createElement('h2',{id:'Child3head1'}, 'Hello world this is Child3 head 1!!'),
            React.createElement('h2',{id:'Child3head2'}, 'Hello world this is Child3 head 2!!')
        ])
    ]);

    root.render(parentdiv);
});


// npx parcel index_live.html