var Firebird = require('node-firebird');
const express = require('express');
const app = express();
const router = express.Router();
var options = {};

options.host = '127.0.0.1';
options.port = 3050;
options.database = 'C:/DEVELOPER/CLIENTES/DBCOM.RED';
options.user = 'SYSDBA';
options.password = 'masterkey';

router.get('/banco',(req,res) => {
    Firebird.attach(options,function(err,db){
        if (err) {
            console.log(err)
        }
        db.query('select COD_CFOP, INT_CFOP, NOM_CFOP nome from cfop',[],function(err,result){
            if (err){
                console.log(err)
            }else{                                                                                      
                res.json(result);
            }                
        })                    
    })
})

module.exports = router;