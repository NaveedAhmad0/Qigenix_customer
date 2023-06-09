import React from "react";
import { Form } from "react-bootstrap";
import "./customerForm.css";

const CustomerForm = () => {
	return (
		<div className="col-12 grid-margin">
			<form className="form-sample">
				{/* <p className="card-description"> Personal info </p> */}
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">
									<span className="text-danger">*</span> Company
								</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">VAT Number</Form.Label>
								<select className="form-control customerInputN">
									<option>Male</option>
									<option>Female</option>
								</select>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Phone</Form.Label>
								<Form.Control
									className="customerInputN"
									type="text"
									placeholder="Keywords"
								/>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Website</Form.Label>

								<Form.Control
									className="customerInputN"
									type="date"></Form.Control>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Groups</Form.Label>

								<Form.Control
									className="customerInputN"
									type="date"></Form.Control>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Currency</Form.Label>

								<select className="form-control customerInputN">
									<option>Category1</option>
									<option>Category2</option>
									<option>Category3</option>
									<option>Category4</option>
								</select>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-4">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Default Language</Form.Label>

								<select className="form-control customerInputN">
									<option>Category1</option>
									<option>Category2</option>
									<option>Category3</option>
									<option>Category4</option>
								</select>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8">
						<div className="form-group">
							<label for="exampleFormControlTextarea1">Address</label>
							<textarea
								className="form-control"
								id="exampleFormControlTextarea1"
								rows="3"></textarea>
						</div>
					</div>
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">City</Form.Label>

								<Form.Control
									className="customerInputN"
									type="date"></Form.Control>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">State</Form.Label>

								<Form.Control
									className="customerInputN"
									type="date"></Form.Control>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Zip Code</Form.Label>

								<Form.Control
									className="customerInputN"
									type="date"></Form.Control>
							</div>
						</Form.Group>
					</div>
					<div className="col-md-8">
						<Form.Group className="row">
							<div className="col-sm-12">
								<Form.Label className=" mb-3">Country</Form.Label>

								<Form.Control
									className="customerInputN"
									type="date"></Form.Control>
							</div>
						</Form.Group>
					</div>
				</div>
				<div className="row">
					<div className="col-md-8 text-right">
						<button className="btn btnCustomerProfileN btn-primary">
							Save
						</button>
					</div>
				</div>
			</form>
			{/* <div className="card">
				<div className="card-body">
					
				</div>
			</div> */}
		</div>
	);
};

export default CustomerForm;
