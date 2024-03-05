import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import css from "./LoginForm.module.css";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Password is too short - should be 6 chars minimum.")
    .required("Required"),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(logIn(values))
          .unwrap()
          .then(() => console.log("Успішний вхід"))
          .catch(() => console.error("Помилка входу"))
          .finally(() => {
            setSubmitting(false);
            resetForm();
          });
      }}
    >
      {({ isSubmitting }) => (
        <Form className={css.form}>
          <div className={css.formGroup}>
            <label htmlFor="email">Email</label>
            <Field name="email" type="email" className={css.input} />
            <ErrorMessage name="email" component="div" className={css.error} />
          </div>

          <div className={css.formGroup}>
            <label htmlFor="password">Password</label>
            <Field name="password" type="password" className={css.input} />
            <ErrorMessage
              name="password"
              component="div"
              className={css.error}
            />
          </div>

          <button type="submit" className={css.btn} disabled={isSubmitting}>
            Log In
          </button>
        </Form>
      )}
    </Formik>
  );
};

// without Formik
// export const LoginForm = () => {
//   const dispatch = useDispatch();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const form = e.currentTarget;

//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     )
//       .unwrap()
//       .then(() => {
//         console.log("login success");
//       })
//       .catch(() => {
//         console.log("login error");
//       });

//     form.reset();
//   };

//   return (
//     <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
//       <label className={css.label}>
//         Email
//         <input type="email" name="email" />
//       </label>
//       <label className={css.label}>
//         Password
//         <input type="password" name="password" />
//       </label>
//       <button type="submit">Log In</button>
//     </form>
//   );
// };
