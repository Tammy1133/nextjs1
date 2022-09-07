import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import rent from "../utils/rent.jpg";
import buy from "../utils/buy.jpg";
import axios from "axios";
import { baseUrl, fetchApi } from "../utils/fetchApi";
import { FormErrorMessage } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home">
      <div className="home-item1">
        <div className="left">
          <Image src={rent} height={400} width={500}></Image>
        </div>
        <div className="right">
          <p>RENT A HOME</p>
          <h3 style={{ width: "150px" }}>
            Rental Homes for <br />
            Everyone
          </h3>
          <p>
            Explore Apartments, Villas, Homes <br /> and more...
          </p>
          <Link href={"/rent"}>
            <button className="button-18" role="button">
              Explore Renting
            </button>
          </Link>
        </div>
      </div>
      <div className="home-item2">
        <div className="left">
          <Image src={buy} height={400} width={500}></Image>
        </div>
        <div className="right ">
          <p>BUY A HOME</p>
          <h3 style={{ width: "150px" }}>
            Find, Buy & Own Your <br />
            Dream House
          </h3>
          <p>
            Explore Apartments, Villas, Homes <br /> and more...
          </p>
          <Link href="/buy" passHref>
            <button className="button-18" role="button">
              Explore Buying
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
