import { StrictMode } from "react";
import ReactDOM from "react-dom";

import Box from "./component/Box/Box";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <Box
            src="https://www.eatthis.com/wp-content/uploads/sites/4/2020/04/meal-prep.jpg?quality=82&strip=1&resize=640%2C360"
            h3="Sed ut perspiciatis unde omnis"
            span="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
    fugit, sed quia"
        />
    </StrictMode>,
    rootElement
);
