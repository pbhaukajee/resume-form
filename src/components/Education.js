export default function Education({ education, onHandleRemoveEducation }) {
  return (
    <div className="data">
      <h1 className="heading info">Education</h1>
      {education.map((info) => (
        <div className="info" key={info.id}>
          <h2>{info.school}</h2>
          <div className="flex">
            <p>Major: {info.major}</p>
            <p>Degree: {info.degree}</p>
            <p>Start Date: {info.startDate}</p>
            <p>End date: {info.endDate}</p>
            <button onClick={() => onHandleRemoveEducation(info.id)}>
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
