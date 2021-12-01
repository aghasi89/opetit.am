import './style.css';

const Input = (props) => {
    const { inputstyle } = props;
    switch (inputstyle) {
        case 'input-outlined':
            return <input {...props} className="input-outlined" />;
        case 'input-outlined-bottom':
            return <input {...props} className="input-outlined-bottom" />;
        default:
            return null;
    }
};

export default Input;
