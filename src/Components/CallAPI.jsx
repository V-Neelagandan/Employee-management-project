import { useState, useEffect } from "react";
import axios from "axios";

const CallAPI = () => {
  // const[Loading,setLoading]=useState(false)
  // const[error,setError]=useState('')
  const [data, setData] = useState([]);

  const fetchData = async (url = "", method = "get", body = null, id = NaN) => {
    console.log("first", url, method);

    if (id && method == "delete") {
      url = url + id;
      setData(response.data);
      console.log("delete method");
    } else if (id && body != null && method == "put") {
      url = url + id;
      const response = await axios.put(url, body);
      setData(response.data);
      console.log("put method");
    } else if (body != null && method == "post") {
      const response = await axios.post(url, body);
      setData(response.data);
      console.log("post method");
    } else if (method == "get") {
      const response = await axios.get(url);
      setData(response.data);
    }
  };
  return { data, fetchData };
};
export default CallAPI;
