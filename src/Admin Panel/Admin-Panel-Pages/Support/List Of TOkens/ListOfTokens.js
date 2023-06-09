import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ClipLoader from "react-spinners/ClipLoader";
import DataTable from "react-data-table-component";
import { CSVLink, CSVDownload } from "react-csv";

import moment from "moment";
import Pdf from "react-to-pdf";

import { useHistory } from "react-router-dom";

import "./ListOfTokens.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import API from "../../../../backend";

function ListOfTokens() {
	const [tableRowsData, setTableRowsData] = useState([]);
	const [rowData, setRowData] = useState();
	const ref = React.createRef();

	const [search, setSearch] = useState("");
	const [Filtered, setFiltered] = useState([]);
	const [loading, setLoading] = useState(false);
	const [toggle, setToggle] = useState(false);
	const [toggle2, setToggle2] = useState(true);
	const [senderId, setSenderId] = useState("");

	const customer_id = localStorage.getItem("customerId");
	const token = localStorage.getItem("token");
	const history = useHistory();

	const disableToken = async (token_id, status) => {
		const obj = {
			senderID: customer_id,
			token_id: token_id,
			tokenStatus: status === "0" ? "1" : "0",
		};

		try {
			var config = {
				method: "post",
				url: `https://qigenix.ixiono.com/apis/users/close-reopen`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
				data: obj,
			};
			axios(config)
				.then(function (response) {
					setToggle2(!toggle2);
					alert(response.data.message);
				})
				.catch(function (error) {
					console.log(error.response.data);
				});
		} catch (error) {
			console.log(error.response.data);
		}
	};

	const fetchData = async () => {
		try {
			var config = {
				method: "get",
				url: `${API}/users/getTokens/${customer_id}`,
				headers: {
					"Content-Type": "application/json",
					Authorization: `${token}`,
				},
			};
			axios(config)
				.then(function (response) {
					setTableRowsData(response.data.tokens);
					console.log(response.data.tokens);
					setFiltered(response.data.tokens);
				})
				.catch(function (error) {
					console.log(error.data.tokens);
				});
		} catch (error) {
			console.log(error.data.tokens);
		}
	};
	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		fetchData();
	}, [toggle2]);

	useEffect(() => {}, [tableRowsData]);

	useEffect(() => {
		const result = tableRowsData?.filter((tables) => {
			return tables.scan_id.toLowerCase().match(search.toLowerCase());
		});
		setFiltered(result);
	}, [search]);

	const customStyles = {
		headCells: {
			style: {
				borderRight: "0.1rem solid #D9D9D9 !important",
				fontFamily: "Roboto",
				fontStyle: "normal",
				fontWeight: "400",
				fontSize: "12px",
				lineHeight: "18px",
			},
		},
		row: {
			fontFamily: "Roboto",
			fontStyle: "normal",
			fontWeight: "400",
			fontSize: "12px",
			lineHeight: "18px",
		},
	};

	const headerResponsive = [
		{
			name: "Ticket Id",
			selector: "token_id",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
		},

		{
			name: "Customer Id",
			selector: "customer_id",
			sortable: true,
			style: {
				color: "#4E7AED",
			},
		},
		{
			name: "Subject",
			selector: "subject",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
		},
		{
			name: "Active",
			cell: (row) => [
				<div class="form-check form-switch text-center">
					<input
						class="form-check-input"
						type="checkbox"
						role="switch"
						name="status"
						id="flexSwitchCheckChecked"
						checked={row.tokenStatus === "1" ? true : false}
						onClick={() => disableToken(row.token_id, row.tokenStatus)}></input>
				</div>,
			],
			sortable: false,
		},
		{
			name: "Ticket Status",
			// selector: "tokenStatus",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
			cell: (row) => [
				<span>{row.tokenStatus === "1" ? "Open" : "Closed"}</span>,
			],
		},

		{
			name: "Created At",
			// selector: "createdAt",
			sortable: false,
			style: {
				color: "#4E7AED",
			},
			cell: (d) => {
				return moment(d.createdAt).local().format("DD-MM-YYYY hh:mm:ss ");
			},
		},
		{
			name: "Action",
			style: {
				fontSize: "18px",
			},
			cell: (row) => [
				<i
					class="fa-solid fa-circle-info text-primary mx-2"
					style={{ cursor: "pointer" }}
					onClick={() => {
						// eslint-disable-next-line no-restricted-globals
						history.push({
							pathname: "/users/token-details",
							state: { tokenId: row.token_id },
						});
					}}></i>,
				// <i
				// 	class="fa-solid fa-trash text-danger mx-2"
				// 	style={{ cursor: "pointer" }}></i>,
			],
		},

		// {
		// 	name: "Product",
		// 	style: {
		// 		fontSize: "18px",
		// 	},
		// 	cell: (row) => [
		// 		<p
		// 			onClick={() => {
		// 				setToggle(!toggle);
		// 				setRowData(row);
		// 			}}
		// 			class="badge bg-warning"
		// 			style={{ cursor: "pointer" }}>
		// 			{row.products.length}
		// 		</p>,
		// 	],
		// },
	];

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
						<div className="col-12 d-flex justify-content-between mb-4">
							<h4 className="loginTittle text-left">Customer Support</h4>
							{/* <img src={logo} alt="" className="loginLogo" /> */}
							<Link to={"/users/new-token"}>
								<button className="btn btn-success">New Token</button>
							</Link>
						</div>
						<div className={toggle ? "col-md-12" : "col-12"}>
							<div className="row">
								<div className="col-md-12 grid-margin">
									<div className="card">
										<div className="card-body">
											{/* <hr style={{ border: "1px #EAEDF1" }}></hr> */}
											<div className="row page-title-header">
												<div className="col-12">
													<div
														class="btn-group btn-group-toggle"
														data-toggle="buttons">
														<label
															class="btn active"
															style={{
																borderRight: "1px solid #D9D9D9",
																color: "#475569",
																fontFamily: "Roboto",
																fontStyle: "normal",
																fontWeight: "500",
																fontSize: "12px",
																lineHeight: "14px",
															}}>
															<input
																type="radio"
																name="options"
																id="option1"
																autocomplete="off"
																checked
															/>{" "}
															<CSVLink data={tableRowsData}>Export</CSVLink>
														</label>

														<label
															class="btn"
															style={{
																borderRight: "1px solid #D9D9D9",
																color: "#475569",
																fontFamily: "Roboto",
																fontStyle: "normal",
																fontWeight: "500",
																fontSize: "12px",
																lineHeight: "14px",
															}}>
															<input
																type="radio"
																name="options"
																id="option3"
																autocomplete="off"
															/>
															<i class="fa-solid fa-rotate"></i>
														</label>
													</div>

													<div
														class="btn-group btn-group-toggle me-4"
														data-toggle="buttons"
														style={{ float: "right" }}>
														<label
															class="btn active"
															style={{
																borderRight: "1px solid #D9D9D9",

																color: "#475569",
																fontSize: "12px",
																lineHeight: "14px",
															}}>
															<i class="fa-solid fa-magnifying-glass"></i>
														</label>

														<input
															type="text"
															style={{
																borderRight: "1px solid #D9D9D9",
																color: "#475569",
																fontFamily: "Roboto",
																fontStyle: "normal",
																fontWeight: "500",
																fontSize: "12px",
																lineHeight: "14px",
																border: "none",
																width: "100%",
																textAlign: "center",
															}}
															placeholder="Search..."
															value={search}
															onChange={(e) => {
																setSearch(e.target.value);
															}}
														/>
													</div>
												</div>
											</div>

											<DataTable
												columns={headerResponsive}
												data={Filtered}
												pagination={20}
												highlightOnHover
												subHeader
												customStyles={customStyles}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={toggle ? "col-12" : "invoiceDisplay"}>
							<div className="card" ref={ref}>
								<div className="card-body">
									<div className="col-12 grid-margin">
										<div className="row mt-4">
											<div className="col-6">
												<h5 className="text-primary">Scan Id :</h5>
												<p>{rowData?.scan_id}</p>
											</div>
											<div className="col-6 text-right">
												<p className="font-weight-bold">
													Bill To :
													<p className="text-primary">{rowData?.customer_id}</p>
												</p>
												<p className="font-weight-bold">
													Name :
													<span className="font-weight-normal">
														{" "}
														{rowData?.firstName} {rowData?.lastName}
													</span>
												</p>
											</div>
										</div>
										<div className="row">
											<table class="table table-responsive">
												<thead className="bg-dark text-white">
													<tr>
														<th scope="col">#Product Id</th>
														<th scope="col">Product Name</th>

														<th scope="col">QR Code</th>
														<th scope="col">Quantity</th>
														<th scope="col">Price</th>
														<th>Quantity Price</th>

														<th scope="col">Created At</th>
													</tr>
												</thead>
												<tbody>
													{rowData?.products?.map((item) => {
														return (
															<tr>
																<td>{item.product_id}</td>
																<td>{item.product_name}</td>
																<td>{item.qr_code}</td>
																<td>{item.quantity}</td>
																<td>{item.price}</td>
																<td>{item.quantityPrice}</td>

																<td>
																	{moment(item.createdAt)
																		.local()
																		.format("DD-MM-YYYY hh:mm:ss ")}
																</td>
															</tr>
														);
													})}
													<tr>
														<th className="pt-5">Tax :</th>
														<td className="pt-5">{rowData?.tax}</td>
													</tr>
													<tr>
														<th>Total Price</th>
														<td>{rowData?.total_amount}</td>
													</tr>
													<tr>
														<th>Total Amount With Tax</th>
														<td>{rowData?.amountWithTax}</td>
													</tr>
												</tbody>
											</table>

											<div className="row">
												<div className="col-12 ">
													<Pdf targetRef={ref} filename="invoice.pdf">
														{({ toPdf }) => (
															<button
																className="btn btn-success mt-4"
																onClick={toPdf}>
																Generate Pdf
															</button>
														)}
													</Pdf>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}
export default ListOfTokens;
