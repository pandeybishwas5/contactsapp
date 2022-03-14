import React, {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import { ContactService } from "../../../services/ContactService";
import axios from 'axios';




let ViewContact =() => {

    let {contactId} = useParams();

    let [state, setState] = useState({
        loading : false,
        contactId : {},
        errorMessage : ''

    });

    useEffect( async () => {
        try{
            let response = await ContactService.getContact(contactId);
            
            console.log(response.data);


        }
        catch (error){

        }

    }, [contactId]);

    
    return(
        <React.Fragment>
            
            
            <section className="view-contact-intro p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-warning fw-bold">View Contact</p>
                            <p className="fst-italic">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quam iure quidem dolorum amet, explicabo eos laudantium excepturi corporis quod accusamus inventore aliquam voluptas odio commodi ad. Ut, impedit, autem eius recusandae ipsa quam, in dolor maiores repellendus neque voluptatibus. Temporibus soluta consectetur, totam similique, doloremque rem ipsam voluptate distinctio repudiandae quaerat hic saepe tempora autem necessitatibus nemo numquam nobis at vel pariatur accusamus ad laborum. Quos quisquam porro velit, provident suscipit ipsam eaque odit, similique fugiat dignissimos nesciunt nostrum.</p>

                        </div>
                    </div>
                </div>
            </section>
            
            <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-item-centre">
                        <div className="col-md-4">
                            <img src="https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg"alt="" className="contact-img"/>

                        </div>
                        <div className="col-md-8">
                            <ul className="list-group">
                                <li className="list-group-item list-group-item-action">
                                    Name:<span className="fw-bold">{contactId.name}</span>

                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Username:<span className="fw-bold">{contactId.Username}</span>

                                </li>
                                
                                <li className="list-group-item list-group-item-action">
                                    Mobile:<span className="fw-bold">{contactId.Mobile}</span>

                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Email:<span className="fw-bold">{contactId.Email}</span>

                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Company:<span className="fw-bold">{contactId.Company}</span>

                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Website:<span className="fw-bold">{contactId.website}</span>

                                </li>
                                <li className="list-group-item list-group-item-action">
                                    Group:<span className="fw-bold">{contactId.Group}</span>

                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={'/contacts/list'} className="btn btn-warning">Back</Link>
                        </div>
                    </div>
                </div>

            </section>
            </React.Fragment>

                    
             
    )
};

export default ViewContact;