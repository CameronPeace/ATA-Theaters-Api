const TheaterModel = require("./../../common/models/Theater");

module.exports = {
    getTopTheaters: async (req, res) => {
        // const paramData = {
        //     toDate: decodeURIComponent(req.query.toDate),
        //     fromDate: decodeURIComponent(req.query.fromDate),
        //     limit: req.query.limit ?? 300
        // }
        const paramData = {
            toDate: '2024-12-16 00:00:00',
            fromDate: '2024-12-16 23:59:59',
            limit: req.query.limit ?? 300
        }

         await TheaterModel.getTopTheaters(paramData.toDate, paramData.fromDate, paramData.limit)
            .then((theaterData) => {
                console.log(theaterData);
                return res.status(200).json({
                    status: true,
                    data: theaterData,
                });
            })
            .catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err,
                });
            });
    },
}