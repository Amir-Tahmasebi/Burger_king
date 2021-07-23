import { FaAddressBook, FaTelegramPlane } from "react-icons/fa";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillFacebook,
  AiFillContacts,
  AiTwotoneMail,
} from "react-icons/ai";

export default function Address() {
  return (
    <section className="address">
      <h3>راه های ارتباطی باما</h3>
      <section className="container">
        <section className="content">
          <FaAddressBook />
          <p>تهران, خایابن ولیعصر</p>
        </section>
        <section className="content">
          <AiFillContacts />
          <p>09120123273</p>
        </section>
        <section className="content">
          <AiTwotoneMail />
          <p>amirtmsbi@gmail.com</p>
        </section>
        <section className="content">
          <FaTelegramPlane />
          <AiFillInstagram />
          <AiOutlineTwitter />
          <AiFillFacebook />
        </section>
      </section>
    </section>
  );
}
