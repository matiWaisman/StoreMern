import ContentLoader from "react-content-loader";
import "../../App.css";

const OrderingFilterLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={56}
      viewBox="0 0 300 56"
      backgroundColor="#6e93d6"
      foregroundColor="#2f4c58"
    >
      <rect x="0" y="0" rx="0" ry="0" width="285" height="56" />
    </ContentLoader>
  );
};

export default OrderingFilterLoader;
