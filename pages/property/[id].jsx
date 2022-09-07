import { fetchApi, baseUrl } from "../../utils/fetchApi";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import Rent from "../../utils/rent.jpg";
import Image from "next/image";
import buy from "../../utils/buy.jpg";
import millify from "millify";
import bathimage from "../../utils/bath.png";
import bedimage from "../../utils/bed.png";
import areaimage from "../../utils/area1.png";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  return (
    <div className="propertydetail">
      <div className="carouseldiv">
        <Carousel>
          {photos.map((item) => (
            <Carousel.Item>
              <div className="d-flex justify-content-center">
                <Image
                  style={{ objectFit: "cover" }}
                  height={420}
                  width={790}
                  src={item.url}
                  alt="Image"
                />
              </div>
            </Carousel.Item>
          ))}
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Image
                style={{ objectFit: "cover" }}
                height={400}
                width={700}
                src={Rent}
                alt="First slide"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <Image height={400} width={700} src={Rent} alt="First slide" />
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <h5 className="property-titles">{title}</h5>
      <div className="d-flex pt-4">
        {isVerified && <i class="bi bi-patch-check-fill"></i>}
        <h6 className="price mx-3">
          ₦{millify(price)}
          {rentFrequency && `/${rentFrequency}`}
        </h6>
      </div>
      <div>
        <div className="d-flex my-3">
          <div className="d-flex align-items-center">
            <h5 className="mx-2"> {rooms}</h5>{" "}
            <Image src={bedimage} height={40} width={40}></Image>
          </div>
          <p className="mx-2">||</p>
          <div className="d-flex align-items-center">
            <h5 className="mx-2"> {baths}</h5>{" "}
            <Image src={bathimage} height={40} width={40}></Image>
          </div>
          <p className="mx-2">||</p>
          <div className="d-flex align-items-center">
            <h5 className="mx-2"> {millify(area)} sqft </h5>{" "}
            <Image src={areaimage} height={40} width={40}></Image>
          </div>
        </div>
      </div>
      <p className="propertyinfo">
        {title.split(" ").length > 30
          ? `${title.split(" ").slice(0, 30).join(" ")}......`
          : title}
      </p>
      <h6>Description</h6>
      <p dangerouslySetInnerHTML={{ __html: description }}></p>

      <div className=" mt-5">
        <h5>Amenities</h5>
        {amenities && (
          <h4>
            <div className="d-flex flex-wrap">
              {amenities.map((item) => {
                return item.amenities.map((item1) => (
                  <div className="amenities">
                    <p>{item1.text}</p>
                  </div>
                ));
              })}
            </div>
          </h4>
        )}
      </div>
    </div>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ query }) {
  const data = await fetchApi(
    `${baseUrl}/properties/detail?externalID=${query.id}`
  );
  return {
    props: {
      propertyDetails: data,
    },
  };
}
