import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

export const NewContactForm = () => {

const {store, actions} = useContext(Context);

const navigate = useNavigate();

const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: ''

})

const handleChange = e => {
    const {name, value} =e.target
    setFormData({...formData,[name]: value})
}

const handleCancel = () =>{
    navigate('/')
}

const handleSubmit = e => {
    e.preventDefault();
    actions.createContact(formData);
    navigate('/')
}







    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={formData.name} onChange={handleChange} className="form-control" name="name" placeholder="name" required/>
            <input type="text" value={formData.phone} onChange={handleChange} className="form-control" name="phone" placeholder="phone" required/>
            <input type="text" value={formData.email} onChange={handleChange} className="form-control" name="email" placeholder="email" required/>
            <input type="text" value={formData.address} onChange={handleChange} className="form-control" name="address" placeholder="address" required/>
        <input type="submit" className="btn btn-success" value="enviar"  />
        <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
        </form>
    )
}