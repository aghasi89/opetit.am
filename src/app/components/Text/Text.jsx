import './text.css';

const TextComponent = ({ type, content, className }) => {
    switch (type) {
        case 'p':
            return <p className={className}>{content}</p>;
        case 'h1':
            return <h1 className={className}>{content}</h1>;
        case 'h2':
            return <h2 className={className}>{content}</h2>;
        case 'h3':
            return <h3 className={className}>{content}</h3>;
        default:
            return null;
    }
};

export default TextComponent;
