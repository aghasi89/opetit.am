import "./style.css"

const Input = (props) => {
    const { type, placeholder, inputStyle, name, required,pattern,register} = props;
 
    switch (inputStyle) {
        case 'input-outlined':
            return (
                <div>
                    <input 
                    type={`${type}`}  
                    placeholder={`${placeholder}`}  
                    className='input-outlined' 
                    {...register(name,{required,...pattern})}/>
                </div>
            )
        case 'input-outlined-bottom':
            return (
                <div>
                    <input 
                    type={`${type}`}  
                    placeholder={`${placeholder}`}   
                    {...register(name,{required,...pattern})}
                    className='input-outlined-bottom' />
                </div>
            )
        default:
            return null;
    }

}

export default Input