import React, {useState, useEffect}from "react";
import * as BootstrapIco from "react-icons/bs";
import { Link } from "react-router-dom";
import "./FormerPickerComponent.css";

const FormerPicker = (props) => {
    const [formateurs, setFormateurs] = useState([])
    const [competence, setCompetence] = useState("")

    const formPicker = (e) => {
        e.preventDefault();
        const formList = [...props.formateursList
            .filter(formateur => formateur.competences
                .some(competences => competences.nom === competence.toLocaleLowerCase()))
            .sort((a, b) => b.competences
            .find(comp => comp.nom === competence).niveau - a.competences
            .find(comp => comp.nom === competence).niveau)];
        setFormateurs(formList)
        localStorage.setItem("formateurs", JSON.stringify(formList))
    }

    useEffect(() => {
        if(localStorage.getItem("formateurs") != null)
            {
                const formateursFromLocalStorage = JSON.parse(localStorage.getItem("formateurs"))
                setFormateurs(formateursFromLocalStorage);
            }
    }, [])
    
    return (
            <div className="formerPicker">
                <div>
                    <h3 className={"align-content-center"}>Choix du formateur : </h3>
                    <form className="input-group mb-3" onSubmit={formPicker}>
                        <input 
                            type="text" 
                            className="form-control" 
                            placeholder="Inscrire les critères de formation ici..."
                            aria-label="Inscrire les critères de formation ici..." 
                            aria-describedby="button-addon2"
                            id="competence"
                            value={competence}
                            onChange={(e) => setCompetence(e.target.value)}
                        />
                        <button 
                            className="btn btn-outline-secondary" 
                            type="submit" 
                        >
                            <BootstrapIco.BsSearch
                        />
                        </button>
                    </form>
                </div>
                <div>
                    {
                        formateurs.map((formateur) => (
                                <div className="card" key={formateur.id}>
                                    <div className="card-img">
                                        <img src="https://us.123rf.com/450wm/salamatik/salamatik1712/salamatik171200045/92143748-ic%C3%B4ne-de-visage-de-profil-anonyme-silhouette-grise-avatar-par-d%C3%A9faut-masculin-photo-placeholder.jpg" alt='profil-pics'/>
                                    </div>
                                    <div className="desc">
                                        <h6 className="primary-text">{formateur.prenom} {formateur.nom}</h6>
                                        <h6 className="primary-text">{formateur.email}</h6>
                                        <h6 className="primary-text">{formateur.telephone}</h6>
                                        <h6 className="secondary-text">
                                            {formateur.competences.map((comp) => (
                                                comp.nom + " "
                                            ))}
                                        </h6>
                                    </div>
                                    <div className={"card-btn"}>
                                        <Link 
                                        to={{pathname: `/former/` + formateur.id}}>
                                            <button className="btn">Profil</button>
                                        </Link>
                                        <button className="btn">Choisir</button>
                                    </div>
                                </div>
                        ))
                    }
                </div>
            </div>
    )
}

export default FormerPicker