import "../css/collapse.css";
import PropTypes from "prop-types";

export default function Collapse(props) {
  return (
    <div className={"bd collapse-anime " + props.curState}>
      {props.children}
    </div>
  );
}

Collapse.propTypes = {
  children: PropTypes.string,
  curState: PropTypes.string,
};
