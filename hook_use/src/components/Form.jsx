import { useState } from "react";

const Form = () => {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const handleInput = (e) => {
        console.log(e.target.name);
        const { name, value } = e.target;

        setFormData({
            ...formData, [name]: value
        })
    }


    // const handleName = (e) => {
    //     setFormData(e.target.value)
    // }
    // const handleEmail = (e) => {
    //     setFormData(e.target.value);
    // }
    // const handlePassword = (e) => {
    //     setFormData(e.target.value);
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        placeholder='Enter your name'
                        onChange={handleInput}
                        value={formData.name}
                    />
                    <br />
                    <br />

                    Email:
                    <input
                        type="email"
                        name="email"
                        placeholder='Enter your email'
                        onChange={handleInput}
                        value={formData.email}
                    />
                    <br />
                    <br />
                    Password:
                    <input
                        type="password"
                        name="password"
                        placeholder='Enter your password'
                        onChange={handleInput}
                        value={formData.password}
                    />
                    <br />
                    <br />

                    <button
                        type="submit"
                        onClick={handleSubmit}>
                        Submit Now</button>

                </label>
            </form>
        </>
    )
}

export default Form