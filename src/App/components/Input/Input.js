import './style.css';

const Input = (props) => {
    const { type, placeholder, inputStyle, register, label, required, labelForTextarea, rows } = props;
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
                    <input type={type}
                        placeholder={placeholder}
                        className='input-outlined-bottom'
                        {...register(label, { required })} />
                </div>
            )
        case 'input-textarea':
            return (
                <div className="textarea d-flex flex-column">
                    <label for={labelForTextarea}>{labelForTextarea}</label>
                    <textarea
                        placeholder={placeholder}
                        rows={rows}
                        // cols={cols}
                        className='input-textarea'
                    >
                    </textarea>
                </div>

            )
        default:
            return null;
    }
};

export default Input;
