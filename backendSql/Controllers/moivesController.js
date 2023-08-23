const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'movies'
});

const storeFavorite = async (req, res) => {
    try {
        const {Title,Year,Type,Poster } = req.body;

        let query = `INSERT INTO Favorites (Title, Year, Type, Poster) VALUES (?, ?, ?, ?)`;

        connection.query(query, [Title, Year, Type, Poster], function(error, results, fields){
            if (error) throw error;
            return res.status(200).json({
                message:"Favorite Saved successfully",
                status:200,
                data:results
            });
        });

    } catch (error) {
        console.log("error", error.message);
        return res.status(500).json({
            message:"something went wrong!",
            status:500,
            data:{}
        })
    }
};



const getFavorite = (req, res) => {
    try {
        let query = 'SELECT * FROM Favorites';
    
        connection.query(query, function(error, data) {
            if (error) throw error;

            if (data.length === 0) {
                return res.status(200).json({
                    message: "No Favorite found",
                    status: 200,
                    data: null
                });    
            }

            return res.send(data);
        });
    } catch (error) {
        console.log("error", error.message);
        return res.status(503).json({
            message:"something went wrong!",
            status:503,
            data:{}
        })
    }
};


module.exports = { storeFavorite, getFavorite}