import "./Main.css";
import WeatherCard from "../WeatherCard/WeatherCard";
import ItemCard from "../ItemCard/ItemCard";
import { useMemo, useContext } from "react";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";

function Main({ weatherTemp, onSelectCard, items, isLoggedIn, onLikeButton }) {
  const { currentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);
  const temp = weatherTemp?.temperature?.[currentTemperatureUnit] || 999;

  const weatherType = useMemo(() => {
    if (
      (temp >= 86 && currentTemperatureUnit === "F") ||
      (currentTemperatureUnit === "C") & (temp >= 30)
    ) {
      return "hot";
    } else if (
      (temp >= 66 && temp <= 85 && currentTemperatureUnit === "F") ||
      (currentTemperatureUnit === "C" && temp >= 18.8 && temp <= 29.4)
    ) {
      return "warm";
    } else if (
      (temp <= 65 && currentTemperatureUnit === "F") ||
      (temp <= 18.3 && currentTemperatureUnit === "C")
    ) {
      return "cold";
    }
  }, [currentTemperatureUnit, temp]);

  const filteredCards = items.filter((item) => {
    return item.weather.toLowerCase() === weatherType;
  });

  return (
    <main className="main">
      <WeatherCard day={false} type="cloudy" weatherTemp={temp} />
      <section className="card_section" id="card-section">
        Today is {temp}
        {currentTemperatureUnit} / You may want to wear:
        <div className="card_items">
          {filteredCards.map((item, index) => (
            <ItemCard
              onLikeButton={onLikeButton}
              item={item}
              isLoggedIn={isLoggedIn}
              onSelectCard={onSelectCard}
              key={item._id}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
