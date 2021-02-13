import React from "react";
import { useHistory, useParams } from "react-router-dom";
function DeletePage() {
  const history = useHistory();
  const { id } = useParams();
  const handleDelete = () => {
    // Delete処理
    history.push("/");
  };

  return (
    <>
      <h2>Delete</h2>
      <p>title : {id}</p>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
    </>
  );
}
export default DeletePage;
