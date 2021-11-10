//COMPONENTS
import { useHistory } from 'react-router-dom';

//CSS
import './buttonComp.css';

const ButtonComponent = ({ type, link, content }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(link);
    };
    switch (type) {
        case 'button':
            return (
                <button onClick={handleClick} className="boxes_btn">
                    {content}
                </button>
            );
        default:
            return null;
    }
};

export default ButtonComponent;
