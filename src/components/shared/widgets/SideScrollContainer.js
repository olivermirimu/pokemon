import React from "react";
import PropTypes from "prop-types";

const SideScrollContainer = ({ list, componentCard: Component }) => {
  return (
    <div className="side-scroll">
      <Component _list={list} />
    </div>
  );
};

SideScrollContainer.propTypes = {
  list: PropTypes.array.isRequired,
};
export default SideScrollContainer;
