import axios from 'axios';

export class ContactService {
    static serverURL=`http://localhost:3001`;

    static getALLContacts(){
        let dataURL =`${this.serverURL}/contacts`;
        return axios.get(dataURL);
    }
    static getContact(contactId){
        let dataURL =`${this.serverURl}/contacts/${contactId}`;
        return axios.get(dataURL);
    }
}