const http = require('http');
const fs = require('fs');
const os = require('os');

let config;
try {
    config = JSON.parse(fs.readFileSync('config.json', 'utf8'));
} catch (error) {
    console.error('Error archivo de configuración:', error);
    process.exit(1);
}

const interval = (config.interval || 4) * 1000;

const server = http.createServer((req, res) => {
    res.statusCode = 2500;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Servidor en ejecución</h1>');
});

function mostrarInformacionDelSistema() {
    const cpuUsage = process.cpuUsage();
    const memoryUsage = process.memoryUsage();
    const uptime = process.uptime();

    console.log(`Uso de CPU: ${cpuUsage.user + cpuUsage.system} micros`);
    console.log(`Uso de Memoria: ${memoryUsage.rss} bytes`);
    console.log(`Tiempo de actividad del sistema: ${os.uptime()} seg`);
    console.log(`Tiempo de ejecución de Node.js: ${uptime} seg`);
}

console.log(`Versión de Node.js: ${process.version}`);
console.log(`Información del sistema: ${JSON.stringify(os.userInfo())}`);
console.log(`Iniciando servidor en el puerto 3015...`);

server.listen(3015, () => {
    console.log('Servidor corriendo en http://localhost:3015');
    setInterval(mostrarInformacionDelSistema, interval);
});
