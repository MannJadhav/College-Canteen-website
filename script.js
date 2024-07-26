document.getElementById('applicationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    document.getElementById('topLeftButton').addEventListener('click', function() {
        alert('Button clicked!');
    });
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;
    const phone = document.getElementById('phone').value; 
    const address = document.getElementById('address').value;
    const course = document.getElementById('course').value;
    const form = document.getElementById('applicationForm');
    const 

    if (name && email && dob && phone && address && course) {
        alert('Application submitted successfully!');
        // Here you can add code to send the form data to the server
    } else {
        alert('Please fill in all fields.');
    }
    
});
