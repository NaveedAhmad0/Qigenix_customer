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

 const updateCustomer = async (event) => {
 	event.preventDefault();
    const id=InputFields.id
    console.log(id)
 	const obj = {
 		company: InputFields.company,
 		firstName: InputFields.firstName,
 		lastName: InputFields.lastName,
 		username: InputFields.username,
 		vat_number: InputFields.vat_number,
 		mobile: InputFields.mobile,
 		website: InputFields.website,
 		groups: InputFields.groups,
 		currency: InputFields.currency,
 		language: InputFields.language,
 		address: InputFields.address,
 		city: InputFields.city,
 		state: InputFields.state,
 		zipcode: InputFields.zipcode,
 		country: InputFields.country,
        status:InputFields.status,
        billAddress: InputFields.billAddress,
        billCity: InputFields.billCity,
        billState:InputFields.billState,
        billZipcode:InputFields.billZipcode,
        billCountry:InputFields.billCountry
 	};
  
 var config = {
 	method: "put",
 	url: `https://qigenix.ixiono.com/apis/users/edit-customer/${id}`,
 	headers: {
 		"Content-Type": "application/json",
 		Authorization: `${token}`,
 	},
    data:obj
 };

 axios(config)
 	.then(function (response) {
 		console.log(JSON.stringify(response.data));
        alert(response.data.message)

 	})
 	.catch(function (error) {
 		console.log(error.response.data);
 		alert(error.data.message);
 	});
 };


  return (
    <div class="container rounded bg-white mt-5 mb-5">
      <div class="row">
        <div class="col-md-4 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5">
            <img
              class="rounded-circle mt-5"
              width="150px"
              src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
              alt=""
            />
            <span class="font-weight-bold">{InputFields?.firstName}</span>
            <span class="text-black-50">{InputFields?.email}</span>
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
                <label class="labels">Customer ID</label>
                <input
                  type="text"
                  class="form-control"
                  name="customer_id"
                  disabled
                  value={InputFields?.customer_id}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										customer_id: e.target.value,
 									});
 								}}
                />
              </div>
              <div class="col-md-6">
                <label class="labels">User Name</label>
                <input
                  type="text"
                  class="form-control"
                  name="username"
                  disabled
                  value={InputFields?.username}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										username: e.target.value,
 									});
 								}}
                 
                />
              </div>
            </div>
            <div class="row mt-3">
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
                  name="mobile"
                  value={InputFields?.mobile}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										mobile: e.target.value,
 									});
 								}}
                />
              </div>
              <div class="col-md-12 mt-3">
                <label class="labels">Email</label>
                <input
                  type="text"
                  class="form-control"
                  name="email"
                  disabled
                  value={InputFields?.email}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										email: e.target.value,
 									});
 								}}
                />
              </div>
              <div class="row mt-3">
              <div class="col-md-4">
                <label class="labels">Company</label>
                <input
                  type="text"
                  class="form-control"
                  name="company"
                  value={InputFields?.company}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										company: e.target.value,
 									});
 								}}
                />
              </div>
              <div class="col-md-4">
                <label class="labels">vat Number</label>
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
              <div class="col-md-4">
                <label class="labels">Group</label>
                <input
                  type="text"
                  class="form-control"
                  name="groups"
                  value={InputFields?.groups}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										groups: e.target.value,
 									});
 								}}
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">Currency</label>
                <input
                  type="text"
                  class="form-control"
                  name="currency"
                  value={InputFields?.currency}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										currency: e.target.value,
 									});
 								}}
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Language</label>
                <input
                  type="text"
                  class="form-control"
                  name="language"
                  value={InputFields?.language}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										language: e.target.value,
 									});
 								}}
                 
                />
              </div>
            </div>
              <div class="col-md-12 mt-3">
                <label class="labels">Address </label>
                <input
                  type="text"
                  class="form-control"
                  name="address"
                  value={InputFields?.address}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										address: e.target.value,
 									});
 								}}
                />
              </div>
              <div class="col-md-12 mt-3">
                <label class="labels">Website</label>
                <input
                  type="text"
                  class="form-control"
                  name="website"
                  value={InputFields?.website}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										website: e.target.value,
 									});
 								}}
                />
              </div>

              <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">City</label>
                <input
                  type="text"
                  class="form-control"
                  name="city"
                  value={InputFields?.city}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										city: e.target.value,
 									});
 								}}
                />
              </div>
              <div class="col-md-6">
                <label class="labels">state</label>
                <input
                  type="text"
                  class="form-control"
                  name="state"
                  value={InputFields?.state}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										state: e.target.value,
 									});
 								}}
                 
                />
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-md-6">
                <label class="labels">Zip Code</label>
                <input
                  type="text"
                  class="form-control"
                  name="zipcode"
                  value={InputFields?.zipcode}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										zipcode: e.target.value,
 									});
 								}}
                />
              </div>
              <div class="col-md-6">
                <label class="labels">Country</label>
                <input
                  type="text"
                  class="form-control"
                  name="country"
                  value={InputFields?.country}
 								onChange={(e) => {
 									setInputFields({
 										...InputFields,
 										country: e.target.value,
 									});
 								}}
                 
                />
              </div>
            </div>
            <div class="mt-5 text-center">
              <button class="btn btn-primary profile-button" type="button" onClick={updateCustomer}>
                Save Profile
              </button>
            </div>
          </div>
        </div>
       
      </div>
    </div>
    </div>
  );
};

export default UserProfile;
