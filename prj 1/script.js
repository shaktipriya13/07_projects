// const buttons1=document.querySelectorAll('.button');
// const body=document.querySelector("body");

// buttons1.forEach(function(button){
//     console.log(button);
//     button.addEventListener('click',function(e){
//         console.log(e);
//         console.log(e.target);

//         if(e.target.id==='green'){
//             body.style.backgroundColor=e.target.id;
//         }
//         else if(e.target.id==='yellow'){
//             body.style.backgroundColor=e.target.id;
//         }
//         else if(e.target.id==='black'){
//             body.style.backgroundColor=e.target.id;
//         }
//         else if(e.target.id==='blue'){
//             body.style.backgroundColor=e.target.id;
//         }
//     })
// });

// Select all elements with the class 'button'
const buttons = document.querySelectorAll('.button'); //gives a nodelist
// Select the <body> element
const body = document.querySelector('body');

// Loop through each button
buttons.forEach((button) => {
    // Add a click event listener to each button
    button.addEventListener('click', (e) => {
        // Get the id of the clicked button
        const color = e.target.id;
        // Set the body's background color to match the button's id
        body.style.backgroundColor = color;
    });
});
