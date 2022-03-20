import React from "react";
import { Routes, Route, useParams } from "react-router-dom";

export default function Invoices() {
  let params = useParams();
  return (
    <div>
      Invoices
      <h5>Invoice : " {params.invoiceId} "</h5>
    </div>
  );
}
