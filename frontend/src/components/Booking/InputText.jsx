import { Field } from "formik";
import InputPassword from "../InputPassword/InputPassword";

function InputText({
  errors,
  touched,
  Icon = null,
  name,
  placeholder,
  type,
  disabled,
}) {
  return (
    <section className="wrapper-field wrapper-field-input">
      {Icon ? <Icon /> : null}
      {type !== "password" ? (
        <Field
          name={name}
          placeholder={placeholder}
          className="input"
          disabled={disabled}
        />
      ) : (
        <InputPassword
          name={name}
          placeholder={placeholder}
          disabled={disabled}
          className="input"
        />
      )}
      {errors[name] && touched[name] ? (
        <span className="error-msg">{errors[name]}</span>
      ) : null}
    </section>
  );
}

export default InputText;
