// systemInfo.js
const { getOSInfo } = require('./osModule');
const { getNetworkInfo } = require('./networkModule');

// Obtener información del sistema operativo
const osInfo = getOSInfo();

console.log('Información del Sistema Operativo:');
for (const key in osInfo) {
  console.log(`${key}: ${osInfo[key]}`);
}

// Obtener información de las interfaces de red
const networkInfo = getNetworkInfo();

console.log('\nInformación de las Interfaces de Red:');
for (const interfaceName in networkInfo) {
  console.log(`Interfaz ${interfaceName}:`);
  networkInfo[interfaceName].forEach((iface) => {
    console.log(`  Familia: ${iface.Familia}`);
    console.log(`  Dirección: ${iface.Dirección}`);
    console.log(`  Interno: ${iface.Interno}`);
  });
  console.log('');
}
