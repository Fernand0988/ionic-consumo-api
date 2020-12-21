import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as cors from 'cors';
import {DadosVinhos} from './models/dados-vinhos';
import * as bodyParser from 'body-parser';
admin.initializeApp(functions.config().firebase);
const app = express();

app.use(cors({ origin: true }));
const db = admin.firestore();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.put('/vinhos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dadosVinho = req.body as DadosVinhos;
        // evitar alterar o id
        delete dadosVinho.id;
        await db.collection('vinhos').doc(id).set(req.body, {merge: true})
            .then(() => res.status(200).send({id}));
    } catch (error) {
        console.log(error);
        res.status(400).send(`Verifique os dados enviados! ${JSON.stringify(error)}`);
    }
});
app.post('/vinhos',  (req, res) => {
    try {

        const doc = db.collection('vinhos').doc();
        const vinho: DadosVinhos = {
            averageRating: req.body.averageRating,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            link: req.body.link,
            id: doc.id,
            price: req.body.price,
            ratingCount: req.body.ratingCount,
            score: req.body.score,
            title: req.body.title,
        };
        db.collection('vinhos').doc(doc.id).set(vinho).catch((error) => res.status(400).send(`Verifique os dados enviados! ${JSON.stringify(error)}`));
        res.status(200).send(`Novo Vinho Cadastrado com id: ${doc.id}`);
    } catch (error) {
        res.status(400).send(`Verifique os dados enviados!  ${JSON.stringify(error)}`);
    }
});
app.get('/vinhos/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const vinho = await db.collection('vinhos').doc(id).get();
        if (vinho.data() !== null && vinho.data() !== undefined) {
            res.status(200).send(vinho.data());
        } else {
            res.status(404).send('Vinho não encontrado');
        }
    }catch (error) {
        res.status(500).send(error);
    }
});
app.get('/vinhos/', async (req, res) => {
    try {
        const vinhosCollection = await db.collection('vinhos').get();
        const vinhosDocs = new Array<DadosVinhos>();
        vinhosCollection.forEach(doc => {
            vinhosDocs.push(doc.data() as DadosVinhos);
        });
        res.status(200).send(vinhosDocs);
    }catch (error) {
        res.status(500).send(error);
    }

});
app.delete('/vinhos/:id', (req, res) => {
    db.collection('vinhos').doc(req.params.id).delete()
        .then(resultado => {
            console.log('resultado', resultado);
            res.status(200).send('Vinho deletado com sucesso');
        })
        .catch((error) => {
            res.status(500).send(error);
        });
});

exports.app = functions.https.onRequest(app);

