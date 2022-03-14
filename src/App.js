import React , { Fragment } from 'react';
import './App.css';
import axios from 'axios'
import{Routes, Route, Navigate} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import ContactList from "./components/contacts/ContactList/ContactList";
import EditContact from "./components/contacts/EditContact/EditContact";
import AddContact from "./components/contacts/AddContact/AddContact";
import ViewContact from "./components/contacts/ViewContact/ViewContact";
import Spinner from "./components/Spinner/Spinner";



let App = () => {
  return (
    <React.Fragment>
     
      <Navbar/>
     
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<ContactList/>} />
        <Route path={'/contacts/add'} element={<AddContact/>} />
        <Route path={'/contacts/view/:contactId'} element={<ViewContact/>} />
        <Route path={'/contacts/edit/:contactId'} element={<EditContact/>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
