import express from 'express';
import dotenv from 'dotenv';
import familiaRoutes from './routes/familiaRoutes.js';
import { MongoClient, ServerApiVersion } from 'mongodb';

dotenv.config(); // si usas variables de entorno desde un .env

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware para manejar JSON
app.use(express.json());

// Rutas
app.use('/api', familiaRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor!');
});

app.get('/api', (req, res) => {
  res.json({ message: 'Esta es una respuesta desde el backend' });
});

// Escuchar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

// MongoDB Atlas
const uri = "mongodb+srv://admin:admin123@clusterreact.rajhauw.mongodb.net/familia?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("✅ Conexión exitosa con MongoDB!");
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error.message);
  } finally {
    await client.close(); // o coméntalo si quieres mantener la conexión abierta
  }
}

run().catch(console.dir);
