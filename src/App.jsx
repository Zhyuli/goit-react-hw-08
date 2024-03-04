import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Layout } from "./components/Layout";
import { PrivateRoute } from "./components/PrivateRoute";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { refreshUser } from "./redux/auth/operations";

import { useAuth } from "./hooks/useAuth";

const HomePage = lazy(() => import("./pages/Home"));
const RegisterPage = lazy(() => import("./pages/Register"));
const LoginPage = lazy(() => import("./pages/Login"));
const ContactsPage = lazy(() => import("./pages/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/tasks"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

// import ContactList from "./components/ContactList/ContactList";
// import SearchBox from "./components/SearchBox/SearchBox";
// import ContactForm from "./components/ContactForm/ContactForm";
// import css from "./App.module.css";
// import { useDispatch, useSelector } from "react-redux";
// import { fetchContacts } from "./redux/operations";
// import { useEffect } from "react";
// import { getError, getIsLoading } from "./redux/selectors";

// const App = () => {
//   const dispatch = useDispatch();
//   const isLoading = useSelector(getIsLoading);
//   const error = useSelector(getError);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <>
//       <div>
//         <h1 className={css.title}>Phonebook</h1>
//         <ContactForm />
//         <SearchBox />
//         {isLoading && !error && <b>Request in progress...</b>}
//         <ContactList />
//       </div>
//     </>
//   );
// };
// export default App;

// // const getContacts = () => {
// //   const savedContacts = window.localStorage.getItem("saved-contacts");
// //   if (savedContacts !== null) {
// //     return JSON.parse(savedContacts);
// //   }
// //   return [
// //     { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
// //     { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
// //     { id: "id-3", name: "Eden Clements", number: "645-17-79" },
// //     { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
// //   ];
// // };

// // export const App = () => {
// //   //ADD
// //   const [contacts, setContacts] = useState(getContacts);
// //   const addContact = (newContact) => {
// //     setContacts((prevContacts) => {
// //       return [...prevContacts, newContact];
// //     });
// //   };

// //   //DELETE
// //   const deleteContact = (id) => {
// //     setContacts((prevContacts) => {
// //       return prevContacts.filter((contact) => contact.id !== id);
// //     });
// //   };

// //   useEffect(() => {
// //     window.localStorage.setItem("saved-contacts", JSON.stringify(contacts));
// //   }, [contacts]);

// //   //FILTER
// //   const [nameFilter, setNameFilter] = useState("");
// //   const findContact = contacts.filter((contact) =>
// //     contact.name.toLowerCase().includes(nameFilter.toLowerCase())
// //   );

// //   return (
// //     <>
// //       <div>
// //         <Title />
// //         <ContactForm onAdd={addContact} />
// //         <SearchBox value={nameFilter} onChange={setNameFilter} />
// //         <ContactList onDelete={deleteContact} contacts={findContact} />
// //       </div>
// //     </>
// //   );
// // };
