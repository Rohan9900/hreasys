import React from 'react';
import './paymentsidepanel.css';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PhoneIcon from '@mui/icons-material/Phone';
import CancelIcon from '@mui/icons-material/Cancel';

const PaymentSidepanel = (props) => {
    const { parentCallback, data, count } = props;
    return (
        <div className="salary-sidepanel-container">
            <div className="salary-sidepanel-box1">
                <span className="close-sidebar" role="button" onKeyDown={parentCallback} tabIndex={-27} onClick={parentCallback}>
                    <CancelIcon style={{ cursor: 'pointer' }} />
                </span>
                <div className="salary-sidepanel-box-img">
                    <img
                        className="salary-sidepanel-img"
                        alt="user"
                        src="https://ik.imagekit.io/6vy1oi4m4uh/profile-pic_DBEIl1ZKUGo.png?updatedAt=1637958057447"
                    />
                </div>
                <div className="salary-sidepanel-box-head">
                    <h2>{data?.personalDetails?.fullName}</h2>
                    <div className="sidepanel-icon">
                        <span>
                            <BusinessCenterIcon />
                            <span>{data?.companyDetails?.designation}</span>
                        </span>
                        <span>
                            <PhoneIcon />
                            <span>{data?.personalDetails?.mobileNo}</span>
                        </span>
                    </div>
                </div>
            </div>
            <div className="salary-sidepanel-box2">
                <div>
                    <p>UAN No</p>
                    <b>{data?.companyDetails?.UAN}</b>
                </div>
                <div>
                    <span style={{ marginLeft: '13px' }}>
                        <p>Paid Days</p>
                        <b>{count.count ? count.count : 0}</b>
                    </span>
                    <span>
                        <p>OT</p>
                        <b>{count.ot ? count.ot : 0}</b>
                    </span>
                </div>
                <div>
                    <p>Daily Wages</p>
                    <b>{data?.salaryDetails?.dailyWages}</b>
                </div>
            </div>
            <div className="salary-sidepanel-box3">
                <div className="salary-sidepanel-box-head3">Total Earning</div>
                <div className="salary-sidepanel-box-cont">
                    <div>
                        <p>Basic Salary</p>
                        <b>{Math.round((data?.salaryDetails?.basicSalary * count.count) / 30)}</b>
                    </div>
                    <div>
                        <p>HRA</p>
                        <b>{Math.round((data?.salaryDetails?.hra * count.count) / 30)}</b>
                    </div>
                    <div>
                        <p>Con</p>
                        <b>{Math.round((data?.salaryDetails?.con * count.count) / 30)}</b>
                    </div>
                    <div>
                        <p>Medical</p>
                        <b>{Math.round((data?.salaryDetails?.medical * count.count) / 30)}</b>
                    </div>
                    <div>
                        <p>Education</p>
                        <b>{Math.round((data?.salaryDetails?.education * count.count) / 30)}</b>
                    </div>
                    <div>
                        <p>Canteen</p>
                        <b>{Math.round((data?.salaryDetails?.canteen * count.count) / 30)}</b>
                    </div>
                </div>
            </div>
            <div className="salary-sidepanel-box3">
                <div className="salary-sidepanel-box-head3">Total Deduction</div>
                <div className="salary-sidepanel-box-cont">
                    <div>
                        <p>Provident Fund (PF)</p>
                        <b>{Math.round((((data?.salaryDetails?.basicSalary * count.count) / 30) * 12) / 100)}</b>
                    </div>
                    <div>
                        <p>Canteen</p>
                        <b>0.00</b>
                    </div>
                    <div>
                        <p>Advance Payment</p>
                        <b>0.00</b>
                    </div>
                    <div>
                        <p>Loan</p>
                        <b>0.00</b>
                    </div>
                    <div>
                        <p>Tax</p>
                        <b>{Math.round(data?.salaryDetails?.incomeTax)}</b>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PaymentSidepanel;
