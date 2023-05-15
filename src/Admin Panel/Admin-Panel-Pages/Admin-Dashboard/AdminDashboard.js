import React, { useEffect, useState } from "react";
import "./dashboard.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "font-awesome/css/font-awesome.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";

import { useHistory } from "react-router-dom";


function AdminDashboard() {

	return (
		<div className="adminDashboard">
			<div className="container">
				<div className="row">
					<div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section">
						<div className="top_stats_wrapper" style={{background:"#d7eaff",borderRight:"5px solid #2196f3"}}>
							<div className="d-flex justify-content-between mt-2">
								<div>

									<h4 className="text-primary">Number Of Invoices</h4>
									<h5 style={{color:"#abb2b9"}}>12/14</h5>
								</div>
								<p className="text-white py-2 px-3 bg-primary" style={{fontSize:"28px",borderRadius:"10px"}}>
									
									<i class="fa-solid fa-receipt"></i>
								</p>
							</div>
						
						</div>
					</div>
					<div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section">
					<div className="top_stats_wrapper" style={{background:"#d4ffd4d4",borderRight:"5px solid #19d895"}}>
							<div className="d-flex justify-content-between mt-2">
								<div>

									<h4 className="text-success">Device Status</h4>
									<h5 style={{color:"#abb2b9"}}>12/14</h5>
								</div>
								<p className="text-white py-2 px-3 bg-success" style={{fontSize:"28px",borderRadius:"10px"}}>
									
								<i class="fa-solid fa-chart-simple"></i>
								</p>
							</div>
						
						</div>
					</div>
					<div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section">
					<div className="top_stats_wrapper" style={{background:"#ffdfdd99",borderRight:"5px solid #ff6258"}}>
							<div className="d-flex justify-content-between mt-2">
								<div>

									<h4 className="text-danger">Device ID</h4>
									<h5 style={{color:"#abb2b9"}}>12/14</h5>
								</div>
								<p className="text-white py-2 px-3 bg-danger" style={{fontSize:"28px",borderRadius:"10px"}}>
									
								<i class="fa-solid fa-mobile-screen-button"></i>
								</p>
							</div>
						
						</div>
					</div>
				
				</div>
			</div>
		</div>
	);
}
export default AdminDashboard;
