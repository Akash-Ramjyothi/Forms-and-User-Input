import { useRef, useState } from "react";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
};

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const [touchedFields, setTouchedFields] = useState({
    email: false,
    password: false,
  });

  const emailIsInvalid =
    touchedFields.email &&
    formData.email.trim() !== "" &&
    !formData.email.includes("@");

  const passwordIsInvalid =
    touchedFields.password &&
    formData.password.trim().length < 6;

  const formIsValid =
    formData.email.includes("@") &&
    formData.password.trim().length >= 6;

  const handleInputChange = (field, value) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleInputBlur = (field) => {
    setTouchedFields((prevState) => ({
      ...prevState,
      [field]: true,
    }));
  };

  const handleReset = () => {
    setFormData(INITIAL_FORM_STATE);

    setTouchedFields({
      email: false,
      password: false,
    });

    emailRef.current.focus();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setTouchedFields({
      email: true,
      password: true,
    });

    if (!formIsValid) {
      return;
    }

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    console.log("Login Details:", {
      email: enteredEmail,
      password: enteredPassword,
    });

    handleReset();
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
            value={formData.email}
            onChange={(event) =>
              handleInputChange("email", event.target.value)
            }
            onBlur={() => handleInputBlur("email")}
            placeholder="Enter your email"
            autoComplete="email"
            required
          />

          {emailIsInvalid && (
            <div className="control-error">
              <p>Please enter a valid email address.</p>
            </div>
          )}
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            name="password"
            ref={passwordRef}
            value={formData.password}
            onChange={(event) =>
              handleInputChange("password", event.target.value)
            }
            onBlur={() => handleInputBlur("password")}
            placeholder="Enter your password"
            autoComplete="current-password"
            required
          />

          {passwordIsInvalid && (
            <div className="control-error">
              <p>Password must be at least 6 characters long.</p>
            </div>
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
          type="submit"
          className="button"
          disabled={!formIsValid}
        >
          Login
        </button>
      </p>
    </form>
  );
}
