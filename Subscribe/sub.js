function sendMail() {
  // Gather form data
  var email = document.querySelector(".form__email").value;
  var checkbox = document.querySelector(".notice input").checked;

  // EmailJS Service and Template IDs (ensure they are correct)
  const serviceID = "service_ciw9939";
  const templateID = "template_qmdxeeh";

  // Input validation: Ensure email is provided and checkbox is checked
  if (!email) {
    alert("Please enter your email address.");
    return;
  }

  if (!checkbox) {
    alert("You must agree to the terms before subscribing.");
    return;
  }

  var params = {
    email: email,
  };

  // Send email using EmailJS
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      // Clear form field after successful email sending
      document.querySelector(".form__email").value = "";
      document.querySelector(".notice input").checked = false;

      // Log the response and show success alert
      console.log("Subscription successful:", res);

      alert("Subscription Successful !");
    })
    .catch((err) => {
      // Log the error for debugging
      console.error("Failed to send subscription request. Error details:", err);

      // Display an error message to the user
      alert("Failed to subscribe. Please try again.");
    });
}

// Attach event listener to the button
document.querySelector(".form__button").addEventListener("click", sendMail);
