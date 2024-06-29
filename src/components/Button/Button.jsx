import React from "react";
import { Buttonn } from "./styles";

export default function Button({ loadMore }) {
  return <Buttonn onClick={loadMore}>Load More </Buttonn>;
}
