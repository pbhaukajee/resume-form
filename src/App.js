import { useState } from "react";
import "./index.css";
import PersonalDetailsForm from "./components/PersonalDetailForm";
import PersonalDetails from "./components/PersonalDetail";
import EducationForm from "./components/EducationForm";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ExperienceForm from "./components/ExperienceForm";

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
    setExperience((prev) => prev.filter((info) => info.id !== id));
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
