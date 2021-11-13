import './text.css';

const TextComponent = ({ type, link, title }) => {
    switch (type) {
        case 'paragraph':
            return <p className="p_style ">{title}</p>;
        case 'a':
            return (
                <a href={link} alt={`${link}`}>
                    {title}
                </a>
            );
        case 'h1':
            return <h1 className="h1_style">{title}</h1>;
        case 'h2':
            return <h2 className="h2_style">{title}</h2>;
        case 'h3':
            return <h3 className="h3_style">{title}</h3>;
        case 'h4_style':
            return <h4 className="h4_style">{title}</h4>;
        default:
            return null;
    }
};

export default TextComponent;
