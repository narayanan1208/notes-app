import NoteCard from "./NoteCard";

const NoteCardContainer = ({ notes }) => {
  if (notes.length === 0) {
    return <div>No notes available.</div>;
  }

  return (
    <div className="container">
      <div className="note-has-grid row">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default NoteCardContainer;
