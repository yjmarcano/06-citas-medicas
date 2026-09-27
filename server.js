const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

let citas = [
  { id: 1, paciente: 'Ana Gómez', medico: 'Dr. Pérez', fecha: '2026-10-01T10:00' }
];

app.get('/api/citas', (req, res) => res.json(citas));

app.post('/api/citas', (req, res) => {
  const nuevaCita = { id: Date.now(), ...req.body };
  citas.push(nuevaCita);
  res.json(nuevaCita);
});

app.listen(PORT, () => console.log(`Citas Médicas en http://localhost:${PORT}`));