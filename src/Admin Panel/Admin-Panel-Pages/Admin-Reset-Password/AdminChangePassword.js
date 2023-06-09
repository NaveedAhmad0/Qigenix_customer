import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
	const [newPassword, setNewPassword] = useState("");
	const [password, setPassword] = useState("");
	const [success, setSuccess] = useState(false);
	const email = localStorage.getItem("email");
	const token = localStorage.getItem("token");

	async function onSubmit(event) {
		event.preventDefault();
		console.log(email, newPassword);
		const data = { password, new_password: newPassword };
		try {
			var config = {
				method: "put",
				url: `https://qigenix.ixiono.com/apis/users/reset-Password/${email}`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
				data: data,
			};
			axios(config).then(function (response) {
				console.log("mail", email);

				console.log(JSON.stringify(response?.data));

				// const accessToken = response?.data?.accessToken;
				// localStorage.setItem("token", response?.data?.accessToken);
				setNewPassword("");
				setSuccess(true);
			});
		} catch (error) {
			console.log(error.data.message);
			alert(error.data.message);
		}
		console.log(success);
	}
	useEffect(() => {
		if (success) {
			alert("Password changed Succesfully!");
		}
	}, [success]);
	return (
		<div>
			<div className="d-flex align-items-center auth px-0">
				<div className="row w-100 mx-0">
					<div className="col-lg-8 mx-auto">
						<div className="auth-form-light text-left py-5 px-4 px-sm-5">
							<h4>Reset Password</h4>
							<form className="pt-3">
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										id="exampleInputEmail1"
										onChange={(e) => setPassword(e.target.value)}
										value={password}
										placeholder="Old Password"
									/>
								</div>
								{/* <div className="form-group">
									<input
										type="email"
										className="form-control form-control-lg"
										id="exampleInputEmail1"
										onChange={(e) => setEmail(e.target.value)}
										value={email}
										placeholder="Email"
									/>
								</div> */}
								<div className="form-group">
									<input
										type="password"
										className="form-control form-control-lg"
										id="password"
										placeholder="New Password"
										onChange={(e) => setNewPassword(e.target.value)}
										value={newPassword}
									/>
								</div>

								<div className="mt-3">
									<button
										href="/admin/login"
										onClick={(event) => onSubmit(event)}
										className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn">
										Reset Password
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ResetPassword;
