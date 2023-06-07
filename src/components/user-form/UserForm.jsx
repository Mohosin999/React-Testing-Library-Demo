import React, { useState } from "react";
import InputField from "./InputField";

const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`name: ${name}, email: ${email}`);
    // You can perform further actions with the name and email values here
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        label="Name:"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <InputField
        label="Email:"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
