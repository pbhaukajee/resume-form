import { useState } from "react";
import { Button } from "../App";

export default function EducationForm({
  onAddEducation,
  showForm,
  onHandleShowEducationForm,
}) {
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [degree, setDegree] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!school || !major || !degree || !startDate || !endDate) return;

    const id = crypto.randomUUID();

    let newSchool = {
      school,
      major,
      degree,
      startDate,
      endDate,
      id,
    };

    onAddEducation(newSchool);
    setSchool("");
    setMajor("");
    setDegree("");
    setStartDate("");
    setEndDate("");
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        {showForm && (
          <div className="form">
            <label>School</label>
            <input
              type="text"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
            <label>Major</label>
            <input
              type="text"
              value={major}
              onChange={(e) => setMajor(e.target.value)}
            />
            <label>Degree</label>
            <input
              type="text"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
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
      <Button onClick={onHandleShowEducationForm}>
        {showForm ? "Close" : "➕Add"}
      </Button>
    </div>
  );
}
