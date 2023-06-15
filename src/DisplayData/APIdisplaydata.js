import React, { useEffect, useState } from "react";
import axios from "axios";
const TableApidata = () => {
  const [useData, setuseData] = useState([]);

  const CallApidata = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const obj = response.data;
        console.log("response", obj);
        setuseData(obj);
    
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    CallApidata();
  }, []);

  return (
    <>
      <table border="1">
        <tr>
          <th>userid</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
        </tr>
        {useData &&
          useData.map((item, i) => (
            <tr>
              <td> {item && item.userId}</td>
              <td> {item && item.id}</td>
              <td>{item && item.title} </td>
              <td>{item && item.body} </td>
            </tr>
          ))}
      </table>
    </>
  );
};

export default TableApidata;
