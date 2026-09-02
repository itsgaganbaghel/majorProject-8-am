import React, { useContext } from 'react'
import { MainDataContext } from '../Contexts/MainContext'
import user from "/user.png"
const Profile = () => {
    let { loginUserData } = useContext(MainDataContext)
    console.log(loginUserData)
    return (
        <article className='pt-[10vh] h-screen w-full  flex flex-col justify-center items-center' >
            <section className='px-20 py-10 rounded-2xl bg-slate-800 text-white text-2xl '   >
                <h2 className='text-6xl mb-16 text-center'> Welcome back {loginUserData.username} !! </h2>
                <section  className='flex gap-2
                 justify-center items-center border-2 px-10 rounded-2xl' >
                    <img src={user} alt="user profile"  />
                    <section>
                        <p> username : {loginUserData.username} </p>
                        <p> Email : {loginUserData.email} </p>
                    </section>
                </section>
            </section>
        </article>
    )
}

export default Profile