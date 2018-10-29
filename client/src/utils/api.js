import axios from "axios";

// export as object that can be used in other files to communicate with back-end php
export default {

    // CREATE 
    createNewListItem: (data) => {     
        return axios.put('/list', data);
    },

    // READ 
    getAll: () => {     
        console.log('i have got the all son')
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
    delListItem: (data, id) => {     
        return axios.delete('/list/' + id, data);
    }

};