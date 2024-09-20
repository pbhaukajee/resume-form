export default function Experience({ experience, onHandleRemoveExperience }) {
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
