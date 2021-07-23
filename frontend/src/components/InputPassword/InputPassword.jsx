import { useField } from "formik";

const InputPassword = ({ ...props }) => {
  const [field
    // , meta
] = useField(props);
  return (
    <>
      <input type="password" {...field} {...props} />
      {/* {meta.touched && meta.error ? (
        <span className="error-msg">{meta.error}</span>
      ) : null} */}
    </>
  );
};

export default InputPassword;
