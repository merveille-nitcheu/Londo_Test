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
app.use(express.json());

// CORS middleware
// app.use(cors());

// Middleware JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const brandRouter = express.Router();

const brands = [
  { brand_name: "Marque Test 1", description: "Description 1", created_at: formatDate(new Date()) },
  { brand_name: "Marque Test 2", description: "Description 2", created_at: formatDate(new Date()) }
];

function formatDate(date) {
  const d = new Date(date);
  const day = d.getDate().toString().padStart(2, '0');
  const month = (d.getMonth() + 1).toString().padStart(2, '0');
  const year = d.getFullYear();
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
brandRouter.get('/getallbrands', (req, res) => {
  res.json(brands);
});

brandRouter.post('/storebrand', (req, res) => {
  const { brand_name, description } = req.body;

  if (!brand_name || !description) {
    return res.status(400).json({ message: 'Champs requis manquants' });
  }

  const newBrand = {
    brand_name,
    description,
    created_at: formatDate(new Date())
  };

  brands.push(newBrand);
  console.log('Marque ajoutée :', newBrand);

  res.status(201).json({ message: 'Marque ajoutée avec succès', data: newBrand });
});

app.use('/brand', brandRouter);


// Démarrer le serveur
const port = 3001;
app.listen(port, '0.0.0.0', () => {
  console.log(`Serveur backend Express démarré sur http://0.0.0.0:${port}`);
});

