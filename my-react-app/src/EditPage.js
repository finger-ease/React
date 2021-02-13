import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
function EditPage() {
  const history = useHistory();
  const { id } = useParams();
  const [title, changeTitle] = useState(id);
  const handleChange = (e) => {
    changeTitle(e.target.value);
  };
  const handleEdit = () => {
    // Edit処理
    history.push("/");
  };

  return (
    <>
      <h2>Edit</h2>
      <p>
        title : <input type="text" value={title} onChange={handleChange} />
      </p>
      <button type="button" onClick={handleEdit}>
        Edit
      </button>
    </>
  );
}
export default EditPage;
