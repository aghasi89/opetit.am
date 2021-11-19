import * as React from 'react';
import Input from "../../Components/Input";
import Loading from './Loading';
import RegisterHook from './RegisterHook';
import "./style.css"

export default () => {
    const { register, handleSubmit, errors, loading, onSubmitRegData, onSubmitRegCode } = RegisterHook()

    return (
        <>
            <form onSubmit={handleSubmit(onSubmitRegData)}>
                <Input type="text"
                    placeholder="Firstname"
                    inputStyle="input-outlined"
                    label="first_name"
                    register={register}
                    required />
                <div className="input-error">
                    {errors.first_name && "First name is required"}
                </div>

                <Input type="text"
                    placeholder="Lastname"
                    inputStyle="input-outlined"
                    label="last_name"
                    register={register}
                    required />
                <div className="input-error">
                    {errors.first_name && "Last name is required"}
                </div>

                <Input type="password"
                    placeholder="Password"
                    inputStyle="input-outlined"
                    label="password"
                    register={register} />
                <div className="input-error">
                    {errors.first_name && "Password is required"}
                </div>

                <Input type="password"
                    placeholder="Confirm password"
                    inputStyle="input-outlined"
                    label="confirm_password"
                    register={register}
                    required />
                <div className="input-error">
                    {errors.first_name && "Please, confirm password"}
                </div>

                <Input type="email"
                    placeholder="Email"
                    inputStyle="input-outlined"
                    label="email"
                    register={register}
                    required />
                <div className="input-error">
                    {errors.first_name && "Email is required"}
                </div>
                {console.log(loading)}
                <button type="submit">
                    {/* {loading ?
                        <Loading type="spinningBubbles" color="grey" /> : */}
                        <span>Sign up</span>
                </button>
            </form>

            <form onSubmit={handleSubmit(onSubmitRegCode)}>
                <Input type="number"
                    placeholder="Confirm code"
                    inputStyle="input-outlined"
                    label="confirm_code"
                    register={register} />
                <button type="submit" disabled={loading}>
                    {loading ?
                    <Loading type="spinningBubbles" color="grey" /> :
                    <span>Sign up</span>}
                </button>
            </form>
        </>
    )
}
