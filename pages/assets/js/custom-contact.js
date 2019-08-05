// Set Variables
const contactSection = document.querySelector('#container-contact');
const contactHeading = document.querySelector('.wrapper');

// Submit form
function submitForm(e) {
    // Get values
    const contactForm = document.querySelector('#contactForm'),
            nameVal = contactForm.name.value,
            phoneVal = contactForm.phone.value,
    // Regexpressions, form validation
          phoneValidation = /^([0-9]{3}[\- ]){2}[0-9]{4}$/,
          lettersValidation = /^[a-z]{2}/gi,
          numbersValidation = /[0-9]/;

    //Validate phone #, spaces at the end will be trimmed
    if (!phoneValidation.test(phoneVal.trim()) & phoneVal !== '') {
        e.preventDefault();

        //create div
        const div = document.createElement('div');
        //insert html
        div.className = 'contactAlert alert-danger p-1 m-3';
        //add text
        div.appendChild(document.createTextNode(`Acceptable number formats: 555-555-5555 & 888 888 8888`));
        //insert before ul
        contactSection.insertBefore(div, contactHeading.nextSibling);

        setTimeout(function(){
            document.querySelector('.contactAlert').remove();
        }, 10000);  
    }
    // Name must have at least two letters, and cannot contain numbers.
    if (lettersValidation.test(nameVal) & !numbersValidation.test(nameVal) || nameVal === '') {
    } else {
        e.preventDefault();
            //create div
            const div = document.createElement('div');
            //insert html
            div.className = 'contactAlert alert-danger p-1 m-3';
            //add text
            div.appendChild(document.createTextNode(`Name must start with at least two letters, and cannot contain numbers.`));
            //insert before ul
            contactSection.insertBefore(div, contactHeading.nextSibling);
    
            setTimeout(function(){
                document.querySelector('.contactAlert').remove();
            }, 10000); 
    }
}

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);