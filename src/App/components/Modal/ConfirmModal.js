import "./style.css"
import Input from '../Input';

const body = (
    <form >
        <div className='modal-content'>
            <div className='modal-header'>
                <p className='modal-title'>Confirm code field</p>
            </div>
            <div className='modal-body'>
                <Input type="text" placeholder="Firstname" className="input-outlined" inputStyle="input-outlined" />
            </div>
            <div className='modal-footer'>
                <button>Sign up</button>
            </div>
        </div>
    </form>
)

export default body