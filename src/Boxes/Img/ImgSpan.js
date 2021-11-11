export default function ImgSpan(props) {
    return (
      <div className="imgSpan">
        <h4>
          <b>{props.h4}</b>
        </h4>
        <br />
        <span className="span">
         {props.span}
        </span>
      </div>
    );
  };
  