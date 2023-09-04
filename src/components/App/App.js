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
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import {
  Switch,
  Route,
  Redirect,
} from "react-router-dom/cjs/react-router-dom.min.js";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal.js";
import SignUpModal from "../SignUpModal/SignUpModal.js";
import LogInModal from "../LogInModal/LogInModal.js";
import { getItems, deleteItem, addItem } from "../../utils/api.js";
import { signUp, logIn, checkToken, editProfile } from "../../utils/auth.js";
import EditProfile from "../EditProfileModal/EditProfileModal.js";

function App() {
  const weatherTemp = 100;
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [itemToDelete, setItemToDelete] = useState(-1);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [items, setItems] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const localToken = localStorage.getItem("jwt");
  // working on getting the current user after updating
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    checkToken(localStorage.getItem("jwt"))
      .then((res) => res.json())
      .then((res) => setCurrentUser(res))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCreateItemModal = () => {
    setActiveModal("createItem");
  };

  const handleEditModal = () => {
    setActiveModal("edit");
  };

  const handleLogInModal = () => {
    setActiveModal("login");
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
    const token = localStorage.getItem("jwt");
    deleteItem(itemToDelete, token)
      .then((res) => {
        const newItems = items.filter((item) => {
          return item.id !== itemToDelete;
        });
        console.log(newItems);
        console.log(newItems);
        setItems(newItems);
        console.log("IT DELETED");
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };
  console.log(items);

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const onAddItem = (values) => {
    const token = localStorage.getItem("jwt");
    console.log(values);
    addItem(token, values)
      .then((res) => {
        setItems([values, ...items]);
        handleCloseModal();
      })
      .catch((err) => console(err));
  };

  const UpdateCurrentUser = () => {
    checkToken(localStorage.getItem("jwt"))
      .then((res) => res.json())
      .then((res) => setCurrentUser(res));
    // console.log(data.token);
  };
  const onLogIn = (values) => {
    logIn(values)
      .then((res) => {
        setUsers([users, ...users]);
        localStorage.setItem("jwt", res.token);
        UpdateCurrentUser();
        setIsLoggedIn(true);
        handleCloseModal();
      })
      .then(UpdateCurrentUser())
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });
  };

  const onSignUp = (values) => {
    signUp(values)
      .then((res) => {
        setUsers([users, ...users]);
        UpdateCurrentUser(res);
        setIsLoggedIn(true);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });
  };

  const onEditProfile = (values) => {
    const token = localStorage.getItem("jwt");
    editProfile(token, values)
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        handleCloseModal();
      })
      .then((res) => {
        UpdateCurrentUser();
      });
  };
  console.log(currentTemperatureUnit);
  console.log(currentUser);
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

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  return (
    <div>
      <CurrentUserContext.Provider value={{ currentUser }}>
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleToggleSwitchChange }}
        >
          <Header
            onCreateModal={handleCreateModal}
            onLogInModal={handleLogInModal}
          />

          <Switch>
            <Route path="/profile">
              <Profile
                items={items}
                onSelectCard={handleSelectedCard}
                onEditModal={handleEditModal}
                onSignUp={onSignUp}
                onCreateItemModal={handleCreateItemModal}
              />
            </Route>
            <Route path="/">
              {isLoggedIn ? <Redirect to="/profile" /> : <Redirect to="/" />}
              <Main
                weatherTemp={temp}
                onSelectCard={handleSelectedCard}
                items={items}
              />
            </Route>
          </Switch>

          <Footer />
          {activeModal === "createItem" && (
            <AddItemModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "createItem"}
              onAddItem={onAddItem}
            />
          )}
          {activeModal === "create" && (
            <SignUpModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "create"}
              onSignUp={onSignUp}
            />
          )}
          {activeModal === "login" && (
            <LogInModal
              handleCloseModal={handleCloseModal}
              isOpen={activeModal === "login"}
              onLogIn={onLogIn}
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
          {activeModal === "edit" && (
            <EditProfile
              handleCloseModal={handleCloseModal}
              onEditProfile={onEditProfile}
              isOpen={activeModal === "edit"}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
