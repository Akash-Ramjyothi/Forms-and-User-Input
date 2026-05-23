import { useState } from "react";

const INITIAL_FORM_STATE = {
  email: "",
  password: "",
  confirmPassword: "",
  firstName: "",
  lastName: "",
  role: "student",
  acquisition: [],
  terms: false,
};

export default function Signup() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    if (type === "checkbox" && name === "acquisition") {
      setFormData((prevState) => {
        const updatedAcquisition = checked
          ? [...prevState.acquisition, value]
          : prevState.acquisition.filter((item) => item !== value);

        return {
          ...prevState,
          acquisition: updatedAcquisition,
        };
      });

      return;
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));
  };

  const validateForm = () => {
    const validationErrors = {};

    if (!formData.email.includes("@")) {
      validationErrors.email = "Please enter a valid email address.";
    }

    if (formData.password.trim().length < 6) {
      validationErrors.password =
        "Password must be at least 6 characters long.";
    }

    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword =
        "Passwords do not match.";
    }

    if (!formData.firstName.trim()) {
      validationErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      validationErrors.lastName = "Last name is required.";
    }

    if (!formData.terms) {
      validationErrors.terms =
        "You must agree to the terms and conditions.";
    }

    return validationErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const submissionData = {
      ...formData,
    };

    console.log("🚀 Signup Data:", submissionData);

    setErrors({});
    setFormData(INITIAL_FORM_STATE);

    event.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Welcome on board!</h2>

      <p>
        We just need a little bit of data from you
        to get you started 🚀
      </p>

      <div className="control">
        <label htmlFor="email">Email</label>

        <input
          id="email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          autoComplete="email"
          required
        />

        {errors.email && (
          <p className="control-error">{errors.email}</p>
        )}
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>

          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            autoComplete="new-password"
            required
          />

          {errors.password && (
            <p className="control-error">{errors.password}</p>
          )}
        </div>

        <div className="control">
          <label htmlFor="confirmPassword">
            Confirm Password
          </label>

          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            autoComplete="new-password"
            required
          />

          {errors.confirmPassword && (
            <p className="control-error">
              {errors.confirmPassword}
            </p>
          )}
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="firstName">First Name</label>

          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Enter first name"
            required
          />

          {errors.firstName && (
            <p className="control-error">
              {errors.firstName}
            </p>
          )}
        </div>

        <div className="control">
          <label htmlFor="lastName">Last Name</label>

          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Enter last name"
            required
          />

          {errors.lastName && (
            <p className="control-error">
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="control">
        <label htmlFor="role">
          What best describes your role?
        </label>

        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>

        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            checked={formData.acquisition.includes("google")}
            onChange={handleChange}
          />

          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            checked={formData.acquisition.includes("friend")}
            onChange={handleChange}
          />

          <label htmlFor="friend">
            Referred by friend
          </label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="other"
            name="acquisition"
            value="other"
            checked={formData.acquisition.includes("other")}
            onChange={handleChange}
          />

          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control">
        <label htmlFor="terms">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formData.terms}
            onChange={handleChange}
          />

          I agree to the terms and conditions
        </label>

        {errors.terms && (
          <p className="control-error">{errors.terms}</p>
        )}
      </div>

      <p className="form-actions">
        <button
          type="reset"
          className="button button-flat"
          onClick={() => {
            setFormData(INITIAL_FORM_STATE);
            setErrors({});
          }}
        >
          Reset
        </button>

        <button type="submit" className="button">
          Sign Up
        </button>
      </p>
    </form>
  );
}
