export default function SubmitButton() {
  return (
    <button
      type="submit"
      className="btn btn-secondary btn-lg position-absolute start-50 translate-middle-x"
      onClick={handleSubmit}
    >
      Submit
    </button>
  );
}

var handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  
    const response = await fetch("https://ehsinformationapi.azure-api.net/EhsInfoSystem/CreateItem", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": "65fa6264eed447b493bd2bd0f6689c01",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify({
        "ReportID": "DE12121212102024"
      }),
    });
  
    // if (!response.ok) {
    //   throw new Error(`Error: ${response.statusText}`);
    // }
  
    // const data = await response.json();
    // console.log("Success:", data);
  };
  