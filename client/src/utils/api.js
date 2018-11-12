import axios from "axios";

// export as object that can be used in other files to communicate with back-end php
export default {

    // CREATE 
    createNewListItem: (data) => {     
        return axios.post('/list', data);
    },

    addSelectedToHistory: (data) => {
        console.log(data)
        return axios.post('/history', data);
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
    deleteLI: (data, id) => {     
        console.log('this is it', data, id)
        return axios.delete('/list/' + id, data);
    }

};