import React, { useState } from "react";
import { Link } from "react-router-dom";
function ListPage() {
  const [items, changeItems] = useState([
    {
      id: 1,
      title: "jQuery",
      finished: true,
    },
    {
      id: 2,
      title: "React",
      finished: false,
    },
  ]);
  return (
    <>
      <h2>List</h2>
      <ul>
        {items.map((item) => (
          <li>
            {item.id} : {item.title}
            <br />
            <Link to={`/edit/${item.id}`}>Edit</Link>/
            <Link to={`/delete/${item.id}`}>Delete</Link>
            <hr />
          </li>
        ))}
      </ul>
      <Link to={`/create/`}>Create</Link>
    </>
  );
}
export default ListPage;
