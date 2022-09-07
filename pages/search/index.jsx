import { useRouter } from "next/router";
import { useState } from "react";
import Link from "next/link";
import Property from "../../components/property";
import { baseUrl, fetchApi } from "../../utils/fetchApi";
import Select from "react-select";

const Search = ({ properties }) => {
  const [toggleSearchFilters, setToggleSearchFilters] = useState(true);
  const router = useRouter();
  const [defaultAction, setDefaultAction] = useState("for-sale");

  const [purpose, setPurpose] = useState("for-sale");
  const [rentFrequency, setRentFrequency] = useState("yearly");
  const [minPrice, setMinPrice] = useState("0");
  const [maxPrice, setMaxPrice] = useState("2000000");
  const [roomsMin, setRoomsMin] = useState("0");
  const [bathsMin, setBathsMin] = useState("1");
  const [areaMax, setAreaMax] = useState("35000");

  const optionPurpose = [
    { value: "for-sale", label: "Properties for sale" },
    { value: "for-rent", label: "Properties for rent" },
  ];
  const optionRentFrequency = [
    { value: "weekly", label: "Weekly" },
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly" },
  ];

  return (
    <div>
      <div className="d-flex justify-content-center">
        <button
          onClick={() => setToggleSearchFilters(!toggleSearchFilters)}
          className="btn btn-danger my-3"
        >
          Toggle search
        </button>
      </div>
      {toggleSearchFilters && (
        <div className="">
          <form
            className="filterform"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="selectdiv">
              <Select
                className="select"
                options={optionPurpose}
                isSearchable
                placeholder="Select purpose"
                onChange={(e) => setPurpose(e.value)}
              ></Select>
              <Select
                className="select"
                options={optionRentFrequency}
                onChange={(e) => setRentFrequency(e.value)}
                isSearchable
                placeholder="Select rent frequency"
              ></Select>
            </div>

            <div className="form-item">
              <h6>choose minPrice</h6>
              <input
                type="text"
                value={minPrice}
                onChange={(e) => {
                  setMinPrice(e.target.value);
                }}
              />
            </div>

            <div className="form-item">
              <h6>choose maxPrice</h6>
              <input
                type="text"
                value={maxPrice}
                onChange={(e) => {
                  setMaxPrice(e.target.value);
                }}
              />
            </div>

            <div className="form-item">
              <h6>choose RoomsMin</h6>
              <input
                type="text"
                value={roomsMin}
                onChange={(e) => {
                  setRoomsMin(e.target.value);
                }}
              />
            </div>
            <div className="form-item">
              <h6>choose bathsMin</h6>
              <input
                type="text"
                value={bathsMin}
                onChange={(e) => {
                  setBathsMin(e.target.value);
                }}
              />
            </div>
            <div className="form-item">
              <h6>choose Areamax</h6>
              <input
                type="text"
                value={areaMax}
                onChange={(e) => {
                  setAreaMax(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
      )}
      <div className="submit">
        <Link
          href={`/search?purpose=${purpose}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&minprice=${minPrice}&maxprice=${maxPrice}&roomsMin=${roomsMin}&areaMax=${areaMax}`}
        >
          <button class="button-18 submitbutton" role="button">
            Submit
          </button>
        </Link>
      </div>
      <div>
        {properties.length !== 0 && (
          <h4 className="property-title">Properties {properties[0].purpose}</h4>
        )}

        <div className="properties">
          {properties.map((property) => (
            <Property property={property} key={property.id}></Property>
          ))}
        </div>
        {properties.length === 0 && <h1>No result</h1>}
      </div>
    </div>
  );
};

export default Search;

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-sale";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minprice || "0";
  const maxPrice = query.maxprice || "2000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "1";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";

  const data = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=${purpose}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}
