import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

import { CSVExport } from "react-bootstrap-table2-toolkit";
import ClipLoader from "react-spinners/ClipLoader";

import { useHistory, useLocation } from "react-router-dom";
import API from "../../../backend";
import DeviceForm from "./DeviceInfoForm";
// import BillingForm from "./Billing Form/BillingForm";

function DeviceInfo() {
	const history = useHistory();
	const [loading, setLoading] = useState(false);
	// const [invoiceRefId, setInvoiceRefId] = useState("");

	const customer_id = localStorage.getItem("customerId");
	const token = localStorage.getItem("token");

	const location = useLocation();

	// list.map((list)=>{})
	return (
		<div>
			{/* <MerchantForm /> */}

			{loading ? (
				<div className="row" style={{ height: "500px" }}>
					<div className="col-12 text-center my-auto">
						<ClipLoader color="#136be0" size={100} speedMultiplier={1} />
					</div>
				</div>
			) : (
				<div>
					<div className="row">
						<div className="col-md-12">
							<div className="row">
								{/* <div className="col-md-4 grid-margin">
									<div
										className="page-title-header"
										style={{ fontWeight: "500", fontSize: "17px" }}>
										#{details.message}
									</div>
									<div className="card">
										<div
											className="list-group list-group-flush"
											id="list-tab"
											role="tablist"
											style={{ borderRadius: "5px" }}>
											<a
												className="list-group-item list-group-item-action"
												id="list-home-list"
												data-toggle="list"
												href="#list-home"
												role="tab"
												aria-controls="home">
												Profile
											</a>
											<a
												className="list-group-item list-group-item-action"
												id="list-profile-list"
												data-toggle="list"
												href="#list-profile"
												role="tab"
												aria-controls="profile">
												Contents
											</a>
											<a
												className="list-group-item list-group-item-action"
												id="list-messages-list"
												data-toggle="list"
												href="#list-messages"
												role="tab"
												aria-controls="messages">
												Notes
											</a>
										</div>
									</div>
								</div> */}
								<div className="col-md-8 m-auto">
									<div className="row">
										<div className="col-md-12 grid-margin">
											<div
												className="page-title-header mt-2"
												style={{ fontWeight: "600", fontSize: "20px" }}>
												Device Details
											</div>

											<div className="card" id="#list-home-list">
												<div className="card-body">
													{/*<ul className="nav nav-tabs nav-tabs-bordered pt-3 px-2">
														<li className="nav-item">
															<button
																className="nav-link active"
																data-bs-toggle="tab"
																data-bs-target="#MyTasks">
																Device Details
															</button>
														</li>
													</ul>*/}
													<div className="tab-content pt-2">
														<div
															className="tab-pane fade show active MyTasks"
															id="MyTasks">
															<DeviceForm />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="row"></div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
export default DeviceInfo;
