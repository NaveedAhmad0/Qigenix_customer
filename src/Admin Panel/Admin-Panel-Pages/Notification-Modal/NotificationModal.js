import React, { useEffect, useState } from "react";
import "./NotificationModal.css";
import axios from "axios";
import API from "../../../backend";
import { useLocation } from "react-router-dom";

const NotificationModal = () => {
	const location = useLocation();
	const details = location.state.item;

	const customer_id = localStorage.getItem("customerId");
	const token = localStorage.getItem("token");

	console.log("detaillsss", details);
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-8">
					<div className="mod-content data">
						<div className="mod-header-section d-flex justify-content-between ">
							<h4 className="">Notification Details</h4>
						</div>
						<div className="mod-content-title">
							<h4>
								From :
								<a className="ml-2" href="#/">
									{" "}
									Admin
								</a>
							</h4>
						</div>
						<hr className="hr-10"></hr>
						<div className="mod-description">
							<div className="description-content">
								<h4>Message</h4>
								<div className="task-view-content">
									<ul>
										<li style={{ fontWeight: "400" }}>
											<span style={{ fontWeight: "400" }}>
												{details?.message}
											</span>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<hr className="hr-10"></hr>

						<a href="#/" className="check-icon-text">
							<span class="new-checklist-item">
								<i class="fa fa-plus-circle"></i>
								Created at:
							</span>
						</a>
						<p class="text-muted checklist-text">{details.createdAt}</p>
					</div>
				</div>

				<div className="col-md-4"></div>
			</div>
		</div>
	);
};

export default NotificationModal;
