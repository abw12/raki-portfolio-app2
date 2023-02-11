import { Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import contactImg from "../assets/img/contact-img.svg";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contacts">
      <Container>
        <Row
          className="justify-content-between"
          gap={32}
          style={{ marginTop: "16px" }}
        >
          <Col xs={"auto"} md={"auto"} xl={5}>
            <div>
              <p className="contact-heading">
                <span style={{ color: "rgb(253, 204, 73)" }}>CONTACT ME</span>
                <br></br> TO GET STARTED
              </p>
            </div>
          </Col>
        </Row>
        <Row
          className="justify-content-between"
          gap={32}
          style={{ marginTop: "16px" }}
        >
          <Col size={12} md={6}>
            <div className="">
              <img src={contactImg} alt="contact Image" />
            </div>
          </Col>
          <Col size={12} md={6}>
            <div>
              <form
                target="_blank"
                onSubmit={onSubmit}
                action="https://formsubmit.co/abhishekwasave12@gmail.com"
                method="POST"
              >
                <Row>
                  <Col size={12} md={12} sm={6}>
                    <input
                      className="form-name-input px-1"
                      type="text"
                      placeholder="Full Name"
                      {...register("name", {
                        required: true,
                        maxLength: 100,
                      })}
                    />
                    {errors.name && (
                      <p className="validation-error">
                        {errors.name.type === "required" &&
                          "This field is required."}
                        {errors.name.type === "maxLength" &&
                          "Max length is 100 char."}
                      </p>
                    )}
                  </Col>
                  <Col size={12} md={12} sm={6}>
                    <input
                      className="form-email-input"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors.email && (
                      <p className="validation-error">
                        {errors.email.type === "required" &&
                          "This field is required."}
                        {errors.email.type === "pattern" &&
                          "Invalid email address."}
                      </p>
                    )}
                  </Col>
                  <Col size={12} md={12} sm={6}>
                    <textarea
                      className="form-message-textarea"
                      name="message"
                      placeholder="Enter Your Message"
                      rows="4"
                      cols="50"
                      {...register("message", {
                        required: true,
                        maxLength: 2000,
                      })}
                    />
                    {errors.message && (
                      <p className="validation-error">
                        {errors.message.type === "required" &&
                          "This field is required."}
                        {errors.message.type === "maxLength" &&
                          "Max length is 2000 char."}
                      </p>
                    )}
                    <input type="hidden" name="_template" value="table"></input>
                    <input
                      type="hidden"
                      name="_subject"
                      value="Thanks for reaching out Raki..will get back to you shortly🙂"
                    ></input>

                    <button className="form-submit-button" type="submit">
                      Send me a message
                    </button>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
