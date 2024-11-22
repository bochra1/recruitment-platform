import { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../utilities/Form";
import { Typography } from "@mui/material";
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [validate, setValidate] = useState({});

  const validateforgotPassword = () => {
    let isValid = true;

    let validator = Form.validator({
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const forgotPassword = (e) => {
    e.preventDefault();

    const validate = validateforgotPassword();

    if (validate) {
      alert("Reset password link is sent to " + email);
      setValidate({});
      setEmail("");
    }
  };

  return (
    <div class="container py-5 h-100" style={{ marginTop: "1px" }}>
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="shadow-sm p-3 mb-5 bg-white rounded">
            {" "}
            <div class="card-body p-5 text-center">
              <div className="auth-body mx-auto">
                <Typography variant="h5">
                  Please enter your email address
                </Typography>
                <br></br>
                <div className="auth-form-container text-start">
                  <form
                    className="auth-form"
                    method="POST"
                    onSubmit={forgotPassword}
                    autoComplete={"off"}
                  >
                    <div className="email mb-3">
                      <input
                        type="email"
                        className={`form-control ${
                          validate.validate && validate.validate.email
                            ? "is-invalid "
                            : ""
                        }`}
                        id="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                      />

                      <div
                        className={`invalid-feedback text-start ${
                          validate.validate && validate.validate.email
                            ? "d-block"
                            : "d-none"
                        }`}
                      >
                        {validate.validate && validate.validate.email
                          ? validate.validate.email[0]
                          : ""}
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn btn-primary w-100 theme-btn mx-auto"
                      >
                        {" "}
                        Send
                      </button>
                    </div>
                  </form>

                  <hr />
                  <div className="auth-option text-center pt-2">
                    <Link className="text-link" to="/login">
                      Back to Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
