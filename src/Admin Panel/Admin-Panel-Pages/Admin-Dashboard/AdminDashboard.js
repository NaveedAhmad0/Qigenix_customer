import React, { useEffect, useState } from "react";
import "./dashboard.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "font-awesome/css/font-awesome.min.css";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import cardPic01 from "../../../assets/images/money.png";
import cardPic02 from "../../../assets/images/trade.png";
import cardPic03 from "../../../assets/images/setting.png";
import cardPic04 from "../../../assets/images/folderIcon01.png";
import cardPic05 from "../../../assets/images/folderIcon02.png";
import cardPic06 from "../../../assets/images/folderIcon03.png";
import cardPic07 from "../../../assets/images/Vector.png";
import { useHistory } from "react-router-dom";
import Mytask from "./table";
import ChartJs from '../../../app/charts/ChartJs'




function AdminDashboard() {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const [ittems, setItems] = useState([]);
  // const [invoiceRefId, setInvoiceRefId] = useState("");

  console.log("items is", ittems);

  // useEffect(() => {
  // 	const getUserDetails = async () => {
  // 		try {
  // 			await axios
  // 				.get(`${API}/admin/sandBox-transactionList`)
  // 				.then((response) => {
  // 					// if (response == 200) {
  // 					console.log(response.data);
  // 					const sample = [];
  // 					for (let i = 0; i < response.data.length; i += 1) {
  // 						sample.push({
  // 							id: response.data[i].id,
  // 							transactionType: response.data[i].transactionType,
  // 							payeeProxyId: response.data[i].payeeProxyId,
  // 							payeeProxyType: response.data[i].payeeProxyType,
  // 							payeeAccountNumber: response.data[i].payeeAccountNumber,
  // 							payeeName: response.data[i].payeeName,
  // 							payerAccountNumber: response.data[i].payerAccountNumber,
  // 							payerName: response.data[i].payerName,
  // 							amount: response.data[i].amount,
  // 							transactionId: response.data[i].transactionId,
  // 							billPaymentRef1: response.data[i].billPaymentRef1,
  // 							billPaymentRef2: response.data[i].billPaymentRef2,
  // 							billPaymentRef3: response.data[i].billPaymentRef3,
  // 						});
  // 						// setInvoiceRefId(response.data[i].t_id);
  // 					}
  // 					// console.log("babla", response.data.data.length);
  // 					setItems(sample);
  // 					setLoading(false);
  // 					setTimeout(() => {
  // 						setLoading(false);
  // 					}, 3000);
  // 					// }
  // 					// const listItems = response.json();
  // 				});
  // 		} catch (error) {
  // 			console.log(error);
  // 		}
  // 	};
  // 	(async () => await getUserDetails())();
  // }, []);

  const { SearchBar } = Search;

  const columns = [
    {
      dataField: "id",
      text: "Id",
      sort: true,
      classes: "deal-row",
      headerClasses: "deal-header",
    },
    {
      dataField: "payerAccountNumber",
      text: "User Account Number",
      classes: "deal-row",
      headerClasses: "deal-header",
    },
    {
      dataField: "payerName",
      text: "Payer Name",
      classes: "deal-row-2",

      headerClasses: "deal-header",
    },

    {
      dataField: "amount",
      text: "Amount",
      classes: "deal-row",
      headerClasses: "deal-header",
    },
    {
      dataField: "transactionType",
      text: "Transaction Type",
      classes: "deal-row",
      headerClasses: "deal-header",
    },
  ];

  const [totalPaidWithdrawAmount, setTotalPaidWithdrawAmount] = useState("");
  const [totalPendingWithdrawAmount, setTotalPendingWithdrawAmount] =
    useState("");
  const [usersCount, setUsersCount] = useState("");
  const [merchantCount, setMerchantCount] = useState("");

  // useEffect(() => {
  // 	axios.get(`${API}/admin/TotalCount`).then((res) => {
  // 		setTotalPaidWithdrawAmount(res.data.Total_paid_WithdrawAmount);
  // 		setTotalPendingWithdrawAmount(res.data.Total_pending_WithdrawAmount);
  // 		setUsersCount(res.data.users_count);
  // 		setMerchantCount(res.data.merchant_count);
  // 	});
  // }, []);

  return (
    <div className="adminDashboard">
      <div className="container">
        <div className="row">
          <div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section">
            <div className="top_stats_wrapper bg-primary text-white">
              <div className="d-flex justify-content-between mt-2">
                <div className="d-flex">
                  {/*<div>
                    <img
                      className="mr-2 mt-2"
                      src={cardPic01}
                      alt="money.png"
                    ></img>
                  </div>*/}
                  <p className="text-white">Number Of Invoices</p>
                </div>
                <p className="text-white" >
                  <strong>12/14</strong>
                </p>
              </div>
            {/*<div>
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "85%", backgroundColor: "#DC2626" }}
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              </div>*/}
            </div>
          </div>
          <div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section">
            <div className="top_stats_wrapper bg-danger text-white">
              <div className="d-flex justify-content-between mt-2">
                <div className="d-flex">
                  {/*<div>
                    <img
                      className="mr-2 mt-2"
                      src={cardPic02}
                      alt="money.png"
                    ></img>
                    </div>*/}
                  <p className="mr-3 text-white">Device Status</p>
                </div>
                <p className="text-white">
                  <strong>. Active</strong>
                </p>
              </div>
              {/*<div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "20%", backgroundColor: "#22C55E" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
                </div>*/}
            </div>
          </div>
          <div className=" col-xl-4 col-lg-6 col-md-6 col-sm-12 card-section">
            <div className="top_stats_wrapper bg-warning text-white">
              <div className="d-flex justify-content-between mt-2">
                <div className="d-flex">
                  {/*<div>
                    <img
                      className="mr-2 mt-2"
                      src={cardPic03}
                      alt="money.png"
                    ></img>
                  </div>*/}
                  <p className="mr-3 text-white">Device Id</p>
                </div>
                <p className="text-white">
                  <strong>DIDE004</strong>
                </p>
              </div>
              {/*<div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "100%", backgroundColor: "#2563EB" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>*/}
            </div>
          </div>
          {/*<div className=" col-xl-3 col-lg-6 col-md-6 col-sm-12 card-section">
            <div className="top_stats_wrapper">
              <div className="d-flex mt-2">
                <div className="d-flex">
                  <div>
                    <img
                      className="mr-2 mt-2"
                      src={cardPic01}
                      alt="money.png"
                    ></img>
                  </div>
                  <p className="mr-3">Converted Leads</p>
                </div>
                <p>
                  <strong>44/61</strong>
                </p>
              </div>
              <div>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: "75%", backgroundColor: "#475569" }}
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>*/}
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="mod-content data">
              <div className="mod-header-section d-flex justify-content-between ">
                <h4 className="">Scope of work phase</h4>
                <buttton><sppan>x</sppan></buttton>
              </div>
              <div className="mod-content-title">
                <h4>Notification
                  <a className="ml-2" href="https://ixiono.com/crm/admin/projects/view/10" target="_blank"> #10 - PRV - Privacy Swap </a>
                </h4>
              </div>
              <hr className="hr-10"></hr>
              <div className="mod-description">
                <h4>Description</h4>
              </div>
              <div className="description-content"> 
                <div className="task-view-content">
                  <ul>
                    <li style={{ fontWeight: "400" }} >
                      <span style={{ fontWeight: "400" }}>Affiliates can signup directly on our platform, on cards.privacyswap.finance/affiliate
                        (this is also a landing page to explain the affiliate earnings structure)
                      </span>
                    </li>
                    <li style={{ fontWeight: "400" }}>
                      <span style={{ fontWeight: "400" }}>Affiliate signup page: affiliates can directly buy card (WITHOUT STAKING),
                        price is 200 BUSD for plastic (Premium Black VISA/UPI) and 500 BUSD for metal series.
                      </span>
                    </li>

                    <li style={{ fontWeight: "400" }} >
                      <span style={{ fontWeight: "400" }}>Affiliates can signup directly on our platform, on cards.privacyswap.finance/affiliate
                        (this is also a landing page to explain the affiliate earnings structure)
                      </span>
                    </li>
                    <li style={{ fontWeight: "400" }}>
                      <span style={{ fontWeight: "400" }}>Affiliate signup page: affiliates can directly buy card (WITHOUT STAKING),
                        price is 200 BUSD for plastic (Premium Black VISA/UPI) and 500 BUSD for metal series.
                      </span>
                    </li>

                    <li style={{ fontWeight: "400" }} >
                      <span style={{ fontWeight: "400" }}>Affiliates can signup directly on our platform, on cards.privacyswap.finance/affiliate
                        (this is also a landing page to explain the affiliate earnings structure)
                      </span>
                    </li>
                    <li style={{ fontWeight: "400" }}>
                      <span style={{ fontWeight: "400" }}>Affiliate signup page: affiliates can directly buy card (WITHOUT STAKING),
                        price is 200 BUSD for plastic (Premium Black VISA/UPI) and 500 BUSD for metal series.
                      </span>
                    </li>

                    <li style={{ fontWeight: "400" }} >
                      <span style={{ fontWeight: "400" }}>Affiliates can signup directly on our platform, on cards.privacyswap.finance/affiliate
                        (this is also a landing page to explain the affiliate earnings structure)
                      </span>
                    </li>
                    <li style={{ fontWeight: "400" }}>
                      <span style={{ fontWeight: "400" }}>Affiliate signup page: affiliates can directly buy card (WITHOUT STAKING),
                        price is 200 BUSD for plastic (Premium Black VISA/UPI) and 500 BUSD for metal series.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <hr className="hr-10"></hr>

              <a href="#" className="check-icon-text">
                <span class="new-checklist-item">
                  <i class="fa fa-plus-circle"></i>
                  Checklist Item         
                </span>
              </a>
              <p class="text-muted checklist-text">Checklist items not found for this task</p>

              <hr className="hr-10"></hr>

              <a href="#">
                <h4 className="comment">Comments</h4>
              </a>
            </div>
            </div>
           
          <div className="col-md-4">
          </div>
        </div>
      </div>

      
    </div>
  );
}
export default AdminDashboard;
