import React, { Component, Suspense, lazy } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Spinner from "../app/shared/Spinner";
require("dotenv").config();

// const HomePage = lazy(() => import("../Homepage/HomePage"));
const Buttons = lazy(() => import("./basic-ui/Buttons"));
const Dropdowns = lazy(() => import("./basic-ui/Dropdowns"));

const BasicElements = lazy(() => import("./form-elements/BasicElements"));

const BasicTable = lazy(() => import("./tables/BasicTable"));

const Mdi = lazy(() => import("./icons/Mdi"));

const ChartJs = lazy(() => import("./charts/ChartJs"));

const Error404 = lazy(() => import("./error-pages/Error404"));
const Error500 = lazy(() => import("./error-pages/Error500"));

const Login = lazy(() => import("./user-pages/Login"));
const Register1 = lazy(() => import("./user-pages/Register"));

// ADMIN PANEL IMPORTS

const AdminDashboard = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Dashboard/AdminDashboard")
);
const AdminLogin = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Customer-Auth/LoginProcess")
);
const AdminTransaction = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Admin-Payment_Transaction/Transaction"
	)
);
const WithdrawalRequest = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/WithdrawalRequest/WithdrawalRequest")
);
const WithdrawalDetails = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/WithdrawalRequest/Withdrawal-Details"
	)
);
const AdminVoid = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Void/AdminVoid")
);
const AdminRefund = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Refund/AdminRefund")
);
const UserProfile = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Customer Profile/UserProfile")
);


const GetMerchantProfile = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Get Merchant Profile/GetMerchantProfile"
	)
);
const AdminChangePassword = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Admin-Reset-Password/AdminChangePassword"
	)
);
const ForgotPasswordLink = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Forgot Password/ForgotPasswordLink")
);
const ForgotPassword = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Forgot Password/ForgotPassword")
);
const AdminMerchantProfile = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/AdminPanel-Merchant-profile/AdminMerchantProfile"
	)
);
const AdminManageUser = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Manage-users/AdminManageUser")
);
const AdminManageRole = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Admin-Manage-Role/AdminManageRole")
);
const AssignMerchToUser = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Assign-Merchant-To-User/AssignMerchToUser"
	)
);

const CustomerList = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Customer List/CustomerList")
);
const AddCustomer = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Customer List/Add Customer/AddCustomer"
	)
);
const CustomerDetails = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Customer details/CustomerDetails")
);

const SignUp = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Customer-Auth/Register")
);

const CustomerNotificationList = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Customer-Notification-List/NotificationList"
	)
);

const CustomerListOfInvoices = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Customer-List-Of-Invoices/CustomerInvoices"
	)
);
const DeviceInvoice = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Device Invoice/DeviceInvoice")
);

const NotificationModal = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Notification-Modal/NotificationModal"
	)
);

const ScannedDevices = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Scanned-Devices/AddCustomer")
);

const DeviceInfo = lazy(() =>
	import("../Admin Panel/Admin-Panel-Pages/Device-Info/DeviceInfo")
);

const DetailsOfHardwareAssign = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Details-Of-Hardware-Assigned/HardwareAssign"
	)
);

const TransactionDetails = lazy(() =>
	import(
		"../Admin Panel/Admin-Panel-Pages/Transaction-Details/TransactionDetails"
	)
);

class AppRoutes extends Component {
	render() {
		return (
			<Suspense fallback={<Spinner />}>
				<Switch>
					{/* <Route exact path="/homepage" component={HomePage} /> */}
					{/* <Route exact path="/homepage" component={UserLogin} /> */}
					<Route path="/admin/basic-ui/buttons" component={Buttons} />
					<Route path="/admin/basic-ui/dropdowns" component={Dropdowns} />

					<Route
						path="/admin/form-Elements/basic-elements"
						component={BasicElements}
					/>

					<Route path="/admin/tables/basic-table" component={BasicTable} />

					<Route path="/admin/icons/mdi" component={Mdi} />

					<Route path="/admin/charts/chart-js" component={ChartJs} />

					<Route path="/admin/user-pages/login-1" component={Login} />
					<Route path="/admin/user-pages/register-1" component={Register1} />

					{/*------------------------- ADMIN PANEL ROUTES -------------------------- */}
					<Route exact path="/users/login" component={AdminLogin} />

					<Route exact path="/users/dashboard" component={AdminDashboard} />
					<Route
						exact
						path="/users/notificationmodal"
						component={NotificationModal}
					/>
					<Route exact path="/users/scandevices" component={ScannedDevices} />
					<Route exact path="/users/deviceinfo" component={DeviceInfo} />
					<Route
						exact
						path="/users/hardwareassign"
						component={DetailsOfHardwareAssign}
					/>
					<Route
						exact
						path="/users/transactiondetails"
						component={TransactionDetails}
					/>

					<Route
						path="/admin/AdminPaymentTransaction"
						component={AdminTransaction}
					/>
					<Route
						path="/admin/WithdrawalRequest"
						component={WithdrawalRequest}
					/>
					<Route
						path="/admin/WithdrawalDetails"
						component={WithdrawalDetails}
					/>
					<Route path="/users/Registration" component={SignUp} />
					<Route
						path="/users/NotificationList"
						component={CustomerNotificationList}
					/>
					<Route path="/users/device-invoice" component={DeviceInvoice} />
					<Route
						path="/users/ScannedInvoices"
						component={CustomerListOfInvoices}
					/>
					<Route path="/admin/CustomerList" component={CustomerList} />
					<Route path="/admin/addCustomer" component={AddCustomer} />
					<Route path="/admin/CustomerDetails" component={CustomerDetails} />

					<Route path="/admin/AdminVoid" component={AdminVoid} />
					<Route path="/admin/AdminRefund" component={AdminRefund} />
					<Route path="/users/userprofile" component={UserProfile} />
					{/* <Route path="/admin/get-profile" component={GetAdminProfile} /> */}
					
					<Route
						exact
						path="/admin/getMerchantProfile"
						component={GetMerchantProfile}
					/>
					<Route path="/users/resetPassword" component={AdminChangePassword} />

					<Route
						exact
						path="/users/get_forgotpassword_link"
						component={ForgotPasswordLink}
					/>
					<Route
						exact
						path="/users/forgotpassword"
						component={ForgotPassword}
					/>
					<Route
						path="/admin/AdminMerchantProfile"
						component={AdminMerchantProfile}
					/>
					<Route path="/admin/AdminManageUser" component={AdminManageUser} />
					<Route path="/admin/AdminManageRole" component={AdminManageRole} />
					<Route
						path="/admin/assign-merchnat-to-users"
						component={AssignMerchToUser}
					/>

					<Route path="/admin/error-pages/error-404" component={Error404} />
					<Route path="/admin/error-pages/error-500" component={Error500} />
					{/* <Route path="*" component={<Redirect to="/admin/login" />} /> */}
					<Redirect to="/users/login" />
				</Switch>
			</Suspense>
		);
	}
}

export default AppRoutes;
