import React from 'react'

const Header = ({setIsShowForm}) => {

    const handleClickShowModal = () => {
        setIsShowForm((isShowForm) => !isShowForm)
    }

    return (
        <header className="flex flex-col items-center md:relative w-full h-[200px] p-[5px]">
                <h1 className="md:absolute md:top-[45px] md:left-[35px] lg:left-[55px] xl:left-[75px] font-Neue text-[50px] text-black-t m-[20px]">Usuarios</h1>
                <button onClick={handleClickShowModal} className="md:absolute md:top-[70px] md:right-[45px] lg:right-[65px] xl:right-[85px] font-Roboto w-[227px] h-[45px] text-[16px] m-[10px] bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-md"><i className='bx bx-plus'></i> Crear nuevo usuario</button>
        </header>
    )
}

export default Header
