import React, { useContext, useState } from 'react';


const AppContext = React.createContext();

const AppProvider = ({children}) =>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const closeModal = () =>{
        setIsModalOpen(false);
    }

    const closeSidebar = () =>{
        setIsSidebarOpen(false);
    }
    const openModal = () =>{
        setIsModalOpen(true);
    }

    const openSidebar = () =>{
        setIsSidebarOpen(true);
    }

    return(
        <AppContext.Provider value={
            {isSidebarOpen, isModalOpen, closeModal, closeSidebar, openModal, openSidebar}
        }>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext);
}

export {AppContext, AppProvider};