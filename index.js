function addingEventListener() {
    const button = document.getElementById('button');
    
    button.addEventListener('click', function() {
        // This function will be executed when the button is clicked
        console.log('Button clicked!');
    });
}

// Don't forget to call the outer function to set up the event listener
addingEventListener();