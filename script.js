// This is used for custom error pages or reminders
document.addEventListener("DOMContentLoaded", () => {
  
  // Create a <style> element for custom styles
  const style = document.createElement('style');
  style.textContent = `
    .contact-webmaster-overlay {
      background-color: #002451;
      color: white;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: calc(9999 * 9999 * 9999 * 9999);
      opacity: 0;
      transition: opacity 5s ease-in-out;
    }
    .contact-webmaster-overlay.active {
      opacity: 1;
    }
    .contact-webmaster-inner-wrapper {
      text-align: center;
      padding: 20px;
      max-width: 600px;
      background-color: rgba(0, 0, 0, 0.7);
      border-radius: 10px;
      h1 {
          color: white;
      }
    }
    .contact-button {
      display: inline-block;
      margin-top: 20px;
      border: solid 2px #3bd671;
      padding: 10px 20px;
      background-color: #3bd671;
      color: white !important;
      text-decoration: none !important;
      border-radius: 5px;
      font-weight: bold;
      transition: background-color 5s ease-in-out, color 5s ease-in-out;
    }
    .contact-button:hover {
      background-color: white;
      color: #3bd671 !important;
    }
  `;

  // Append the <style> element to the head
  document.head.appendChild(style);
  
  // Create a new div with a specific class
  const newElement = document.createElement('div');
  newElement.classList.add('contact-webmaster-overlay');
  
  // Create an inner wrapper div
  const innerWrapper = document.createElement('div');
  innerWrapper.classList.add('contact-webmaster-inner-wrapper');
  
  // Create and append a title (h1) inside the inner wrapper
  const title = document.createElement('h1');
  title.textContent = 'Oops! Something went wrong.';
  innerWrapper.appendChild(title);
  
  // Create and append a paragraph inside the inner wrapper
  const paragraph = document.createElement('p');
  paragraph.textContent = "We’re sorry, but it looks like there was an unexpected issue accessing this page. If you need assistance, or have questions about your website, please don't hesitate to contact our support team.";
  innerWrapper.appendChild(paragraph);
  
  // Create and append a button (styled anchor element) with email link inside the inner wrapper
  const button = document.createElement('a');
  button.textContent = 'Contact Support';
  button.href = `mailto:support@carbondigital.us?subject=Support Request - Issue on ${window.location.hostname}&body=Hello Support Team,%0D%0A%0D%0AI encountered an issue on my website page below.%0D%0A%0D%0APage: ${window.location.href}%0D%0A%0D%0APlease let me know if there’s any additional information I can provide.%0D%0A%0D%0AThank you!`;
  button.classList.add('contact-button');
  
  innerWrapper.appendChild(button);
  
  // Append the inner wrapper to the main div
  newElement.appendChild(innerWrapper);

  // Prepend the new element to the body
  document.body.prepend(newElement);

  // Add a 5-second delay before starting the 5-second fade-in transition
  setTimeout(() => {
    newElement.classList.add('active');
  }, 3000); // 3-second delay before the transition starts
});
