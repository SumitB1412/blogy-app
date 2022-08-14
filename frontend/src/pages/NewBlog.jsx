import React, { useState } from "react";
import styles from "../styles/newblog.module.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useRef } from "react";

export const NewBlog = () => {
  const [formData, setFormData] = useState({});
  const inputFile = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", formData.title);
    formData.append("body", formData.body);
    formData.append("image", inputFile.current.files[0]);

    fetch("http://localhost:8000/blogs/user/new-blog", {
      method: "post",
      body: formData,
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.jarvis}>
      <h1 style={{ textAlign: "center" }}>Tell everyone your New Story...</h1>
      <form onSubmit={handleSubmit}>
        <InputGroup size="lg">
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Title Here"
            style={{ fontSize: "28px" }}
            onChange={handleChange}
            name="title"
          />
        </InputGroup>
        <FloatingLabel
          controlId="floatingTextarea"
          label="Story"
          className="mt-4"
        >
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "700px", fontSize: "18px" }}
            onChange={handleChange}
            name="body"
          />
        </FloatingLabel>
        <Form.Group controlId="formFile" className="mb-3 mt-3">
          <Form.Control
            type="file"
            name="image"
            onChange={handleChange}
            ref={inputFile}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Publish
        </Button>
      </form>
    </div>
  );
};
