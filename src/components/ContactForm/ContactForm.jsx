import { Formik, Form, ErrorMessage, Field } from "formik";
import { useId } from "react";

import css from "./ContactForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/operations";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required field"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("Required field"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={(values, actions) => {
        dispatch(addContact({ ...values }));
        actions.resetForm();
      }}
      validationSchema={contactSchema}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.formGroup}>
          <label htmlFor="numberFieldId">Number</label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>

        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
