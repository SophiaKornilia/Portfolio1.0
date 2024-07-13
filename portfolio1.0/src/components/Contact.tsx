import "./Contact.css";
import Swal from "sweetalert2";

export const Contact = () => {
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "21234ec1-0f9e-47cc-9b9f-9d49f7fbde93");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success",
      });
    }
  };

  return (
    <div id="contact">
        <div className="separator"></div>
      <div className="contactContainer">
        <div className="textContainer">
          <p>
            Do you have a new project, job, or internship opportunity for me?
            Feel free to connect.
          </p>
        </div>
        <div>
          <section className="contact">
            <form onSubmit={onSubmit}>
              <h2>Contact form</h2>
              <div className="inputBox">
                <label>Full name</label>
                <input
                  type="text"
                  className="field"
                  placeholder="Enter your name"
                  name="name"
                  required
                />
              </div>
              <div className="inputBox">
                <label>Email Address</label>
                <input
                  type="email"
                  className="field"
                  placeholder="Enter your email"
                  name="email"
                  required
                />
              </div>
              <div className="inputBox">
                <label>Your message</label>
                <textarea
                  name="message"
                  className="field mess"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>
              <button type="submit">
                <h4>Send message</h4>
              </button>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};
