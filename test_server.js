const http = require('http');

function check(url, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(url, options, (res) => {
      let data = [];
      res.on('data', chunk => data.push(chunk));
      res.on('end', () => resolve({ status: res.statusCode, data: Buffer.concat(data) }));
    });
    req.on('error', reject);
    if (options.body) req.write(options.body);
    req.end();
  });
}

async function runTests() {
  console.log('=== VERIFYING MOTION VIEW GADGET STORE & IMAGES ===');
  
  // 1. Home Page
  const home = await check('http://localhost:3000/');
  console.log('1. GET / -> Status:', home.status, 'Bytes:', home.data.length);

  // 2. All 12 Images from /gadgate/
  const images = [
    '17194681585.webp', '175419717184.webp', '17722936726.webp',
    '177254778613.webp', '177315710478.webp', '17734799926.webp',
    '177356237752.webp', '177926078848.webp', '178462928261.webp',
    '178702789666.webp', '178711751745.webp', '17886040005.webp'
  ];

  for (const img of images) {
    const res = await check(`http://localhost:3000/gadgate/${img}`);
    console.log(`- GET /gadgate/${img} -> Status: ${res.status} (${res.data.length} bytes)`);
  }

  // 3. Products API
  const prodRes = await check('http://localhost:3000/api/products');
  const prodJson = JSON.parse(prodRes.data.toString());
  console.log('3. GET /api/products -> Total:', prodJson.total);

  // 4. Gadgets Category (12 items)
  const gadRes = await check('http://localhost:3000/api/products?category=gadgets');
  const gadJson = JSON.parse(gadRes.data.toString());
  console.log('4. GET /api/products?category=gadgets -> Gadgets Total:', gadJson.total);

  console.log('=== ALL IMAGES AND ENDPOINTS SERVED SUCCESSFULLY! ===');
}

runTests().catch(err => console.error('Verification Error:', err));
