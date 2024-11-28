const connection = require("../../database/mysql");

module.exports = {

    getTopTheaters: async (fromDate, toDate, limit = 10) => {
        return await new Promise((resolve, reject) => {
            connection.promise().query('Call theater_revenue (?, ?, ?)', [fromDate, toDate, limit])
                .then((data) => data[0][0])
                .then((topTheaters) => {
                    resolve(topTheaters);
                })
                .catch((err) => {
                    reject(err);
                });
        });
       
    }

};