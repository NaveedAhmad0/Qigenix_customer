import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import API from "../../../backend";

const UserProfile = () => {
  const email = localStorage.getItem("email");

  const [InputFields, setInputFields] = useState();
  const token = localStorage.getItem("token");

  const getData = async () => {
    var config = {
      method: "get",
      url: `https://qigenix.ixiono.com/apis/users/getDetails/${email}`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setInputFields(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data);
        alert(error.response.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  // const updateCustomer = async (event) => {
  // 	event.preventDefault();
  // 	const obj = {
  // 		company: InputFields.company,
  // 		firstName: InputFields.firstName,
  // 		lastName: InputFields.lastName,
  // 		username: InputFields.username,
  // 		vat_number: InputFields.vat_number,
  // 		mobile: InputFields.mobile,
  // 		website: InputFields.website,
  // 		groups: InputFields.groups,
  // 		currency: InputFields.currency,
  // 		language: InputFields.language,
  // 		address: InputFields.address,
  // 		city: InputFields.city,
  // 		state: InputFields.state,
  // 		zipcode: InputFields.zipcode,
  // 		country: InputFields.country,
  // 	};
  // 	var config = {
  // 		method: "put",
  // 		url: `https://qigenix.ixiono.com/apis/uses/getDetails/${email}`,
  // 		headers: {
  // 			"Content-Type": "application/json",
  // 			Authorization: `${token}`,
  // 		},
  // 	};

  // 	axios(config)
  // 		.then(function (response) {
  // 			console.log(JSON.stringify(response.data));

  // 		})
  // 		.catch(function (error) {
  // 			console.log(error.response.data);
  // 			alert(error.response.data);
  // 		});
  // };


  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-4 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
            />
            <span class="font-weight-bold">{InputFields?.firstName}</span>
            <span class="text-black-50">edogaru@mail.com.my</span>
            <span> </span>
          </div>
        </div>
        <div class="col-md-8 border-right">
          <div class="p-3 py-5">
            <div class="d-flex justify-content-between align-items-center mb-3">
              <h4 class="text-right">Profile Settings</h4>
            </div>
            <div class="row mt-2">
              <div class="col-md-6">
                <label class="labels">First Name</label>
                <input
                  type="text"
                  class="form-control"
                
                  name="firstName"
                  value={InputFields?.firstName}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										firstName: e.target.value,
 									});
 								}}
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Last Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="lastName"
                  value={InputFields?.lastName}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										lastName: e.target.value,
 									});
 								}}
                 
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-12">
                <label class="labels">Mobile Number</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter phone number"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Address Line 1</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 1"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Address Line 2</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 2"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Postcode</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 2"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">State</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 2"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Area</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter address line 2"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Email ID</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="enter email id"
                  value=""
                />
              </div>
              <div class="col-md-12">
                <label class="labels">Education</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="education"
                  value=""
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">Country</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="country"
                  value=""
                />
              </div>
              <div class="col-md-6">
                <label class="labels">State/Region</label>
                <input
                  type="text"
                  class="form-control"
                  value=""
                  placeholder="state"
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              <button class="btn btn-primary profile-button" type="button">
                Save Profile
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default UserProfile;
