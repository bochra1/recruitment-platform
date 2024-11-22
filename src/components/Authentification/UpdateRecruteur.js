import React, { useState } from "react";
import "bootstrap-css-only/css/bootstrap.min.css";
import "./Update.css";
import { useForm } from "react-hook-form";
import ImageUploading from "react-images-uploading";
import { Button, IconButton, Input, Typography } from "@mui/material";

export default function UpdateRecruteur() {
  return (
    <div class="wrapper bg-white mt-sm-5">
      <Typography variant="h5" align="center">
        Account Settings
      </Typography>
      <br></br>
      <div class="d-flex align-items-start py-3 border-bottom">
        {" "}
        <img
          src="https://bootdey.com/img/Content/avatar/avatar7.png"
          class="img"
          alt=""
        />
        <div class="pl-sm-4 pl-2" id="img-section">
          {" "}
          <b>Profile Photo</b>
          <br></br>
          <div
            class="file btn btn-m btn-primary"
            style={{ position: "relative", overFlow: "hidden" }}
          >
            Upload
            <input className="upload" type="file" name="file" />
          </div>
        </div>
      </div>
      <div class="py-2">
        <div class="row py-2">
          <div class="col-md-6">
            {" "}
            <label for="username">username</label>{" "}
            <input type="text" class="bg-white form-control" placeholder="" />{" "}
          </div>
          <div class="col-md-6 pt-md-0 pt-3">
            {" "}
            <label for="email">Email Address</label>{" "}
            <input type="email" class="bg-white form-control" placeholder="" />{" "}
          </div>
        </div>
        <div class="row py-2">
          <div class="col-md-6">
            {" "}
            <label for="password">Password</label>{" "}
            <input
              type="password"
              class="bg-white form-control"
              placeholder=""
            />{" "}
          </div>
          <div class="col-md-6 pt-md-0 pt-3">
            {" "}
            <label for="ConfirmPassword">ConfirmPassword</label>{" "}
            <input
              type="password"
              class="bg-white form-control"
              placeholder=""
            />{" "}
          </div>
        </div>
        <div class="row py-2">
          <div class="col-md-6">
            {" "}
            <label for="country"> Name of your company</label>{" "}
            <input type="text" class="bg-white form-control" placeholder="" />
          </div>
          <div class="col-md-6 pt-md-0 pt-3" id="lang">
            {" "}
            <div class="arrow">
              {" "}
              <label for="country"> Phone</label>{" "}
              <input
                type="string"
                class="bg-white form-control"
                placeholder="+216"
              />
            </div>
          </div>
        </div>
        <div class="py-3 pb-4 border-bottom">
          {" "}
          <button class="btn btn-primary mr-3">Save Changes</button>{" "}
          <button class="btn border button">Cancel</button>{" "}
        </div>
        <div class="d-sm-flex align-items-center pt-3" id="deactivate"></div>
      </div>
    </div>
  );
}
