import React from "react";
import styles from "../styles/newblog.module.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from 'react-bootstrap/Button';

export const NewBlog = () => {
  return (
    <div className={styles.jarvis}>
      <h1 style={{ textAlign: "center" }}>Tell everyone your New Story...</h1>
      <div>
        <InputGroup size="lg">
          <Form.Control
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            placeholder="Title Here"
            style={{ fontSize: "28px" }}
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
          />
        </FloatingLabel>
      </div>
      <div className={styles.thanos}>
        <Form.Group controlId="formFile" className="mb-3 mt-3">
          <Form.Control type="file" />
        </Form.Group>
      </div>
      <div className={styles.btn}>
      <Button variant="success" >Publish</Button>
      </div>
    </div>
  );
};
