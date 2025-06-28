import React, { useEffect, useState } from "react";
import "./NotePage.css";
import { BiSolidTrashAlt } from "react-icons/bi";
import { FiEdit } from "react-icons/fi";
import { Link, useParams } from "react-router-dom";
import Modal from "../components/Modal";
import axios from "axios";
import { FormatDate } from "../components/FormatDate";

const NotePage = () => {
  const [note, setNote] = useState({});
  const { slug } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/notes/${slug}`);
        if (response.status !== 200) {
          throw new Error("Failed to fetch notes");
        }
        const data = await response.data;
        console.log("Notes:", data);
        setNote(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNote();
  }, [slug]);

  return (
    <>
      <div className="note-container">
        <h3 className="title">{note.title}</h3>
        <span className="d-flex justify-content-center">
          <p className="note-date font-12 text-muted me-5">
            created: {FormatDate(note.created)}
          </p>
          <p className="note-date font-12 text-muted me-5">
            last updated: {FormatDate(note.updated)}
          </p>
        </span>
        <span className="button-group">
          <Link to={`/edit-note/${slug}`}>
            <button className="btn btn-primary">
              <FiEdit />
              <span>Edit</span>
            </button>
          </Link>
          <button className="btn btn-danger">
            <BiSolidTrashAlt />
            <span>Delete</span>
          </button>
        </span>
        <p className="description">{note.body}</p>
      </div>
      <Modal />
    </>
  );
};

export default NotePage;
