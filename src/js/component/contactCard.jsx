import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const ContactCard = (props) => {

    const {store, actions} =useContext(Context)
    const navigate = useNavigate();
    const handleDelete = () => {actions.deleteContact(props.id)}
    const handleEdit = () => {
        actions.selectContact(store.contacts.filter(el=> el.id === props.id)[0])
        navigate('/edit/' + props.id)
    }

    return (

        <div className="card">
            <div className="d-flex">
                <img width={'150px'} src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.es%2Fvector-premium%2Ficono-circulo-usuario-anonimo-ilustracion-vector-estilo-plano-sombra_19871451.htm&psig=AOvVaw3x3g-AzvctmvUsIg_tJvVF&ust=1732205950966000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOiFwJWo64kDFQAAAAAdAAAAABAE" alt={props.name} />
                <div>
                    <p>name: {props.name}</p>
                    <p>phone: {props.phone}</p>
                    <p>email: {props.email}</p>
                    <p>address: {props.address}</p>
                    <button onClick={handleEdit} className="btn btn-warning">edit</button>
                    <button onClick={handleDelete} className="btn btn-danger">delete</button>
                </div>   
            </div> 
        </div>
    )
}