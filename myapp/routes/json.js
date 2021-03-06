/**
 * Created by APA on 2014.05.01..
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    var JSONObject = {
        cols: [
            {id: 'date', label: 'Date', type: 'date'},
            {id: 'soldpencils', label: 'Sold Pencils', type: 'number'},
            {id: 'soldpens', label: 'Sold Pens', type: 'number'}
        ],
        rows: [
            {c: [
                {v: new Date(2008, 1, 1), f: '2/1/2008'},
                {v: 30000},
                {v: 40645}
            ]},
            {c: [
                {v: new Date(2008, 1, 2), f: '2/2/2008'},
                {v: 14045},
                {v: 20374}
            ]},
            {c: [
                {v: new Date(2008, 1, 3), f: '2/3/2008'},
                {v: 55022},
                {v: 50766}
            ]}
        ]
    };
    JSONObject.cols.push({id: 'csaba', label: 'csablabel', type: 'moo'});

    res.send(JSONObject);
});

module.exports = router;
