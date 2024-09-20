import { useState } from "react";
import { Button } from "../App";

export default function ExperienceForm({
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
