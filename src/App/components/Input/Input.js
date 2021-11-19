import "./style.css"

const Input = (props) => {
    const { type, placeholder, inputStyle, register, label, required } = props;
    switch (inputStyle) {
        case 'input-outlined':
            return (
                <div>
                    <input type={type}
                        placeholder={placeholder}                        
                        className='input-outlined'
                        {...register(label, { required })} />
                </div>

            )
        case 'input-outlined-bottom':
            return (
                <div>
                    <input type={`${type}`}
                        placeholder={`${placeholder}`}                        
                        className='input-outlined-bottom'
                        {...register(label, { required })} />
                </div>
            )
        default:
            return null;
    }

}

export default Input