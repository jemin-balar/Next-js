import React, { useState } from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    await setFormData({ name: "", email: "", phNumber: "", description: "" });
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phNumber: "",
    description: "",
  });

  const handleChange = (e) => {
    console.log(e.target.value, "chage");
    let names = e.target.name;
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={styles.container}>
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.mb_3}>
            <label htmlFor="name" className={styles.form_label}>
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
              id="name"
              name="name"
              aria-describedby="emailHelp"
            />
            <div id="name" className="form-text">
              We'll never share your name with anyone else.
            </div>
          </div>
          <div className={styles.mb_3}>
            <label htmlFor="phNumber" className={styles.form_label}>
              Phone Number
            </label>
            <input
              type="text"
              value={formData.phNumber}
              onChange={handleChange}
              name="phNumber"
              className="form-control"
              id="phNumber"
              aria-describedby="emailHelp"
            />
            <div id="phNumber" className="form-text">
              We'll never share your Phone Number with anyone else.
            </div>
          </div>
          <div className={styles.mb_3}>
            <label htmlFor="description">Concern</label>
            <textarea
              class="form-control"
              value={formData.description}
              onChange={handleChange}
              placeholder="Leave a comment here"
              id="description"
              name="description"
            ></textarea>
          </div>
          <div className={styles.mb_3}>
            <label htmlFor="email" className={styles.form_label}>
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              id="email"
              name="email"
              aria-describedby="email"
            />
            <div id="email" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
