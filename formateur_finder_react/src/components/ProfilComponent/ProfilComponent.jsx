import {useParams} from 'react-router-dom';
import './ProfilComponent.css'
import React from 'react';

const ProfilComponent = (props) => {
    const {userId} = useParams();
    const formateurList = [...props.formateursList]
    const formateur = formateurList.find(formateur => formateur.id === userId)

    return ( 
        <>
            <div className="container">
                <div className="main-body">
                    <div className="row gutters-sm">
                        <div className="col-md-4 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img 
                                        src="https://us.123rf.com/450wm/salamatik/salamatik1712/salamatik171200045/92143748-ic%C3%B4ne-de-visage-de-profil-anonyme-silhouette-grise-avatar-par-d%C3%A9faut-masculin-photo-placeholder.jpg"
                                        alt="photo"
                                        className="rounded-circle" 
                                        width="150" 
                                        />
                                        <div className="mt-3">
                                            <h4>{formateur.prenom} {formateur.nom}</h4>
                                            <p className="text-secondary mb-1">{formateur.email}</p>
                                            <p className="text-muted font-size-sm">{formateur.telephone}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Formateur</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {formateur.prenom} {formateur.nom}
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Email</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            {formateur.email}
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <h6 className="mb-0">Address</h6>
                                        </div>
                                        <div className="col-sm-9 text-secondary">
                                            Adresse du formateur
                                        </div>
                                    </div>
                                    <hr/>
                                    <div className="row">
                                        <div className="profilBtn col-sm-12">
                                            <button className="btn">Modifier le profil</button>
                                            <button className="btn m-2">Importer une évaluation</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row gutters-sm">
                                <div className="card h-100">
                                    <div className="card-body">
                                        {
                                               formateur.competences.map((comp, index) => (
                                                <>
                                                    <small>{comp.nom}</small>
                                                    <div className="progress">
                                                        <div 
                                                        className="progress-bar" 
                                                        role="progressbar" 
                                                        style={{width: `${comp.niveau}%`}} 
                                                        aria-valuemin="0"
                                                         aria-valuemax="100"
                                                    >
                                                    </div>
                                                    </div>
                                                </>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default ProfilComponent;