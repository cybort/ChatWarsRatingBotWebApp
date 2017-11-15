var Rating = require('./models/rating');

function getRating(res) {
    Rating.find(function (err, rating) {
        
        if (err) {
            res.send(err);
        }

        res.json(rating.sort(function compare(a, b) {
            if (a.position < b.position)
                return -1;
            if (a.position > b.position)
                return 1;
            return 0;
        }));
    });
};

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    app.get('/api/rating', function (req, res) {
        getRating(res);
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
