import React from "react";
import { useParams } from "react-router-dom";

const Developer = () => {
  const { developerId } = useParams();

  return (
    <>
      <h1 className="page-heading">{developerId}</h1>
    </>
  );
};

export default Developer;
