import { Button } from "../App";
import { useState } from "react";

export default function PersonalDetailsForm({ onAddPersonalInfo, showForm }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!fullName || !email || !phoneNumber || !address) return;

    const id = crypto.randomUUID();

    let newPersonalInfo = {
      fullName,
      email,
      phoneNumber,
      address,
      id,
    };

    onAddPersonalInfo(newPersonalInfo);
  }

  return (
    <div className="personal-details">
      {showForm && (
        <form className="form" onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <label>Address</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Button>Save</Button>
        </form>
      )}
    </div>
  );
}
