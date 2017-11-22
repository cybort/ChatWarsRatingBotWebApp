var Rating = require('./models/rating');

function getRating(res) {
    Rating.find(function (err, rating) {
        if (err) {
            res.send(err);
        }
        res.json(addIndexField(rating.sort(compare)));
    });
};

function getRatingByFraction(res, id) {
    var query = Rating.find({ fraction: id });
    query.exec(function (err, rating) {
        if (err) {
            res.send(err);
        }
        res.json(addIndexField(rating.sort(compare)));
    });
};

function compare(a, b) {
    if (a.position < b.position)
        return -1;
    if (a.position > b.position)
        return 1;
    return 0;
};

function addIndexField(rating) {
    for (var i = 0; i < rating.length; i++) {
        rating[i].index = i + 1;        
    }
    return rating;
}

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    app.get('/api/rating', function (req, res) {        
        getRating(res);
    });

    app.get('/api/rating/:id', function (req, res) {        
        getRatingByFraction(res, req.params.id);        
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};