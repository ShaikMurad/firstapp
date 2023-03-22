import React, { useState } from "react";
import "./App.css";
import Counter from "./pages/counter";
import Pricing from "./pages/pricing";
import Cart from "./pages/Cart";
import ContentPage from "./pages/Content";

function App() {
  const [page, setPage] = useState("content");
  return (
    <div className="App">
      <section className="pricing py-5">
        {page === "counter" && <Counter />}
        {page === "pricing" && <Pricing />}
        {page === "cart" && <Cart />}
        {page === "content" && <ContentPage />}
      </section>
    </div>
  );
}

export default App;
