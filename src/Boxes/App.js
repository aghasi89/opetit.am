import HeaderSpan from "./Header/HeaderSpan";
import ImgSrc from "./Img/ImgSrc";
import ImgSpan from "./Img/ImgSpan";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Boxes</h1>

        <HeaderSpan
          span="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's stand."
        />

        <ImgSrc imgsrc="https://www.eatthis.com/wp-content/uploads/sites/4/2020/04/meal-prep.jpg?quality=82&strip=1&resize=640%2C360" />

        <ImgSpan
          h4="Sed ut perspiciatis unde omnis"
          span=" Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
        fugit, sed quia"
        />
      </div>
    </div>
  );
};
