const artists = [
  {
    name: "Rahul Kumar",
    style: "Abstract Art",
    description:
      "Rahul creates expressive abstract artworks using bold colors and creative compositions.",
    image:
      "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Priya Sharma",
    style: "Modern Art",
    description:
      "Priya explores modern artistic styles and creates artworks inspired by emotions and everyday life.",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Sneha Rao",
    style: "Contemporary Painting",
    description:
      "Sneha combines traditional painting techniques with contemporary ideas to create unique artworks.",
    image:
      "https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Arjun Reddy",
    style: "Nature Art",
    description:
      "Arjun's work captures the beauty of nature through peaceful colors and detailed compositions.",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&q=80",
  },
];

function Artists() {
  return (
    <main className="artists-page">

      {/* PAGE HEADER */}
      <section className="artists-header">

        <p>OUR ARTISTS</p>

        <h1>Meet the Artists</h1>

        <span>
          Discover the talented artists behind the beautiful artworks
          in our collection.
        </span>

      </section>

      {/* ARTIST CARDS */}
      <section className="artists-grid">

        {artists.map((artist) => (

          <div className="artist-card" key={artist.name}>

            <img
              src={artist.image}
              alt={artist.name}
            />

            <div className="artist-info">

              <p>{artist.style}</p>

              <h2>{artist.name}</h2>

              <span>
                {artist.description}
              </span>

              <button>
                View Artwork
              </button>

            </div>

          </div>

        ))}

      </section>

    </main>
  );
}

export default Artists;
