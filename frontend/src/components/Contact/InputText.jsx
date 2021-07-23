import { Field } from "formik";

export default function InputText({
  errors,
  touched,
  name,
  placeholder,
}) {
  return (
    <section className="wrapper-field wrapper-field-input">
      <Field name={name} placeholder={placeholder} className="input" />
      {errors[name] && touched[name] ? (
        <span className="error-msg">{errors[name]}</span>
      ) : null}
    </section>
  );
}
