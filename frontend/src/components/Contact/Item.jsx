import { FaTelegramPlane } from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
} from "react-icons/ai";

export default function Item({ Icon, title, content, isSubIcon }) {
  return (
    <section className="item-wrapper">
      <Icon className="icon" />
      <section>
        <h4>{title}</h4>
        {!isSubIcon ? (
          <p>{content}</p>
        ) : (
          <section className="icon-wrapper">
            <FaTelegramPlane />
            <AiFillInstagram />
            <AiOutlineTwitter />
            <AiFillFacebook />
          </section>
        )}
      </section>
    </section>
  );
}
