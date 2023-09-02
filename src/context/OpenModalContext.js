import { createContext, useState } from "react";

/*======================================*/
/*======================================*/
/*======================================*/

export const OpenModalContext = createContext();

export const OpenModalContextProvider = ({ children }) => {

   




// const handleNewUser =(e)=>{
//     e.preventDefault();
//     setExitstUser(true)
// }












    // for cart modal
    const [showCartModal, setShowCartModal] = useState(false);

    // for register modal
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    //  these functios to close and show the [modal that contain the register],it will show depend if there is an user or not
    const handleShowRegisterModal = () => setShowRegisterModal(true);
    const handleCloseRegisterModal = () => setShowRegisterModal(false);

    return (
        <OpenModalContext.Provider value={{
             
            showCartModal,
            setShowCartModal,
            showRegisterModal,
            setShowRegisterModal,
            handleShowRegisterModal,
            handleCloseRegisterModal,
            
            
        }}
        >
            {children}
        </OpenModalContext.Provider>
    )
}