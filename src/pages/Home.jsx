function Home() {
  return (
    <>

      {/* HERO SECTION */}

      <main id="home" className="hero">

        <div className="hero-content">

          <p className="hero-small-text">
            WELCOME TO ONLINE ART GALLERY
          </p>

          <h1>
            Discover Art.
            <br />
            <span>Inspire Your World.</span>
          </h1>

          <p className="hero-description">
            Explore beautiful artworks created by talented
            artists. Discover unique paintings and find
            artwork that inspires you.
          </p>

          <div className="hero-buttons">

  <button className="explore-btn">
    Explore Gallery
  </button>

</div>


        </div>


        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=800&q=80"
            alt="Featured artwork"
          />

        </div>

      </main>


      {/* GALLERY PREVIEW */}

      <section className="gallery-section">

        <div className="section-title">

          <p>OUR COLLECTION</p>

          <h2>
            Featured Artworks
          </h2>

          <span>
            Discover beautiful artworks created by talented artists.
          </span>

        </div>


        <div className="artwork-grid">

          <div className="artwork-card">

            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=600&q=80"
              alt="Colorful Dreams"
            />

            <div className="artwork-info">

              <p>Abstract</p>

              <h3>
                Colorful Dreams
              </h3>

              <span>
                By Rahul Kumar
              </span>

              <div className="artwork-bottom">

                <strong>
                  ₹5,000
                </strong>

                <button>
                  View
                </button>

              </div>

            </div>

          </div>


          <div className="artwork-card">

            <img
              src="https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=600&q=80"
              alt="Abstract Emotions"
            />

            <div className="artwork-info">

              <p>Modern Art</p>

              <h3>
                Abstract Emotions
              </h3>

              <span>
                By Priya Sharma
              </span>

              <div className="artwork-bottom">

                <strong>
                  ₹7,500
                </strong>

                <button>
                  View
                </button>

              </div>

            </div>

          </div>


          <div className="artwork-card">

            <img
              src="https://images.unsplash.com/photo-1577083288073-40892c0860a4?auto=format&fit=crop&w=600&q=80"
              alt="Golden Beauty"
            />

            <div className="artwork-info">

              <p>Painting</p>

              <h3>
                Golden Beauty
              </h3>

              <span>
                By Sneha Rao
              </span>

              <div className="artwork-bottom">

                <strong>
                  ₹9,000
                </strong>

                <button>
                  View
                </button>

              </div>

            </div>

          </div>


          <div className="artwork-card">

            <img
              src="https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=600&q=80"
              alt="Peaceful Nature"
            />

            <div className="artwork-info">

              <p>Nature</p>

              <h3>
                Peaceful Nature
              </h3>

              <span>
                By Arjun Reddy
              </span>

              <div className="artwork-bottom"> 
                <strong>
                  ₹6,200
                </strong>

                <button>
                  View
                </button>

              </div>

            </div>

          </div>

               </div>

      </section>

      {/* OUR CONTRIBUTION */}

      <section className="our-contribution">

        <h2>Our Contribution</h2>

        <p>🎨 We support artists by showcasing their artwork.</p>

        <p>🌍 We make art easy for everyone to discover.</p>

        <p>❤️ We connect artists with art lovers.</p>

      </section>

    </>
  );
}

export default Home;