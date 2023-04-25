import React from 'react'

const Modal = ({ isShowForm, setIsShowForm, register, handleSubmit, submit, reset, setIsUserIdToEdit, isUserIdToEdit, errors }) => {

    const handleClickCloseModal = () => {
        setIsShowForm((isShowForm) => !isShowForm)
        reset({
            first_name: "",
            last_name: "",
            email: "",
            password: "",
            birthday: "",
            image_url: ""
        })
        setIsUserIdToEdit()
    }

    return (
        <section className={`fixed top-0 left-0 bottom-0 right-0 bg-black/40 flex justify-center items-center transition-opacity ${
                isShowForm ? "opacity-100 visible" : "opacity-0 invisible"
            }`}>

            <form onSubmit={handleSubmit(submit)} className="bg-white p-4 grid gap-4 w-[300px] relative">
                <h3 className="text-2xl  font-bold">{isUserIdToEdit ? "Editar usuario" : "Nuevo usuario"}</h3>
                <div className="grid gap-1">
                    <label className="text-xs font-semibold" htmlFor="first_name">Nombre<span className="text-red-500"> *</span></label>
                    <input className="border-[1px] rounded-sm bg-gray-100 p-1" id="first_name" type="text" {...register("first_name")} />
                </div>
                <div className="grid gap-1">
                    <label className="text-xs font-semibold" htmlFor="last_name">Apellidos<span className="text-red-500"> *</span></label>
                    <input className="border-[1px] rounded-sm bg-gray-100 p-1" id="last_name" type="text" {...register("last_name")} />
                </div>
                <div className="grid gap-1">
                    <label className="text-xs font-semibold" htmlFor="email">Correo<span className="text-red-500"> *</span></label>
                    <input className="border-[1px] rounded-sm bg-gray-100 p-1" id="email" type="email" {...register("email")} />
                </div>
                <div className="grid gap-1">
                    <label className="text-xs font-semibold" htmlFor="password">Contraseña<span className="text-red-500"> *</span></label>
                    <input className="border-[1px] rounded-sm bg-gray-100 p-1" id="password" type="password" {...register("password")} />
                </div>
                <div className="grid gap-1">
                    <label className="text-xs font-semibold" htmlFor="birthday">Cumpleaños</label>
                    <input className="border-[1px] rounded-sm bg-gray-100 p-1" id="birthday" type="date" {...register("birthday")} />
                </div>
                <div className="grid gap-1">
                    <label className="text-xs font-semibold" htmlFor="image_url">URL Imagen</label>
                    <input className="border-[1px] rounded-sm bg-gray-100 p-1" id="image_url" type="text" {...register("image_url", {
                        pattern: {
                            value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png|jpeg)/,
                            message: "El formato del URL es inválido"
                        }
                    })} />
                    <span>{errors.image_url && errors.image_url.message}</span>
                </div>
                <i onClick={handleClickCloseModal} className='bx bx-x absolute top-2 right-2 text-2xl hover:text-red-500 cursor-pointer'></i>
                <button className="bg-purple-p text-white p-2 hover:bg-purple-p/90 transition-colors text-sm">
                    {isUserIdToEdit ? "Guardar cambios" : "Agregar nuevo usuario"}
                </button>
            </form>
        </section>
    )
}

export default Modal
