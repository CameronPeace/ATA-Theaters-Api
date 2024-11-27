const connection = require("../../database/mysql");

module.exports = {

    getTopTheaters: async (toDate, fromDate, limit = 10) => {
        return await new Promise((resolve, reject) => {
            connection.promise().query('Call theater_revenue (?, ?, ?)', [toDate, fromDate, limit])
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