import { useState } from "react";
import { v4 } from "uuid";

import { CompanyForm } from "./CompanyForm";
import { CompanyList } from "./CompanyList";

const AppCompany = () => {

  const [ companies, setCompanies ] = useState([]);
  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, SetPhone ] = useState('');

  const handleNameInputChange = (event) => {
    setName(event.target.value);
  }
  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePhoneInputChange = (event) => {
    SetPhone(event.target.value);
  }

  const addRecord = (event) => {
    event.preventDefault();
    const newCompany = {
      id: v4(),
      name,
      email,
      phone,
    };
    setCompanies([...companies, newCompany]);
    console.log(companies, 'companies');
    setName('');
    setEmail('');
    SetPhone('');
  }
  
  return (
    <>
    <h1>Company Form</h1>
    <CompanyForm
    name={name}
    email={email}
    phone={phone}
    handleNameInputChange={handleNameInputChange}
    handleEmailInputChange={handleEmailInputChange}
    handlePhoneInputChange={handlePhoneInputChange}
    addRecord={addRecord}
    />
    <CompanyList companies={companies} />
    </>
  );
}

export default AppCompany;
