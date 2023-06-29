import React from "react";

const CurrentTemperatureUnitContext = React.createContext({
  currentTemperatUnit: "",
  handleToggleSwitchChange: () => {},
});

export { CurrentTemperatureUnitContext };
