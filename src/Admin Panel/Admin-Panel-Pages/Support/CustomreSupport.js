import React from "react";
import { Form } from "react-bootstrap";

const CustomerSupport = () => {
	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="text-center">
						{/* <img src={logo} alt="" className="loginLogo" /> */}
					</div>
					<div className="text-center mt-5">
						<h4 className="loginTittle text-left">Customer Support</h4>
					</div>
					<div className="col-lg-6 mx-auto">
						<h4 className="text-primary">Customer support available 24x7</h4>
						<div className="auth-form-light loginForm text-left py-5 px-4 px-sm-5">
							{/* <h5 className="text-danger">{errMsg}</h5> */}
							<Form className="pt-3">
								<Form.Group className="mb-4" controlId="formBasicEmail">
									<Form.Label className="loginFormLabel">
										<p>
											<i class="fa-solid fa-envelope"></i> Email Address
										</p>
									</Form.Label>
									<Form.Control
										type="email"
										placeholder="Email"
										// onChange={(event) => handleChange(event)}
										// value={email}
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
