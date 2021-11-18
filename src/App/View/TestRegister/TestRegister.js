import * as React from 'react';
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../Components/Input";
import {getConfirmCodeAction, registerAction} from "../../store/actions"
import Example from './Example';

export default () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch()

    //const [loading, setLoading] = React.useState(true);
    
    const onSubmitRegData = (data) => {
        console.log(data, data.email);
        if (data) {
            dispatch(getConfirmCodeAction(data))
            console.log("dispatch ", data.email);
            //setLoading(false);
        }
    };

    const onSubmitRegCode = (data) => {
        console.log(data, data.confirm_code);
        if (data) {
            dispatch(registerAction(data))
            console.log("dispatch after confirm code", data);
        }
    };

    return (
        <>
        {/* {loading ? <Example type="spin" color="#ff0000"/> :(
            <> */}
        <form onSubmit={handleSubmit(onSubmitRegData)}>
            <Input type="text" placeholder="Firstname" inputStyle="input-outlined" label="first_name" register={register} error={errors} errorMessage="error" required />
            
            <Input type="text" placeholder="Lastname" inputStyle="input-outlined" label="last_name" register={register} required />
            <Input type="password" placeholder="Password" inputStyle="input-outlined" label="password" register={register} />
            <Input type="password" placeholder="Confirm password" inputStyle="input-outlined" label="confirm_password" register={register} required />
            <Input type="email" placeholder="Email" inputStyle="input-outlined" label = "email" register={register} required />
            <button type="submit">Sign up</button>
        </form>

        <form onSubmit={handleSubmit(onSubmitRegCode)}>
            <Input type="number" placeholder="Confirm code" inputStyle="input-outlined" label="confirm_code" register={register} />
            <button type="submit">Sign up</button>
        </form>
        {/* </>) */}
        {/* } */}
        </>
    )
}


// import * as React from 'react';
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import Input from "../../Components/Input";
// import { getConfirmCodeAction, registerAction } from "../../store/actions"
// import Example from './Example';

// export default () => {
//     const { register, handleSubmit, formState: { errors }, } = useForm();
//     const { register:registerT, handleSubmit:handleSubmitT, formState: { errors:errorsT }, } = useForm()
//     const dispatch = useDispatch()

//     //const [loading, setLoading] = React.useState(false);

//     const onSubmitRegData = (data) => {
//         console.log(data, data.email);
//         //setLoading(true);
//         if (data) {
//             dispatch(getConfirmCodeAction(data))
//             console.log("dispatch ", data.email);
//             //setLoading(false);
//         }
//     };
   
//     const onSubmitRegCode = (data) => {
//         console.log(data, data.confirm_code);
//         if (data) {
//             dispatch(registerAction(data))
//             console.log("dispatch after confirm code", data);
//         }
//     };

//     return (
//         <>
//             {/* {loading ? <Example type="spin" color="#ff0000"/> :(
//             <> */}
//             <div>
//                 <form onSubmit={handleSubmit(onSubmitRegData)}>
//                     <Input type="text"
//                         placeholder="Firstname"
//                         inputStyle="input-outlined"
//                         label="first_name"
//                         register={register}
//                         // errors={errors}
//                         // errorMessage="Firstname is required"
//                         //pattern={{ pattern: /^[A-Za-z]+$/i }}
//                         required />
//                     <p>{errors.first_name && "First name is required"}</p>

//                     <Input type="text"
//                         placeholder="Lastname"
//                         inputStyle="input-outlined"
//                         label="last_name"
//                         register={register}
//                         required />
//                     <p>{errors.last_name && "Last name is required"}</p>

//                     <Input type="password"
//                         placeholder="Password"
//                         inputStyle="input-outlined"
//                         label="password"
//                         register={register}
//                         required />
//                     <p>{errors.password && "Password is required"}</p>

//                     <Input type="password"
//                         placeholder="Confirm password"
//                         inputStyle="input-outlined"
//                         label="confirm_password"
//                         register={register}
//                         required />
//                     <p>{errors.confirm_password && "Please, confirm password"}</p>

//                     <Input type="email"
//                         placeholder="Email"
//                         inputStyle="input-outlined"
//                         label="email"
//                         register={register}
//                         required
//                     />
//                     <p>{errors.email && "Email is required"}</p>

//                     <input type="submit" />
//                 </form>
//             </div>
//             <div>
//                 <form onSubmit={handleSubmitT(onSubmitRegCode)}>
//                     <Input type="number"
//                         placeholder="Confirm code"
//                         inputStyle="input-outlined"
//                         label="confirm_code"
//                         register={registerT} />

//                     <input type="submit" />
//                 </form>
//             </div>
//             {/* </>) */}
//             {/* } */}
//         </>
//     )
// }

// // import React from "react";
// // //import Input from '../components/input';
// // import { useForm } from "react-hook-form";

// // export default function TestRegister() {

// //   const { register, watch, formState: { errors }, handleSubmit } = useForm();
// //   const onSubmit = data => console.log(data);
// //   return (
// //     <div>
     
// //       <main>
// //         <form onSubmit={handleSubmit(onSubmit)}>
// //           <Input type="text" label="lastName" register={register} required />
// //           {errors.lastName && "Last name is required"}
// //           <Input type="text" label="email" register={register} pattern={{ pattern: /^[A-Za-z]+$/i }} required />
// //           {errors.email && "email is required"}
          
// //           <input type="submit" />
// //         </form>
// //       </main>

// //     </div>
// //   )
// //}