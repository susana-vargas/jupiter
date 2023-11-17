export const UserForm = ({
  name,
  lastName,
  age,
  phone,
  email,
  handleNameInputChange,
  handleLastNameInputChange,
  handleAgeInputChange,
  handlePhoneInputChange,
  handleEmailInputChange,
  addRecord,
}) => {
  return (
    <form onSubmit={addRecord}>
      <div>
        Name: <input type={"text"} value={name} onChange={handleNameInputChange} />
      </div>
      <div>
        Last Name: <input type={"text"} value={lastName} onChange={handleLastNameInputChange} />
      </div>
      <div>
        Age: <input type={"number"} value={age} onChange={handleAgeInputChange} />
      </div>
      <div>
        Phone: <input type={"number"} value={phone} onChange={handlePhoneInputChange} />
      </div>
      <div>
        E-mail: <input type={"email"} value={email} onChange={handleEmailInputChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
};