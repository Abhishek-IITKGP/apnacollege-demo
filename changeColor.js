function changeColor(){
    //Here are we accessing all the h1 elements in the form of an array
    const heading = document.getElementsByTagName('h1');
    
    //here we are selecting the third heading from the array 'heading'
    const thirdHeading = heading[2];

    //giving the third heading color as red.
    thirdHeading.style.color = 'red';

    thirdHeading.style.background = 'green'
}