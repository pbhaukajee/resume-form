import { useState } from "react";
import "./index.css";
import PersonalDetailsForm from "./components/PersonalDetailForm";
import PersonalDetails from "./components/PersonalDetail";
import EducationForm from "./components/EducationForm";
import Education from "./components/Education";

export function Button({ children, onClick, className }) {
  return (
    <button className={`button ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [personalInfo, setPersonalInfo] = useState([]);
  const [showPersonalForm, setShowPersonalForm] = useState(false);

  function handleShowPersonalForm() {
    setShowPersonalForm((show) => !show);
  }

  function handleAddPersonalInfo(newInfo) {
    setPersonalInfo((info) => {
      const updatedInfo = info.length >= 1 ? info.slice(1) : info;
      return [...updatedInfo, newInfo];
    });
  }

  const [showEducationForm, setShowEducationForm] = useState(false);
  const [education, setEducation] = useState([]);

  function handleShowEducationForm() {
    setShowEducationForm((show) => !show);
  }

  function handleAddEducation(newInfo) {
    setEducation((info) => {
      return [...info, newInfo];
    });
  }

  function handleRemoveEducation(id) {
    setEducation((prev) => prev.filter((info) => info.id !== id));
  }

  const [showExperienceForm, setShowExperienceForm] = useState(false);
  const [experience, setExperience] = useState([]);

  function handleShowExperienceForm() {
    setShowExperienceForm((show) => !show);
  }

  function handleAddExperience(newInfo) {
    setExperience((info) => {
      return [...info, newInfo];
    });
  }

  function handleRemoveExperience(id) {
    setEducation((prev) => prev.filter((info) => info.id !== id));
  }

  return (
    <div className="main">
      <div className="main-form">
        <div>
          <h2>Personal Details</h2>
          <PersonalDetailsForm
            onAddPersonalInfo={handleAddPersonalInfo}
            showForm={showPersonalForm}
          />
          <Button
            onClick={handleShowPersonalForm}
            className={showPersonalForm ? "hide" : "active"}
          >
            ➕ Create
          </Button>
        </div>
        <div>
          <h2>Education</h2>
          <EducationForm
            education={education}
            onAddEducation={handleAddEducation}
            showForm={showEducationForm}
            onHandleShowEducationForm={handleShowEducationForm}
          />
        </div>
        <div>
          <h2>Experience</h2>
          <ExperienceForm
            experience={experience}
            onAddExperience={handleAddExperience}
            showForm={showExperienceForm}
            onHandleShowExperienceForm={handleShowExperienceForm}
          />
        </div>
      </div>
      <div className="details">
        <PersonalDetails personalInfo={personalInfo} />
        <Education
          education={education}
          onHandleRemoveEducation={handleRemoveEducation}
        />
        <Experience
          experience={experience}
          onHandleRemoveExperience={handleRemoveExperience}
        />
      </div>
    </div>
  );
}

function ExperienceForm({
  onAddExperience,
  showForm,
  onHandleShowExperienceForm,
}) {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!companyName || !position || !startDate || !endDate) return;

    const id = crypto.randomUUID();

    let newJobTitle = {
      companyName,
      position,
      startDate,
      endDate,
      id,
    };

    onAddExperience(newJobTitle);
    setCompanyName("");
    setPosition("");
    setStartDate("");
    setEndDate("");
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {showForm && (
          <div className="form">
            <label>Company Name</label>
            <input
              type="text"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <label>Job Title</label>
            <input
              type="text"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
            <label>Start Date</label>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
            <label>End Date</label>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
            <Button>➕ Add</Button>
          </div>
        )}
      </form>
      <Button onClick={onHandleShowExperienceForm}>
        {showForm ? "Close" : "➕Add"}
      </Button>
    </div>
  );
}

function Experience({ experience, onHandleRemoveExperience }) {
  return (
    <div className="data">
      <h1 className="heading info">Experience</h1>
      {experience.map((info) => (
        <div className="info" key={info.id}>
          <h2>{info.school}</h2>
          <div className="flex">
            <p>Company Name: {info.companyName}</p>
            <p>Job Title: {info.position}</p>
            <p>Start Date: {info.startDate}</p>
            <p>End date: {info.endDate}</p>
            <button onClick={() => onHandleRemoveExperience(info.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
