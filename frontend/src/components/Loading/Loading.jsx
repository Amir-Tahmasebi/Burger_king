import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function Loading({ message = null, status }) {
  useEffect(() => {
    if (message) {
      if (status === 1) {
        toast(message);
      } else {
        toast.error(message);
      }
    }
  }, [message, status]);
  
  return (
    <section>
      <h1>Loading ... !</h1>
      <ToastContainer />
    </section>
  );
}
