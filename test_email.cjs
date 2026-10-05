const https = require('https');

const data = JSON.stringify({
  service_id: "service_otvru9d",
  template_id: "template_ebnkysm",
  user_id: "Moo1JqPlzqoVsu3P1",
  template_params: {
    client_name: "Test User",
    client_email: "test@example.com",
    client_phone: "Not provided",
    enquiry: "Test message",
    submitted_at: new Date().toLocaleString(),
    reply_to: "test@example.com"
  }
});

const options = {
  hostname: 'api.emailjs.com',
  port: 443,
  path: '/api/v1.0/email/send',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': data.length,
    'Origin': 'http://localhost:5173',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
  }
};

const req = https.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);
  let responseBody = '';
  res.on('data', d => {
    responseBody += d;
  });
  res.on('end', () => {
    console.log('Response:', responseBody);
  });
});

req.on('error', error => {
  console.error(error);
});

req.write(data);
req.end();
