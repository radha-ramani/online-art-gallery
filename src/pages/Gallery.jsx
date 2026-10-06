import { useState } from "react";

import sunset from "../assets/sun.jpeg";
import blue from "../assets/blue.jpeg";
import mountain from "../assets/mountain.jpeg";
import modern from "../assets/modern.jpeg";
function Gallery() {
  const [search, setSearch] = useState("");

  const defaultArtworks = [
    {
      id: 1,
      title: "Sunset Dreams",
      artist: "Ananya Rao",
      price: 4500,
      src : sunset
    },
    {
      id: 2,
      title: "Blue Abstract",
      artist: "Arjun Kumar",
      price: 6200,
      src :blue
    },
    {
      id: 3,
      title: "Mountain View",
      artist: "Priya Sharma",
      price: 5500,
      src :mountain
    },
    {
      id: 4,
      title: "Modern Colors",
      artist: "Rahul Verma",
      price: 7000,
      src :modern
    },
  ];

  const adminArtworks = JSON.parse(
    localStorage.getItem("artworks") || "[]"
  );

  const artworks = [...defaultArtworks, ...adminArtworks];

  const filteredArtworks = artworks.filter((art) =>
    art.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="gallery-page">
      <h1>Art Gallery</h1>

      <p>Explore our beautiful collection of artworks.</p>

      <input
        type="text"
        placeholder="Search artwork..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="artwork-grid">
        {filteredArtworks.map((art) => (
          <div className="artwork-card" key={art.id}>
            <img
              className="artwork-image"
                  src={art.src}
                     alt={art.title}
                       />

            <h2>{art.title}</h2>

            <p>Artist: {art.artist}</p>

            <h3>₹{art.price}</h3>

            <button
              onClick={() =>
                alert(art.title + " selected for purchase")
              }
            >
              Buy Artwork
            </button>
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Gallery;