import axios from "axios";
import React, { useEffect, useState } from "react";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import ClipLoader from "react-spinners/ClipLoader";
import DataTable from "react-data-table-component";
import { useHistory } from "react-router-dom";
import API from "../../../backend";
import "./DeviceInvoices.css";
import moment from "moment";
import Pdf from "react-to-pdf";


function DeviceInvoice() {
  const ref = React.createRef();
  const [tableRowsData, setTableRowsData] = useState();

  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);

  const token = localStorage.getItem("token");
  const CustId = localStorage.getItem("customerId");

  const history = useHistory();

  const fetchData = async () => {
    console.log(CustId);
    const data = JSON.stringify({
      customer_id: CustId,
    });
    try {
      var config = {
        method: "post",
        url: `https://qigenix.ixiono.com/apis/users/get-invoice`,
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        data: data,
      };
      axios(config)
        .then((response) => {
          console.log(response.data);
          setTableRowsData(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {}, [tableRowsData]);

  // useEffect(() => {
  // 	fetchInvoiceData();
  // }, [invId]);

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
            <h4>List Of Invoices</h4>
            <div>
              <div className="card" ref={ref}>
                <div className="card-body">
                  <div className="col-12 grid-margin">
                    <div className="row mt-4">
                      <div className="col-6">
                        <h5 className="text-primary float-left">
                          {tableRowsData?.invoice_id}
                        </h5>
                      </div>
                      <div className="col-6 text-right">
                        <p className="font-weight-bold">
                          Bill To :
                          <p className="text-primary">
                            {tableRowsData?.firstName} {tableRowsData?.lastName}
                          </p>
                        </p>

                        <p className="font-weight-bold">
                          Invoice Date:{" "}
                          <span className="font-weight-normal">
						  {
         moment(tableRowsData?.createdAt).local().format("DD-MM-YYYY hh:mm:ss ")
      }
                          </span>{" "}
                        </p>
                      </div>
                    </div>
                    <div className="row">
                      <table class="table">
                        <thead className="bg-dark text-white">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Item</th>

                            <th scope="col">Rate</th>
                            <th scope="col">Tax</th>
                            <th scope="col">Amount</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{tableRowsData?.invoice_id}</td>

                            <td>{tableRowsData?.device_brand}</td>
                            <td>{tableRowsData?.amount}</td>
                            <td>{tableRowsData?.tax_percentage}</td>
                            <td>{tableRowsData?.amount}</td>
                          </tr>
                        </tbody>
                      </table>

                      <table class="table table-bordered mt-5">
                        <tr>
                          <th scope="col" className="text-dark">
                            Sub Total :
                          </th>
                          <td>
                            {(Number(tableRowsData?.amount) *
                              Number(tableRowsData?.tax_percentage)) /
                              100 +
                              Number(tableRowsData?.amount)}
                          </td>
                        </tr>
                        <tr>
                          <th className="text-dark">Total :</th>
                          <td>
                            {(Number(tableRowsData?.amount) *
                              Number(tableRowsData?.tax_percentage)) /
                              100 +
                              Number(tableRowsData?.amount)}
                          </td>
                        </tr>
                        <tr>
                          <th className="text-danger">Amount Due :</th>
                          <td>
                            {(Number(tableRowsData?.amount) *
                              Number(tableRowsData?.tax_percentage)) /
                              100 +
                              Number(tableRowsData?.amount)}
                          </td>
                        </tr>
                      </table>

                      <div className="row">
                        <div className="col-12 ">
                          <Pdf targetRef={ref} filename="invoice.pdf">
                            {({ toPdf }) => (
                              <button
                                className="btn btn-success mt-4"
                                onClick={toPdf}
                              >
                                Generate Pdf
                              </button>
                            )}
                          </Pdf>
                          {/* <button className="btn btn-success mt-4">
														Print
													</button> */}
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
export default DeviceInvoice;
