import { useState } from "react";

export default function App() {
  const [note, setNote] = useState("");

  const handleSave = async () => {
    const result = await window.electronAPI.saveFile(note);
    if (result.success) {
      alert(`File saved at: ${result.path}`);
    } else {
      alert("Save canceled!");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>📝 Electron Notepad</h1>
      <textarea
        style={{
          width: "100%",
          height: "300px",
          padding: "10px",
          fontSize: "16px",
        }}
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
      />
      <br />
      <button
        onClick={handleSave}
        style={{
          marginTop: "1rem",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Save Note
      </button>
    </div>
  );
}
