(function(){
    emailjs.init("RbJnchpjuGU3LF_3h"); // Replace with your actual User ID
 })();
 
 function sendEmail() {
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;
     const templateParams = {
         from_email: email,
         to_email: 'rdmdtransportdoo@email.com',
         subject: 'Sending Email using EmailJS',
         message: message,
     };

     emailjs.send('service_ka403lu', 'template_20idsgk', templateParams) // Replace with your actual Service ID and Template ID
         .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
         }, function(error) {
            console.log('FAILED...', error);
         });
 }