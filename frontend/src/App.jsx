import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddNotes from "./pages/AddNotes";
import EditNotePage from "./pages/EditNotePage";
import NotePage from "./pages/NotePage";
import axios from "axios";
import { toast } from "react-toastify";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:8000/notes/");
        if (response.status !== 200) {
          throw new Error("Failed to fetch notes");
        }
        const data = await response.data;
        setNotes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const addNote = async (data) => {
    try {
      const response = await axios.post("http://localhost:8000/notes/", data);
      if (response.status !== 201) {
        throw new Error("Failed to add note");
      }
      const newNote = await response.data;
      setNotes([...notes, newNote]);
      toast.success("A new note was added successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const updateNote = (data, slug) => {
    console.log("SLUG : ", slug, "DATA : ", data);
    axios
      .put(`http://localhost:8000/notes/${slug}/`, data)
      .then((res) => {
        console.log(res.data);
        toast.success("Note updated succesfully");
      })

      .catch((err) => console.log(err.message));
  };

  console.log("Notes:", notes);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage notes={notes} loading={loading} />} />
          <Route path="/add-notes" element={<AddNotes addNote={addNote} />} />
          <Route
            path="/edit-note/:slug"
            element={<EditNotePage updateNote={updateNote} />}
          />
          <Route path="/notes/:slug" element={<NotePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
