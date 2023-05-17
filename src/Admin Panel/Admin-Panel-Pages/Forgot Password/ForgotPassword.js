import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./forgotPassword.css";
import logo from "../../../assets/images/logo.png";
import { useHistory, useParams } from "react-router-dom";

const queryParameters = new URLSearchParams(window.location.search);
const id = queryParameters.get("id");

function ForgotPassword() {
	// const { id } = useParams();
	const history = useHistory();
	useEffect(() => {
		localStorage.clear();
		// console.log(API);
	}, []);
	// const [id, setId] = useState("");
	const [password, setpassword] = useState("");
	const [success, setSuccess] = useState(false);
	console.log("ID", id);
	async function onSubmit(event) {
		event.preventDefault();
		console.log("sdkjfshfkshdfkj", password);

		try {
			const response = await axios.post(
				`https://qigenix.ixiono.com/apis/users/forgot-password`,
				JSON.stringify({ id, password }),
				{
					headers: { "Content-Type": "application/json" },
					// withCredentials: true,
				}
			);

			// console.log("mail", email);

			console.log(JSON.stringify(response?.data));

			if (response.data.status === 200) {
				alert(response?.data.message);
				history.push("/users/login");
			}
			setpassword("");
			setSuccess(true);
		} catch (err) {
			console.log(err);
			alert(err.data.message);
			// console.log(email);
		}
		console.log(success);
	}
	// useEffect(() => {
	// 	if (success) {
	// 		alert("You have registered Succesfully!");
	// 	}
	// }, [success]);
	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="text-center">
						{/* <img src={logo} alt="" className="PForgotPasswordLogo" /> */}
						<img
							src={logo}
							className="img-responsive"
							alt="ixiono pte. ltd"
							style={{ height: "70px", width: "200px" }}
						/>
						<br />
					</div>
					<div className="text-center mt-5">
						<h4 className="ptext-primary">Reset Password</h4>
						<br />
					</div>
					<div className="col-lg-4 mx-auto">
						<div className="auth-form-light cardForgot text-left py-10 px-4 px-sm-17">
							<form className="pt-1">
								{/* <div className="form-group">
									<label>Email Address</label>
									<input
										type="email"
										className="form-control Pinput form-control-lg"
										id="exampleInputEmail1"
										onChange={(e) => setId(e.target.value)}
										value={email}
										placeholder="Email Address"
									/>
								</div> */}
								<div className="form-group">
									<input
										type="password"
										className="form-control Pinput form-control-lg"
										id="password"
										placeholder="New Password"
										onChange={(e) => setpassword(e.target.value)}
										value={password}
									/>
								</div>
								{/* <div className="form-group">
									<Link to="/admin/login">
										<h5 className="text-primary">Login?</h5>
									</Link>
								</div> */}

								<div className="mt-3">
									<button
										type="button"
										// href="/admin/dashboard"
										onClick={(event) => {
											onSubmit(event);
										}}
										className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
										submit
									</button>
									<div className="mt-3"></div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ForgotPassword;
