import Filter from "../components/Filter";
import NoteCardContainer from "../components/NoteCardContainer";

import React from "react";

const HomePage = ({ notes, loading }) => {
  return (
    <>
      <Filter />
      <NoteCardContainer notes={notes} loading={loading} />
    </>
  );
};

export default HomePage;
