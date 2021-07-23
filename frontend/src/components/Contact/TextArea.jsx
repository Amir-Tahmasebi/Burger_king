import { useField } from "formik";

const TextArea = ({ ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <textarea className="text-area" {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error-msg">{meta.error}</span>
      ) : null}
    </>
  );
};

export default TextArea;
