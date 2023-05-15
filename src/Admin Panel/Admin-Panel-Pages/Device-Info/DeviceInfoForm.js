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
				console.log("repsonse", res);
				setDetails(res.data.device);
			});
	}, []);

	console.log(details);

	return (
		<div className="container">
			{Object.keys(details).length > 0 ? (
				<form>
					<div class="form-row">
						<div class="form-group col-md-6">
							<label for="inputEmail4" className="title-01">
								Device Id :
							</label>
							<input
								type="email"
								class="form-control customerInputN no-border "
								id="inputEmail4"
								value={details.device_id}
							/>
						</div>
						<div class="form-group col-md-6">
							<label for="inputEmail4" className="title-01">
								Device Name :
							</label>
							<input
								type="email"
								class="form-control customerInputN no-border"
								id="inputEmail4"
								value={details.device_name}
							/>
						</div>

						<div class="form-group col-md-6">
							<label for="inputEmail4" className="title-01">
								Device Brand :
							</label>
							<input
								type="email"
								class="form-control customerInputN no-border"
								id="inputEmail4"
								value={details.device_brand}
							/>
						</div>
						<div class="form-group col-md-6">
							<label for="inputEmail4" className="title-01">
								Amount($) :
							</label>
							<input
								type="email"
								class="form-control customerInputN no-border"
								id="inputEmail4"
								value={details.amount}
							/>
						</div>

						<div class="form-group col-md-6">
							<label for="inputEmail4" className="title-01">
								Tax :
							</label>
							<input
								type="email"
								class="form-control customerInputN no-border"
								id="inputEmail4"
								value={details.tax_percentage + "%"}
							/>
						</div>
						<div class="form-group col-md-6">
							<label for="inputEmail4" className="title-01">
								Device License Key :
							</label>
							<input
								type="email"
								class="form-control customerInputN no-border"
								id="inputEmail4"
								value={details.device_license_key}
							/>
						</div>

						<div class="form-group col-md-6">
							<label for="inputEmail4" className="title-01">
								Created At :
							</label>
							<input
								type="email"
								class="form-control customerInputN no-border"
								id="inputEmail4"
								value={details.createdAt}
							/>
						</div>
						<div class="form-group col-md-6">
							<label for="inputEmail4" className="title-01">
								Updated At :
							</label>
							<input
								type="email"
								class="form-control customerInputN no-border"
								id="inputEmail4"
								value={details.updatedAt}
							/>
						</div>
					</div>
				</form>
			) : (
				<h5 className="text-center">No Device Assigned</h5>
			)}
		</div>
	);
};

export default DeviceInfoForm;
