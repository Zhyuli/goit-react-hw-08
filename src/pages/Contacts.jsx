import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DocTitle from "../components/DocTitle/DocTitle";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import { fetchContacts } from "../../redux/operations";
import { getError, getIsLoading } from "./redux/selectors";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <div>
        <DocTitle>Phonebook</DocTitle>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList />
      </div>
    </>
  );
};
export default Contacts;
