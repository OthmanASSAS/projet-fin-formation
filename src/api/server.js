const express = require('express');

var app = express();
var bodyParser = require('body-parser');
var session = require('express-session');
console.log('bonjour merci d\'écouter sur le port 8000');
var connection = require('./db_connect.js')
const usagersRoute = require('./models/usagers')
const jwt = require('jsonwebtoken');

// Middleware Body Parser configuration Sert à récupérer les paramètres et
// arguments fournis dans une requête HTTP urlencoded :
app.use(bodyParser.urlencoded({extended: false}));
//Pour parser du Json
app.use(bodyParser.json());

// app.use(session({     secret: 'testons',     resave: false,
// saveUninitialized: true,     cookie: { secure: false } })) config simple du
// C.O.R.S
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Routes app.use('/usagers', usagersRoute)

app.get('/', (req, res) => {
    res.send('Vous êtes sur le port 8000')
})

app.get('/user', (req, res) => {
    const sql = "SELECT * FROM user";
    connection.query(sql, (err, results, fields) => {
        if (err) 
            throw err;
        else 
            res
                .status(200)
                .send(results)
        });
});

/* Début éditer par id */

app.get('/userfiche/:id', (req, res) => {

    console.log('req.params.id : ', req.params.id);

    const sql = "SELECT * FROM user WHERE id=?";
    connection.query(sql, req.params.id, (err, results, fields) => {
        console.log('results :', results);

        if (err) 
            throw err;
        else 
            res
                .status(200)
                .send(results)
        });
})

/* Fin éditer par id */

/* Début supprimer utilisateur */
app.delete('/user/delete/:id', (req, res) => {
    const sql = "DELETE FROM user WHERE id=?";

    connection.query(sql, req.params.id, (err, results, fields) => {
        console.log('results :', results);
        console.log(err);

        if (err) 
            throw err;
        else 
            res
                .status(200)
                .send(results)
        });
})

/* Fin supprimer utilisateur */

/* Début modification patch */
app.put('/user/update/:id', (req, res) => {
    console.log(req.body.datenaissance);

    const sql = `UPDATE user SET nom = ${connection.escape(req.body.nom)}, prenom = ${connection.escape(req.body.prenom)}, datenaissance = ${connection.escape(req.body.datenaissance)}, adresse = ${connection.escape(req.body.adresse)}, cp = ${connection.escape(req.body.cp)}, ville = ${connection.escape(req.body.ville)}, tel = ${connection.escape(req.body.tel)}, email = ${connection.escape(req.body.email)}, profession = ${connection.escape(req.body.profession)} WHERE id=?`

    console.log('côté serveur');

    console.log('req.body.nom:', req.body.nom);

    connection.query(sql, req.params.id, (err, results, fields) => {
        console.log('results :', results);
        console.log(err);

        if (err) 
            throw err;
        else 
            res
                .status(200)
                .send(results)
        console.log('modifié !');

    });
});
/* Fin modification patch */

/* Début get login JWT */

app.get('/login', (req, res) => {
    res.send('login')
});

/* Fin get login JWT */

const fakeUser = {
    email: 'othman_assas@hotmail.fr',
    password: 'test'
};

const secret = 'ghfqjdmdfffGgjfqgfg3qDgrqkjflFGqrer65rf4rgdKflligjdffd5g466sdg,dfl'

/* Début post login JWT */
app.post('/login', (req, res) => {
  
    console.log('login post : ', req.body);
    console.log('booleanTest:', fakeUser.email === req.body.email);

    if (!req.body) {
        res.sendStatus(500);
    } else {
        if (fakeUser.email === req.body.email && fakeUser.password === req.body.password) {
const myToken = jwt.sign({iss: 'http://monprojet', user: 'Othman', scope:'administrateur'}, secret);



            
        } else {
            res.sendStatus(401);
        }
    }
})
/* Début post login JWT */

app.post('/dataFormulaire', (req, res) => {
    // console.log(req.body);

    console.log(req.body.nom);
    console.log(req.body.prenom);
    console.log(req.body.datenaissance);
    console.log(req.body.email);
    var sql = `INSERT INTO user (nom, prenom, datenaissance, adresse, cp, ville, tel, email, profession) VALUES ("${req.body.nom}","${req.body.prenom}", '${req.body.datenaissance}', '${req.body.adresse}', '${req.body.cp}', '${req.body.ville}', '${req.body.tel}', '${req.body.email}', '${req.body.profession}')`;

    //return console.log(sql);

    connection.query(sql, function (err, results, fields) {
        console.log('*****---------*****');

        if (err) 
            throw err;
        console.log('table créée !');
        console.log('Tu es connecté !!!');
        res
            .status(201)
            .send('ok')
        // console.log(result);
    });
    // let Message = require('./models/message') Message.create(req.body.nom,
    // function(){ }) req.redirect('/')
});

app.listen(8000);