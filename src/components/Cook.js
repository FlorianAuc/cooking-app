import React, { useEffect } from "react";
import axios from "axios";

const Cook = () => {
  useEffect(() => {
    axios
      .get("http://www.themealdb.com/api/json/v1/1/search.php?s=tomato")
      .then((res) => console.log(res));
  }, []);
  return <div></div>;
};

export default Cook;
