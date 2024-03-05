import ContactListItem from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={css.list}>
      {filteredContacts.map((contact) => (
        <li className={css.listItem} key={contact.id}>
          <ContactListItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
