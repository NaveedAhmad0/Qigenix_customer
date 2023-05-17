import axios from "axios";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import API from "../../../../backend";

const NewToken = () => {
	const history = useHistory();
	const token = localStorage.getItem("token");
	const customer_id = localStorage.getItem("customerId");

	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");

	const onSubmit = () => {
		const data = {
			subject: subject,
			message: message,
			customer_id: customer_id,
			senderId: customer_id,
		};
		try {
			var config = {
				method: "post",
				url: `${API}/users/create-token`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
				data: data,
			};
			axios(config)
				.then(function (response) {
					console.log(response.data);
					alert(response.data.message);
					history.push("/users/list-of-tokens");
				})
				.catch(function (error) {
					console.log(error);
				});
		} catch (error) {
			console.log(error.response.data.totalResponse);
		}
	};

	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					{/* <div className="text-center">
						<img src={logo} alt="" className="loginLogo" />
						<h4 className="loginTittle text-left">Create New Request</h4>
					</div> */}
					<div className="text-center mb-3">
						<h4 className="text-primary">Customer Support available 24x7</h4>
					</div>
					<div className="col-lg-6 mx-auto">
						<div className="auth-form-light loginForm text-left py-5 px-4 px-sm-5">
							{/* <h5 className="text-danger">{errMsg}</h5> */}
							<Form className="pt-3">
								<Form.Group className="mb-4" controlId="formBasicEmail">
									<Form.Label className="loginFormLabel">
										<p>
											<i class="fa-solid fa-envelope"></i> Subject
										</p>
									</Form.Label>
									<Form.Control
										type="email"
										placeholder="Subject"
										onChange={(e) => setSubject(e.target.value)}
										value={subject}
										size="lg"
										className="h-auto rounded-lg border-primary"
									/>
								</Form.Group>
								<Form.Group className="mb-3" controlId="formBasicPassword">
									<Form.Label className="loginFormLabel ">
										<p>
											<i class="fa-solid fa-message"></i> Message
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
											onSubmit(event);
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

export default NewToken;
