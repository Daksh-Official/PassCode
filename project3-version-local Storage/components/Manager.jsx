import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
    const [form, setform] = useState({ site: "", username: "", password: "" });
    const [passwordArray, setpasswordArray] = useState([]);
    const ref1 = useRef();



    useEffect(() => {
        if (localStorage.getItem("passwords")) {
            let password = JSON.parse(localStorage.getItem("passwords"));
            setpasswordArray(password);
        }
    }, []);


    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value });
    }

    const handleSave = () => {
        if (form.site.length > 3 && form.username.length > 3 && form.password.length >= 8) {
            let newArray = [...passwordArray, { ...form, id: uuidv4() }];
            setpasswordArray(newArray);
            localStorage.setItem("passwords", JSON.stringify(newArray));
            setform({ site: "", username: "", password: "" });
            toast("Password Saved Successfully!!!");
        }
        else {
            toast("Error: Requirments not Satisfied!!!");
        }
    }

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast("Copied to Clipboard!!!");
    }


    const handleEdit = (item) => {
        setform({ site: item.site, username: item.username, password: item.password });
        const newArray = passwordArray.filter((i) => {
            if (i.id != item.id) {
                return id;
            }
        });
        setpasswordArray(newArray);
    }

    const handlleDelete = (id) => {
        let conf = confirm("Do you really want to Delete this password?");
        if (conf) {
            const newArray = passwordArray.filter((i) => {
                if (i.id != id) {
                    return id;
                }
            });
            setpasswordArray(newArray);
            localStorage.setItem("passwords", JSON.stringify(newArray));
            toast("Password Deleted Successfully!!!");
        }
    }

    const handlePasswd = (e) => {
        if (ref1.current.type == "text") {
            e.target.src = "./public/icons/hidden.png";
            ref1.current.type = "password";
        }
        else {
            e.target.src = "./public/icons/eye.png";
            ref1.current.type = "text";
        }
    }


    return (
        <div className='min-h-[90vh] md:min-h-[86.2vh]'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-400 opacity-20 blur-[100px]"></div>

            <div className=" container md:w-[60%] w-[95%] mx-auto py-4 flex items-center flex-col" >
                <h2 className='flex font-bold m-2 text-lg gap-2'><span> Manage your passwords with</span><div className="logo">
                    <span>@Pass<span className=' text-orange-400'>Code@</span></span>
                </div></h2>
                <div className="items-center input flex flex-col p-2 w-full">
                    <div className='w-full'>
                        <input type="text" value={form.site} onChange={handleChange} className='bg-white my-2 w-full px-3 rounded-full py-1 h-8' placeholder='website url' name="site" id="" /></div>
                    <div className="md:flex w-full gap-2" >
                        <input type="text" value={form.username} onChange={handleChange} className='bg-white my-2 px-3 rounded-full w-full py-1 h-8' placeholder='username' name="username" id="" />
                        <div className="password flex relative md:w-2/3">
                            <input type="text" ref={ref1} value={form.password} onChange={handleChange} className='bg-white my-2 px-3 rounded-full w-full py-1 h-8' placeholder='password' name="password" id="" /><img src="./public/icons/eye.png" alt="" className='w-6 absolute right-3 top-3 cursor-pointer' onClick={handlePasswd} /></div>
                    </div>
                    <div className="save my-2">
                        <button className='bg-orange-400 hover:bg-orange-500  text-white flex items-center gap-1 px-3 py-2 cursor-pointer text-lg rounded-full' onClick={handleSave}>
                            <lord-icon
                                src="https://cdn.lordicon.com/vjgknpfx.json"
                                trigger="hover"
                                stroke="bold"
                                colors="primary:#ffffff,secondary:#ffffff"
                                style={{ "width": "30px", "height": "30px" }}>
                            </lord-icon><span>Save</span></button>
                    </div>
                </div>
                <div className="tables w-full">
                    <h2 className='flex font-bold m-2 text-lg gap-2 '><span> Saved Passwords</span></h2>

                    <div className="relative overflow-x-auto border rounded-3xl">
                        <table className="w-full text-center rtl:text-right">
                            <thead className="border-b bg-orange-500 text-white">
                                <tr>
                                    <th scope="col" className="px-3 py-3">
                                        Webiste
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Username
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Password
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {passwordArray.map((item, index) => {
                                    return <tr key={index} className="">
                                        <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                            <span className='flex items-center justify-center'>
                                                <a href={item.site} className='hover:text-blue-600' target='_blank'>{item.site}</a>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/hnqamtrw.json"
                                                    trigger="hover"
                                                    colors="primary:#000000,secondary:#ffffff"
                                                    style={{ "width": "20px", "height": "20px", "cursor": "pointer" }} onClick={() => { handleCopy(item.site) }}>
                                                </lord-icon></span>
                                        </th>
                                        <td className="px-6 py-4">
                                            <span className='flex items-center justify-center gap-1'>
                                                <span>{item.username}</span>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/hnqamtrw.json"
                                                    trigger="hover"
                                                    colors="primary:#000000,secondary:#ffffff"
                                                    style={{ "width": "20px", "height": "20px", "cursor": "pointer" }} onClick={() => { handleCopy(item.username) }}>
                                                </lord-icon></span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className='flex justify-center items-center gap-1'>
                                                <span>{"*".repeat(item.password.length)}</span>
                                                <lord-icon
                                                    src="https://cdn.lordicon.com/hnqamtrw.json"
                                                    trigger="hover"
                                                    colors="primary:#000000,secondary:#ffffff"
                                                    style={{ "width": "20px", "height": "20px", "cursor": "pointer" }} onClick={() => { handleCopy(item.password) }}>
                                                </lord-icon></span>
                                        </td>
                                        <td className="px-6 py-4 flex gap-4 items-center justify-center">
                                            <lord-icon
                                                src="https://cdn.lordicon.com/tobsqthh.json"
                                                trigger="hover"
                                                colors="primary:#000000,secondary:#000000,tertiary:#b4b4b4"
                                                style={{ "width": "24px", "height": "24px", "cursor": "pointer" }} onClick={() => { handleEdit(item) }}>
                                            </lord-icon>
                                            <lord-icon
                                                src="https://cdn.lordicon.com/egqwwrlq.json"
                                                trigger="hover"
                                                colors="primary:#ffffff,secondary:#000000,tertiary:#ffffff,quaternary:#ffffff"
                                                style={{ "width": "24px", "height": "24px", "cursor": "pointer" }}
                                                onClick={() => { handlleDelete(item.id) }}>
                                            </lord-icon>
                                        </td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                        {passwordArray.length === 0 && <div className='px-10'>No passwords to show</div>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Manager
