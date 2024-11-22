import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { MDBInput } from "mdbreact";
import forgot from "../../assets/img/forgot.jpg";
import "./Style.css";

export default function Reset() {
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mendatory")
      .min(8, "Password must be at 8 char long"),
    confirmPwd: Yup.string()
      .required("Password is mendatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }
  return (
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <img
          id="optionalstuff"
          src={forgot}
          style={{
            width: "500px",
            height: "500px",
            padding: "10px",
          }}
        ></img>{" "}
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card-body p-6 text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-outline mb-4">
                <MDBInput
                  hint="New Password"
                  type="password"
                  {...register("password")}
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                />
              </div>
              <div className="invalid-feedback">{errors.password?.message}</div>

              <div class="form-outline mb-4">
                <MDBInput
                  hint="Confirm password"
                  type="password"
                  {...register("confirmPwd")}
                  className={`form-control ${
                    errors.confirmPwd ? "is-invalid" : ""
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.confirmPwd?.message}
                </div>
              </div>

              <button type="submit" class="btn btn-primary btn-block mb-4">
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
