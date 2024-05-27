import "./styles.css";

const Card3 = (props) => {
  const { title } = props;

  return title === undefined ? (
    <div className="popular-restaurants-title-loading"></div>
  ) : (
    <div className="popular-restaurants-title">{title}</div>
  );
};

export default Card3;
