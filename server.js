const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para manejar JSON
app.use(express.json());
//Ruta Familia 
const familiaRoutes = require('./routes/familiaRoutes.js');
app.use('/api',familiaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor!');
});

// Ruta de API de ejemplo
app.get('/api1', (req, res) => {
  res.json({ message: 'Esta es una respuesta desde el backend' });
});

// Escuchar en el puerto
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin123@clusterreact.rajhauw.mongodb.net/familia?retryWrites=true&w=majority";


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Conexion exitosa con MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
