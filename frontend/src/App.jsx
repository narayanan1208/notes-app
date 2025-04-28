import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import AddNotes from "./pages/AddNotes";
import EditNotePage from "./pages/EditNotePage";
import NotePage from "./pages/NotePage";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:8000/notes/");
        if (response.status !== 200) {
          throw new Error("Failed to fetch notes");
        }
        const data = await response.data;
        console.log("Notes:", data);
        setNotes(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage notes={notes} loading={loading} />} />
          <Route path="/add-notes" element={<AddNotes />} />
          <Route path="/edit-notes" element={<EditNotePage />} />
          <Route path="/notes-detail" element={<NotePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
