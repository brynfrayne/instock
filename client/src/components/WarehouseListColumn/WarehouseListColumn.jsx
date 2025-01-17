import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import "./WarehouseListColumn.scss";
import chevronRight from "../../assets/icons/chevron_right-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import closeIcon from "../../assets/icons/close-24px.svg";
import { Link } from "react-router-dom";

export default function WarehouseListColumn({
  id,
  name,
  address,
  city,
  country,
  contactName,
  contactPhone,
  contactEmail,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [WarehouseName, setName] = useState("Hello");
  const [WarehouseId, setId] = useState();
  const apiUrl = process.env.REACT_APP_API_URL;

  const handleDelete = () => {
    axios.delete(`${apiUrl}/warehouses/${WarehouseId}`);
    alert("Warehouse and Associated Inventory Items Successfully Deleted");
    window.location.href = "/warehouses";
  }

  return (
    <section className="warehouse-list">
      <div className="warehouse-container">
        <div className="warehouse-column">
          <h4 className="warehouse-column__title">Warehouse</h4>
          <div className="warehouse-column__item-container">
            <Link
              to={"/warehouses/" + id}
              className="warehouse-column__main-link"
            >
              <h5 className="warehouse-column__text warehouse-column__text--link">
                {name}
              </h5>
            </Link>
            <img src={chevronRight} alt="chevron right" />
          </div>

          <h4 className="warehouse-column__title">Address</h4>
          <address className="warehouse-column__text">
            {address}, {city}, {country}
          </address>
        </div>

        <div className="warehouse-column">
          <h4 className="warehouse-column__title">contact name</h4>
          <h5 className="warehouse-column__text">{contactName}</h5>
          <h4 className="warehouse-column__title">contact information</h4>
          <div className="warehouse-column__contact-container">
            <a
              href={`tel:${contactPhone}`}
              className="warehouse-column__text warehouse-column__text-link"
            >
              {contactPhone}
            </a>
            <a
              href={`mailto:${contactEmail}`}
              className="warehouse-column__text warehouse-column__text-link"
            >
              {contactEmail}
            </a>
          </div>
        </div>

        <div className="warehouse-buttons">
          <img
            onClick={() => {
              setModalIsOpen(true);
              setName(`${name}`);
              setId(`${id}`);
            }}
            className="warehouse-buttons__delete"
            src={deleteIcon}
            alt="delete-icon"
          />
          <Link
            to={"/warehouses/" + id + "/edit"}
            className="warehouse-column__link"
          >
            <img
              className="warehouse-buttons__edit"
              src={editIcon}
              alt="edit-icon"
            />
          </Link>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        className="warehouse-modal"
        overlayClassName="warehouse-modal-overlay"
      >
        <img
          onClick={() => setModalIsOpen(false)}
          className="warehouse-modal__close"
          src={closeIcon}
          alt=""
        />
        <h1> {`Delete ${WarehouseName} warehouse`}</h1>

        <span>
          {`Please confirm that you'd like to delete
              ${WarehouseName} from the warehouses list. You won't be able to undo this action`}
        </span>
        <div className="warehouse-modal__buttons">
          <button
            className="warehouse-modal__buttons--cancel"
            onClick={() => setModalIsOpen(false)}
          >
            Cancel
          </button>
          <button
            className="warehouse-modal__buttons--delete"
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </Modal>
    </section>
  );
}

