import "./App.css";
import { useEffect, useState } from "react";
import Text from "./Components/Text";
import Loading from "./Components/Loading";

const url = "https://api.chucknorris.io/jokes/random";

function App() {
  const [chuckQuote, setChuckQuote] = useState([]);
  const [loading, setLoading] = useState(false);

  // hier fehlt usecallback
  async function fetchUrl() {
    setLoading(true);
    const res = await fetch(url);
    const data = await res.json();

    setTimeout(() => {
      setLoading(false);
    }, "3000");

    setChuckQuote(data);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUrl();
    }, "7000");

    return () => clearTimeout(timer);
  }, [chuckQuote]);

  return (
    <main>
      <h1>Get your personal Chuck Norris Quote</h1>
      <section>
        {loading === false ? (
          <div
            style={{
              minWidth: "100px",
              maxWidth: "280px",
              height: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p className="text">{chuckQuote.value}</p>
          </div>
        ) : (
          <div className="flexbox">
            <article className="animated-background_image"></article>
            <div className="text">
              <div className="animated-background_text"></div>
              <div className="animated-background_text"></div>
              <div className="animated-background_text"></div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
