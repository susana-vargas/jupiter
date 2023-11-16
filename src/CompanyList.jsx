export const CompanyList = ({companies}) => {
  return (
    <ul>
      {companies.map((company) => (
        <li key={company.id}>
          <strong> Name:</strong> {company.name},
          <strong> E-mail:</strong> {company.email},
          <strong> Phone:</strong> {company.phone}
        </li>
      ))}
    </ul>
  )
};