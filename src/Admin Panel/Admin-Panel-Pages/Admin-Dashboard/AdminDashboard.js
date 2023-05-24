import React, { useEffect, useState } from "react";
import "./dashboard.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "font-awesome/css/font-awesome.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import { Button, Modal, Row, Col } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import API from "../../../backend";
import { set } from "lodash";

function AdminDashboard() {
	const history = useHistory();
	const customer_id = localStorage.getItem("customerId");
	const token = localStorage.getItem("token");
	const location = useLocation();
	const [numberOfInvoices, setNumberOfInvoices] = useState(0);
	const [deviceStatus, setDeviceStatus] = useState("");
	const [deviceId, setDeviceId] = useState("");
	const [show, setShow] = useState();

	const details = location?.state?.details;

	// const details = localStorage.getItem("data");
	// const device = localStorage.getItem("device");
	// console.log("Detials", details, device);
	// console.log("DAATAAA", JSON.parse(details));
	const fetchInvoiceData = async () => {
		if (details !== undefined) {
			if (details.device.status === "0" || details.device === "Not Assigned") {
				setShow(true);
			}
		}
		// console.log(Object.keys(details).length);
		console.log(details);

		try {
			var config = {
				method: "get",
				url: `${API}/users/getScan/${customer_id}`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			};
			axios(config)
				.then(function (response) {
					setNumberOfInvoices(response.data.count);
					// console.log(response.data.notifications);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};
	const fetchDeviceData = async () => {
		try {
			var config = {
				method: "get",
				url: `${API}/users/getAssignedDevice/${customer_id}`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			};
			axios(config)
				.then(function (response) {
					setDeviceId(response.data.device.device_id);
					setDeviceStatus(
						response.data.device.status === "1" ? "Active" : "Not Active"
					);
					// console.log(response.data.notifications);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchInvoiceData();
		fetchDeviceData();
	}, []);

	return (
		<div className="adminDashboard">
			<Button
				variant="primary"
				style={{ display: "none" }}
				onClick={() => setShow(true)}></Button>
			<Modal
				show={show}
				onHide={() => setShow(true)}
				dialogClassName="modal-90w"
				aria-labelledby="contained-modal-title-vcenter">
				<Modal.Header className="bg-dark text-secondary">
					<Modal.Title className=" text-center m-auto">
						{details?.device?.status === "0" && "* Device Not Active"} &nbsp;
						&nbsp;
						{details?.device === "Not Assigned" && "*Device Not Assigned"}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row className="text-center justify-content-center">
						<Col>
							<p
								className=" text-center m-auto p-3 bg-secondary"
								style={{ width: "17%", borderRadius: "50%" }}>
								<i
									class="fa-solid fa-triangle-exclamation text-warning "
									style={{ fontSize: "45px" }}></i>
							</p>
							<h6 className="mt-4 text-dark  p-2">
								{details?.device?.status === "0" &&
									"Your Device is not active. Kindly request admin to active your device"}
							</h6>
							<h6 className="text-dark  p-2">
								{details?.device === "Not Assigned" &&
									"You do not have any assigned device. Kindly request admin to assign "}
							</h6>
						</Col>
					</Row>
				</Modal.Body>
				<Modal.Footer className="bg-dark text-center">
					<Row className="text-center justify-content-center">
						<Col>
							<button
								className="btn btn-secondary text-dark"
								onClick={() => {
									history.push("/users/login");
									localStorage.clear();
								}}>
								Logout
							</button>
						</Col>
					</Row>
				</Modal.Footer>
			</Modal>
			<div className="container">
				<div className="row">
					<div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section">
						<div
							className="top_stats_wrapper"
							style={{
								background: "#d7eaff",
								borderRight: "5px solid #2196f3",
							}}>
							<div className="d-flex justify-content-between mt-2">
								<div>
									<h4 className="text-primary">Number Of Invoices</h4>
									<h5 style={{ color: "black" }}>{numberOfInvoices}</h5>
								</div>
								<p
									className="text-white py-2 px-3 bg-primary"
									style={{ fontSize: "28px", borderRadius: "10px" }}>
									<i class="fa-solid fa-receipt"></i>
								</p>
							</div>
						</div>
					</div>
					<div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section">
						<div
							className="top_stats_wrapper"
							style={{
								background: "#d4ffd4d4",
								borderRight: "5px solid #19d895",
							}}>
							<div className="d-flex justify-content-between mt-2">
								<div>
									<h4 className="text-success">Device Status</h4>
									<h5
										style={{
											color: deviceStatus === "Active" ? "black" : "red",
										}}>
										{deviceStatus}
									</h5>
								</div>
								<p
									className="text-white py-2 px-3 bg-success"
									style={{ fontSize: "28px", borderRadius: "10px" }}>
									<i class="fa-solid fa-chart-simple"></i>
								</p>
							</div>
						</div>
					</div>
					<div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section">
						<div
							className="top_stats_wrapper"
							style={{
								background: "#ffdfdd99",
								borderRight: "5px solid #ff6258",
							}}>
							<div className="d-flex justify-content-between mt-2">
								<div>
									<h4 className="text-danger">Device ID</h4>
									<h5 style={{ color: "black" }}>{deviceId}</h5>
								</div>
								<p
									className="text-white py-2 px-3 bg-danger"
									style={{ fontSize: "28px", borderRadius: "10px" }}>
									<i class="fa-solid fa-mobile-screen-button"></i>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default AdminDashboard;
