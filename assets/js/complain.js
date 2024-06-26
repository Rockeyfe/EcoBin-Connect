// FORMDATA.HTML

// const complainForm = document.getElementById('complain-form');
// const problemInput = document.getElementById('problem');
// const problemLocationInput = document.getElementById('problem_location');
// const messageInput = document.getElementById('message');
// const emailInput = document.getElementById('email');
// const phoneNumberInput = document.getElementById('phone_number');
// const ratingInput = document.getElementById('rating');
// const imageInput = document.getElementById('image');
// const latitudeInput = document.getElementById('latitude');
// const longitudeInput = document.getElementById('longitude');
// const baseUrl = 'http://localhost:8383/';


// // Get location 
// // Check if geolocation is supported by the browser
// if ("geolocation" in navigator) {
//   // Geolocation is available
//   navigator.geolocation.getCurrentPosition(function(position) {
//       // Get the coordinates
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;

//       // Log or use the coordinates as needed
//       console.log("Latitude:", latitude);
//       console.log("Longitude:", longitude);

//       // Example usage: Display coordinates on a webpage
//       latitudeInput.value = latitude;
//       longitudeInput.value = longitude;
//   }, function(error) {
//       // Handle error cases
//       switch(error.code) {
//           case error.PERMISSION_DENIED:
//               alert("User denied the request for Geolocation.")
//               console.error("User denied the request for Geolocation.");
//               break;
//           case error.POSITION_UNAVAILABLE:
//               alert("Location information is unavailable.")
//               console.error("Location information is unavailable.");
//               break;
//           case error.TIMEOUT:
//               console.error("The request to get user location timed out.");
//               break;
//           default:
//               console.error("An unknown error occurred.");
//               break;
//       }
//   });
// } else {
//   alert("Geolocation is not supported by this browser.")
//   console.error("Geolocation is not supported by this browser.");
// }

// console.log(complainForm);
// complainForm.addEventListener('submit', submitForm)


// async function submitForm(e){
//     e.preventDefault();
//     // loader.classList.remove('hidden');
//     const formFields = {
//       problem: problemInput.value,
//       location: problemLocationInput.value,
//       email: emailInput.value,
//       mobile: phoneNumberInput.value,
//       rating: ratingInput.value,
//       image: imageInput.value,
//       latitude: latitudeInput.value,
//       longitude: longitudeInput.value
//     }
  
//     const url = baseUrl + 'postcomplain'
  
//     const response = await fetch(url, {
//       method: 'POST',
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(formFields)
//     });

//     console.log(response);
  
//     // if (response.ok){
//     //   sentMessage.classList.remove('hidden');
//     //   loader.classList.add('hidden');
      
//     //   setTimeout(() => {
//     //     sentMessage.classList.add('hidden');
//     //   }, 3000)
//     // }
//   }

const jtFooter = document.querySelector('.formFooter');

setTimeout(() => {
    console.log('jtFooter', jtFooter);
}, 2000)