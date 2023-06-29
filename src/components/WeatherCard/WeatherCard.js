import "./WeatherCard.css";
import { weatherOptions } from "../../utils/constants";
import { useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

const WeatherCard = ({ day, type, weatherTemp = "" }) => {
  const imageSrc = weatherOptions.filter((i) => {
    return i.day === day && i.type === type;
  });
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const imageSrcUrl = imageSrc[0].url || "";
  const imageType = imageSrc[0].type;
  return (
    <section className="weather" id="weather">
      <div className="weather_info">
        {weatherTemp} {currentTemperatureUnit}
      </div>
      <img src={imageSrcUrl} className="weather_image" alt={imageType} />
    </section>
  );
};

export default WeatherCard;
