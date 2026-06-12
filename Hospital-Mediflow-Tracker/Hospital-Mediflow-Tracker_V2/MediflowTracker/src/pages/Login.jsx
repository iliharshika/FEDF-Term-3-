import { useState } from "react";
import { useNavigate } from "react-router-dom";
import hospital from "../assets/hospital.jpg";
import "../styles/Login.css";
function Home() {
  const navigate = useNavigate();
  const [showLogin, setShowLogin] = useState(false);
const [role, setRole] = useState("");

const openLogin = (selectedRole) => {
  setRole(selectedRole);
  setShowLogin(true);
};

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#f5f9ff",
        minHeight: "100vh",
      }}
    >
      {/* Navbar */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "20px 60px",
          background: "white",
          boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
        }}
      >
        <h2 style={{ color: "#0F4C81" }}>
          🏥 MediFlow Tracker
        </h2>

        <div
          style={{
            display: "flex",
            gap: "30px",
            fontWeight: "bold",
          }}
        >
          <span>Home</span>
          <span>About</span>
          <span>Features</span>
          <span>Contact</span>
        </div>

        <button
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>

      {/* Hero Section */}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "60px",
        }}
      >
        <div style={{ width: "45%" }}>
          <h1
  style={{
    fontSize: "60px",
    lineHeight: "1.2",
    color: "#0F4C81",
    marginBottom: "20px",
  }}
>
  Smart Healthcare
  <br />
  Better Tomorrow
</h1>

          <p
            style={{
              fontSize: "22px",
              color: "#555",
              
            }}
          >
            MediFlow Tracker helps hospitals manage
            patients, beds, appointments and records
            efficiently in one secure platform.
          </p>


          <div
            style={{
              marginTop: "30px",
              display: "flex",
              gap: "20px",
            }}
          >
            <button
              style={{
                background: "#2563eb",
                color: "white",
                border: "none",
                padding: "15px 30px",
                borderRadius: "12px",
              }}
            >
              Get Started
            </button>

            <button
              style={{
                background: "white",
                border: "2px solid #2563eb",
                color: "#2563eb",
                padding: "15px 30px",
                borderRadius: "12px",
              }}
            >
              Learn More
            </button>
          </div>
        </div>

        
        <img
  src={hospital}
  alt="Hospital"
  style={{
    width: "650px",
    borderRadius: "30px",
  }}
/>
      </div>

      {/* Statistics */}

      
            
      {/* Portals */}

<div style={{ padding: "60px" }}>
  <h2
    style={{
      textAlign: "center",
      marginBottom: "40px",
      color: "#0F4C81",
    }}
  >
    Access Your Portal
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "20px",
    }}
  >
    {[
      {
        title: "Doctor Portal",
        path: "/doctor",
      },
      {
        title: "Nurse Portal",
        path: "/nurse",
      },
      {
        title: "Admin Portal",
        path: "/admin",
      },
    ].map((portal) => (
      <div
        key={portal.title}
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "20px",
          textAlign: "center",
          boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
        }}
      >
        <h3>{portal.title}</h3>

        <p>
          Manage and monitor hospital
          operations efficiently.
        </p>

        <button
       onClick={() => {
  if (portal.title === "Doctor Portal")
    openLogin("Doctor");

  if (portal.title === "Nurse Portal")
    openLogin("Nurse");

  if (portal.title === "Admin Portal")
    openLogin("Admin");
}}
          style={{
            marginTop: "20px",
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "12px 25px",
            borderRadius: "10px",
            cursor: "pointer",
          }}
        >
          Access Portal
        </button>
      </div>
    ))}
  </div>
</div>

      {/* Features */}

      <div style={{ padding: "0 60px 60px" }}>
        <h2
          style={{
            textAlign: "center",
            color: "#0F4C81",
            marginBottom: "40px",
          }}
        >
          Why Choose MediFlow Tracker?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5,1fr)",
            gap: "20px",
          }}
        >
          {[
            "🔒 Secure",
            "⏱ Real-Time Tracking",
            "📊 Analytics",
            "🔔 Alerts",
            "☁ Cloud Based",
          ].map((feature) => (
            <div
              key={feature}
              style={{
                background: "white",
                padding: "25px",
                borderRadius: "15px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
              }}
            >
              {feature}
            </div>
          ))}
        </div>
      </div>
      {showLogin && (
  <div className="popup-overlay">
    <div className="popup-box">

      <button
        className="close-btn"
        onClick={() => setShowLogin(false)}
      >
        ✕
      </button>

      <div className="user-icon">
        👤
      </div>

      <h2>User Sign In</h2>

      <label>ID / Email</label>

      <input
        type="text"
        placeholder={`${role} ID / Email`}
      />

      <label>Password</label>

      <input
        type="password"
        placeholder="Password"
      />

      <div className="remember-row">
        <input type="checkbox" />
        <span>Remember Me</span>
      </div>

      <button
        className="signin-btn"
        onClick={() => {
          if (role === "Doctor") navigate("/doctor");
          if (role === "Nurse") navigate("/nurse");
          if (role === "Admin") navigate("/admin");
        }}
      >
        Sign In
      </button>

      <div className="links-row">
        <a href="#">Forgot Password?</a>
        <a href="#">Sign Up</a>
      </div>

      <button
        className="back-btn"
        onClick={() => setShowLogin(false)}
      >
        Back
      </button>

    </div>
  </div>
)}
    </div>
  );
}

export default Home;