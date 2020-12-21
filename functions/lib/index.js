"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCadastroVinhos = void 0;
const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
admin.initializeApp(functions.config().firebase);
const app = express();
const main = express();
app.use(cors({ origin: true }));
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));
const db = admin.firestore();
// const collectionVinhos = 'vinhos';
exports.apiCadastroVinhos = functions.https.onRequest(main);
app.post('/vinhos', async (req, res) => {
    try {
        const vinho = {
            averageRating: req.body.averageRating,
            description: req.body.averageRating,
            id: req.body.averageRating,
            imageUrl: req.body.averageRating,
            link: req.body.averageRating,
            price: req.body.averageRating,
            ratingCount: req.body.averageRating,
            score: req.body.averageRating,
            title: req.body.averageRating,
        };
        const newDoc = await db.collection('vinhos').add(vinho);
        res.status(201).send(`Created a new user: ${newDoc.id}`);
    }
    catch (error) {
        res.status(400).send(`Verifique os dados enviados!`);
    }
});
//# sourceMappingURL=index.js.map