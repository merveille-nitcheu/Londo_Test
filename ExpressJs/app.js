// const express = require('express');
// const oracledb = require('oracledb');
// const cors = require('cors');

// const app = express();

// // CORS middleware - à mettre en premier
// app.use(cors());

// // Middleware JSON
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Config OracleDB
// const dbConfig = {
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   connectString: process.env.DB_CONNECT_STRING
// };

// // Route pour lister les produits
// app.get('/api/brand/getallbrands', async (req, res) => {
//   let connection;
//   try {
//     connection = await oracledb.getConnection(dbConfig);
//     const result = await connection.execute(
//       `SELECT * FROM brands`,
//       [],
//       { outFormat: oracledb.OUT_FORMAT_OBJECT }
//     );
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Erreur serveur');
//   } finally {
//     if (connection) {
//       try { await connection.close(); } catch (err) { console.error(err); }
//     }
//   }
// });

// // Route pour ajouter un produit
// app.post('/api/brand/storebrand', async (req, res) => {
//   const { brand_name, description } = req.body;

//   if (!brand_name || !description) {
//     return res.status(400).json({ message: 'Champs requis manquants' });
//   }

//   let connection;

//   try {
//     connection = await oracledb.getConnection(dbConfig);

//     const sql = `INSERT INTO brands (brand_name, description, created_at) VALUES (:brand_name, :description, SYSDATE)`;
//     const binds = { brand_name, description };
//     const options = { autoCommit: true };

//     await connection.execute(sql, binds, options);

//     res.status(201).json({ message: 'Marque ajoutée avec succès' });

//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Erreur serveur' });
//   } finally {
//     if (connection) {
//       try {
//         await connection.close();
//       } catch (err) {
//         console.error(err);
//       }
//     }
//   }
// });

// // Démarrer le serveur
// const port = 3001;
// app.listen(port, () => {
//   console.log(`Serveur démarré sur http://localhost:${port}`);
// });


const express = require('express');
// const cors = require('cors');

const app = express();

// CORS middleware
// app.use(cors());

// Middleware JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route GET pour tester la communication
app.get('/api/brand/getallbrands', (req, res) => {
  // renvoyer un tableau mock
  res.json([
    { brand_name: "Marque Test 1", description: "Description 1" },
    { brand_name: "Marque Test 2", description: "Description 2" }
  ]);
});

// Route POST pour tester réception des données
app.post('/api/brand/storebrand', (req, res) => {
  console.log('Données reçues:', req.body);

  // Renvoyer simplement une confirmation avec les données reçues
  res.status(201).json({
    message: 'Données reçues avec succès',
    data: req.body
  });
});

// Démarrer le serveur
const port = 3001;
app.listen(port, () => {
  console.log(`Serveur backend Express démarré sur http://localhost:${port}`);
});

