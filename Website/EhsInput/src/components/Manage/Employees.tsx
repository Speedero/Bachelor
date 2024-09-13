import { useNavigate } from "react-router-dom";

export default function Employees() {
  const emp = [
    "Sebastian Rohde",
    "Max Musterman",
    "Walter Frosch",
    "Stefan Raab",
    "Tony Stark",
    "Andi Bar",
    "Harry Potter",
    "Meister Propper",
    "Angela Merkel"
  ];

  const navigate = useNavigate();

  var click = (test: string) => {
    navigate("/editemployee?name=" + test);
  };

  return (
    <div className="d-inline-block ms-3 w-50">
      <h2>Mitarbeiter</h2>
      <div className="scrollTable">
        <table className="table table-bordered table-hover" id="width33">
          <thead>
            <tr>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Werke</th>
            </tr>
          </thead>
          <tbody>
            {emp.map((name) => (
              <tr key={name} onClick={() => click(name)}>
                <td>{name}</td>
                <td>{name.replace(" ", ".") + "@forbo.com"}</td>
                <td>DE01, DE09, JP01</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a className="btn btn-secondary mt-3" href="/addemployee">
        Add Mitarbeiter
      </a>
    </div>
  );
}
