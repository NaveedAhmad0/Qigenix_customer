import React, { Component, useEffect, useState } from "react";
import { Dropdown, Form, ListGroup, Button } from "react-bootstrap";
import { Trans } from "react-i18next";
import { useHistory } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pic from "../../assets/images/Ellipse 21.png";
import NotificationModal from "../../Admin Panel/Admin-Panel-Pages/Notification-Modal/NotificationModal";
// import "../../Admin Panel/Admin-Panel-Pages/Notification-Modal/NotificationModal";
import "./navbar.css";
import axios from "axios";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import API from "../../backend";
import moment from "moment";
const Navbar = () => {
	const [tableRowsData, setTableRowsData] = useState([]);
	const [read, setRead] = useState({
		customer_id: "",
	});
	const [hide, setHide] = useState({
		customer_id: "",
	});

	const [allNotifications, setallNotifications] = useState([]);
	const [hideStatus, setHideStatus] = useState(false);
	const token = localStorage.getItem("token");
	const customer_id = localStorage.getItem("customerId");
	const history = useHistory();
	const [count, setCount] = useState(0);
	const [readStatus, setReadStatus] = useState(false);

	const toggleRightSidebar = () => {
		document.querySelector(".right-sidebar").classList.toggle("open");
	};
	const toggleOffcanvas = () => {
		document.querySelector(".sidebar-offcanvas").classList.toggle("active");
	};
	const fetchData = async () => {
		try {
			var config = {
				method: "get",
				url: `https://qigenix.ixiono.com/apis/users/getListOfNotification/${customer_id}`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			};
			axios(config)
				.then(function (response) {
					setTableRowsData(response.data.notifications);
					// console.log(response.data.notifications);
					setCount(response.data.count);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		fetchData();
	}, [readStatus]);
	useEffect(() => {
		fetchData();
	}, [hideStatus]);

	useEffect(() => {
		try {
			var config = {
				method: "post",
				url: `${API}/users/readSomeNotification`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
				data: JSON.stringify([
					{
						id: read.customer_id,
						unread: "1",
					},
				]),
			};
			axios(config)
				.then(function (response) {
					// console.log(response.data);
					setReadStatus(!readStatus);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	}, [read]);
	useEffect(() => {
		try {
			var config = {
				method: "post",
				url: `${API}/users/hideSomeNotification`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
				data: JSON.stringify([
					{
						id: hide.customer_id,
						visible: "1",
					},
				]),
			};
			axios(config)
				.then(function (response) {
					// console.log(response.data);
					setHideStatus(!hideStatus);
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error);
		}
	}, [hide]);

	return (
		<nav className="navbar col-lg-12 col-12 p-lg-0 fixed-top d-flex flex-row">
			<div className="navbar-menu-wrapper d-flex align-items-center justify-content-between">
				<a
					className="navbar-brand brand-logo-mini align-self-center d-lg-none"
					href="!#"
					onClick={(evt) => evt.preventDefault()}>
					<img
						src={require("../../assets/images/Group 220.png")}
						alt="logo"
						style={{ width: "2rem" }}
					/>
				</a>
				<button
					className="navbar-toggler navbar-toggler align-self-center"
					type="button"
					onClick={() => document.body.classList.toggle("sidebar-icon-only")}>
					<i className="mdi mdi-menu"></i>
				</button>
				<ul className="navbar-nav navbar-nav-left header-links align-self-center">
					<li></li>

					{/* <div className="search-box">
						<Form action="">
							<input type="text" name="Search" placeholder="Search..." />
							<button type="submit" class="btn btn-default">
								{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="20px"
									fill="black"
									class="bi bi-search "
									viewBox="0 0 16 16">
									<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
								</svg>
							</button>
						</Form>
					</div> */}
					<li className="nav-item dropdown language-dropdown"></li>
				</ul>

				<ul className="navbar-nav navbar-nav-right dropdwn">
					<li className="nav-item  nav-profile border-0 pl-4">
						<h5 style={{ font: "Roboto" }}>Customer Area</h5>
					</li>
					{/* <li className=" nav-item list">
						<a
							href="#/"
							className="open_newsfeed desktop"
							data-toggle="tooltip"
							title="Share documents, ideas.."
							data-placement="bottom">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="23"
								fill="black Color"
								class="bi bi-share"
								viewBox="0 0 16 16">
								<path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
							</svg>
						</a>
					</li>
					<li className=" nav-item list">
						<a
							href="#/"
							data-toggle="tooltip"
							title="Todo items"
							data-placement="bottom">
							{" "}
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="23"
								class="bi bi-check2"
								fill="black"
								viewBox="0 0 16 16">
								<path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
							</svg>
						</a>
					</li> */}
					<li className="nav-item ">
						<Dropdown>
							<Dropdown.Toggle className="nav-link count-indicator p-0 toggle-arrow-hide bg-transparent">
								<img
									src={pic}
									alt="user"
									className="img img-responsive staff-profile-image-small pull-left"
									style={{ width: "2.5rem" }}
								/>{" "}
							</Dropdown.Toggle>
							<Dropdown.Menu className="navbar-dropdown preview-list">
								<Dropdown.Item
									className="dropdown-item  d-flex align-items-center"
									onClick={(evt) => evt.preventDefault()}>
									<p
										className="mb-0 font-weight-medium float-left"
										onClick={() => {
											localStorage.clear();
											history.push("/users/profile");
										}}>
										Profile
									</p>
								</Dropdown.Item>
								<Dropdown.Item
									className="dropdown-item  d-flex align-items-center"
									href="!#"
									onClick={(evt) => evt.preventDefault()}>
									<p
										className="mb-0 font-weight-medium float-left"
										onClick={() => {
											localStorage.clear();
											history.push("/users/login");
										}}>
										Log Out
									</p>
								</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						{/* <a href="#" className="profile" aria-expanded="false">
							<img
								src={pic}
								className="img img-responsive staff-profile-image-small pull-left"
								style={{ width: "2.5rem" }}
							/>{" "}
						</a> */}
					</li>
					<li className="nav-item  nav-profile border-0">
						<Dropdown>
							<Dropdown.Toggle className="nav-link count-indicator p-1 toggle-arrow-hide bg-transparent">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="22"
									height="23"
									fill="black"
									class="bi bi-bell"
									viewBox="0 0 16 16">
									<path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
								</svg>
								<span className="count">
									{tableRowsData.filter((item) => item.unread !== "1").length}
								</span>
							</Dropdown.Toggle>
							{/*<Dropdown.Menu className="navbar-dropdown preview-list">
								<Dropdown.Item
									className="dropdown-item d-flex align-items-center"
									href="!#"
									onClick={(evt) => evt.preventDefault()}
								>
								<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
								<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
								<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
						
								</Dropdown.Item>
							</Dropdown.Menu>*/}
							<Dropdown.Menu
								className="dropdown-main-menu"
								style={{ maxHeight: "400px", overflowY: "scroll" }}>
								<Dropdown.Item
									className="mark-all p-3"
									onClick={() => {
										axios
											.post(
												`${API}/users/readAllNotification`,
												JSON.stringify({
													customer_id: customer_id,
													unread: "1",
												}),
												{
													headers: {
														"Content-Type": "application/json",
														Authorization: `${token}`,
													},
												}
											)
											.then((res) => {
												// console.log(res.data);
											});
									}}>
									Mark all as read
								</Dropdown.Item>
								{tableRowsData
									?.filter((visible) => visible.visible !== "1")
									.map((item) => {
										return (
											<Dropdown.Item
												// data-bs-toggle="modal"
												// data-bs-target="#exampleModal"
												className="d-flex justify-content-between">
												<div
													onClick={() => {
														setRead({ customer_id: item.id });
														history.push({
															pathname: "/users/notificationmodal",
															state: { item: item },
														});
													}}
													className="d-flex justify-content-between p-2"
													style={{
														opacity:
															item.unread === "0" || item.unread === null
																? "1"
																: "0.4",
													}}>
													<img
														className="user-logo"
														alt=""
														src="https://ixiono.com/crm/assets/images/user-placeholder.jpg"
													/>
													<p className="mt-3 ml-2">
														<span className="font-weight-bold">Admin</span> -{" "}
														{`${item.message.slice(0, 30)}....`}
													</p>
												</div>
												<i
													type="button"
													style={{ zIndex: "999" }}
													onClick={() => {
														// console.log("clicked");
														setHide({ customer_id: item.id });
													}}
													className="fa-solid float-right text-danger fa-xmark"></i>
											</Dropdown.Item>
										);
									})}

								<div
									className="modal fade"
									id="exampleModal"
									tabindex="-1"
									aria-labelledby="exampleModalLabel"
									aria-hidden="true">
									<div className="modal-dialog">
										<div className="modal-content">
											<div className="modal-header">
												<h5 className="modal-title" id="exampleModalLabel">
													Send New Notification
												</h5>
												<button
													type="button"
													className="btn-close"
													data-bs-dismiss="modal"
													aria-label="Close"></button>
											</div>
											<div className="modal-body">
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
																						{/* {details?.message} */}
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
																{/* <p class="text-muted checklist-text">{details.createdAt}</p> */}
															</div>
														</div>

														<div className="col-md-4"></div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<hr className="hr-10"></hr>
								<div>
									<Link to={"/users/NotificationList"}>
										<p className="text-center font-weight-bold text-primary p-1 ml-4">
											View All
										</p>
									</Link>
								</div>
							</Dropdown.Menu>
						</Dropdown>
					</li>
				</ul>
				<button
					className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
					type="button"
					onClick={toggleOffcanvas}>
					<span className="mdi mdi-menu"></span>
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
