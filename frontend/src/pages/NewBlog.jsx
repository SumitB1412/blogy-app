import React, { useState } from "react";
import styles from "../styles/newblog.module.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import axios from "axios";
// import { useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import { useNavigate } from "react-router-dom";

export const NewBlog = () => {
  // const { token, userId } = useSelector((store) => store.auth);
  const [formData, setFormData] = useState({});
  const inputFile = useRef();
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");

  if (!token) {
    return (
      <Alert className="text-center" variant="danger">
        To write a new blog first {"   "}
        <Alert.Link onClick={() => navigate("/login")}>login here</Alert.Link>
        {"   "}
        to your account
      </Alert>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("title", formData.title);
    form.append("body", formData.body);
    form.append("tags", formData.tags);
    form.append("image", inputFile.current.files[0]);

    // console.log(form.get("title"));

    axios
      .post(`http://localhost:8000/blogs/user/${userId}/new-blog`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => console.log(res))
      .catch((err) => console.ḷog(err));
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
        <Form.Select
          onChange={handleChange}
          name="tags"
          aria-label="Default select example"
          className="mb-3 mt-3"
        >
          <option>Select The Category</option>
          <option value="Travel">Travel</option>
          <option value="Tech">Tech</option>
          <option value="Food">Food</option>
        </Form.Select>
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
