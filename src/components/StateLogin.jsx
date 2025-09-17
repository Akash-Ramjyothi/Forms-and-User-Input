import { useRef, useState } from "react";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const [enteredState, setEnteredState] = useState({
    email: '',
    password: ''
  });

  const emailIsValid = enteredState.email !== '' && !enteredState.email.includes('@');

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log("Details: ", enteredState);

    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    console.log("enteredEmail: ", enteredEmail);
    console.log("enteredPassword: ", enteredPassword);
  }

  const handleInputChange = (identifier, value) => {
    setEnteredState((prevState) => ({
      ...prevState,
      [identifier]: value
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>


      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
            ref={email} value={enteredState.email} />

          <div className="control-error">{emailIsValid && <p>Please enter a valid email address.</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onChange={(event) => handleInputChange('password', event.target.value)}
            ref={password} value={enteredState.password} />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
