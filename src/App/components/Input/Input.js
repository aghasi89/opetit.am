import "./style.css"

const Input = (props) => {
    const { type, placeholder, inputStyle, register, label, required, pattern, errorMessage, errors} = props;
    // console.log(errors,"errors");
    // console.log(label,"label");
    // console.log(errorMessage,"errorMessage");
    switch (inputStyle) {
        case 'input-outlined':
            return (
                <div>
                    <input {...props} 
                    className='input-outlined' 
                   {...register(label, { required })} />
                   {/* <p>{errors && errors[label]?.type === 'required' && errorMessage}</p> */}
                </div>
                
            )
        case 'input-outlined-bottom':
            return (
                <div>
                    <input {...props} 
                    className='input-outlined-bottom' 
                    {...register(label, { required })} />
                </div>
            )
        default:
            return null;
    }

}

export default Input