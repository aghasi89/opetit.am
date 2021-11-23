import TextComponent from '../Text';
import './style.css';

export default function Box({ src, h3, span }) {
    return (
        <div className="box">
            <img className="box_img" src={src} alt="" />
            <TextComponent title={h3} type="h3" color="black" />
            <TextComponent type="span" title={span} color="charcoal" />
        </div>
    );
}
