import { useState } from "react";
import "../styles/DoctorDashboard.css";

function DoctorDashboard() {
  const doctorName = "Harshika";

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showProfile, setShowProfile] =
    useState(false);


  const [selectedPatient, setSelectedPatient] =
    useState(null);
    const [modalTitle, setModalTitle] =
  useState("");
    const [showPatientsModal, setShowPatientsModal] = useState(false);

const [showCriticalModal, setShowCriticalModal] = useState(false);

const [showTreatmentsModal, setShowTreatmentsModal] = useState(false);

const [showAppointmentsModal, setShowAppointmentsModal] = useState(false);
  const patients = [
  {
    id: "P101",
    name: "Rahul Sharma",
    age: 45,
    disease: "Viral Fever",
    room: "203",
    bed: "B12",
    status: "Under Treatment",
    history: "Visited Jan 2026 for Viral Fever",
  },
  {
    id: "P102",
    name: "Priya Reddy",
    age: 30,
    disease: "Diabetes",
    room: "105",
    bed: "B05",
    status: "Stable",
    history: "Diabetes treatment since 2024",
  },
  {
    id: "P103",
    name: "Arjun Kumar",
    age: 55,
    disease: "Hypertension",
    room: "301",
    bed: "B21",
    status: "Critical",
    history: "Blood Pressure monitoring",
  },
  {
    id: "P104",
    name: "Sneha Patel",
    age: 28,
    disease: "Migraine",
    room: "110",
    bed: "B03",
    status: "Stable",
    history: "Neurology consultation",
  },
  {
    id: "P105",
    name: "Ravi Verma",
    age: 62,
    disease: "Heart Disease",
    room: "205",
    bed: "B07",
    status: "Under Treatment",
    history: "Cardiac monitoring",
  },
];
const criticalPatients = [
  {
    id: "CP01",
    name: "Arjun Kumar",
    age: 55,
    disease: "Hypertension",
    room: "301",
    bed: "B21",
    status: "Critical",
    history: "Blood Pressure Monitoring",
    condition: "Hypertension Crisis",
  },

  {
    id: "CP02",
    name: "Vikram Singh",
    age: 60,
    disease: "Heart Disease",
    room: "302",
    bed: "B15",
    status: "Critical",
    history: "ICU Observation",
    condition: "Heart Attack Recovery",
  }
];
const treatments = [
  {
  id: "T01",
  patient: "Rahul Sharma",
  treatment: "IV Medication",
  doctor: "Dr. Harshika",
  history: "Admitted for Viral Fever. Receiving IV Medication."
},
  {
  id: "T02",
  patient: "Priya Reddy",
  treatment: "Diabetes Management",
  doctor: "Dr. Harshika",
  history: "Diabetes treatment ongoing since 2024."
},
  {
  id: "T03",
  patient: "Arjun Kumar",
  treatment: "Blood Pressure Monitoring",
  doctor: "Dr. Harshika",
  history: "Critical hypertension case under observation."
},
 {
  id: "T04",
  patient: "Sneha Patel",
  treatment: "Neurology Therapy",
  doctor: "Dr. Harshika",
  history: "Migraine treatment and neurology consultations."
},
 {
  id: "T05",
  patient: "Ravi Verma",
  treatment: "Cardiac Rehabilitation",
  doctor: "Dr. Harshika",
  history: "Recovering from heart disease and rehabilitation."
},
];
const appointments = [
  {
    id: "A01",
    patient: "Aman Gupta",
    time: "09:00 AM",
    department: "Cardiology",
  },
  {
    id: "A02",
    patient: "Meera Nair",
    time: "10:30 AM",
    department: "Neurology",
  },
  {
    id: "A03",
    patient: "Rohan Das",
    time: "11:15 AM",
    department: "General Medicine",
  },
  {
    id: "A04",
    patient: "Pooja Sharma",
    time: "02:00 PM",
    department: "Orthopedics",
  },
  {
    id: "A05",
    patient: "Karthik Reddy",
    time: "04:00 PM",
    department: "Cardiology",
  },
];

  return (
     <div className="dpctor-dashboard-container">

  <div className="doctor-dashboard-header">

    <div className="doctor-header-center">

    <h1>
      Welcome Back, Dr. {doctorName}
    </h1>

    <p>
      Patient Care & Treatment Monitoring Portal
    </p>

  </div>

  <div className="doctor-header-actions">

    <div
      className="doctor-notification"
      onClick={() =>
        setShowNotifications(!showNotifications)
      }
    >
      🔔 Alerts

      {showNotifications && (
  <div className="doctor-alerts-dropdown">

    <div className="doctor-alerts-header">
      🔔 Notifications
      <span className="doctor-alert-count">3</span>
    </div>

    <div className="doctor-alert-item">
      <h4>🟢 Patient Report Uploaded</h4>
      <p>2 minutes ago</p>
    </div>

    <div className="doctor-alert-item">
      <h4>📅 New Appointment Scheduled</h4>
      <p>Today • 10:00 AM</p>
    </div>

    <div className="doctor-alert-item">
      <h4>🚨 Emergency Case Assigned</h4>
      <p>ICU Ward • High Priority</p>
    </div>

  </div>
)}

    </div>

    <div
      className="doctor-profile"
      onClick={() =>
        setShowProfile(!showProfile)
      }
    >
      👨‍⚕️ Dr. {doctorName}

      {showProfile && (
  <div className="doctor-profile-dropdown">

    <div className="doctor-profile-avatar">
      👨‍⚕️
    </div>

    <h3>Dr. Harshika</h3>

    <div className="doctor-profile-info">

      <div className="doctor-info-row">
        <span className="label">
          🩺 Specialization
        </span>
        <span className="value">
          Cardiologist
        </span>
      </div>

      <div className="doctor-info-row">
        <span className="label">
          🆔 Doctor ID
        </span>
        <span className="value">
          DOC101
        </span>
      </div>

      <div className="doctor-info-row">
        <span className="label">
          ✉️ Email
        </span>
        <span className="value">
          drharshika@mediflow.com
        </span>
      </div>

      <div className="doctor-info-row">
        <span className="label">
          📞 Phone
        </span>
        <span className="value">
          +91 98765 43210
        </span>
      </div>

    </div>

  </div>
)}

    </div>

  </div>

</div>

        {/* Summary Cards */}
       <div className="doctor-cards">

          <div className="doctor-card">
            <h3>Patients Under Care</h3>
           <h1>{patients.length}</h1>

            <button
  className="doctor-view-btn"
   onClick={() => setShowPatientsModal(true)}
>
  View
</button>
          </div>

          <div className="doctor-card">
            <h3>Critical Monitoring</h3>
<h1>{criticalPatients.length}</h1>  

            <button
              className="doctor-view-btn"
            onClick={() => setShowCriticalModal(true)}
            >
              View
            </button>
          </div>

          <div className="doctor-card">
            <h3>Treatments In Progress</h3>
            <h1>{treatments.length}</h1>       

            <button
              className="doctor-view-btn"
              onClick={() => setShowTreatmentsModal(true)}
            >
              View
            </button>
          </div>

          <div className="doctor-card">
            <h3>Scheduled Appointments</h3>
            <h1>{appointments.length}</h1>      

            <button
              className="doctor-view-btn"
             onClick={() => setShowAppointmentsModal(true)}
            >
              View
            </button>
          </div>

        </div>

        {/* Dynamic Section */}
        {showPatientsModal && (
  <div className="doctor-modal-overlay">

    <div className="doctor-modal-box">

      <div className="doctor-modal-header">
        <h2>👨‍⚕️ Patients Under Care</h2>
        <button
          className="doctor-close-btn"
          onClick={() => setShowPatientsModal(false)}
        >
          ✖
        </button>
      </div>

      <div className="doctor-patient-grid">

        {patients.map((patient) => (
          <div
            key={patient.id}
            className="doctor-patient-card"
          >
            <h3>{patient.name}</h3>

            <p>Room: {patient.room}</p>

            <p>Bed: {patient.bed}</p>

            <p>Status: {patient.status}</p>

            <button
  className="doctor-view-btn"
  onClick={() => {
    setModalTitle("👨‍⚕️ Patients Under Care");
    setSelectedPatient(patient);
  }}
>
  View Details
</button>

          </div>
        ))}

      </div>

    </div>

  </div>
)}
{showCriticalModal && (
  <div className="doctor-modal-overlay">
    <div className="doctor-modal-box">

      <div className="doctor-modal-header">
        <h2>🚨 Critical Monitoring</h2>

        <button
          className="doctor-close-btn"
         onClick={() => setShowCriticalModal(false)}
        >
          ✖
        </button>
      </div>

      <div className="doctor-patient-grid">
        {criticalPatients.map(patient => (
            <div
              key={patient.id}
              className="doctor-patient-card"
            >
              <h3>{patient.name}</h3>

<p>Room: {patient.room}</p>

<p>Condition: {patient.condition}</p>

<button
  className="doctor-view-btn"
  onClick={() => {
    setModalTitle("🚨 Critical Monitoring");
    setSelectedPatient(patient);
  }}
>
  View Details
</button>

            </div>
          ))}
      </div>

    </div>
  </div>
)}
{showTreatmentsModal && (
  <div className="doctor-modal-overlay">
    <div className="doctor-modal-box">

      <div className="doctor-modal-header">
        <h2>💊 Treatments In Progress</h2>

        <button
          className="doctor-close-btn"
         onClick={() => setShowTreatmentsModal(false)} 
        >
          ✖
        </button>
      </div>

      <div className="doctor-patient-grid">
        {treatments.map(treatment => (
          <div
            key={treatment.id}
            className="doctor-patient-card"
          >
            <h3>{treatment.patient}</h3>

<p>Treatment: {treatment.treatment}</p>

<p>Doctor: {treatment.doctor}</p>

<button
  className="doctor-view-btn"
  onClick={() => {
  setModalTitle("💊 Treatments In Progress");
  setSelectedPatient(treatment);
}}
>
  View Details
</button>
          </div>
        ))}
      </div>

    </div>
  </div>
)}
{showAppointmentsModal && (
  <div className="doctor-modal-overlay">
    <div className="doctor-modal-box">

      <div className="doctor-modal-header">
        <h2>📅 Scheduled Appointments</h2>

        <button
          className="doctor-close-btn"
         onClick={() => setShowAppointmentsModal(false)}
        >
          ✖
        </button>
      </div>

      <div className="doctor-patient-grid">
        {appointments.map(appointment => (
          <div
            key={appointment.id}
            className="doctor-patient-card"
          >
           <h3>{appointment.patient}</h3>

            <p>Appointment: {appointment.time}</p>
            <p>Department: {appointment.department}</p>

          </div>
        ))}
      </div>

    </div>
  </div>
)}

        {/* Patient Details */}
       {selectedPatient && (
  <div className="doctor-modal-overlay">

    <div className="doctor-details-modal">

      <div className="doctor-modal-header">

  <h2>{modalTitle}</h2>

  <div className="doctor-modal-actions">

    <button
      className="doctor-back-btn"
      onClick={() => setSelectedPatient(null)}
    >
      ← Dashboard
    </button>

    <button
      className="doctor-close-btn"
      onClick={() =>
        setShowPatientsModal(false)
      }
    >
      ✖
    </button>

  </div>

</div>
      <div className="doctor-details-content">
{selectedPatient.name && (
  <p>
    <strong>Name:</strong> {selectedPatient.name}
  </p>
)}

{selectedPatient.patient && (
  <p>
    <strong>Patient:</strong> {selectedPatient.patient}
  </p>
)}

{selectedPatient.age && (
  <p>
    <strong>Age:</strong> {selectedPatient.age}
  </p>
)}

{selectedPatient.disease && (
  <p>
    <strong>Disease:</strong> {selectedPatient.disease}
  </p>
)}

{selectedPatient.room && (
  <p>
    <strong>Room:</strong> {selectedPatient.room}
  </p>
)}

{selectedPatient.bed && (
  <p>
    <strong>Bed:</strong> {selectedPatient.bed}
  </p>
)}

{selectedPatient.status && (
  <p>
    <strong>Status:</strong> {selectedPatient.status}
  </p>
)}

{selectedPatient.treatment && (
  <p>
    <strong>Treatment:</strong> {selectedPatient.treatment}
  </p>
)}

{selectedPatient.doctor && (
  <p>
    <strong>Doctor:</strong> {selectedPatient.doctor}
  </p>
)}
{selectedPatient.history && (
  <p>
    <strong>Medical History:</strong> {selectedPatient.history}
  </p>
)}
        
      </div>

      <button
        className="doctor-back-btn"
        onClick={() =>
          setSelectedPatient(null)
        }
      >
        ← Back
      </button>

    </div>
</div>
)}
  </div>
  );
}

 
export default DoctorDashboard;