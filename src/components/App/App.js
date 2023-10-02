import Header from "../Header/Header.js";
import Main from "../Main/Main.js";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile.js";
import "./App.css";
import { useEffect, useState } from "react";
import ItemModal from "../ItemModal/ItemModal";
import {
  getForecastWeather,
  parseWeatherData,
} from "../../utils/WeatherApi.js";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext.js";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.js";
import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min.js";
import AddItemModal from "../AddItemModal/AddItemModal.js";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal.js";
import SignUpModal from "../SignUpModal/SignUpModal.js";
import LogInModal from "../LogInModal/LogInModal.js";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute.js";
import { getItems, deleteItem, addItem } from "../../utils/api.js";
import {
  signUp,
  logIn,
  checkToken,
  editProfile,
  likeItem,
  disLikeItem,
} from "../../utils/auth.js";
import EditProfile from "../EditProfileModal/EditProfileModal.js";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [itemToDelete, setItemToDelete] = useState(-1);
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [items, setItems] = useState([]);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // working on getting the current user after updating
  const updateCurrentUser = () => {
    checkToken(localStorage.getItem("jwt"))
      .then((res) => setCurrentUser(res))
      .catch((err) => console.log(err));
  };
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    updateCurrentUser();
  }, []);
  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("loggedIn"));
  }, []);
  const handleSignUpModal = () => {
    setActiveModal("signup");
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
    setItemToDelete(id);
    setActiveModal("delete");
  };

  const handleDeleteItemApi = () => {
    const token = localStorage.getItem("jwt");
    deleteItem(itemToDelete, token)
      .then((res) => {
        const newItems = items.filter((item) => {
          return item._id !== itemToDelete;
        });
        setItems(newItems);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "C") setCurrentTemperatureUnit("F");
    if (currentTemperatureUnit === "F") setCurrentTemperatureUnit("C");
  };

  const onAddItem = (values) => {
    const token = localStorage.getItem("jwt");

    addItem(token, values)
      .then((res) => {
        setItems([res, ...items]);
        handleCloseModal();
      })
      .catch((err) => console(err));
  };

  // const updateCurrentUser = () => {
  //   checkToken(localStorage.getItem("jwt")).then((res) => setCurrentUser(res));
  // };
  const updateLoggedIn = () => {
    setIsLoggedIn(localStorage.getItem("loggedIn"));
  };
  const onLogIn = (values) => {
    logIn(values)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        localStorage.setItem("loggedIn", true);
        updateLoggedIn();
        setCurrentUser(res.user);
        handleCloseModal();
      })
      .then()
      .catch((err) => {
        console.log(err);
        setIsLoggedIn(false);
      });
  };

  const onSignUp = (values) => {
    // debugger;
    signUp(values)
      .then((res) => {
        localStorage.setItem("jwt", res.token);
        updateCurrentUser();
        localStorage.setItem("loggedIn", true);
        updateLoggedIn();

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
        setCurrentUser({
          ...currentUser,
          ...res,
        });
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const onLogOut = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("loggedIn");
    setIsLoggedIn(false);
    setCurrentUser({});
  };

  const onChangeModal = () => {
    handleCloseModal();
    handleSignUpModal();
  };

  const onLikeButton = (isLiked, id) => {
    const token = localStorage.getItem("jwt");
    isLiked
      ? disLikeItem(token, id)
          .then(({ item: updatedCard }) => {
            setItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : likeItem(token, id)
          .then(({ item: updatedCard }) => {
            setItems((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
        getItems().then((res) => {
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

    // useEffect;

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  return (
    <CurrentUserContext.Provider value={{ currentUser }}>
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <Header
          onCreateModal={handleSignUpModal}
          onCreateItemModal={handleCreateItemModal}
          onLogInModal={handleLogInModal}
          isLoggedIn={isLoggedIn}
          onLogOut={onLogOut}
        />

        <Switch>
          <Route exact path="/">
            <Main
              onLikeButton={onLikeButton}
              isLoggedIn={isLoggedIn}
              weatherTemp={temp}
              onSelectCard={handleSelectedCard}
              items={items}
            />
          </Route>
          <ProtectedRoute path="/profile" isLoggedIn={isLoggedIn}>
            <Profile
              isLoggedIn={isLoggedIn}
              items={items}
              onSelectCard={handleSelectedCard}
              onEditModal={handleEditModal}
              onSignUp={onSignUp}
              onCreateItemModal={handleCreateItemModal}
              onLogOut={onLogOut}
              onLikeButton={onLikeButton}
            />
          </ProtectedRoute>
        </Switch>

        <Footer />
        {activeModal === "createItem" && (
          <AddItemModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "createItem"}
            onAddItem={onAddItem}
          />
        )}
        {activeModal === "signup" && (
          <SignUpModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "signup"}
            onSignUp={onSignUp}
          />
        )}
        {activeModal === "login" && (
          <LogInModal
            handleCloseModal={handleCloseModal}
            isOpen={activeModal === "login"}
            onLogIn={onLogIn}
            onChangeModal={onChangeModal}
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
  );
}

export default App;
