var __      = require('underscore');
var spawn   = require('child_process').spawn;
var express = require('express');
var app     = express();

var mpcArgs = ['-h', 'yourpasswordhere@192.168.3.67'];

function bash(res, prog, args){
    var mpc = spawn(prog, args);
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    mpc.stdout.on('data', function(data){
        res.send({result: '' + data});
    });
    mpc.stderr.on('data', function(data){
        res.send({result: 'Error of mpc: ' + data});
    });
}

app.get('/mpc/current',  function(req, res){bash(res, 'mpc', __.union(mpcArgs, ['current']))});
app.get('/mpc/playlist', function(req, res){bash(res, 'mpc', __.union(mpcArgs, ['playlist']))});
app.get('/mpc/admin/next',     function(req, res){bash(res, 'mpc', __.union(mpcArgs, ['next']))});
app.get('/mpc/admin/shuffle',  function(req, res){bash(res, 'mpc', __.union(mpcArgs, ['shuffle']))});
app.get('/mpc/admin/load',     function(req, res){bash(res, './bash/loadPlst.sh', [req.query.plst])});

app.listen(8068);
