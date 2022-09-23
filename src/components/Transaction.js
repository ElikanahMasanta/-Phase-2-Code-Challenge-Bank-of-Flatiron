import React from "react";
import React, { useEffect, useState } from "react"

function Transaction({date, description, category, amount}) {
 
  return (
    <>
    <table>
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
    </table>
    </>
  );
}

export default Transaction;
