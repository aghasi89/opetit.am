import "./style.css"

const Input = (props) => {
    const { type, placeholder, inputStyle, register,label,pattern } = props;
    switch (inputStyle) {
        case 'input-outlined':
            return (
                <div>
                    <input {...props}  className='input-outlined' />
                </div>
            )
        case 'input-outlined-bottom':
            console.log(props);
            return (
                <div>
                    <input {...props}  className='input-outlined-bottom' />
                </div>
            )
        default:
            return null;
    }

}

export default Input