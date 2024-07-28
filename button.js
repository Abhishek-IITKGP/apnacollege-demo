function changeContent(){
    //here i have accessed the header
    const head = document.getElementsByTagName('h2').item(0);
    head.firstChild.data = 'This is a dynamic heading';

    //now access the paragraph
    const para = document.getElementsByTagName('p').item(0);
    para.firstChild.data = 'this is the first paragraph';

    //this is the text for second paragraph
    const newPara = document.createTextNode('this is the second paragraph');
    //new element is made to become te second paragrpah
    const newElement = document.createElement('p');

    newElement.appendChild(newPara);
    //now with this we have a element within that we added a text node.

    //now append this new node in the parent node of paragraph so that all the paragraph node is now connected to the parent node of the paragraph.
    para.parentNode.appendChild(newElement);
}