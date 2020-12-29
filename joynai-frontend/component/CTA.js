import styles from "./CTA.module.css";
import Link from "next/link";
import { Button, Modal, ModalBody } from "react-bootstrap";
import { useState } from "react";
import Home from "../pages";
import Form from "./Form";
import Head from "next/head";
const CTA = ({ href, text, color, type }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* {type == "link" && (
        <div
          className={styles.cta}
          style={{ backgroundColor: color ? color : "#ff6a39" }}
        >
          <a
            style={{ color: "white", textDecoration: "none" }}
            href="/#JOYN-calculator"
          >
            {text}
          </a>
        </div>
      )} */}
      {type != "link" && (
        <div style={{ display: "flex", width: "fit-content" }}>
          <div
            className={styles.cta}
            style={{ backgroundColor: color ? color : "#ff6a39" }}
            onClick={handleShow}
          >
            {text}
          </div>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <ModalBody>
              {" "}
              <Form />
            </ModalBody>
          </Modal>
        </div>
      )}
    </>
  );
};

export default CTA;
