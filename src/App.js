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
    const res = await fetch(url);
    const data = await res.json();
    setChuckQuote(data);
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchUrl();
    }, "7000");
    setLoading(false);

    setTimeout(() => {
      setLoading(true);
    }, "3000");

    return () => clearTimeout(timer);
  }, [chuckQuote]);

  return (
    <main>
      <h1>Get your personal Chuck Norris Quote</h1>
      <section className="card ">
        {loading === false ? (
          <div
            style={{
              width: "80%",
              height: "100px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p className="text">{chuckQuote.value}</p>
          </div>
        ) : (
          <div>
            <div className="animated-background">
              <p className="text" style={{ opacity: 0 }}>
                {chuckQuote.value}
              </p>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
