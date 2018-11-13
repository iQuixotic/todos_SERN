import axios from "axios";

// export as object that can be used in other files to communicate with back-end php
export default {

    // CREATE 
    createNewListItem: (data) => {     
        return axios.post('/list', data);
    },

    addSelectedToHistory: (data) => {
        console.log(data, data.id)
        return axios.post('/history/', data);
    },

    // READ 
    getAll: () => {     
        return axios.get('/list');
    },

    getHistory: () => {     
        return axios.get('/history');
    },

    // UPDATE
    updateOne: (data, id) => {       
        return axios.post('/list/' + id, data);
    },

    // DELETE
    deleteLI: (data) => {     
        return axios.delete('/list/' + data.id, data);
    },

    deletItemFromHistory: (data) => {
        console.log('THISBE deleteItemFromHistory', data, data.id)
        return axios.delete('/history/' + data.id, data);
    }

};