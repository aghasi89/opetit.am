import './style.css';

const Input = (props) => {


    const { type, placeholder, inputStyle, register, label, required, labelForTextarea, rows,pattern } = props;

    switch (inputStyle) {
        case 'input-outlined':
            return (
                <div>
                    <input 
                    type={type}  
                    placeholder={placeholder}  
                    className='input-outlined' 
                    {...register(label,{required,...pattern})}/>
                </div>
            )
        case 'input-outlined-bottom':

            return (
                <div>
                    <input 
                    type={type}  
                    placeholder={placeholder}   
                    {...register(label,{required,...pattern})}
                    className='input-outlined-bottom' />
                </div>
            )
        case 'input-textarea':
            return (
                <div className="textarea d-flex flex-column">
                    <label htmlFor={labelForTextarea}>{labelForTextarea}</label>
                    <textarea
                        name={labelForTextarea}
                        placeholder={placeholder}
                        rows={rows}
                        // cols={cols}
                        className='input-textarea'
                        {...register(label, { ...pattern, required })}
                    >
                    </textarea>
                </div>

            )
        default:
            return null;
    }
};

export default Input;
