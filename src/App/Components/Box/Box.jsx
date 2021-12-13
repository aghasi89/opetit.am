import TextComponent from '../Text';
import './style.css';
export default function Box({ src, title, description }) {
  return (
    <div className="box">
      <img className="box_img" src={src} alt="" />
      <TextComponent title={title} type="h3" color="black" />
      <TextComponent type="span" title={description} color="secondary" />
    </div>
  );
}
