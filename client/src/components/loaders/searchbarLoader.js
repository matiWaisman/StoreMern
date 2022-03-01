import ContentLoader from "react-content-loader";
import "../../App.css";

const SearchbarLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={307.75}
      height={51}
      viewBox="0 0 307 51"
      backgroundColor="#6e93d6"
      foregroundColor="#2f4c58"
    >
      <rect x="0" y="0" rx="0" ry="0" width="263" height="51" />
    </ContentLoader>
  );
};

export default SearchbarLoader;
