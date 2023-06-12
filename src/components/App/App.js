// import logo from "..../src/logo.svg";
import Header from "../Header/Header.js";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./App.css";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
} from "../../utils/WeatherApi.js";

function App() {
  const weatherTemp = 100;
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Header onCreateModal={handleCreateModal} />
      <Main weatherTemp={temp} onSelectCard={handleSelectedCard} />
      <Footer />
      {activeModal === "create" && (
        <ModalWithForm
          title="New garment"
          className="modal__title"
          onClose={handleCloseModal}
        >
          <fieldset className="form__field">
            <label className="modal__label">
              Name
              <input
                className="modal__input"
                type="text"
                name="name"
                minLength="1"
                maxLength="30"
                placeholder="Name"
              ></input>
            </label>
          </fieldset>
          <fieldset className="form__field">
            <label className="modal__label">
              Image
              <input
                className="modal__input"
                type="url"
                name="link"
                minLength="1"
                maxLength="30"
                placeholder="Image"
              ></input>
            </label>
          </fieldset>
          <fieldset className="form__field">
            <p className="modal__paragraph">Select the weather type:</p>
            <div className="modal__radios">
              <div className="modal__radio">
                <input
                  type="radio"
                  id="hot"
                  value="hot"
                  className="modal__input-radio"
                />
                <label>Hot</label>
              </div>
              <div className="modal__radio">
                <input
                  type="radio"
                  id="warm"
                  value="warm"
                  className="modal__input-radio"
                />
                <label>Warm</label>
              </div>
              <div className="modal__radio">
                <input
                  type="radio"
                  id="cold"
                  value="cold"
                  className="modal__input-radio"
                />
                <label>Cold</label>
              </div>
            </div>
          </fieldset>
        </ModalWithForm>
      )}
      {activeModal === "preview" && (
        <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
