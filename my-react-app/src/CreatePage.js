import React from "react";
import { useHistory } from "react-router-dom";
function CreatePage() {
  const history = useHistory();
  const handleCreate = () => {
    // Create処理
    history.push("/");
  };

  return (
    <>
      <h2>Create</h2>
      <p>
        title : <input type="text" />
      </p>
      <button type="button" onClick={handleCreate}>
        Create
      </button>
    </>
  );
}
export default CreatePage;
