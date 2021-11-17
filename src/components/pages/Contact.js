import React, { useState } from 'react';
import '../../styles/Contact.css';

// Here we import a helper function that will check if the email is valid
import { checkPassword, validateEmail } from '../../utils/helpers';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setUserMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email adress!');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    if (!userName){
      setErrorMessage('Please enter your name!');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }
    if (!userMessage){
      setErrorMessage('Please enter your message!');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setUserMessage('');
    setEmail('');
  };

  return (
    <div className='contact'>
      <h2>Let's talk about your next project!</h2>
      <form className="form contact-column">
      <div class="row">
        <input
          value={userName}
          name="userName"
          onChange={handleInputChange}
          type="text"
          placeholder="Your name"
        />
        </div>
        <div class="row">
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Your e-mail"
        />
        </div>
        <div class="row">
        <textarea
          value={userMessage}
          name="userMessage"
          cols="30" rows="7"
          onChange={handleInputChange}
          type="userMessage"
          placeholder="A brief description of your project.">
        </textarea>
        </div>
        <div class="row">
        <button type="button" onClick={handleFormSubmit}>Send message</button>
        </div>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );
}

export default Contact;
