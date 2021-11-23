import './style.css';

const Input = (props) => {
    const { type, placeholder, inputstyle } = props;
    switch (inputstyle) {
        case 'input-outlined':
            return (
                <div>
                    <input {...props} className="input-outlined" />
                </div>
            );
        case 'input-outlined-bottom':
            return (
                <div>
                    <input {...props} className="input-outlined-bottom" />
                </div>
            );
        default:
            return null;
    }
};

export default Input;
