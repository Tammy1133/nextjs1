import { baseUrl, fetchApi } from "../../utils/fetchApi";
import Property from "../../components/property";

const Rent = ({ propertyForRent }) => {
  console.log(propertyForRent);
  return (
    <div>
      <div className="properties">
        {propertyForRent.map((property) => {
          return (
            <div className="">
              <Property property={property} key={property.id}></Property>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Rent;

export async function getStaticProps() {
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=20`
  );
  return {
    props: {
      propertyForRent: propertyForRent?.hits,
    },
  };
}
