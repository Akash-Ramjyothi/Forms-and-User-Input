import { useRef, useState } from "react";
import Input from './Input.jsx'

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

        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          value={enteredValues.email}
          onChange={(event) =>
            handleInputChange("email", event.target.value)
          }
          onBlur={() => handleInputBlur("email")}
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          value={enteredValues.password}
          onChange={(event) =>
            handleInputChange("password", event.target.value)
          }
          onBlur={() => handleInputBlur("email")}
        />

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
