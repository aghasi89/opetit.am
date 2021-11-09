import { useHistory } from 'react-router-dom';
import '../Button/buttonComp.css';

const ButtonComponent = ({ type, link, content, className }) => {
    const history = useHistory();
    const handleClick = () => {
        history.push(link);
    };
    switch (type) {
        case 'button':
            return (
                <button onClick={handleClick} className={className}>
                    {content}
                </button>
            );
        default:
            return null;
    }
};

export default ButtonComponent;
