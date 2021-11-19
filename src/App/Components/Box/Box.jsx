import "./style.css";
export default function Box(props) {
  return (
    <div className="box">
      <img src={props.src} alt="" />
      <h3>{props.h3}</h3>
      <span>{props.span}</span>
    </div>
  );
};
