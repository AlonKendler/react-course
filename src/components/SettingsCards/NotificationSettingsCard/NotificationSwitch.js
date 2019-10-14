import Switch from "@material-ui/core/Switch";
import React from "react";
import PropTypes from "prop-types";

function NotificationSwitch({ id, isOn, handleChange }) {
  // const [state, setState] = useState({
  //   checkedB: true
  // });

  // const handleChange = name => event => {
  //   setState({ ...state, [name]: event.target.checked });
  // };

  return (
    <div>
      <Switch
        checked={isOn}
        onChange={event => handleChange(id, event.target.checked)}
        color="primary"
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </div>
  );
}

NotificationSwitch.propTypes = {
  id: PropTypes.number.isRequired,
  isOn: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default NotificationSwitch;
