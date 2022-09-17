import Router, { useRouter } from "next/router";
function ClientsProjectsPage() {
  function loadProjectHandler() {
    Router.push("/clients/max/projecta");
  }

  return (
    <div>
      <h1>The Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
}

export default ClientsProjectsPage;
