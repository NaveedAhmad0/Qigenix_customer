import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./customerSupport.css";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import API from "../../../backend";
import moment from "moment";

const CustomerSupport = () => {
	const [tableRowsData, setTableRowsData] = useState([]);
	const [subject, setSubject] = useState("");
	const [custId, setCustId] = useState("");
	const [message, setMessage] = useState("");
	const [toggle, setToggle] = useState(false);

	const location = useLocation();
	const token = localStorage.getItem("token");
	const tokenId = location.state.tokenId;

	const fetchData = async () => {
		try {
			var config = {
				method: "get",
				url: `${API}/users/getTokenDetails/${tokenId}`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			};
			axios(config)
				.then(function (response) {
					setTableRowsData(response.data.tokens.tokenMessages);

					setSubject(response.data.tokens.subject);
					setCustId(response.data.tokens.customer_id);
					console.log(response.data.tokens.tokenMessages);
				})
				.catch(function (error) {
					console.log(error.data.tokens.tokenMessages);
				});
		} catch (error) {
			console.log(error.data.tokens.tokenMessages);
		}
	};
	const sendMessage = async (event) => {
		event.preventDefault();
		const data = {
			senderID: custId,
			token_id: tokenId,
			message: message,
		};
		try {
			var config = {
				method: "post",
				url: `${API}/users/send-token-message`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
				data: data,
			};
			axios(config)
				.then(function (response) {
					alert(response.data.message);
					console.log(response.data.message);
					setToggle(!toggle);
					setMessage("");
				})
				.catch(function (error) {
					console.log(error.response.data.tokens.tokenMessages);
				});
		} catch (error) {
			console.log(error.response.data.tokens.tokenMessages);
		}
	};

	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		fetchData();
	}, [toggle]);

	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="col-12 d-flex justify-content-between">
						<h4 className="loginTittle text-left">Customer Support</h4>
						{/* <img src={logo} alt="" className="loginLogo" /> */}
						<Link to={"/users/new-token"}>
							<button className="btn btn-success">New Token</button>
						</Link>
					</div>
					<div className="row mt-5"></div>
					<div className="col-lg-8 ">
						<h5 className="text-primary">Your Messages</h5>
						<div className="auth-form-light messageBox loginForm text-left py-5 px-4 px-sm-5">
							<h4 className="text-black">
								Subject: <span className="h5 text-primary">{subject}</span>{" "}
							</h4>
							<div className="accordion" id="accordionExample">
								{tableRowsData.map((item) => {
									return (
										<div className="row">
											<p
												className={
													item.sentFrom === "user"
														? "message p-1 text-right"
														: item.sentFrom === "admin" &&
														  "message p-1 text-left"
												}>
												{item.message} <br />
												<p style={{ fontSize: "9px" }}>
													{moment(item.createdAt)
														.local()
														.format("DD-MM-YYYY hh:mm:ss ")}
												</p>
											</p>
										</div>
										// <div
										// 	className={
										// 		item.sentFrom === "user" &&
										// 		` text-right accordion-item `
										// 	}>
										// 	<h2 className="accordion-header">
										// 		<button
										// 			className="accordion-button"
										// 			type="button"
										// 			data-bs-toggle="collapse"
										// 			data-bs-target={`#collapse${item.id}`}
										// 			aria-expanded="true"
										// 			aria-controls={`collapse${item.id}`}>
										// 			{item.message}
										// 		</button>
										// 	</h2>
										// 	<div
										// 		id={`collapse${item.id}`}
										// 		className="accordion-collapse collapse show"
										// 		data-bs-parent="#accordionExample">
										// 		<div className="accordion-body">{item.message}</div>
										// 	</div>
										// </div>
									);
								})}

								{/* <div className="accordion-item">
									<h2 className="accordion-header">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseTwo"
											aria-expanded="false"
											aria-controls="collapseTwo">
											Accordion Item #2
										</button>
									</h2>
									<div
										id="collapseTwo"
										className="accordion-collapse collapse"
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<strong>This is the second item's accordion body.</strong>{" "}
											It is hidden by default, until the collapse plugin adds
											the appropriate classes that we use to style each element.
											These classes control the overall appearance, as well as
											the showing and hiding via CSS transitions. You can modify
											any of this with custom CSS or overriding our default
											variables. It's also worth noting that just about any HTML
											can go within the <code>.accordion-body</code>, though the
											transition does limit overflow.
										</div>
									</div>
								</div>
								<div className="accordion-item">
									<h2 className="accordion-header">
										<button
											className="accordion-button collapsed"
											type="button"
											data-bs-toggle="collapse"
											data-bs-target="#collapseThree"
											aria-expanded="false"
											aria-controls="collapseThree">
											Accordion Item #3
										</button>
									</h2>
									<div
										id="collapseThree"
										className="accordion-collapse collapse"
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<strong>This is the third item's accordion body.</strong>{" "}
											It is hidden by default, until the collapse plugin adds
											the appropriate classes that we use to style each element.
											These classes control the overall appearance, as well as
											the showing and hiding via CSS transitions. You can modify
											any of this with custom CSS or overriding our default
											variables. It's also worth noting that just about any HTML
											can go within the <code>.accordion-body</code>, though the
											transition does limit overflow.
										</div>
									</div>
								</div> */}
							</div>
						</div>
					</div>
					<div className="col-lg-4 ">
						<h5 className="text-primary">Chat with admin</h5>
						<div className="auth-form-light loginForm text-left py-3 px-4 px-sm-5">
							<Form className="pt-3">
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label className="loginFormLabel ">
										<p>
											<i className="fa-solid fa-message"></i> Message
										</p>
									</Form.Label>
									<div className="form-group">
										<textarea
											className="form-control"
											id="exampleFormControlTextarea1"
											name="mssage"
											value={message}
											onChange={(event) => setMessage(event.target.value)}
											rows="4"></textarea>
									</div>
								</Form.Group>

								{/* <div className="my-2 d-flex justify-content-between align-items-center">
									<div className="form-check">
										<label className="form-check-label text-muted">
											<input
												type="checkbox"
												className="form-check-input loginRemember"
											/>
											<i className="input-helper"></i>
											Remember me
										</label>
									</div>
								</div> */}

								<div className="mt-1">
									<button
										type="button"
										// href="/admin/dashboard"
										onClick={(event) => {
											sendMessage(event);
										}}
										className="btn btn-primary btn-block rounded-lg loginbtn btn-lg font-weight-medium auth-form-btn">
										Submit
									</button>
								</div>
							</Form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerSupport;
