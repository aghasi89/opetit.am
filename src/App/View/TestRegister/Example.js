import React from 'react';
import ReactLoading from 'react-loading';
 
const Example = ({ type, color }) => (
    <ReactLoading type={type} color={color} height={"20%"} width={"20%"} />
);
 
export default Example;

// import "react-toastify/dist/ReactToastify.css";
// import { ToastContainer, toast } from "react-toastify";

// export function Example() {
//   const notify = () => {
//     // toast("Default Notification !");

//     //toast.success("Success Notification !", {position: toast.POSITION.TOP_LEFT});

//     toast.error("Error Notification !", {
//       position: toast.POSITION.TOP_LEFT
//     });

//     // toast.warn("Warning Notification !", {
//     //   position: toast.POSITION.BOTTOM_LEFT
//     // });

//     // toast.info("Info Notification !", {
//     //   position: toast.POSITION.BOTTOM_CENTER
//     // });

//     // toast("Custom Style Notification with css class!", {
//     //   position: toast.POSITION.BOTTOM_RIGHT,
//     //   className: 'foo-bar'
//     //});
//   };

//   return <> 
//   <button onClick={notify}>Notify</button>
//   <ToastContainer />
//   </>
// }