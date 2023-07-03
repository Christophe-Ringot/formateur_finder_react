import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './FormerComponent.css'

const FormerComponent = (props) => {
    const formateurList = [...props.formateursList]

    return ( 
        <>
            {
                formateurList.map((formateur) => (
                    <div className='container' key={formateur.id}>
                        <h6>{formateur.prenom} {formateur.nom}</h6>
                        <Link to={{pathname: `/former/` + formateur.id}}>Profil</Link>
                        <hr/>
                    </div>
                ))
            }
        </>
     );
}
 
export default FormerComponent;