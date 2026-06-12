import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/NurseDashboard.css";

function NurseDashboard() {
  
  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showProfile, setShowProfile] =
    useState(false);

  const [activeSection, setActiveSection] =
    useState("home");
    const [showPopup, setShowPopup] =
  useState(false);

const [popupType, setPopupType] =
  useState("");

const [selectedPatient, setSelectedPatient] =
  useState(null);
  const [showBedPopup, setShowBedPopup] = useState(false);
const [bedPopupType, setBedPopupType] = useState("");
const [selectedBed, setSelectedBed] = useState(null);
   

  const doctors = [
    {
      id: "D01",
      name: "Dr. Harshika",
      specialization: "Cardiology",
    },
    {
      id: "D02",
      name: "Dr. Rajesh",
      specialization: "Neurology",
    },
    {
      id: "D03",
      name: "Dr. Priya",
      specialization: "Orthopedics",
    },
    {
      id: "D04",
      name: "Dr. Arjun",
      specialization: "General Medicine",
    },
  ];
  const admissionPatients = [
{
id:"P001",
name:"Ravi Kumar",
age:45,
gender:"Male",
ward:"General Ward",
doctor:"Dr. Harshika",
admissionDate:"05-Jun-2026"
},
{
id:"P002",
name:"Priya Sharma",
age:32,
gender:"Female",
ward:"Ward B",
doctor:"Dr. Rajesh",
admissionDate:"05-Jun-2026"
},
{
id:"P003",
name:"Kiran Rao",
age:51,
gender:"Male",
ward:"Ward C",
doctor:"Dr. Priya",
admissionDate:"04-Jun-2026"
},
{
id:"P004",
name:"Sneha Reddy",
age:28,
gender:"Female",
ward:"General Ward",
doctor:"Dr. Harshika",
admissionDate:"04-Jun-2026"
},
{
id:"P005",
name:"Amit Verma",
age:39,
gender:"Male",
ward:"Ward A",
doctor:"Dr. Arjun",
admissionDate:"03-Jun-2026"
},
{
id:"P006",
name:"Meena Patel",
age:60,
gender:"Female",
ward:"Ward B",
doctor:"Dr. Rajesh",
admissionDate:"03-Jun-2026"
},
{
id:"P007",
name:"Rahul Gupta",
age:34,
gender:"Male",
ward:"General Ward",
doctor:"Dr. Priya",
admissionDate:"02-Jun-2026"
},
{
id:"P008",
name:"Pooja Singh",
age:26,
gender:"Female",
ward:"Ward C",
doctor:"Dr. Arjun",
admissionDate:"02-Jun-2026"
}
];
const treatmentPatients = [
{
id:"P001",
name:"Ravi Kumar",
treatment:"Cardiac Monitoring",
progress:"75%",
medication:"Aspirin",
nextVisit:"06-Jun-2026"
},
{
id:"P002",
name:"Priya Sharma",
treatment:"Neurological Observation",
progress:"60%",
medication:"Levetiracetam",
nextVisit:"06-Jun-2026"
},
{
id:"P003",
name:"Kiran Rao",
treatment:"Physiotherapy",
progress:"80%",
medication:"Pain Relievers",
nextVisit:"07-Jun-2026"
},
{
id:"P004",
name:"Sneha Reddy",
treatment:"Post Surgery Care",
progress:"50%",
medication:"Antibiotics",
nextVisit:"06-Jun-2026"
},
{
id:"P005",
name:"Amit Verma",
treatment:"Diabetes Monitoring",
progress:"70%",
medication:"Insulin",
nextVisit:"07-Jun-2026"
},
{
id:"P006",
name:"Meena Patel",
treatment:"Hypertension Care",
progress:"65%",
medication:"Amlodipine",
nextVisit:"06-Jun-2026"
},
{
id:"P007",
name:"Rahul Gupta",
treatment:"Respiratory Therapy",
progress:"85%",
medication:"Inhaler",
nextVisit:"08-Jun-2026"
},
{
id:"P008",
name:"Pooja Singh",
treatment:"Fracture Recovery",
progress:"55%",
medication:"Calcium Supplements",
nextVisit:"07-Jun-2026"
}
];
const transferPatients = [
{
id:"P101",
name:"Arjun Patel",
fromWard:"General Ward",
toWard:"ICU",
reason:"Critical Condition",
status:"Pending"
},
{
id:"P102",
name:"Kavya Reddy",
fromWard:"Ward B",
toWard:"Ward C",
reason:"Specialized Care",
status:"Approved"
},
{
id:"P103",
name:"Rohit Sharma",
fromWard:"Ward A",
toWard:"ICU",
reason:"Emergency Monitoring",
status:"Pending"
},
{
id:"P104",
name:"Neha Gupta",
fromWard:"General Ward",
toWard:"Ward B",
reason:"Recovery Observation",
status:"Approved"
},
{
id:"P105",
name:"Vivek Kumar",
fromWard:"Ward C",
toWard:"ICU",
reason:"Respiratory Support",
status:"Pending"
}
];
const dischargePatients = [
{
id:"P201",
name:"Suresh Rao",
age:58,
doctor:"Dr. Harshika",
dischargeDate:"05-Jun-2026",
condition:"Recovered"
},
{
id:"P202",
name:"Lakshmi Devi",
age:47,
doctor:"Dr. Rajesh",
dischargeDate:"05-Jun-2026",
condition:"Stable"
},
{
id:"P203",
name:"Ramesh Kumar",
age:62,
doctor:"Dr. Priya",
dischargeDate:"04-Jun-2026",
condition:"Recovered"
},
{
id:"P204",
name:"Divya Sharma",
age:35,
doctor:"Dr. Arjun",
dischargeDate:"04-Jun-2026",
condition:"Stable"
},
{
id:"P205",
name:"Anil Verma",
age:49,
doctor:"Dr. Harshika",
dischargeDate:"03-Jun-2026",
condition:"Recovered"
},
{
id:"P206",
name:"Geetha Patel",
age:41,
doctor:"Dr. Rajesh",
dischargeDate:"03-Jun-2026",
condition:"Stable"
},
{
id:"P207",
name:"Harish Reddy",
age:55,
doctor:"Dr. Priya",
dischargeDate:"02-Jun-2026",
condition:"Recovered"
}
];
const totalBedsData = [
{ bedId:"B001", ward:"Ward A", room:"101", status:"Occupied", patient:"Ravi Kumar" },
{ bedId:"B002", ward:"Ward A", room:"102", status:"Occupied", patient:"Priya Sharma" },
{ bedId:"B003", ward:"Ward A", room:"103", status:"Occupied", patient:"Kiran Rao" },
{ bedId:"B004", ward:"Ward A", room:"104", status:"Occupied", patient:"Sneha Reddy" },
{ bedId:"B005", ward:"Ward A", room:"105", status:"Occupied", patient:"Amit Verma" },
{ bedId:"B006", ward:"Ward A", room:"106", status:"Occupied", patient:"Rahul Gupta" },

{ bedId:"B007", ward:"Ward B", room:"201", status:"Occupied", patient:"Pooja Singh" },
{ bedId:"B008", ward:"Ward B", room:"202", status:"Occupied", patient:"Arjun Patel" },
{ bedId:"B009", ward:"Ward B", room:"203", status:"Occupied", patient:"Meena Patel" },
{ bedId:"B010", ward:"Ward B", room:"204", status:"Occupied", patient:"Rakesh Kumar" },
{ bedId:"B011", ward:"Ward B", room:"205", status:"Occupied", patient:"Anjali Rao" },
{ bedId:"B012", ward:"Ward B", room:"206", status:"Occupied", patient:"Suresh Gupta" },

{ bedId:"B013", ward:"Ward C", room:"301", status:"Occupied", patient:"Deepika Sharma" },
{ bedId:"B014", ward:"Ward C", room:"302", status:"Occupied", patient:"Vikram Singh" },
{ bedId:"B015", ward:"Ward C", room:"303", status:"Occupied", patient:"Neha Reddy" },
{ bedId:"B016", ward:"Ward C", room:"304", status:"Occupied", patient:"Harish Kumar" },
{ bedId:"B017", ward:"Ward C", room:"305", status:"Occupied", patient:"Kavya Rao" },
{ bedId:"B018", ward:"Ward C", room:"306", status:"Occupied", patient:"Rohan Sharma" },

{ bedId:"B019", ward:"Ward D", room:"401", status:"Occupied", patient:"Sai Teja" },
{ bedId:"B020", ward:"Ward D", room:"402", status:"Occupied", patient:"Nikhil Reddy" },
{ bedId:"B021", ward:"Ward D", room:"403", status:"Occupied", patient:"Manasa Gupta" },
{ bedId:"B022", ward:"Ward D", room:"404", status:"Occupied", patient:"Tarun Kumar" },
{ bedId:"B023", ward:"Ward D", room:"405", status:"Occupied", patient:"Keerthi Rao" },
{ bedId:"B024", ward:"Ward D", room:"406", status:"Occupied", patient:"Akhil Patel" },

{ bedId:"B025", ward:"Ward E", room:"501", status:"Occupied", patient:"Bhavya Singh" },
{ bedId:"B026", ward:"Ward E", room:"502", status:"Occupied", patient:"Naveen Kumar" },
{ bedId:"B027", ward:"Ward E", room:"503", status:"Occupied", patient:"Divya Sharma" },
{ bedId:"B028", ward:"Ward E", room:"504", status:"Occupied", patient:"Abhinav Rao" },
{ bedId:"B029", ward:"Ward E", room:"505", status:"Occupied", patient:"Pallavi Gupta" },
{ bedId:"B030", ward:"Ward E", room:"506", status:"Occupied", patient:"Surya Teja" },

{ bedId:"B031", ward:"Ward F", room:"601", status:"Occupied", patient:"Ajay Kumar" },
{ bedId:"B032", ward:"Ward F", room:"602", status:"Occupied", patient:"Nisha Patel" },
{ bedId:"B033", ward:"Ward F", room:"603", status:"Occupied", patient:"Venu Gopal" },
{ bedId:"B034", ward:"Ward F", room:"604", status:"Occupied", patient:"Shreya Rao" },
{ bedId:"B035", ward:"Ward F", room:"605", status:"Occupied", patient:"Karthik Sharma" },
{ bedId:"B036", ward:"Ward F", room:"606", status:"Occupied", patient:"Lavanya Reddy" },

{ bedId:"B037", ward:"Ward G", room:"701", status:"Occupied", patient:"Praveen Kumar" },
{ bedId:"B038", ward:"Ward G", room:"702", status:"Occupied", patient:"Sanjana Gupta" },
{ bedId:"B039", ward:"Ward G", room:"703", status:"Occupied", patient:"Yash Patel" },
{ bedId:"B040", ward:"Ward G", room:"704", status:"Occupied", patient:"Tejaswini Rao" },
{ bedId:"B041", ward:"Ward G", room:"705", status:"Occupied", patient:"Mahesh Kumar" },
{ bedId:"B042", ward:"Ward G", room:"706", status:"Occupied", patient:"Ananya Sharma" },

{ bedId:"B043", ward:"Ward H", room:"801", status:"Available", patient:"-" },
{ bedId:"B044", ward:"Ward H", room:"802", status:"Available", patient:"-" },
{ bedId:"B045", ward:"Ward H", room:"803", status:"Available", patient:"-" },
{ bedId:"B046", ward:"Ward H", room:"804", status:"Available", patient:"-" },
{ bedId:"B047", ward:"Ward H", room:"805", status:"Available", patient:"-" },
{ bedId:"B048", ward:"Ward H", room:"806", status:"Available", patient:"-" },

{ bedId:"B049", ward:"Ward I", room:"901", status:"Available", patient:"-" },
{ bedId:"B050", ward:"Ward I", room:"902", status:"Available", patient:"-" },
{ bedId:"B051", ward:"Ward I", room:"903", status:"Available", patient:"-" },
{ bedId:"B052", ward:"Ward I", room:"904", status:"Available", patient:"-" },
{ bedId:"B053", ward:"Ward I", room:"905", status:"Available", patient:"-" },
{ bedId:"B054", ward:"Ward I", room:"906", status:"Available", patient:"-" },

{ bedId:"B055", ward:"Ward J", room:"1001", status:"Available", patient:"-" },
{ bedId:"B056", ward:"Ward J", room:"1002", status:"Available", patient:"-" },
{ bedId:"B057", ward:"Ward J", room:"1003", status:"Available", patient:"-" },
{ bedId:"B058", ward:"Ward J", room:"1004", status:"Available", patient:"-" },
{ bedId:"B059", ward:"Ward J", room:"1005", status:"Available", patient:"-" },
{ bedId:"B060", ward:"Ward J", room:"1006", status:"Available", patient:"-" }
];
const occupiedBedsData = [
{ bedId:"B001", patient:"Ravi Kumar", doctor:"Dr. Harshika", ward:"Ward A", condition:"Stable" },
{ bedId:"B002", patient:"Priya Sharma", doctor:"Dr. Rajesh", ward:"Ward A", condition:"Observation" },
{ bedId:"B003", patient:"Kiran Rao", doctor:"Dr. Priya", ward:"Ward A", condition:"Recovering" },
{ bedId:"B004", patient:"Sneha Reddy", doctor:"Dr. Arjun", ward:"Ward A", condition:"Stable" },
{ bedId:"B005", patient:"Amit Verma", doctor:"Dr. Harshika", ward:"Ward A", condition:"Critical" },
{ bedId:"B006", patient:"Rahul Gupta", doctor:"Dr. Rajesh", ward:"Ward A", condition:"Recovering" },

{ bedId:"B007", patient:"Pooja Singh", doctor:"Dr. Priya", ward:"Ward B", condition:"Stable" },
{ bedId:"B008", patient:"Arjun Patel", doctor:"Dr. Arjun", ward:"Ward B", condition:"Observation" },
{ bedId:"B009", patient:"Meena Patel", doctor:"Dr. Harshika", ward:"Ward B", condition:"Recovering" },
{ bedId:"B010", patient:"Rakesh Kumar", doctor:"Dr. Rajesh", ward:"Ward B", condition:"Stable" },
{ bedId:"B011", patient:"Anjali Rao", doctor:"Dr. Priya", ward:"Ward B", condition:"Critical" },
{ bedId:"B012", patient:"Suresh Gupta", doctor:"Dr. Arjun", ward:"Ward B", condition:"Recovering" },

{ bedId:"B013", patient:"Deepika Sharma", doctor:"Dr. Harshika", ward:"Ward C", condition:"Stable" },
{ bedId:"B014", patient:"Vikram Singh", doctor:"Dr. Rajesh", ward:"Ward C", condition:"Observation" },
{ bedId:"B015", patient:"Neha Reddy", doctor:"Dr. Priya", ward:"Ward C", condition:"Recovering" },
{ bedId:"B016", patient:"Harish Kumar", doctor:"Dr. Arjun", ward:"Ward C", condition:"Stable" },
{ bedId:"B017", patient:"Kavya Rao", doctor:"Dr. Harshika", ward:"Ward C", condition:"Critical" },
{ bedId:"B018", patient:"Rohan Sharma", doctor:"Dr. Rajesh", ward:"Ward C", condition:"Recovering" },

{ bedId:"B019", patient:"Sai Teja", doctor:"Dr. Priya", ward:"Ward D", condition:"Stable" },
{ bedId:"B020", patient:"Nikhil Reddy", doctor:"Dr. Arjun", ward:"Ward D", condition:"Observation" },
{ bedId:"B021", patient:"Manasa Gupta", doctor:"Dr. Harshika", ward:"Ward D", condition:"Recovering" },
{ bedId:"B022", patient:"Tarun Kumar", doctor:"Dr. Rajesh", ward:"Ward D", condition:"Stable" },
{ bedId:"B023", patient:"Keerthi Rao", doctor:"Dr. Priya", ward:"Ward D", condition:"Critical" },
{ bedId:"B024", patient:"Akhil Patel", doctor:"Dr. Arjun", ward:"Ward D", condition:"Recovering" },

{ bedId:"B025", patient:"Bhavya Singh", doctor:"Dr. Harshika", ward:"Ward E", condition:"Stable" },
{ bedId:"B026", patient:"Naveen Kumar", doctor:"Dr. Rajesh", ward:"Ward E", condition:"Observation" },
{ bedId:"B027", patient:"Divya Sharma", doctor:"Dr. Priya", ward:"Ward E", condition:"Recovering" },
{ bedId:"B028", patient:"Abhinav Rao", doctor:"Dr. Arjun", ward:"Ward E", condition:"Stable" },
{ bedId:"B029", patient:"Pallavi Gupta", doctor:"Dr. Harshika", ward:"Ward E", condition:"Critical" },
{ bedId:"B030", patient:"Surya Teja", doctor:"Dr. Rajesh", ward:"Ward E", condition:"Recovering" },

{ bedId:"B031", patient:"Ajay Kumar", doctor:"Dr. Priya", ward:"Ward F", condition:"Stable" },
{ bedId:"B032", patient:"Nisha Patel", doctor:"Dr. Arjun", ward:"Ward F", condition:"Observation" },
{ bedId:"B033", patient:"Venu Gopal", doctor:"Dr. Harshika", ward:"Ward F", condition:"Recovering" },
{ bedId:"B034", patient:"Shreya Rao", doctor:"Dr. Rajesh", ward:"Ward F", condition:"Stable" },
{ bedId:"B035", patient:"Karthik Sharma", doctor:"Dr. Priya", ward:"Ward F", condition:"Critical" },
{ bedId:"B036", patient:"Lavanya Reddy", doctor:"Dr. Arjun", ward:"Ward F", condition:"Recovering" },

{ bedId:"B037", patient:"Praveen Kumar", doctor:"Dr. Harshika", ward:"Ward G", condition:"Stable" },
{ bedId:"B038", patient:"Sanjana Gupta", doctor:"Dr. Rajesh", ward:"Ward G", condition:"Observation" },
{ bedId:"B039", patient:"Yash Patel", doctor:"Dr. Priya", ward:"Ward G", condition:"Recovering" },
{ bedId:"B040", patient:"Tejaswini Rao", doctor:"Dr. Arjun", ward:"Ward G", condition:"Stable" },
{ bedId:"B041", patient:"Mahesh Kumar", doctor:"Dr. Harshika", ward:"Ward G", condition:"Critical" },
{ bedId:"B042", patient:"Ananya Sharma", doctor:"Dr. Rajesh", ward:"Ward G", condition:"Recovering" }
];
const availableBedsData = [
{ bedId:"B043", ward:"Ward H", room:"801", status:"Ready" },
{ bedId:"B044", ward:"Ward H", room:"802", status:"Ready" },
{ bedId:"B045", ward:"Ward H", room:"803", status:"Cleaning" },
{ bedId:"B046", ward:"Ward H", room:"804", status:"Ready" },
{ bedId:"B047", ward:"Ward H", room:"805", status:"Ready" },
{ bedId:"B048", ward:"Ward H", room:"806", status:"Maintenance" },

{ bedId:"B049", ward:"Ward I", room:"901", status:"Ready" },
{ bedId:"B050", ward:"Ward I", room:"902", status:"Ready" },
{ bedId:"B051", ward:"Ward I", room:"903", status:"Cleaning" },
{ bedId:"B052", ward:"Ward I", room:"904", status:"Ready" },
{ bedId:"B053", ward:"Ward I", room:"905", status:"Ready" },
{ bedId:"B054", ward:"Ward I", room:"906", status:"Maintenance" },

{ bedId:"B055", ward:"Ward J", room:"1001", status:"Ready" },
{ bedId:"B056", ward:"Ward J", room:"1002", status:"Ready" },
{ bedId:"B057", ward:"Ward J", room:"1003", status:"Cleaning" },
{ bedId:"B058", ward:"Ward J", room:"1004", status:"Ready" },
{ bedId:"B059", ward:"Ward J", room:"1005", status:"Ready" },
{ bedId:"B060", ward:"Ward J", room:"1006", status:"Maintenance" }
];
const wardsData = [
{
  wardId: "W01",
  wardName: "Ward A",
  totalBeds: 6,
  occupiedBeds: 6,
  availableBeds: 0,
  nurseInCharge: "Anu"
},
{
  wardId: "W02",
  wardName: "Ward B",
  totalBeds: 6,
  occupiedBeds: 6,
  availableBeds: 0,
  nurseInCharge: "Kavya"
},
{
  wardId: "W03",
  wardName: "Ward C",
  totalBeds: 6,
  occupiedBeds: 6,
  availableBeds: 0,
  nurseInCharge: "Divya"
},
{
  wardId: "W04",
  wardName: "Ward D",
  totalBeds: 6,
  occupiedBeds: 6,
  availableBeds: 0,
  nurseInCharge: "Sneha"
},
{
  wardId: "W05",
  wardName: "Ward E",
  totalBeds: 6,
  occupiedBeds: 6,
  availableBeds: 0,
  nurseInCharge: "Priya"
},
{
  wardId: "W06",
  wardName: "Ward F",
  totalBeds: 6,
  occupiedBeds: 6,
  availableBeds: 0,
  nurseInCharge: "Bhavya"
},
{
  wardId: "W07",
  wardName: "Ward G",
  totalBeds: 6,
  occupiedBeds: 6,
  availableBeds: 0,
  nurseInCharge: "Meena"
},
{
  wardId: "W08",
  wardName: "Ward H",
  totalBeds: 6,
  occupiedBeds: 0,
  availableBeds: 6,
  nurseInCharge: "Rani"
},
{
  wardId: "W09",
  wardName: "Ward I",
  totalBeds: 6,
  occupiedBeds: 0,
  availableBeds: 6,
  nurseInCharge: "Lakshmi"
},
{
  wardId: "W10",
  wardName: "Ward J",
  totalBeds: 6,
  occupiedBeds: 0,
  availableBeds: 6,
  nurseInCharge: "Sowmya"
}
];
  return (
    <div className="nurse-dashboard-container">

      {/* Sidebar */}

      <div className="nurse-sidebar">

        <div className="nurse-sidebar-logo">

  <h2>MEDIFLOW</h2>
  <p>TRACKER</p>

</div>

<h3 className="nurse-portal-title">
  NURSE PORTAL
</h3>
<button
  className={
    activeSection === "home"
      ? "nurse-sidebar-btn active-sidebar-btn"
      : "nurse-sidebar-btn"
  }
  onClick={() => setActiveSection("home")}
>
  🏠 Dashboard
</button>


        <button
  className={
    activeSection === "patient"
      ? "nurse-sidebar-btn active-sidebar-btn"
      : "nurse-sidebar-btn"
  }
  onClick={() => setActiveSection("patient")}
>
  👤 Patient Information
</button>

        <button
  className={
    activeSection === "bed"
      ? "nurse-sidebar-btn active-sidebar-btn"
      : "nurse-sidebar-btn"
  }
  onClick={() => setActiveSection("bed")}
>
  🏥 Bed & Ward Management
</button>

        <button
  className={
    activeSection === "doctors"
      ? "nurse-sidebar-btn active-sidebar-btn"
      : "nurse-sidebar-btn"
  }
  onClick={() => setActiveSection("doctors")}
>
  👨‍⚕️ Available Doctors
</button>
<div className="nurse-sidebar-footer">

  <button
  className="nurse-sidebar-btn"
  onClick={() => {
    window.location.href = "/";
  }}
>
  🚪 Logout
</button>
</div>
      </div>

      {/* Main Content */}

      <div className="nurse-main-content">

        <div className="nurse-dashboard-header">

          <div className="nurse-header-center">
            <h1>Welcome Back</h1>

            <p>
              Patient Care & Ward Monitoring Portal
            </p>
          </div>

          <div className="nurse-header-actions">

            <div
              className="nurse-notification"
              onClick={() =>
                setShowNotifications(
                  !showNotifications
                )
              }
            >
              🔔 Alerts

              {showNotifications && (
                <div className="nurse-alerts-dropdown">

                  <div className="nurse-alerts-header">
  🔔 Notifications
</div>

                  <div className="nurse-alert-item">
  <h4>🟢 New Patient Admission</h4>
  <p>Patient admitted in Ward 3</p>
</div>

                  <div className="nurse-alert-item">
  <h4>🔄 Transfer Request Pending</h4>
  <p>Patient transfer awaiting approval</p>
</div>

                  <div className="nurse-alert-item">
  <h4>🛏️ Bed Allocation Updated</h4>
  <p>Ward B bed allocation modified</p>
</div>

                </div>
              )}
            </div>

            <div
              className="nurse-profile"
              onClick={() =>
                setShowProfile(!showProfile)
              }
            >
              👩‍⚕️ Profile

              {showProfile && (
                <div className="nurse-profile-dropdown">

                  <div className="profile-avatar">
  👩‍⚕️
</div>

<h3>Nurse Anu</h3>

                  <div className="nurse-profile-info">

                  <div className="nurse-info-row">
  <span>🏥 Department</span>
  <span>General Ward</span>
</div>

<div className="nurse-info-row">
  <span>🆔 Nurse ID</span>
  <span>NUR101</span>
</div>

<div className="nurse-info-row">
  <span>✉️ Email</span>
  <span>nurse@mediflow.com</span>
</div>

<div className="nurse-info-row">
  <span>📞 Phone</span>
  <span>+91 9876543210</span>
</div>

                  </div>

                </div>
              )}

            </div>

          </div>

        </div>

        {/* Home */}

        {activeSection === "home" && (

  <div className="nurse-cards nurse-home-cards">

    <div className="nurse-card">
      <h3>👤 Patient Information</h3>
      <h1>32</h1>

      <button
        className="nurse-view-btn"
        onClick={() =>
          setActiveSection("patient")
        }
      >
        View
      </button>
    </div>

    <div className="nurse-card">
     <h3>
  🏥 Bed & Ward <br />
  Management
</h3>
      <h1>18</h1>

      <button
        className="nurse-view-btn"
        onClick={() =>
          setActiveSection("bed")
        }
      >
        View
      </button>
    </div>

    <div className="nurse-card">
      <h3>👨‍⚕️ Available Doctors</h3>
      <h1>{doctors.length}</h1>

      <button
        className="nurse-view-btn"
        onClick={() =>
          setActiveSection("doctors")
        }
      >
        View
      </button>
    </div>

  </div>

)}

        {/* Patient Information */}

        {activeSection === "patient" && (

          <div>

            <h2>Patient Information</h2>

            <div className="nurse-patient-grid">

              <div className="nurse-card">
                <h3>
                  📝 Patient Admission
                </h3>

                <h1>08</h1>

                <button
  className="nurse-view-btn"
  onClick={() => {
    setPopupType("admission");
    setShowPopup(true);
  }}
>
  View
</button>
              </div>

              <div className="nurse-card">
                <h3>
                  🔄 Patient Transfer
                </h3>

                <h1>05</h1>

                <button
  className="nurse-view-btn"
  onClick={() => {
    setPopupType("transfer");
    setShowPopup(true);
  }}
>
  View
</button>
              </div>

              <div className="nurse-card">
                <h3>
                  ✅ Patient Discharge
                </h3>

                <h1>07</h1>

                <button
  className="nurse-view-btn"
  onClick={() => {
    setPopupType("discharge");
    setShowPopup(true);
  }}
>
  View
</button>
              </div>

              <div className="nurse-card">
                <h3>
                  💊 Treatment Tracking
                </h3>

                <h1>8</h1>

                <button
  className="nurse-view-btn"
  onClick={() => {
    setPopupType("treatment");
    setShowPopup(true);
  }}
>
  View
</button>
              </div>

            </div>

          </div>

        )}

        {/* Bed & Ward */}

        {activeSection === "bed" && (

          <div>

            <h2>
              Bed & Ward Management
            </h2>

            <div className="nurse-doctor-grid">

              <div className="nurse-card">
                <h3>🛏 Total Beds</h3>

                <h1>60</h1>

                <button
  className="nurse-view-btn"
  onClick={() => {
    console.log("TOTAL BEDS CLICKED");
    setBedPopupType("totalBeds");
    setShowBedPopup(true);
  }}
>
  View
</button>
              </div>

              <div className="nurse-card">
                <h3>
                  🛏 Occupied Beds
                </h3>

                <h1>42</h1>

                <button
  className="nurse-view-btn"
  onClick={() => {
    setBedPopupType("occupiedBeds");
    setShowBedPopup(true);
  }}
>
  View
</button>
              </div>

              <div className="nurse-card">
                <h3>
                  ✅ Available Beds
                </h3>

                <h1>18</h1>

                <button
  className="nurse-view-btn"
  onClick={() => {
    setBedPopupType("availableBeds");
    setShowBedPopup(true);
  }}
>
  View
</button>
              </div>

              <div className="nurse-card">
                <h3>🏥 Total Wards</h3>

                <h1>10</h1>

                <button
  className="nurse-view-btn"
  onClick={() => {
    setBedPopupType("wards");
    setShowBedPopup(true);
  }}
>
  View
</button>
              </div>

            </div>

          </div>

        )}

        {/* Available Doctors */}

        {activeSection === "doctors" && (

          <div>

            <h2>
              Available Doctors
            </h2>

            <div className="nurse-patient-grid">

              {doctors.map((doctor) => (

                <div
                  key={doctor.id}
                  className="nurse-patient-card"
                >

                  <h3>
                    {doctor.name}
                  </h3>

                  <p>
                    {
                      doctor.specialization
                    }
                  </p>

                  <p>
                    Available
                  </p>

                </div>

              ))}
          


            </div>

          </div>
        )}
            {showPopup && (

<div className="popup-overlay">

<div className="popup-card">

<button
className="close-btn"
onClick={() => setShowPopup(false)}
>
✖
</button>

<h2>{popupType.toUpperCase()} RECORDS</h2>

{popupType === "admission" && (

<table className="popup-table">

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Age</th>
<th>Gender</th>
<th>Ward</th>
<th>Doctor</th>
<th>Details</th>
</tr>
</thead>

<tbody>

{admissionPatients.map((patient) => (

<tr key={patient.id}>

<td>{patient.id}</td>
<td>{patient.name}</td>
<td>{patient.age}</td>
<td>{patient.gender}</td>
<td>{patient.ward}</td>
<td>{patient.doctor}</td>

<td>

<button
className="details-btn"
onClick={() =>
setSelectedPatient(patient)
}
>
View Details
</button>

</td>

</tr>

))}

</tbody>

</table>
)}
{popupType === "transfer" && (

<table className="popup-table">

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>From Ward</th>
<th>To Ward</th>
<th>Status</th>
<th>Details</th>
</tr>
</thead>

<tbody>

{transferPatients.map((patient) => (

<tr key={patient.id}>
<td>{patient.id}</td>
<td>{patient.name}</td>
<td>{patient.fromWard}</td>
<td>{patient.toWard}</td>
<td>{patient.status}</td>

<td>
<button
className="details-btn"
onClick={() => setSelectedPatient(patient)}
>
View Details
</button>
</td>

</tr>

))}

</tbody>

</table>

)}
{popupType === "discharge" && (

<table className="popup-table">

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Age</th>
<th>Doctor</th>
<th>Condition</th>
<th>Details</th>
</tr>
</thead>

<tbody>

{dischargePatients.map((patient) => (

<tr key={patient.id}>
<td>{patient.id}</td>
<td>{patient.name}</td>
<td>{patient.age}</td>
<td>{patient.doctor}</td>
<td>{patient.condition}</td>

<td>
<button
className="details-btn"
onClick={() => setSelectedPatient(patient)}
>
View Details
</button>
</td>

</tr>

))}

</tbody>

</table>

)}
{popupType === "treatment" && (

<table className="popup-table">

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Treatment</th>
<th>Progress</th>
<th>Details</th>
</tr>
</thead>

<tbody>

{treatmentPatients.map((patient) => (

<tr key={patient.id}>
<td>{patient.id}</td>
<td>{patient.name}</td>
<td>{patient.treatment}</td>
<td>{patient.progress}</td>

<td>
<button
className="details-btn"
onClick={() => setSelectedPatient(patient)}
>
View Details
</button>
</td>

</tr>

))}

</tbody>

</table>

)}
{selectedPatient && (

<div className="popup-overlay">

<div className="details-popup-card">

<button
className="close-btn"
onClick={() => setSelectedPatient(null)}
>
✖
</button>

<h2>Patient Details</h2>

{Object.entries(selectedPatient).map(
([key, value]) => (

<p key={key}>
<strong>{key}:</strong> {value}
</p>

))
}

</div>

</div>

)}


</div>

</div>

)}
{showBedPopup && (

<div className="popup-overlay">

  <div className="popup-card">

    <button
      className="close-btn"
      onClick={() => setShowBedPopup(false)}
    >
      ✖
    </button>

    <h2>{bedPopupType.toUpperCase()}</h2>

    {bedPopupType === "totalBeds" && (

      <table className="popup-table">
        <thead>
          <tr>
            <th>Bed ID</th>
            <th>Ward</th>
            <th>Room</th>
            <th>Status</th>
            <th>Patient</th>
          </tr>
        </thead>

        <tbody>
          {totalBedsData.map((bed) => (
            <tr key={bed.bedId}>
              <td>{bed.bedId}</td>
              <td>{bed.ward}</td>
              <td>{bed.room}</td>
              <td>{bed.status}</td>
              <td>{bed.patient}</td>
            </tr>
          ))}
        </tbody>
      </table>

    )}

    {bedPopupType === "occupiedBeds" && (

      <table className="popup-table">
        <thead>
          <tr>
            <th>Bed ID</th>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Ward</th>
            <th>Condition</th>
          </tr>
        </thead>

        <tbody>
          {occupiedBedsData.map((bed) => (
            <tr key={bed.bedId}>
              <td>{bed.bedId}</td>
              <td>{bed.patient}</td>
              <td>{bed.doctor}</td>
              <td>{bed.ward}</td>
              <td>{bed.condition}</td>
            </tr>
          ))}
        </tbody>
      </table>

    )}

    {bedPopupType === "availableBeds" && (

      <table className="popup-table">
        <thead>
          <tr>
            <th>Bed ID</th>
            <th>Ward</th>
            <th>Room</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {availableBedsData.map((bed) => (
            <tr key={bed.bedId}>
              <td>{bed.bedId}</td>
              <td>{bed.ward}</td>
              <td>{bed.room}</td>
              <td>{bed.status}</td>
            </tr>
          ))}
        </tbody>
      </table>

    )}

    {bedPopupType === "wards" && (

      <table className="popup-table">
        <thead>
          <tr>
            <th>Ward ID</th>
            <th>Ward Name</th>
            <th>Total Beds</th>
            <th>Occupied Beds</th>
          </tr>
        </thead>

        <tbody>
          {wardsData.map((ward) => (
            <tr key={ward.wardId}>
              <td>{ward.wardId}</td>
              <td>{ward.wardName}</td>
              <td>{ward.totalBeds}</td>
              <td>{ward.occupiedBeds}</td>
            </tr>
          ))}
        </tbody>
      </table>

    )}

  </div>

</div>

)}

      </div>

    </div>
  );
}

export default NurseDashboard;