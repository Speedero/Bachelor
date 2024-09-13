import { useNavigate } from "react-router-dom";

export default function Werks() {
  const list = [
    "DE01",
    "DE02",
    "DE03",
    "DE04",
    "DE05",
    "DE06",
    "DE07",
    "DE08",
    "DE09",
  ];
  const navigate = useNavigate();

  var click = (test: string) => {
    navigate("/editwerk?name=" + test);
  };

  return (
    <div className="d-inline-block w-50">
      <h2>Werke</h2>
      <div className="scrollTable">
        <table className="table table-bordered table-hover" id="width33">
          <thead>
            <tr>
              <th>Name</th>
              <th>Country</th>
              <th>Site Code</th>
            </tr>
          </thead>
          <tbody>
            {list.map((name) => (
              <tr key={name} onClick={() => click(name)}>
                <td>{name}</td>
                <td>Hannover</td>
                <td>Deutschland</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <a className="btn btn-secondary mt-3" href="/addwerk">
        Add Werk
      </a>
    </div>
  );
}
