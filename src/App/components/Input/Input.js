import "./style.css"

const Input = (props) => {
    const { type, placeholder, inputstyle, label,register, pattern, req} = props;
    console.log(register);
    const atrib= {...req,...pattern}
    console.log(atrib);
    switch (inputstyle) {
        case 'input-outlined':
            return (
                <div>
                    <input {...props} className='input-outlined' {...register(label, atrib)}/>
                </div>
            )
        case 'input-outlined-bottom':
            console.log(props);
            return (
            
                <div>
                    <input {...props} className='input-outlined-bottom'  {...register(label, atrib)}/>
                </div>
            )
        default:
return null;
    }

}

export default Input