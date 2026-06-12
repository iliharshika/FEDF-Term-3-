import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

function AdminDashboard() {

  const navigate = useNavigate();

  const [activeSection, setActiveSection] =
    useState("home");

  const [showNotifications, setShowNotifications] =
    useState(false);

  const [showProfile, setShowProfile] =
    useState(false);
    const [showPatientPopup, setShowPatientPopup] =
  useState(false);

const [selectedPatient, setSelectedPatient] =
  useState(null);
  const [showReportPopup, setShowReportPopup] =
  useState(false);

const [reportType, setReportType] =
  useState("");

  const doctors = [
{ id:"D001", name:"Dr. Harshika", department:"Cardiology", experience:"8 Years", status:"Available"},
{ id:"D002", name:"Dr. Rajesh", department:"Neurology", experience:"10 Years", status:"Available"},
{ id:"D003", name:"Dr. Priya", department:"Orthopedics", experience:"6 Years", status:"Busy"},
{ id:"D004", name:"Dr. Arjun", department:"General Medicine", experience:"12 Years", status:"Available"},
{ id:"D005", name:"Dr. Meera", department:"Pediatrics", experience:"9 Years", status:"Available"},
{ id:"D006", name:"Dr. Kiran", department:"Dermatology", experience:"7 Years", status:"Busy"},
{ id:"D007", name:"Dr. Sneha", department:"ENT", experience:"11 Years", status:"Available"},
{ id:"D008", name:"Dr. Ravi", department:"Cardiology", experience:"5 Years", status:"Available"},
{ id:"D009", name:"Dr. Anil", department:"Neurology", experience:"14 Years", status:"Busy"},
{ id:"D010", name:"Dr. Divya", department:"Orthopedics", experience:"8 Years", status:"Available"},
{ id:"D011", name:"Dr. Suresh", department:"Pulmonology", experience:"9 Years", status:"Available"},
{ id:"D012", name:"Dr. Pooja", department:"Gynecology", experience:"10 Years", status:"Available"},
{ id:"D013", name:"Dr. Rahul", department:"Cardiology", experience:"15 Years", status:"Busy"},
{ id:"D014", name:"Dr. Naveen", department:"ICU", experience:"13 Years", status:"Available"},
{ id:"D015", name:"Dr. Keerthi", department:"Pediatrics", experience:"6 Years", status:"Available"},
{ id:"D016", name:"Dr. Manoj", department:"ENT", experience:"12 Years", status:"Busy"},
{ id:"D017", name:"Dr. Teja", department:"Neurology", experience:"7 Years", status:"Available"},
{ id:"D018", name:"Dr. Lakshmi", department:"Orthopedics", experience:"9 Years", status:"Available"},
{ id:"D019", name:"Dr. Vinay", department:"General Medicine", experience:"11 Years", status:"Available"},
{ id:"D020", name:"Dr. Nisha", department:"Dermatology", experience:"5 Years", status:"Busy"},
{ id:"D021", name:"Dr. Bharath", department:"Cardiology", experience:"16 Years", status:"Available"},
{ id:"D022", name:"Dr. Swathi", department:"ICU", experience:"8 Years", status:"Available"},
{ id:"D023", name:"Dr. Rakesh", department:"Pulmonology", experience:"10 Years", status:"Busy"},
{ id:"D024", name:"Dr. Kavya", department:"Gynecology", experience:"7 Years", status:"Available"},
{ id:"D025", name:"Dr. Vivek", department:"ENT", experience:"9 Years", status:"Available"},
];

  const nurses = [
{ id:"N001", name:"Anu", department:"General Ward", shift:"Morning", status:"Available"},
{ id:"N002", name:"Sneha", department:"ICU", shift:"Night", status:"Available"},
{ id:"N003", name:"Divya", department:"Ward B", shift:"Evening", status:"Busy"},
{ id:"N004", name:"Pooja", department:"Ward A", shift:"Morning", status:"Available"},
{ id:"N005", name:"Meena", department:"Ward C", shift:"Night", status:"Available"},
{ id:"N006", name:"Keerthi", department:"ICU", shift:"Morning", status:"Busy"},
{ id:"N007", name:"Swathi", department:"Ward B", shift:"Evening", status:"Available"},
{ id:"N008", name:"Bhavya", department:"Ward A", shift:"Night", status:"Available"},
{ id:"N009", name:"Anjali", department:"Ward C", shift:"Morning", status:"Busy"},
{ id:"N010", name:"Harika", department:"ICU", shift:"Evening", status:"Available"},
{ id:"N011", name:"Ramya", department:"Ward A", shift:"Morning", status:"Available"},
{ id:"N012", name:"Jyothi", department:"Ward B", shift:"Night", status:"Available"},
{ id:"N013", name:"Tejaswini", department:"ICU", shift:"Morning", status:"Busy"},
{ id:"N014", name:"Sravani", department:"Ward C", shift:"Evening", status:"Available"},
{ id:"N015", name:"Lavanya", department:"Ward A", shift:"Night", status:"Available"},
{ id:"N016", name:"Madhavi", department:"ICU", shift:"Morning", status:"Available"},
{ id:"N017", name:"Sindhu", department:"Ward B", shift:"Evening", status:"Busy"},
{ id:"N018", name:"Reshma", department:"Ward C", shift:"Morning", status:"Available"},
{ id:"N019", name:"Deepika", department:"Ward A", shift:"Night", status:"Available"},
{ id:"N020", name:"Monika", department:"ICU", shift:"Morning", status:"Busy"},
{ id:"N021", name:"Kavitha", department:"Ward B", shift:"Evening", status:"Available"},
{ id:"N022", name:"Sushma", department:"Ward C", shift:"Night", status:"Available"},
{ id:"N023", name:"Aishwarya", department:"ICU", shift:"Morning", status:"Available"},
{ id:"N024", name:"Nandini", department:"Ward A", shift:"Evening", status:"Busy"},
{ id:"N025", name:"Varsha", department:"Ward B", shift:"Night", status:"Available"},
{ id:"N026", name:"Pranathi", department:"Ward C", shift:"Morning", status:"Available"},
{ id:"N027", name:"Sowjanya", department:"ICU", shift:"Evening", status:"Busy"},
{ id:"N028", name:"Anusha", department:"Ward A", shift:"Night", status:"Available"},
{ id:"N029", name:"Neha", department:"Ward B", shift:"Morning", status:"Available"},
{ id:"N030", name:"Ritika", department:"Ward C", shift:"Evening", status:"Available"},
{ id:"N031", name:"Kajal", department:"ICU", shift:"Night", status:"Busy"},
{ id:"N032", name:"Shilpa", department:"Ward A", shift:"Morning", status:"Available"},
{ id:"N033", name:"Priyanka", department:"Ward B", shift:"Evening", status:"Available"},
{ id:"N034", name:"Rupa", department:"Ward C", shift:"Night", status:"Busy"},
{ id:"N035", name:"Komal", department:"ICU", shift:"Morning", status:"Available"},
{ id:"N036", name:"Aparna", department:"Ward A", shift:"Evening", status:"Available"},
{ id:"N037", name:"Mounika", department:"Ward B", shift:"Night", status:"Available"},
{ id:"N038", name:"Hema", department:"Ward C", shift:"Morning", status:"Busy"},
{ id:"N039", name:"Preethi", department:"ICU", shift:"Evening", status:"Available"},
{ id:"N040", name:"Navya", department:"Ward A", shift:"Night", status:"Available"},
];

  const medicines = [
{
  medicineId: "M001",
  name: "Paracetamol",
  category: "Tablet",
  stock: 250,
  expiry: "15-12-2027",
  status: "Available",
},
{
  medicineId: "M002",
  name: "Insulin",
  category: "Injection",
  stock: 40,
  expiry: "20-03-2027",
  status: "Low Stock",
},
{
  medicineId: "M003",
  name: "Amoxicillin",
  category: "Capsule",
  stock: 120,
  expiry: "09-08-2027",
  status: "Available",
},
{
  medicineId: "M004",
  name: "Azithromycin",
  category: "Tablet",
  stock: 180,
  expiry: "14-05-2028",
  status: "Available",
},
{
  medicineId: "M005",
  name: "Metformin",
  category: "Tablet",
  stock: 300,
  expiry: "18-01-2028",
  status: "Available",
},
{
  medicineId: "M006",
  name: "Aspirin",
  category: "Tablet",
  stock: 150,
  expiry: "21-07-2027",
  status: "Available",
},
{
  medicineId: "M007",
  name: "Ibuprofen",
  category: "Tablet",
  stock: 90,
  expiry: "10-11-2027",
  status: "Available",
},
{
  medicineId: "M008",
  name: "Cetirizine",
  category: "Tablet",
  stock: 65,
  expiry: "28-09-2027",
  status: "Low Stock",
},
{
  medicineId: "M009",
  name: "Omeprazole",
  category: "Capsule",
  stock: 220,
  expiry: "05-06-2028",
  status: "Available",
},
{
  medicineId: "M010",
  name: "Pantoprazole",
  category: "Tablet",
  stock: 175,
  expiry: "16-10-2027",
  status: "Available",
},
{
  medicineId: "M011",
  name: "Crocin",
  category: "Tablet",
  stock: 260,
  expiry: "12-04-2028",
  status: "Available",
},
{
  medicineId: "M012",
  name: "Dolo 650",
  category: "Tablet",
  stock: 280,
  expiry: "23-08-2027",
  status: "Available",
},
{
  medicineId: "M013",
  name: "Vitamin C",
  category: "Tablet",
  stock: 350,
  expiry: "07-12-2028",
  status: "Available",
},
{
  medicineId: "M014",
  name: "Calcium Tablets",
  category: "Tablet",
  stock: 140,
  expiry: "02-03-2028",
  status: "Available",
},
{
  medicineId: "M015",
  name: "ORS",
  category: "Powder",
  stock: 85,
  expiry: "19-06-2027",
  status: "Available",
},
{
  medicineId: "M016",
  name: "Cough Syrup",
  category: "Syrup",
  stock: 55,
  expiry: "30-10-2027",
  status: "Low Stock",
},
{
  medicineId: "M017",
  name: "Saline",
  category: "Injection",
  stock: 120,
  expiry: "13-02-2028",
  status: "Available",
},
{
  medicineId: "M018",
  name: "Cefixime",
  category: "Capsule",
  stock: 100,
  expiry: "08-08-2028",
  status: "Available",
},
{
  medicineId: "M019",
  name: "Ciprofloxacin",
  category: "Tablet",
  stock: 95,
  expiry: "17-09-2027",
  status: "Available",
},
{
  medicineId: "M020",
  name: "Diclofenac",
  category: "Tablet",
  stock: 110,
  expiry: "22-11-2027",
  status: "Available",
},
{
  medicineId: "M021",
  name: "Atorvastatin",
  category: "Tablet",
  stock: 210,
  expiry: "15-05-2028",
  status: "Available",
},
{
  medicineId: "M022",
  name: "Losartan",
  category: "Tablet",
  stock: 130,
  expiry: "27-01-2028",
  status: "Available",
},
{
  medicineId: "M023",
  name: "Amlodipine",
  category: "Tablet",
  stock: 170,
  expiry: "09-03-2028",
  status: "Available",
},
{
  medicineId: "M024",
  name: "Levothyroxine",
  category: "Tablet",
  stock: 80,
  expiry: "18-07-2027",
  status: "Low Stock",
},
{
  medicineId: "M025",
  name: "Hydrocortisone",
  category: "Injection",
  stock: 60,
  expiry: "11-09-2027",
  status: "Low Stock",
},
{
  medicineId: "M026",
  name: "Ranitidine",
  category: "Tablet",
  stock: 140,
  expiry: "12-06-2028",
  status: "Available",
},
{
  medicineId: "M027",
  name: "Ondansetron",
  category: "Injection",
  stock: 90,
  expiry: "14-09-2027",
  status: "Available",
},
{
  medicineId: "M028",
  name: "Dexamethasone",
  category: "Injection",
  stock: 70,
  expiry: "05-05-2028",
  status: "Available",
},
{
  medicineId: "M029",
  name: "Prednisolone",
  category: "Tablet",
  stock: 60,
  expiry: "18-02-2028",
  status: "Available",
},
{
  medicineId: "M030",
  name: "Clopidogrel",
  category: "Tablet",
  stock: 160,
  expiry: "08-08-2028",
  status: "Available",
},
{
  medicineId: "M031",
  name: "Warfarin",
  category: "Tablet",
  stock: 55,
  expiry: "21-11-2027",
  status: "Low Stock",
},
{
  medicineId: "M032",
  name: "Heparin",
  category: "Injection",
  stock: 40,
  expiry: "16-01-2028",
  status: "Low Stock",
},
{
  medicineId: "M033",
  name: "Ceftriaxone",
  category: "Injection",
  stock: 115,
  expiry: "09-04-2028",
  status: "Available",
},
{
  medicineId: "M034",
  name: "Meropenem",
  category: "Injection",
  stock: 65,
  expiry: "22-07-2028",
  status: "Available",
},
{
  medicineId: "M035",
  name: "Levofloxacin",
  category: "Tablet",
  stock: 85,
  expiry: "12-12-2027",
  status: "Available",
},
{
  medicineId: "M036",
  name: "Moxifloxacin",
  category: "Tablet",
  stock: 75,
  expiry: "02-03-2028",
  status: "Available",
},
{
  medicineId: "M037",
  name: "Metronidazole",
  category: "Tablet",
  stock: 140,
  expiry: "30-09-2028",
  status: "Available",
},
{
  medicineId: "M038",
  name: "Albendazole",
  category: "Tablet",
  stock: 130,
  expiry: "15-08-2028",
  status: "Available",
},
{
  medicineId: "M039",
  name: "Loratadine",
  category: "Tablet",
  stock: 120,
  expiry: "01-06-2028",
  status: "Available",
},
{
  medicineId: "M040",
  name: "Montelukast",
  category: "Tablet",
  stock: 150,
  expiry: "11-11-2027",
  status: "Available",
},
{
  medicineId: "M041",
  name: "Salbutamol",
  category: "Inhaler",
  stock: 45,
  expiry: "08-10-2027",
  status: "Low Stock",
},
{
  medicineId: "M042",
  name: "Budesonide",
  category: "Inhaler",
  stock: 65,
  expiry: "28-01-2028",
  status: "Available",
},
{
  medicineId: "M043",
  name: "Insulin Glargine",
  category: "Injection",
  stock: 50,
  expiry: "18-03-2028",
  status: "Available",
},
{
  medicineId: "M044",
  name: "Glimepiride",
  category: "Tablet",
  stock: 170,
  expiry: "14-07-2028",
  status: "Available",
},
{
  medicineId: "M045",
  name: "Pioglitazone",
  category: "Tablet",
  stock: 90,
  expiry: "26-09-2027",
  status: "Available",
},
{
  medicineId: "M046",
  name: "Telmisartan",
  category: "Tablet",
  stock: 160,
  expiry: "09-02-2028",
  status: "Available",
},
{
  medicineId: "M047",
  name: "Bisoprolol",
  category: "Tablet",
  stock: 130,
  expiry: "22-05-2028",
  status: "Available",
},
{
  medicineId: "M048",
  name: "Carvedilol",
  category: "Tablet",
  stock: 115,
  expiry: "16-10-2028",
  status: "Available",
},
{
  medicineId: "M049",
  name: "Furosemide",
  category: "Tablet",
  stock: 95,
  expiry: "10-04-2028",
  status: "Available",
},
{
  medicineId: "M050",
  name: "Spironolactone",
  category: "Tablet",
  stock: 80,
  expiry: "21-08-2027",
  status: "Available",
},
{
  medicineId: "M051",
  name: "Nitroglycerin",
  category: "Tablet",
  stock: 35,
  expiry: "04-12-2027",
  status: "Low Stock",
},
{
  medicineId: "M052",
  name: "Digoxin",
  category: "Tablet",
  stock: 60,
  expiry: "15-03-2028",
  status: "Available",
},
{
  medicineId: "M053",
  name: "Tramadol",
  category: "Capsule",
  stock: 110,
  expiry: "19-07-2028",
  status: "Available",
},
{
  medicineId: "M054",
  name: "Morphine",
  category: "Injection",
  stock: 25,
  expiry: "12-09-2027",
  status: "Low Stock",
},
{
  medicineId: "M055",
  name: "Ketorolac",
  category: "Injection",
  stock: 70,
  expiry: "03-06-2028",
  status: "Available",
},
{
  medicineId: "M056",
  name: "Codeine Syrup",
  category: "Syrup",
  stock: 55,
  expiry: "18-01-2028",
  status: "Available",
},
{
  medicineId: "M057",
  name: "Zinc Tablets",
  category: "Tablet",
  stock: 180,
  expiry: "22-10-2028",
  status: "Available",
},
{
  medicineId: "M058",
  name: "Iron Supplements",
  category: "Tablet",
  stock: 220,
  expiry: "30-11-2028",
  status: "Available",
},
{
  medicineId: "M059",
  name: "Vitamin D3",
  category: "Tablet",
  stock: 240,
  expiry: "11-04-2029",
  status: "Available",
},
{
  medicineId: "M060",
  name: "Multivitamin",
  category: "Tablet",
  stock: 300,
  expiry: "06-08-2028",
  status: "Available",
},
{
  medicineId: "M061",
  name: "Potassium Chloride",
  category: "Injection",
  stock: 75,
  expiry: "15-02-2028",
  status: "Available",
},
{
  medicineId: "M062",
  name: "Magnesium Sulfate",
  category: "Injection",
  stock: 65,
  expiry: "27-09-2028",
  status: "Available",
},
{
  medicineId: "M063",
  name: "Dopamine",
  category: "Injection",
  stock: 40,
  expiry: "14-05-2028",
  status: "Low Stock",
},
{
  medicineId: "M064",
  name: "Adrenaline",
  category: "Injection",
  stock: 85,
  expiry: "07-07-2028",
  status: "Available",
},
{
  medicineId: "M065",
  name: "Atropine",
  category: "Injection",
  stock: 95,
  expiry: "01-12-2028",
  status: "Available",
},
{
  medicineId: "M066",
  name: "Lignocaine",
  category: "Injection",
  stock: 100,
  expiry: "23-08-2028",
  status: "Available",
},
{
  medicineId: "M067",
  name: "Propofol",
  category: "Injection",
  stock: 35,
  expiry: "17-10-2027",
  status: "Low Stock",
},
{
  medicineId: "M068",
  name: "Midazolam",
  category: "Injection",
  stock: 60,
  expiry: "11-01-2028",
  status: "Available",
},
{
  medicineId: "M069",
  name: "Ketamine",
  category: "Injection",
  stock: 45,
  expiry: "29-06-2028",
  status: "Available",
},
{
  medicineId: "M070",
  name: "Hydrogen Peroxide",
  category: "Liquid",
  stock: 90,
  expiry: "04-04-2028",
  status: "Available",
},
{
  medicineId: "M071",
  name: "Betadine",
  category: "Liquid",
  stock: 125,
  expiry: "16-11-2028",
  status: "Available",
},
{
  medicineId: "M072",
  name: "Chlorhexidine",
  category: "Liquid",
  stock: 100,
  expiry: "19-05-2028",
  status: "Available",
},
{
  medicineId: "M073",
  name: "Silver Sulfadiazine",
  category: "Cream",
  stock: 70,
  expiry: "12-03-2028",
  status: "Available",
},
{
  medicineId: "M074",
  name: "Mupirocin",
  category: "Ointment",
  stock: 65,
  expiry: "08-09-2028",
  status: "Available",
},
{
  medicineId: "M075",
  name: "Clotrimazole",
  category: "Cream",
  stock: 120,
  expiry: "21-07-2028",
  status: "Available",
},
{
  medicineId: "M076",
  name: "Fluconazole",
  category: "Capsule",
  stock: 90,
  expiry: "05-05-2028",
  status: "Available",
},
{
  medicineId: "M077",
  name: "Oseltamivir",
  category: "Capsule",
  stock: 55,
  expiry: "14-02-2028",
  status: "Available",
},
{
  medicineId: "M078",
  name: "Remdesivir",
  category: "Injection",
  stock: 30,
  expiry: "27-10-2027",
  status: "Low Stock",
},
{
  medicineId: "M079",
  name: "Favipiravir",
  category: "Tablet",
  stock: 75,
  expiry: "16-08-2028",
  status: "Available",
},
{
  medicineId: "M080",
  name: "Tamiflu",
  category: "Capsule",
  stock: 65,
  expiry: "09-04-2028",
  status: "Available",
},
{
  medicineId: "M081",
  name: "Rabeprazole",
  category: "Tablet",
  stock: 140,
  expiry: "18-12-2028",
  status: "Available",
},
{
  medicineId: "M082",
  name: "Domperidone",
  category: "Tablet",
  stock: 115,
  expiry: "22-06-2028",
  status: "Available",
},
{
  medicineId: "M083",
  name: "Loperamide",
  category: "Capsule",
  stock: 95,
  expiry: "07-03-2028",
  status: "Available",
},
{
  medicineId: "M084",
  name: "ORS Advanced",
  category: "Powder",
  stock: 200,
  expiry: "13-09-2028",
  status: "Available",
},
{
  medicineId: "M085",
  name: "Electral",
  category: "Powder",
  stock: 175,
  expiry: "25-05-2028",
  status: "Available",
},
];

  const patientHistory = [
  {
    patientId: "P001",
    patientName: "Ravi Kumar",
    problem: "Chest Pain & Hypertension",
    doctor: "Dr. Harshika",
    admissionDate: "01-06-2026",
    transferDate: "03-06-2026",
    dischargeDate: "08-06-2026",
    medicalHistory:
      "Hypertension, Diabetes",
  },

  {
    patientId: "P002",
    patientName: "Priya Sharma",
    problem: "Migraine",
    doctor: "Dr. Rajesh",
    admissionDate: "02-06-2026",
    transferDate: "04-06-2026",
    dischargeDate: "09-06-2026",
    medicalHistory:
      "Chronic Migraine",
  },

  {
    patientId: "P003",
    patientName: "Kiran Rao",
    problem: "Fracture",
    doctor: "Dr. Priya",
    admissionDate: "03-06-2026",
    transferDate: "05-06-2026",
    dischargeDate: "10-06-2026",
    medicalHistory:
      "Minor Surgery",
  },
  {
  patientId: "P004",
  patientName: "Sneha Reddy",
  problem: "Asthma",
  doctor: "Dr. Arjun",
  admissionDate: "04-06-2026",
  transferDate: "06-06-2026",
  dischargeDate: "11-06-2026",
  medicalHistory: "Asthma since childhood",
},

{
  patientId: "P005",
  patientName: "Amit Verma",
  problem: "Fever",
  doctor: "Dr. Rajesh",
  admissionDate: "05-06-2026",
  transferDate: "07-06-2026",
  dischargeDate: "12-06-2026",
  medicalHistory: "Viral Fever",
},

{
  patientId: "P006",
  patientName: "Neha Gupta",
  problem: "Diabetes",
  doctor: "Dr. Harshika",
  admissionDate: "06-06-2026",
  transferDate: "08-06-2026",
  dischargeDate: "13-06-2026",
  medicalHistory: "Type 2 Diabetes",
},

{
  patientId: "P007",
  patientName: "Rahul Singh",
  problem: "Kidney Stone",
  doctor: "Dr. Priya",
  admissionDate: "07-06-2026",
  transferDate: "09-06-2026",
  dischargeDate: "14-06-2026",
  medicalHistory: "Kidney Stone Surgery",
},

{
  patientId: "P008",
  patientName: "Divya Nair",
  problem: "Anemia",
  doctor: "Dr. Arjun",
  admissionDate: "08-06-2026",
  transferDate: "10-06-2026",
  dischargeDate: "15-06-2026",
  medicalHistory: "Iron Deficiency",
},

{
  patientId: "P009",
  patientName: "Vikram Patel",
  problem: "Heart Disease",
  doctor: "Dr. Harshika",
  admissionDate: "09-06-2026",
  transferDate: "11-06-2026",
  dischargeDate: "16-06-2026",
  medicalHistory: "Cardiac Monitoring",
},

{
  patientId: "P010",
  patientName: "Pooja Mehta",
  problem: "Food Poisoning",
  doctor: "Dr. Rajesh",
  admissionDate: "10-06-2026",
  transferDate: "12-06-2026",
  dischargeDate: "17-06-2026",
  medicalHistory: "Dehydration",
},

{
  patientId: "P011",
  patientName: "Rohan Das",
  problem: "Typhoid",
  doctor: "Dr. Arjun",
  admissionDate: "11-06-2026",
  transferDate: "13-06-2026",
  dischargeDate: "18-06-2026",
  medicalHistory: "High Fever",
},

{
  patientId: "P012",
  patientName: "Anjali Rao",
  problem: "Pneumonia",
  doctor: "Dr. Priya",
  admissionDate: "12-06-2026",
  transferDate: "14-06-2026",
  dischargeDate: "19-06-2026",
  medicalHistory: "Respiratory Infection",
},

{
  patientId: "P013",
  patientName: "Suresh Kumar",
  problem: "Back Pain",
  doctor: "Dr. Rajesh",
  admissionDate: "13-06-2026",
  transferDate: "15-06-2026",
  dischargeDate: "20-06-2026",
  medicalHistory: "Disc Problem",
},

{
  patientId: "P014",
  patientName: "Meera Joshi",
  problem: "Arthritis",
  doctor: "Dr. Priya",
  admissionDate: "14-06-2026",
  transferDate: "16-06-2026",
  dischargeDate: "21-06-2026",
  medicalHistory: "Joint Pain",
},

{
  patientId: "P015",
  patientName: "Nikhil Shah",
  problem: "Skin Allergy",
  doctor: "Dr. Arjun",
  admissionDate: "15-06-2026",
  transferDate: "17-06-2026",
  dischargeDate: "22-06-2026",
  medicalHistory: "Allergic Reactions",
},

{
  patientId: "P016",
  patientName: "Kavya Reddy",
  problem: "Appendicitis",
  doctor: "Dr. Harshika",
  admissionDate: "16-06-2026",
  transferDate: "18-06-2026",
  dischargeDate: "23-06-2026",
  medicalHistory: "Appendix Surgery",
},

{
  patientId: "P017",
  patientName: "Aditya Rao",
  problem: "Dengue",
  doctor: "Dr. Rajesh",
  admissionDate: "17-06-2026",
  transferDate: "19-06-2026",
  dischargeDate: "24-06-2026",
  medicalHistory: "Low Platelet Count",
},

{
  patientId: "P018",
  patientName: "Shreya Kapoor",
  problem: "Thyroid Disorder",
  doctor: "Dr. Priya",
  admissionDate: "18-06-2026",
  transferDate: "20-06-2026",
  dischargeDate: "25-06-2026",
  medicalHistory: "Hypothyroidism",
},

{
  patientId: "P019",
  patientName: "Manoj Verma",
  problem: "Ulcer",
  doctor: "Dr. Arjun",
  admissionDate: "19-06-2026",
  transferDate: "21-06-2026",
  dischargeDate: "26-06-2026",
  medicalHistory: "Stomach Ulcer",
},

{
  patientId: "P020",
  patientName: "Ayesha Khan",
  problem: "Eye Infection",
  doctor: "Dr. Harshika",
  admissionDate: "20-06-2026",
  transferDate: "22-06-2026",
  dischargeDate: "27-06-2026",
  medicalHistory: "Conjunctivitis",
},
{
  patientId: "P021",
  patientName: "Harish Patel",
  problem: "Gastritis",
  doctor: "Dr. Rajesh",
  admissionDate: "21-06-2026",
  transferDate: "23-06-2026",
  dischargeDate: "28-06-2026",
  medicalHistory: "Acid Reflux",
},

{
  patientId: "P022",
  patientName: "Nisha Verma",
  problem: "Bronchitis",
  doctor: "Dr. Priya",
  admissionDate: "22-06-2026",
  transferDate: "24-06-2026",
  dischargeDate: "29-06-2026",
  medicalHistory: "Respiratory Issues",
},

{
  patientId: "P023",
  patientName: "Ritesh Kumar",
  problem: "Fractured Arm",
  doctor: "Dr. Arjun",
  admissionDate: "23-06-2026",
  transferDate: "25-06-2026",
  dischargeDate: "30-06-2026",
  medicalHistory: "Orthopedic Treatment",
},

{
  patientId: "P024",
  patientName: "Pallavi Rao",
  problem: "Migraine",
  doctor: "Dr. Harshika",
  admissionDate: "24-06-2026",
  transferDate: "26-06-2026",
  dischargeDate: "01-07-2026",
  medicalHistory: "Chronic Migraine",
},

{
  patientId: "P025",
  patientName: "Arvind Sharma",
  problem: "Hypertension",
  doctor: "Dr. Rajesh",
  admissionDate: "25-06-2026",
  transferDate: "27-06-2026",
  dischargeDate: "02-07-2026",
  medicalHistory: "High Blood Pressure",
},

{
  patientId: "P026",
  patientName: "Keerthi Nair",
  problem: "Pneumonia",
  doctor: "Dr. Priya",
  admissionDate: "26-06-2026",
  transferDate: "28-06-2026",
  dischargeDate: "03-07-2026",
  medicalHistory: "Lung Infection",
},

{
  patientId: "P027",
  patientName: "Vivek Reddy",
  problem: "Diabetes",
  doctor: "Dr. Harshika",
  admissionDate: "27-06-2026",
  transferDate: "29-06-2026",
  dischargeDate: "04-07-2026",
  medicalHistory: "Type 2 Diabetes",
},

{
  patientId: "P028",
  patientName: "Anusha Gupta",
  problem: "Thyroid Disorder",
  doctor: "Dr. Rajesh",
  admissionDate: "28-06-2026",
  transferDate: "30-06-2026",
  dischargeDate: "05-07-2026",
  medicalHistory: "Hypothyroidism",
},

{
  patientId: "P029",
  patientName: "Sanjay Mehta",
  problem: "Dengue",
  doctor: "Dr. Arjun",
  admissionDate: "29-06-2026",
  transferDate: "01-07-2026",
  dischargeDate: "06-07-2026",
  medicalHistory: "Platelet Monitoring",
},

{
  patientId: "P030",
  patientName: "Kritika Singh",
  problem: "Anemia",
  doctor: "Dr. Priya",
  admissionDate: "30-06-2026",
  transferDate: "02-07-2026",
  dischargeDate: "07-07-2026",
  medicalHistory: "Iron Deficiency",
},

{
  patientId: "P031",
  patientName: "Deepak Joshi",
  problem: "Kidney Stone",
  doctor: "Dr. Harshika",
  admissionDate: "01-07-2026",
  transferDate: "03-07-2026",
  dischargeDate: "08-07-2026",
  medicalHistory: "Kidney Surgery",
},

{
  patientId: "P032",
  patientName: "Lavanya Rao",
  problem: "Asthma",
  doctor: "Dr. Rajesh",
  admissionDate: "02-07-2026",
  transferDate: "04-07-2026",
  dischargeDate: "09-07-2026",
  medicalHistory: "Chronic Asthma",
},

{
  patientId: "P033",
  patientName: "Mohit Verma",
  problem: "Typhoid",
  doctor: "Dr. Arjun",
  admissionDate: "03-07-2026",
  transferDate: "05-07-2026",
  dischargeDate: "10-07-2026",
  medicalHistory: "High Fever",
},

{
  patientId: "P034",
  patientName: "Rashmi Patel",
  problem: "Food Poisoning",
  doctor: "Dr. Priya",
  admissionDate: "04-07-2026",
  transferDate: "06-07-2026",
  dischargeDate: "11-07-2026",
  medicalHistory: "Severe Dehydration",
},

{
  patientId: "P035",
  patientName: "Akash Kumar",
  problem: "Back Pain",
  doctor: "Dr. Harshika",
  admissionDate: "05-07-2026",
  transferDate: "07-07-2026",
  dischargeDate: "12-07-2026",
  medicalHistory: "Disc Bulge",
},

{
  patientId: "P036",
  patientName: "Bhavana Sharma",
  problem: "Arthritis",
  doctor: "Dr. Rajesh",
  admissionDate: "06-07-2026",
  transferDate: "08-07-2026",
  dischargeDate: "13-07-2026",
  medicalHistory: "Joint Inflammation",
},

{
  patientId: "P037",
  patientName: "Yash Reddy",
  problem: "Appendicitis",
  doctor: "Dr. Arjun",
  admissionDate: "07-07-2026",
  transferDate: "09-07-2026",
  dischargeDate: "14-07-2026",
  medicalHistory: "Appendix Removal Surgery",
},

{
  patientId: "P038",
  patientName: "Meghana Nair",
  problem: "Skin Allergy",
  doctor: "Dr. Priya",
  admissionDate: "08-07-2026",
  transferDate: "10-07-2026",
  dischargeDate: "15-07-2026",
  medicalHistory: "Allergic Dermatitis",
},

{
  patientId: "P039",
  patientName: "Rohit Kapoor",
  problem: "Heart Disease",
  doctor: "Dr. Harshika",
  admissionDate: "09-07-2026",
  transferDate: "11-07-2026",
  dischargeDate: "16-07-2026",
  medicalHistory: "Cardiac Monitoring",
},

{
  patientId: "P040",
  patientName: "Swathi Iyer",
  problem: "Eye Infection",
  doctor: "Dr. Rajesh",
  admissionDate: "10-07-2026",
  transferDate: "12-07-2026",
  dischargeDate: "17-07-2026",
  medicalHistory: "Conjunctivitis",
},
];

  return (

    <div className="admin-dashboard-container">

      {/* Sidebar */}

      <div className="admin-sidebar">

        <div className="admin-sidebar-logo">

          <h2>MEDIFLOW</h2>
          <p>TRACKER</p>

        </div>

        <h3 className="admin-portal-title">
          ADMIN PORTAL
        </h3>

        <button
          className="admin-sidebar-btn"
          onClick={() => setActiveSection("home")}
        >
          🏠 Dashboard
        </button>

        <button
          className="admin-sidebar-btn"
          onClick={() => setActiveSection("doctors")}
        >
          👨‍⚕️ Manage Doctors
        </button>

        <button
          className="admin-sidebar-btn"
          onClick={() => setActiveSection("nurses")}
        >
          👩‍⚕️ Manage Nurses
        </button>

        <button
          className="admin-sidebar-btn"
          onClick={() => setActiveSection("medicines")}
        >
          💊 Medicine Inventory
        </button>

        <button
          className="admin-sidebar-btn"
          onClick={() => setActiveSection("history")}
        >
          📋 Patient History
        </button>

        <button
          className="admin-sidebar-btn"
          onClick={() => setActiveSection("reports")}
        >
          📊 Reports
        </button>

        <button
          className="admin-sidebar-btn"
          onClick={() => setActiveSection("settings")}
        >
          ⚙️ Settings
        </button>

        <div className="admin-sidebar-footer">

          <button
            className="admin-sidebar-btn"
            onClick={() => navigate("/")}
          >
            🚪 Logout
          </button>

        </div>

      </div>

      {/* Main Content */}

      <div className="admin-main-content">

        <div className="admin-dashboard-header">

          <div className="admin-header-center">

            <h1>Welcome Back</h1>

            <p>
              Hospital Administration Portal
            </p>

          </div>

          <div className="admin-header-actions">

            {/* Alerts */}

            <div
              className="admin-notification"
              onClick={() =>
                setShowNotifications(
                  !showNotifications
                )
              }
            >
              🔔 Alerts

              {showNotifications && (

                <div className="admin-alerts-dropdown">

  <div className="notification-header">
    <span>🔔 Notifications</span>
    <span className="notification-count">4</span>
  </div>

  <div className="notification-item">
    <h4>👨‍⚕️ Doctor Leave Request</h4>
    <p>Requested 10 minutes ago</p>
  </div>

  <div className="notification-item">
    <h4>👩‍⚕️ New Nurse Registered</h4>
    <p>Today • HR Department</p>
  </div>

  <div className="notification-item">
    <h4>💊 Low Medicine Stock</h4>
    <p>Insulin • High Priority</p>
  </div>

  <div className="notification-item">
    <h4>💾 Daily Backup Completed</h4>
    <p>Today • 12:00 AM</p>
  </div>

</div>

              )}

            </div>

            {/* Profile */}

            <div
              className="admin-profile"
              onClick={() =>
                setShowProfile(
                  !showProfile
                )
              }
            >

              👨‍💼 Profile

              {showProfile && (

                <div className="admin-profile-dropdown">

                  <div className="profile-avatar">
                    👨‍💼
                  </div>

                  <h3>
                    Admin Harshika
                  </h3>

                  <div className="admin-profile-info">

                    <div className="admin-info-row">
                      <span>🆔 Admin ID</span>
                      <span>ADM101</span>
                    </div>

                    <div className="admin-info-row">
                      <span>🎖 Role</span>
                      <span>
                        Hospital Administrator
                      </span>
                    </div>

                    <div className="admin-info-row">
                      <span>✉️ Email</span>
                      <span>
                        admin@mediflow.com
                      </span>
                    </div>

                    <div className="admin-info-row">
                      <span>📞 Phone</span>
                      <span>
                        +91 9876543210
                      </span>
                    </div>

                  </div>

                </div>

              )}

            </div>

          </div>

        </div>

        {/* HOME */}

        {activeSection === "home" && (

          <div className="admin-home-cards">

            <div className="admin-card">
              <h3>👨‍⚕️ Total Doctors</h3>
              <h1>25</h1>
            </div>

            <div className="admin-card">
              <h3>👩‍⚕️ Total Nurses</h3>
              <h1>40</h1>
            </div>

            <div className="admin-card">
              <h3>👤 Total Patients</h3>
              <h1>120</h1>
            </div>

            <div className="admin-card">
              <h3>💊 Medicines</h3>
              <h1>85</h1>
            </div>

          </div>

        )}
        {/* MANAGE DOCTORS */}

{activeSection === "doctors" && (

  <div>

    <h2>Manage Doctors</h2>

    <table className="admin-table">

      <thead>

        <tr>
          <th>Doctor ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Experience</th>
          <th>Status</th>
        </tr>

      </thead>

      <tbody>

        {doctors.map((doctor) => (

          <tr key={doctor.id}>

            <td>{doctor.id}</td>
            <td>{doctor.name}</td>
            <td>{doctor.department}</td>
            <td>{doctor.experience}</td>
            <td>{doctor.status}</td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

)}

{/* MANAGE NURSES */}

{activeSection === "nurses" && (

  <div>

    <h2>Manage Nurses</h2>

    <table className="admin-table">

      <thead>

        <tr>
          <th>Nurse ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Shift</th>
          <th>Status</th>
        </tr>

      </thead>

      <tbody>

        {nurses.map((nurse) => (

          <tr key={nurse.id}>

            <td>{nurse.id}</td>
            <td>{nurse.name}</td>
            <td>{nurse.department}</td>
            <td>{nurse.shift}</td>
            <td>{nurse.status}</td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

)}

{/* MEDICINE INVENTORY */}

{activeSection === "medicines" && (

  <div>

    <h2>Medicine Inventory</h2>

    <table className="admin-table">

      <thead>

        <tr>
          <th>Medicine ID</th>
          <th>Name</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Expiry</th>
          <th>Status</th>
        </tr>

      </thead>

      <tbody>

        {medicines.map((medicine) => (

          <tr key={medicine.medicineId}>

            <td>{medicine.medicineId}</td>
            <td>{medicine.name}</td>
            <td>{medicine.category}</td>
            <td>{medicine.stock}</td>
            <td>{medicine.expiry}</td>
            <td>{medicine.status}</td>

          </tr>

        ))}

      </tbody>

    </table>

  </div>

)}

{/* PATIENT HISTORY */}

{activeSection === "history" && (

  <div>

    <h2>Patient History</h2>

    <table className="admin-table">

      <thead>

        <tr>
          <th>Patient ID</th>
<th>Name</th>
<th>Details</th>
        </tr>

      </thead>

      <tbody>

        {patientHistory.map((history,index) => (

          <tr key={index}>
<td>{history.patientId}</td>
<td>{history.patientName}</td>

<td>
  <button
    className="details-btn"
    onClick={() => setSelectedPatient(history)}
  >
    View Details
  </button>
</td>
          </tr>

        ))}

      </tbody>

    </table>

  </div>

)}

{/* REPORTS */}

{activeSection === "reports" && (

  <div>

    <h2>Hospital Reports</h2>

    <div className="admin-home-cards">

      <div className="admin-card">
        <h3>Admissions Today</h3>
        <h1>8</h1>

        <button
          className="view-btn"
          onClick={() => {
            setReportType("admissions");
            setShowReportPopup(true);
          }}
        >
          View
        </button>
      </div>

      <div className="admin-card">
        <h3>Transfers Today</h3>
        <h1>5</h1>

        <button
          className="view-btn"
          onClick={() => {
            setReportType("transfers");
            setShowReportPopup(true);
          }}
        >
          View
        </button>
      </div>

      <div className="admin-card">
        <h3>Discharges Today</h3>
        <h1>7</h1>

        <button
          className="view-btn"
          onClick={() => {
            setReportType("discharges");
            setShowReportPopup(true);
          }}
        >
          View
        </button>
      </div>

      <div className="admin-card">
        <h3>Treatments Active</h3>
        <h1>12</h1>

        <button
          className="view-btn"
          onClick={() => {
            setReportType("treatments");
            setShowReportPopup(true);
          }}
        >
          View
        </button>
      </div>

      <div className="admin-card">
        <h3>Occupied Beds</h3>
        <h1>42</h1>

        <button
          className="view-btn"
          onClick={() => {
            setReportType("occupiedBeds");
            setShowReportPopup(true);
          }}
        >
          View
        </button>
      </div>

      <div className="admin-card">
        <h3>Available Beds</h3>
        <h1>18</h1>

        <button
          className="view-btn"
          onClick={() => {
            setReportType("availableBeds");
            setShowReportPopup(true);
          }}
        >
          View
        </button>
      </div>

    </div>

  </div>

)}

{/* SETTINGS */}

{activeSection === "settings" && (

  <div>

    <h2>System Settings</h2>

    <div className="admin-settings">

      <div className="setting-item">
        <strong>Hospital Name:</strong>
        <p>MEDIFLOW HOSPITAL</p>
      </div>

      <div className="setting-item">
        <strong>Admin:</strong>
        <p>Harshika</p>
      </div>

      <div className="setting-item">
        <strong>System Status:</strong>
        <p>Active</p>
      </div>

      <div className="setting-item">
        <strong>Database Status:</strong>
        <p>Connected</p>
      </div>

      <div className="setting-item">
        <strong>Version:</strong>
        <p>1.0</p>
      </div>

    </div>

  </div>

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

      <h2>Patient History Details</h2>

      <p><strong>Patient ID:</strong> {selectedPatient.patientId}</p>

<p><strong>Name:</strong> {selectedPatient.patientName}</p>

<p><strong>Problem:</strong> {selectedPatient.problem}</p>

<p><strong>Doctor:</strong> {selectedPatient.doctor}</p>

<p><strong>Admission Date:</strong> {selectedPatient.admissionDate}</p>

<p><strong>Transfer Date:</strong> {selectedPatient.transferDate}</p>

<p><strong>Discharge Date:</strong> {selectedPatient.dischargeDate}</p>

<p><strong>Medical History:</strong> {selectedPatient.medicalHistory}</p>

    </div>
  </div>
)}
{
showReportPopup && (
<div
  className="popup-overlay"
  onClick={() => setShowReportPopup(false)}
>

  <div
    className="popup-card large-popup"
    onClick={(e) => e.stopPropagation()}
  >

    <button
      className="close-btn"
      onClick={() => setShowReportPopup(false)}
    >
      ✕
    </button>

    <h2>
      {reportType === "admissions" && "Admissions Today"}
      {reportType === "transfers" && "Transfers Today"}
      {reportType === "discharges" && "Discharges Today"}
      {reportType === "treatments" && "Treatments Active"}
      {reportType === "occupiedBeds" && "Occupied Beds"}
      {reportType === "availableBeds" && "Available Beds"}
    </h2>

    <table className="popup-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>

        {reportType === "admissions" && (
          <>
            <tr>
              <td>P001</td>
              <td>Ravi Kumar</td>
              <td>Admitted</td>
            </tr>

            <tr>
              <td>P002</td>
              <td>Priya Sharma</td>
              <td>Admitted</td>
            </tr>

            <tr>
              <td>P003</td>
              <td>Kiran Rao</td>
              <td>Admitted</td>
            </tr>
          </>
        )}

        {reportType === "transfers" && (
          <>
            <tr>
              <td>P011</td>
              <td>Rahul Singh</td>
              <td>Transferred</td>
            </tr>

            <tr>
              <td>P012</td>
              <td>Divya Nair</td>
              <td>Transferred</td>
            </tr>
          </>
        )}

        {reportType === "discharges" && (
          <>
            <tr>
              <td>P021</td>
              <td>Bhavya</td>
              <td>Discharged</td>
            </tr>

            <tr>
              <td>P022</td>
              <td>Anjali</td>
              <td>Discharged</td>
            </tr>
          </>
        )}

        {reportType === "treatments" && (
          <>
            <tr>
              <td>P031</td>
              <td>Harika</td>
              <td>Under Treatment</td>
            </tr>

            <tr>
              <td>P032</td>
              <td>Ramya</td>
              <td>Under Treatment</td>
            </tr>
          </>
        )}

        {reportType === "occupiedBeds" && (
          <>
            <tr>
              <td>B001</td>
              <td>Ravi Kumar</td>
              <td>Occupied</td>
            </tr>

            <tr>
              <td>B002</td>
              <td>Priya Sharma</td>
              <td>Occupied</td>
            </tr>
          </>
        )}

        {reportType === "availableBeds" && (
          <>
            <tr>
              <td>B043</td>
              <td>-</td>
              <td>Available</td>
            </tr>

            <tr>
              <td>B044</td>
              <td>-</td>
              <td>Available</td>
            </tr>
          </>
        )}

      </tbody>
    </table>

  </div>
</div>
)}

      </div>

    </div>

  );

}

export default AdminDashboard;