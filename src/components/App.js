import React, { useEffect, useState } from "react";

function App() {
  const [image, setImage] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((r) => r.json())
      .then((img) => {
        setImage(img.message);
        setisLoading(true);
      });
  }, []);
  if (!isLoading) return <p>"Loading..."</p>;

  return <img src={image} alt="A Random Dog" />;
}

export default App;
