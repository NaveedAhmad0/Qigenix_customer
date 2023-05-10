import React from 'react'
import "./NotificationModal.css";

const NotificationModal = () => {
  return (
    <div className="container">
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
  )
}

export default NotificationModal;
