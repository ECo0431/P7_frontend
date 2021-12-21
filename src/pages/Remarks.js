import React, { useEffect, useState } from "react";
import axios from "axios";
import HomePosts from "./HomePosts";

const Remarks = (props) => {
  const { remarks, idPosts } = props;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/posts/${idPosts}/remarks`)
      .then((res) => setData(res.data));
  }, []);
  return (
    <div>
      {data.map((remarks) => (
        <div className="remarks-box">
          <p>{remarks.remark}</p>
        </div>
      ))}
    </div>
  );
};

export default Remarks;
