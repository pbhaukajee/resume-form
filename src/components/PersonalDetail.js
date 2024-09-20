export default function PersonalDetails({ personalInfo }) {
  return (
    <div className="data">
      {personalInfo.map((info) => (
        <div className="info" key={info.id}>
          <h1>{info.fullName}</h1>
          <div className="flex">
            <p>Email: {info.email}</p>
            <p>Phone Number: {info.phoneNumber}</p>
            <p>Address: {info.address}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
