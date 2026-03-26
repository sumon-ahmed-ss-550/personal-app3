import { useState } from "react";
import "./App.css";
import List from "./components/list/list";
import { Menu, X } from "lucide-react";

const navigationData = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "About",
    path: "/about",
  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  },
  {
    id: 4,
    name: "Blog",
    path: "/blog",
  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",
  },
];

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <header className="py-6 px-4 bg-black border-b">
        <nav className="flex justify-between items-center">
          <div className="md:hidden" onClick={() => setToggle(!toggle)}>
            <div className=" p-1.5 rounded-[50%] border cursor-pointer">
              {toggle ? <X></X> : <Menu></Menu>}
            </div>

            <ul
              className={`absolute bg-black w-full px-4 py-7 top-[87px] duration-500 ${toggle ? "left-[0px]" : "-left-[100%] "}`}
            >
              {navigationData.map((data) => (
                <List data={data}></List>
              ))}
            </ul>
          </div>

          <strong>
            SMN<span>WEB</span>
          </strong>

          <ul className="hidden md:flex gap-7">
            {navigationData.map((data) => (
              <List data={data}></List>
            ))}
          </ul>

          <div>
            <button type="button">Sign Up</button>
          </div>
        </nav>
      </header>
    </>
  );
}

export default App;
