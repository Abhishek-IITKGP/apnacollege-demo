//here we will create the whole DOM tree using javascript
//first we will mae root node of out document which is HTML
const root = document.createElement("html");
root.lang('en');

//now we will create a head and add title to it
const head = document.createElement('head');
const title = document.createElement('title');
//now a text node is made to put into the title element.
const textNode = document.createTextNode('DOM Tutorials');

//now add the text node into the title element and the title element into the head element.
title.appendChild(textNode);
head.appendChild(title);


//now create a body element
const body = document.createElement('body');
//create a heading elemet and but text node in it
const heading = document.createElement('h1');
//now create a text node that will be go into the heading element.
const text = document.createTextNode('Hellow World!');

//connect these elements and the textNode
body.appendChild(heading.appendChild(text));

//now put the head and body into the root node
root.appendChild(head);
root.appendChild(body);
