import Container from "../../styled/container";
import Header from "../../components/header/Header";
import { ContactForm, Content, Input } from "../../styled/contact.styled";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function Contact() {
  const registerUser = async (event) => {
    event.preventDefault();
    fetch("/api/contact/insert", {
      body: JSON.stringify({
        name: event.target.name.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
  };

  return (
    <>
      <Header />
      <Container>
        <ContactForm onSubmit={registerUser}>
          <h1>let's get in contact!</h1>
          <p>
            fill everything out so i can reach you at my nearest conenience
            <br />
            note: this doesnt not work with js disabled
          </p>
          <Input
            minLength="3"
            tabIndex="1"
            name="name"
            type="text"
            placeholder="name"
          />
          <Input
            tabIndex="2"
            name="email"
            type="email"
            placeholder="your email"
          />
          <Content tabIndex="3" name="message" placeholder="your message" />
          <button tabIndex="4" type="submit" value="confirm" />
        </ContactForm>
      </Container>
    </>
  );
}
export default Contact;
