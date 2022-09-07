import { baseUrl, fetchApi } from "../../utils/fetchApi";
import Property from "../../components/property";

const Buy = ({ propertyForSale }) => {
  return (
    <div className="properties">
      {propertyForSale.map((property) => {
        return <Property property={property} key={property.id}></Property>;
      })}
    </div>
  );
};

export default Buy;

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=20`
  );

  return {
    props: {
      propertyForSale: propertyForSale?.hits,
    },
  };
}
