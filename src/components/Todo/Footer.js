import React from "react";
import FilterLink from "./FilterLink";
import { VisibilityFilters } from "../../actions";

const Footer = () => (
  <div style={{ lineHeight: "50px", textAlign: "center" }}>
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default Footer;
