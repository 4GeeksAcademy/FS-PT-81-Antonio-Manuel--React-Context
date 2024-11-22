import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const EditUserInfo = props => {
    const {store, actions} = useContext(Context);

    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: store.selected?.name || '',
        phone: store.selected?.phone || '',
        email: store.selected?.email || '',
        adress: store.selected?.address || '',
        id: store.selected?.id || ''
    
    })
    
    const handleChange = e => {
        const {name, value} =e.target
        setFormData({...formData[name]. value})
    }
    
    const handleCancel = () =>{
        navigate('/')
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        actions.editContact(formData)
    }
    
    return (
        <form>
            <input type="text" value={formData.name} onChange={handleChange} className="form-control" name="name" placeholder="name" required/>
            <input type="text" value={formData.phone} onChange={handleChange} className="form-control" name="phone" placeholder="phone" required/>
            <input type="text" value={formData.email} onChange={handleChange} className="form-control" name="email" placeholder="email" required/>
            <input type="text" value={formData.adress} onChange={handleChange} className="form-control" name="adress" placeholder="adress" required/>
        <input type="submit" className="btn btn-success" value="enviar" />
        <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
        </form>
    )
}