var Site = require('./models/site');

function getSites(res) {
    Site.find(function (err, sites) {

        if (err) {
            res.send(err);
        }

        res.json(sites);
    });
};

module.exports = function (app) {

    app.get('/api/all', function (req, res) {
        getSites(res);
    });

    app.post('/api/create', function (req, res) {
        Site.create({
            text: req.body.text,
            trusted: req.body.trusted,
            done: false
        }, function (err, site) {
            if (err)
                res.send(err);
            getSites(res);
        });

    });

    app.delete('/api/delete/:site_id', function (req, res) {
        Site.remove({
            _id: req.params.site_id
        }, function (err, site) {
            if (err)
                res.send(err);

            getSites(res);
        });
    });

    app.use('/api/update', function (req, res) {
        Site.update({
            _id:  req.body._id,
            text: req.body.text,
            done: false
        }, function (err, site) {
            if (err)
                res.send(err);
            getSites(res);
        });

    });

    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html');
    });
};
