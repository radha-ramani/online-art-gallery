import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  const [artworks, setArtworks] = useState(() => {
    const savedArtworks = localStorage.getItem("artworks");

    return savedArtworks ? JSON.parse(savedArtworks) : [];
  });

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [price, setPrice] = useState("");

  const addArtwork = (e) => {
    e.preventDefault();

    if (!title  || !artist ||  !price) {
      alert("Please fill all artwork details");
      return;
    }

    const newArtwork = {
      id: Date.now(),
      title: title,
      artist: artist,
      price: price,
    };

    const updatedArtworks = [...artworks, newArtwork];

    setArtworks(updatedArtworks);

    localStorage.setItem(
      "artworks",
      JSON.stringify(updatedArtworks)
    );

    setTitle("");
    setArtist("");
    setPrice("");

    alert("Artwork added successfully!");
  };

  const deleteArtwork = (id) => {
    const updatedArtworks = artworks.filter(
      (art) => art.id !== id
    );

    setArtworks(updatedArtworks);

    localStorage.setItem(
      "artworks",
      JSON.stringify(updatedArtworks)
    );

    alert("Artwork deleted!");
  };

  const logout = () => {
    localStorage.removeItem("adminLoggedIn");
    navigate("/admin-login");
  };

  return (
    <div className="gallery-page">
      <h1>Admin Dashboard</h1>

      <p>Manage artworks from the Admin Module.</p>

      <button onClick={logout}>
        Admin Logout
      </button>

      <hr />

      <h2>Add New Artwork</h2>

      <form onSubmit={addArtwork}>
        <div className="form-group">
          <label>Artwork Title</label>

          <input
            type="text"
            placeholder="Enter artwork title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Artist Name</label>

          <input
            type="text"
            placeholder="Enter artist name"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Price</label>

          <input
            type="number"
            placeholder="Enter price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button className="btn" type="submit">
          Add Artwork
        </button>
      </form>

      <hr />

      <h2>Artwork Management</h2>

      <div className="artwork-grid">
        {artworks.length === 0 ? (
          <p>No artworks added yet.</p>
        ) : (
          artworks.map((art) => (
            <div className="artwork-card" key={art.id}>
              <div className="artwork-image">
                🎨
              </div>

              <h2>{art.title}</h2>

              <p>Artist: {art.artist}</p>

              <h3>₹{art.price}</h3>

              <button
                onClick={() => deleteArtwork(art.id)}
              >
                Delete Artwork
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default AdminDashboard;