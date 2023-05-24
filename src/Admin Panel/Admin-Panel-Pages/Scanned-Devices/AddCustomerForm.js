import React from "react";
import { Form } from "react-bootstrap";
import "./addCustomer.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useState, useEffect } from "react";

function AddCustomerForm() {
	const customerId = localStorage.getItem("customerId");
	const deviceId = localStorage.getItem("deviceId");
	const token = localStorage.getItem("token");
	console.log(token, deviceId);
	let newDate = new Date();

	const [inputFields, setInputFields] = useState([
		{ position: "", scan_time: "" },
	]);
	const handleFormChange = (index, event) => {
		let data = [...inputFields];
		data[index][event.target.name] = event.target.value;
		setInputFields(data);
	};
	const [inputFields2, setInputFields2] = useState([{ name: "" }]);
	const handleFormChange2 = (index2, event) => {
		let data = [...inputFields2];
		data[index2][event.target.name] = event.target.value;
		setInputFields2(data);
	};

	const addFields = () => {
		let newfield = { position: "", scan_time: "" };
		setInputFields([...inputFields, newfield]);
		console.log(inputFields);
	};

	const submit = (e) => {
		e.preventDefault();

		const name = inputFields2[0].name;
		const dateTime = inputFields2[0].dateTime;
		const products = inputFields;
		console.log(name, dateTime, products);

		const data = JSON.stringify({
			customer_id: customerId,
			device_id: deviceId,
			patient_name: name,
			products: products,
		});

		console.log(data);
		var config = {
			method: "post",
			url: `https://qigenix.ixiono.com/apis/users/scan-products`,
			headers: {
				Authorization: `${token}`,
				"Content-Type": "application/json",
			},
			data: data,
		};
		axios(config)
			.then(function (response) {
				console.log(JSON.stringify(response.data));
				alert(response.data.message);
			})
			.catch(function (error) {
				console.log(error.response.data);
			});
	};

	const onStartNew = (e) => {
		// e.preventDefault();
		setInputFields("");
		setInputFields2("");
	};

	return (
		<>
			<form>
				<div className="container p-2 px-4 details">
					{inputFields2?.map((input, index2) => {
						return (
							<div key={index2}>
								<div className="row mt-2">
									<div className="col-md-6 m-auto p-2">
										<h6>
											<i class="fa-solid fa-hospital-user me-2 "></i>Patient
											Name
										</h6>
										<input
											type="text"
											name="name"
											className="input"
											value={input.name}
											onChange={(event) => handleFormChange2(index2, event)}
											autoComplete="off"></input>
									</div>
									<div className="col-md-6 m-auto p-2">
										<h6>
											<i class="fa-solid fa-calendar-days me-2"></i>Date & Time
										</h6>
										<input
											type="text"
											name="dateTime"
											className="input"
											value={newDate}
											disabled
											onChange={(event) => handleFormChange2(index2, event)}
											autoComplete="off"></input>
									</div>
								</div>
							</div>
						);
					})}

					<h6
						className="mt-3 pb-3"
						style={{ borderBottom: "1px solid rgb(206, 206, 206)" }}>
						<i class="fa-solid fa-circle-info me-2"></i>Position Details
						<span
							class="ms-5"
							onClick={addFields}
							style={{ border: "none", color: "blue", cursor: "pointer" }}>
							{" "}
							<i class="fa-solid fa-plus"></i>Add More
						</span>
					</h6>

					{inputFields?.map((input, index) => {
						return (
							<div key={index}>
								<div className="row">
									<div className="col-md-6  pt-3 ">
										<h6>
											{" "}
											<i class="fa-solid fa-child me-2"></i> Position
										</h6>
										<input
											name="position"
											className="input"
											value={input.position}
											onChange={(event) => handleFormChange(index, event)}
										/>
									</div>
									<div className="col-md-6  pt-3 ">
										<h6>
											{" "}
											<i class="fa-regular fa-clock me-2"></i>Time Of Exposure{" "}
											<i className="lead small">(In Minutes)</i>
										</h6>
										<input
											name="scan_time"
											className="input"
											value={input.scan_time}
											onChange={(event) => handleFormChange(index, event)}
										/>
									</div>
								</div>
							</div>
						);
					})}
					<div class="row mt-3">
						<div className="col-md-12 text-end">
							<button onClick={submit} className="btn mt-2 btn-primary ">
								Save
							</button>
							{/* <button className="btn mt-2 btn-success ms-4" type="reset">
								Start New
							</button> */}
						</div>
					</div>
				</div>
			</form>
		</>
	);
}

export default AddCustomerForm;
