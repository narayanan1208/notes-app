import Filter from "../components/Filter";
import NoteCardContainer from "../components/NoteCardContainer";

import React from "react";

const HomePage = ({ notes, loading }) => {
  if (loading) {
    return <div>Loading notes...</div>;
  }

  return (
    <>
      <Filter />
      <NoteCardContainer notes={notes} />
    </>
  );
};

export default HomePage;
