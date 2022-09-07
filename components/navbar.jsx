import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import logo from "../utils/logo1.png";

const Navbar = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div>
      <nav className=" ">
        <div className=" nav-container">
          {/* <img className="logo " src={logo} /> */}
          <Link href={"/"}>
            <Image src={logo} height={50} width={100}></Image>
          </Link>
        </div>
        <div className="contact-us-nav">
          <Link href="/search">
            <button
              className="button-18 nav-button"
              style={{ fontSize: "16px" }}
              role="button"
            >
              SEARCH
            </button>
          </Link>
        </div>
      </nav>

      {/* Navbar section end */}
    </div>
  );
};

export default Navbar;
