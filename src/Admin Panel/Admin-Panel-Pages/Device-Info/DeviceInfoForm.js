import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./DeviceInfoForm.css";
import axios from "axios";
import moment from "moment";
import API from "../../../backend";

const DeviceInfoForm = () => {
	// const details = location.state.details;
	// console.log("DETAILSSS", details.device);
	const customer_id = localStorage.getItem("customerId");
	const token = localStorage.getItem("token");
	const [details, setDetails] = useState({});

	useEffect(() => {
		axios
			.get(`${API}/users/getAssignedDevice/${customer_id}`, {
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			})
			.then((res) => {
				console.log("repsonse", res.data);
				setDetails(res.data.device);
			});
	}, []);

	return (
		<div className="col-12 grid-margin">
			<form className="form-sample">
				{/* <p className="card-description"> Personal info </p> */}
				<div className="row mt-2">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">
									<span className="text-danger">*</span> Device Id
								</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.device_id}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Device Name</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.device_name}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">device Brand</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.device_brand}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Amount($)</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.amount}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Tax</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.tax_percentage + "%"}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Device License Key</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.device_license_key}
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Created At</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.createdAt}
								/>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Updated At</Form.Label>

								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
									value={details.updatedAt}
								/>
							</div>
						</Form.Group>
					</div>
				</div>

				<div className="row">
					<div className="col-md-8 text-right">
						<button className="btn btnCustomerProfileN btn-primary">
							Save
						</button>
					</div>
				</div>
			</form>
			{/* <div className="card">
				<div className="card-body">
					
				</div>
			</div> */}
		</div>
	);
};

export default DeviceInfoForm;
