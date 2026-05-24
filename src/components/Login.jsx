import { useRef, useState } from "react";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [enteredValues, setEnteredValues] = useState({
    email: "",
    password: "",
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    didEdit.email && !enteredValues.email.includes("@");

  const passwordIsInvalid =
    didEdit.password && enteredValues.password.trim().length < 6;

  const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));

    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));
  };

  const handleInputBlur = (identifier) => {
    setDidEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (emailIsInvalid || passwordIsInvalid) {
      return;
    }

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    console.log("Login Details:", {
      email: enteredEmail,
      password: enteredPassword,
    });

    // Reset form
    setEnteredValues({
      email: "",
      password: "",
    });

    setDidEdit({
      email: false,
      password: false,
    });

    event.target.reset();
  };

  const handleReset = () => {
    setEnteredValues({
      email: "",
      password: "",
    });

    setDidEdit({
      email: false,
      password: false,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>

          <input
            id="email"
            type="email"
            name="email"
            ref={emailRef}
            value={enteredValues.email}
            onChange={(event) =>
              handleInputChange("email", event.target.value)
            }
            onBlur={() => handleInputBlur("email")}
            placeholder="Enter your email"
          />

          {emailIsInvalid && (
            <p className="control-error">
              Please enter a valid email address.
            </p>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
            value={enteredValues.password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            onBlur={() => handleInputBlur("password")}
            placeholder="Enter your password"
          />

          {passwordIsInvalid && (
            <p className="control-error">
              Password must be at least 6 characters long.
            </p>
          )}
        </div>
      </div>

      <p className="form-actions">
        <button
          type="button"
          className="button button-flat"
          onClick={handleReset}
        >
          Reset
        </button>

        <button
          className="button"
          disabled={emailIsInvalid || passwordIsInvalid}
        >
          Login
        </button>
      </p>
    </form>
  );
}
