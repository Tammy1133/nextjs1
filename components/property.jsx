import Link from "next/link";
import Image from "next/image";
import buy from "../utils/buy.jpg";
import millify from "millify";
import bathimage from "../utils/bath.png";
import bedimage from "../utils/bed.png";
import areaimage from "../utils/area1.png";

const Property = ({
  property: {
    coverPhoto,
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    externalID,
  },
}) => (
  <Link href={`/property/${externalID}`} passHref>
    <div className="property ">
      <div className="top">
        <Image
          className="coverphoto"
          src={coverPhoto ? coverPhoto.url : buy}
          height={260}
          width={300}
          alt="Image"
        ></Image>
      </div>
      <div className="bottom pt-3">
        <div className="d-flex ">
          {isVerified && <i class="bi bi-patch-check-fill"></i>}
          <h6 className="price mx-3">
            ₦{millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </h6>
        </div>
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
        <p className="propertyinfo">
          {title.split(" ").length > 30 ? (
            `${title.split(" ").slice(0, 30).join(" ")}......`
          ) : (
            <h6>{title}</h6>
          )}
        </p>
      </div>
    </div>
  </Link>
);

export default Property;
