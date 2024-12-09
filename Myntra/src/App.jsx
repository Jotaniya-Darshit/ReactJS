import "./App.css";
import Navbar from "./Component/Navbar";
import Sec1 from "./Component/sec1";
import Sec2 from "./Component/Sec2";
import Sec3 from "./Component/Sec3";
import Sec4 from "./Component/Sec4";

function App() {
  const obj1 = [
    { url: "2 (1).jpeg" },
    { url: "2 (1).png" },
    { url: "2 (2).jpeg" },
    { url: "2 (3).jpeg" },
    { url: "2 (4).jpeg" },
    { url: "2 (5).jpeg" },
    { url: "2 (6).jpeg" },
    { url: "2 (7).jpeg" },
    { url: "2 (8).jpeg" },
    { url: "2 (9).jpeg" },
    { url: "2 (10).jpeg" },
  ];

  const obj2 = [
    { url: "3 (1).jpeg" },
    { url: "3 (1).png" },
    { url: "3 (2).jpeg" },
    { url: "3 (3).jpeg" },
    { url: "3 (4).jpeg" },
    { url: "3 (5).jpeg" },
    { url: "3 (6).jpeg" },
    { url: "3 (1).jpeg" },
    { url: "3 (1).png" },
    { url: "3 (2).jpeg" },
    { url: "3 (3).jpeg" },
    { url: "3 (4).jpeg" },
    { url: "3 (5).jpeg" },
    { url: "3 (6).jpeg" },
  ];

  const obj3 = [
    {url:"5 (1).jpg"},
    {url:"5 (2).jpg"},
    {url:"5 (3).jpg"},
    {url:"5 (4).jpg"},
    {url:"5 (5).jpg"},
    {url:"5 (6).jpg"},
    {url:"5 (7).jpg"},
    {url:"5 (8).jpg"},
    {url:"5 (9).jpg"},
    {url:"5 (1).jpg"},
    {url:"5 (2).jpg"},
    {url:"5 (3).jpg"},
    {url:"5 (4).jpg"},
    {url:"5 (5).jpg"},
    {url:"5 (6).jpg"},
    {url:"5 (7).jpg"},
    {url:"5 (8).jpg"},
    {url:"5 (9).jpg"},
    {url:"5 (1).jpg"},
    {url:"5 (2).jpg"},
  ]

  return (
    <>
      <Navbar />
      <Sec1 />
      <Sec2 data={obj1} />
      <Sec3 data={obj2} />
      <Sec4 data={obj3} />
    </>
  );
}

export default App;
