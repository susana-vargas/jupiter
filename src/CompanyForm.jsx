export const CompanyForm = ({
  name,
  email,
  phone,
  handleNameInputChange,
  handleEmailInputChange,
  handlePhoneInputChange,
  addRecord,
}) => {
  return (
    <form onSubmit={addRecord}>
    <label>
      Name: <input type={"text"} value={name} onChange={handleNameInputChange} />
    </label>
    <label>
      E-mail: <input type={"email"} value={email} onChange={handleEmailInputChange} />
    </label>
    <label>
      Phone: <input type={"number"} value={phone} onChange={handlePhoneInputChange} />
    </label>
    <button type="submit">add</button>
  </form>
  )
};