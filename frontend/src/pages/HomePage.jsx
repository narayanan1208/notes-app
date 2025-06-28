import Filter from "../components/Filter";
import NoteCardContainer from "../components/NoteCardContainer";

import React from "react";

const HomePage = ({ notes, loading, handleFilterText }) => {
  return (
    <>
      <Filter handleFilterText={handleFilterText} />
      {notes.length < 1 && (
        <h4 style={{ textAlign: "center", marginTop: "10px" }}>
          There is no note found with the search phrase above
        </h4>
      )}
      <NoteCardContainer notes={notes} loading={loading} />
    </>
  );
};

export default HomePage;
