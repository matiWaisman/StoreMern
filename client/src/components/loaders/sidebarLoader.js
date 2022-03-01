import ContentLoader from "react-content-loader";
import "../../App.css";

const SidebarLoader = (props) => {
  return (
    <ContentLoader
      speed={2}
      viewBox="0 0 350 215"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      className="sidebar"
    >
      <circle cx="340" cy="20" r="8" />
      <rect x="0" y="20" rx="5" ry="5" width="260" height="10" />
      {props.brands.map((brand, i) => (
        <>
          <div key={i}>
            <circle cx="340" cy={50 + 25 * i} r="8" />
            <rect x="0" y={50 + 25 * i} rx="5" ry="5" width="260" height="10" />
          </div>
        </>
      ))}
    </ContentLoader>
  );
};

export default SidebarLoader;
