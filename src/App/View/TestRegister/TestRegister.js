import * as React from 'react';
import Input from "../../Components/Input";
import Loading from './Loading';
import RegisterHook from './RegisterHook';
import "./style.css"
import Modal from '../../Components/Modal';


export default () => {
    
    const { register,
        handleSubmit,
        errors,
        loading,
        onSubmitRegData,
        onSubmitRegCode,
        modalIsOpen,
        setIsOpen } = RegisterHook()

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitRegData)}>
                <Input type="text"
                    placeholder="Firstname"
                    inputStyle="input-outlined"
                    label="first_name"
                    register={register}
                 />
                <div className="input-error">
                    {errors.first_name?.message}
                </div>

                <Input type="text"
                    placeholder="Lastname"
                    inputStyle="input-outlined"
                    label="last_name"
                    register={register}
                 />
                <div className="input-error">
                    {errors.last_name?.message}
                </div>

                <Input type="password"
                    placeholder="Password"
                    inputStyle="input-outlined"
                    label="password"
                    register={register}
                     />
                <div className="input-error">
                    {errors.password?.message}
                </div>

                <Input type="password"
                    placeholder="Confirm password"
                    inputStyle="input-outlined"
                    label="confirm_password"
                    register={register}
                />
                <div className="input-error">
                    {errors.confirm_password?.message}
                </div>

                <Input type="email"
                    placeholder="Email"
                    inputStyle="input-outlined"
                    label="email"
                    register={register}
                 />
                <div className="input-error">
                    {errors.email?.message}
                </div>
                <button type="submit">
                    {/* {loading ?
                        <Loading type="spinningBubbles" color="grey" /> : */}
                    <span>Sign up</span>
                </button>
            </form>
            <Modal onClose={() => setIsOpen(false)}
                modalIsOpen={modalIsOpen}
                body={
                    <form onSubmit={handleSubmit(onSubmitRegCode)}>
                        <div className='modal-content'>
                            <div className='modal-header'>
                                <p className='modal-title'>Confirm code field</p>
                            </div>
                            <div className='modal-body'>
                                <Input type="number"
                                    placeholder="Confirm code"
                                    inputStyle="input-outlined"
                                    label="confirm_code"
                                    register={register} />
                            </div>
                            <div className='modal-footer'>
                                <button type="submit" disabled={loading}>
                                    {loading ?
                                        <Loading type="spinningBubbles" color="grey" /> :
                                        <span>Sign up</span>}
                                </button>
                            </div>
                        </div>
                    </form>
                }
            />
        </>
    )
}
