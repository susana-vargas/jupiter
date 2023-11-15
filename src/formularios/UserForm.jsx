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
        Name: <input value={name} onChange={handleNameInputChange} />
      </div>
      <div>
        Last Name: <input value={lastName} onChange={handleLastNameInputChange} />
      </div>
      <div>
        Age: <input value={age} onChange={handleAgeInputChange} />
      </div>
      <div>
        Phone: <input value={phone} onChange={handlePhoneInputChange} />
      </div>
      <div>
        E-mail: <input value={email} onChange={handleEmailInputChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
};