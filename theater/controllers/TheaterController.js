const TheaterModel = require("./../../common/models/Theater");

module.exports = {
    getTopTheaters: async (req, res) => {
        const paramData = {
            fromDate: decodeURIComponent(req.query.fromDate),
            toDate: decodeURIComponent(req.query.toDate),
            limit: req.query.limit ?? 300
        }

        await TheaterModel.getTopTheaters(paramData.fromDate, paramData.toDate, paramData.limit)
            .then((theaterData) => {
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