async function cargarCitas() {
  const res = await fetch('/api/citas');
  const citas = await res.json();
  const lista = document.getElementById('listaCitas');
  lista.innerHTML = citas.map(c => `<li><b>${c.paciente}</b> con ${c.medico} - ${new Date(c.fecha).toLocaleString()}</li>`).join('');
}
async function agendarCita() {
  const paciente = document.getElementById('paciente').value;
  const medico = document.getElementById('medico').value;
  const fecha = document.getElementById('fecha').value;
  if(!paciente || !medico || !fecha) return alert('Rellene todos los campos');
  await fetch('/api/citas', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ paciente, medico, fecha })
  });
  cargarCitas();
}
cargarCitas();