import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    let initialData = {
        username: "",
        email: "",
        password: "",
        c_password: "",
    }

    let navigate = useNavigate()

    let [userData, setUserData] = useState(initialData)
    let { username, email, password, c_password } = userData

    let handleChange = (event) => {
        let { name, value } = event.target
        setUserData({ ...userData, [name]: value })
    }

    let handleSubmit = (event) => {
        event.preventDefault()
        console.log(userData)
        // ! store the user data in the localStorage
        localStorage.setItem("UserDetails", JSON.stringify(userData))
        setUserData(initialData)
        navigate("/auth/login")
    }


    return (
        <section className='w-full h-screen flex flex-col pt-[15vh] items-center gap-8 ' >

            <h2 className='text-4xl' >Create a New Account</h2>

            <form onSubmit={handleSubmit}
                className='border  px-8 py-14 rounded-2xl text-3xl flex flex-col gap-6 font-mono bg-slate-800 text-white '>

                <section className='flex gap-6 justify-between' >
                    <label for="username">username</label>
                    <input onChange={handleChange} value={username}
                        className='border py-2 pl-4 rounded-lg'
                        type="text" name="username" id="username" />
                </section>

                <section className='flex gap-6 justify-between' >
                    <label for="email">email</label>
                    <input onChange={handleChange} value={email}
                        className='border py-2 pl-4 rounded-lg'
                        type="email" name="email" id="email" />
                </section>

                <section className='flex gap-6 justify-between' >
                    <label for="password">password</label>
                    <input onChange={handleChange} value={password}
                        className='border py-2 pl-4 rounded-lg'
                        type="password" name="password" id="password" />
                </section>

                <section className='flex gap-6 justify-between' >
                    <label for="c_password">confirm password</label>
                    <input onChange={handleChange} value={c_password}
                        className='border py-2 pl-4 rounded-lg'
                        type="password" name="c_password" id="c_password" />
                </section>

                <section className=' flex justify-center'>
                    <button className='border px-20 py-2 rounded-lg mt-7 cursor-pointer' >
                        Register
                    </button>
                </section>
            </form>
        </section>
    )
}

export default Register