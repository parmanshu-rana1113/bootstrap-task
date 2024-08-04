document.addEventListener('DOMContentLoaded', function () {
    const loginLink = document.querySelector('.login');
    const loginPopup = document.getElementById('loginPopup');
    const closePopup = document.getElementById('closePopup');
    const loginForm = document.getElementById('loginForm');

    loginLink.addEventListener('click', function (e) {
        e.preventDefault();
        loginPopup.style.display = 'block';

        console.log("done");
        
    });

    closePopup.addEventListener('click', function () {
        loginPopup.style.display = 'none';

    });

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form submitted successfully!');
        loginPopup.style.display = 'none';
        
    });
});


// register 

document.addEventListener('DOMContentLoaded', function() {
    const registerBtn = document.getElementById('registerBtn');
    const popup1 = document.getElementById('registrationPopup');
    const closeBtn = document.querySelector('.popup1-close');
 
    registerBtn.addEventListener('click', function() {
        popup1.style.display = 'block';
        console.log("done");
    });

    closeBtn.addEventListener('click', function() {
        popup1.style.display = 'none';
    });

    registrationPopup.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Form submitted successfully!');
        loginPopup.style.display = 'none';
        
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === popup1) {
            popup1.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const readMoreButton = document.getElementsByClassName('.readMoreButton');

    readMoreButton.addEventListener('click', function () {
        window.location.href = 'https://squadifypro.com/services/web-designing-service/'; 
    });
});


// let map;

// function initMap() {
    
//     map = new google.maps.Map(document.getElementById('map'), {
//         zoom: 1,
//         center: { lat: 0, lng: 0 }
//     });
// }

// document.addEventListener('DOMContentLoaded', function () {
//     const googleMapsButton = document.getElementById('googleMapsButton');
//     const latitude = 30.1559174;  
//     const longitude = 77.2932973;

//     googleMapsButton.addEventListener('click', function () {
//         const googleMapsUrl = `https://www.google.com/maps/@${latitude},${longitude},15z`;
//         window.location.href = googleMapsUrl;
    

//         map.setZoom(8);  
//         map.setCenter(targetLocation);

    
//         window.setTimeout(function () {
//             map.setZoom(12);
//         }, 1000);

//         window.setTimeout(function () {
//             map.setZoom(15);
//         }, 2000);

//         window.setTimeout(function () {
//             map.setZoom(17);
//         }, 3000);
//     });
// });




document.addEventListener('DOMContentLoaded', function () {
    const eye = document.getElementById('eyes');

    eye.addEventListener('click', function () {
        const passwordInput = document.getElementById('password');
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeImage.src = 'eye.png';

        } else {
            passwordInput.type = 'password';
            eyeImage.src = 'hidden.png';

        }
    });
});


document.addEventListener('DOMContentLoaded', function() {

    const btnreadmore = document.getElementById('btn-readmore1');

    btnreadmore.addEventListener('click', function() {
    
        window.location.href = "https://squadifypro.com/services/shopify-development/";
    });
    
});
