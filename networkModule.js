
const os = require('node:os');

function getNetworkInfo() {
  const networkInfo = {};
  const networkInterfaces = os.networkInterfaces();

  for (const interfaceName in networkInterfaces) {
    const interfaces = networkInterfaces[interfaceName];
    networkInfo[interfaceName] = [];

    interfaces.forEach((iface) => {
      networkInfo[interfaceName].push({
        Familia: iface.family,
        Dirección: iface.address,
        Interno: iface.internal
      });
    });
  }

  return networkInfo;
}

module.exports = getNetworkInfo;
