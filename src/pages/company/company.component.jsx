import React from "react";
import { useParams } from "react-router-dom";

const Company = () => {
  const { companyId } = useParams();

  return (
    <>
      <h1 className="page-heading">{companyId}</h1>
    </>
  );
};

export default Company;
