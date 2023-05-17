import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import "./customerSupport.css";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import API from "../../../backend";

const CustomerSupport = () => {
	const [tableRowsData, setTableRowsData] = useState([]);
	const [subject, setSubject] = useState("");
	const [count, setCount] = useState(0);

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
					for (let i = 0; i < response.data.tokens.tokenMessages.length; i++) {
						setCount(count + i);
					}
					setSubject(response.data.tokens.subject);
					console.log(response.data.tokens.tokenMessages);
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
							<div class="accordion" id="accordionExample">
								{tableRowsData.map((item) => {
									return (
										<div class="accordion-item">
											<h2 class="accordion-header">
												<button
													class="accordion-button"
													type="button"
													data-bs-toggle="collapse"
													data-bs-target={`#collapse${count}`}
													aria-expanded="true"
													aria-controls={`collapse${count}`}>
													{item.message}
												</button>
											</h2>
											<div
												id={`collapse${count}`}
												class="accordion-collapse collapse show"
												data-bs-parent="#accordionExample">
												<div class="accordion-body">{item.message}</div>
											</div>
										</div>
									);
								})}

								{/* <div class="accordion-item">
									<h2 class="accordion-header">
										<button
											class="accordion-button collapsed"
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
										class="accordion-collapse collapse"
										data-bs-parent="#accordionExample">
										<div class="accordion-body">
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
								<div class="accordion-item">
									<h2 class="accordion-header">
										<button
											class="accordion-button collapsed"
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
										class="accordion-collapse collapse"
										data-bs-parent="#accordionExample">
										<div class="accordion-body">
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
											// onChange={(event) => handleFormChange(index, event)}
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
											// onSubmit(event);
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
