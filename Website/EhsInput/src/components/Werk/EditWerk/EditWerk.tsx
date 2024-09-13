export default function AddWerk() {
  var GetURLParameter = (sParam: string) => {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split("&");
    for (var i = 0; i < sURLVariables.length; i++) {
      var sParameterName = sURLVariables[i].split("=");
      if (sParameterName[0] == sParam) {
        return sParameterName[1];
      }
    }
  };

  return (
    <>
      <h1 className="mt-4 ms-2">Edit Werk</h1>
      <h1 className="ms-2">{GetURLParameter("name")}</h1>
      <a
        className="btn btn-secondary btn-lg mt-4 me-2 position-absolute top-0 end-0"
        href="/manage"
      >
        Back
      </a>
    </>
  );
}
