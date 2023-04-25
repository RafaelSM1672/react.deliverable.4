import React from 'react'

const UserCard = ({ user, deleteUser, handleClickEdit }) => {
    return (
        <article className="flex flex-col gap-5 border-[1px] border-borderColor p-[10px]">
                <h3 className="font-Neue text-[20px] text-black-t">{user.first_name} {user.last_name}</h3>
                <div>
                    <img className="w-[150px] aspect-[4/5] object-cover mx-auto rounded-md" src={user.image_url ? user.image_url : "/images/noProfile.png"} alt="User image" />
                </div>
                <ul className="flex flex-col gap-2">
                    <li>
                        <h4 className="text-[#D3D3D3] pb-1">Correo</h4>
                        <span>{user.email}</span>
                    </li>
                    <li className="">
                        <h4 className="text-[#D3D3D3] pb-1">Cumpleaños</h4>
                        <span>
                            <i className='bx bx-gift mr-[7px]'></i>
                            {user.birthday}
                        </span>
                    </li>
                </ul>
                <div className="flex justify-end">
                    <button className="w-[43px] h-[43px] bg-buttonTrashBG border-buttonTrashBorder m-[7px]" onClick={() => deleteUser(user.id)}>
                        <i className='bx bxs-trash text-white text-2xl'></i>
                    </button>
                    <button className="w-[43px] h-[43px] bg-buttonEditBG border-buttonEditBorder m-[7px]" onClick={() => handleClickEdit(user)}>
                        <i className='bx bxs-pencil text-black text-2xl'></i>
                    </button>
                </div>
        </article>
    )
}

export default UserCard
