// import logo from "..../src/logo.svg";
import Header from "../Header/Header.js";
import WeatherCard from "../WeatherCard/WeatherCard.js";
import ItemCard from "../ItemCard/ItemCard";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile.js";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./App.css";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
} from "../../utils/WeatherApi.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min.js";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal.js";
import { getItems, deleteItem, addItem } from "../../utils/api.js";

function App() {
  const weatherTemp = 100;
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [itemToDelete, setItemToDelete] = useState(-1);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [items, setItems] = useState([]);

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
    setItemToDelete(-1);
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleDeleteItem = (id) => {
    console.log(id);
    setItemToDelete(id);
    setActiveModal("delete");
  };

  const handleDeleteItemApi = () => {
    console.log("deleted tottaly" + `${itemToDelete}`);
    deleteItem(itemToDelete).then((res) => {
      const newItems = items.filter((item) => {
        return item.id !== itemToDelete;
      });

      console.log(newItems);
      setItems(newItems);
      console.log("IT DELETED");
      handleCloseModal();
    });
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const onAddItem = (values) => {
    // console.log();
    addItem(values)
      .then((res) => {
        setItems([values, ...items]);
        handleCloseModal();
      })
      .catch((err) => console(err));
  };

  console.log(currentTemperatureUnit);

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        getItems().then((res) => {
          console.log(res);
          setItems(res);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header onCreateModal={handleCreateModal} />

        <switch>
          <Route exact path="/">
            <Main
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              items={items}
            />
          </Route>
          <Route path="/profile">
            <Profile
              items={items}
              onSelectCard={handleSelectedCard}
              onCreateModal={handleCreateModal}
            />
          </Route>
        </switch>

        <Footer />
        {activeModal === "create" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "create"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onDelete={handleDeleteItem}
            onClose={handleCloseModal}
          />
        )}
        {activeModal === "delete" && (
          <DeleteItemModal
            onClose={handleCloseModal}
            onDelete={handleDeleteItemApi}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
