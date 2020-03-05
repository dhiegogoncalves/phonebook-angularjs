var router = require('./router');

var app = router(3001);

var operators = [
  {name: "Oi", code: 14, category: "Celular", price: 2},
  {name: "Vivo", code: 15, category: "Celular", price: 1},
  {name: "Tim", code: 41, category: "Celular", price: 3}
];

var contacts = [
  {id: 1, serial: "X3SA", name: "João Silva", telephone: "9999-2222", date: new Date(), operator: operators[0]},
  {id: 2, serial: "T1HD", name: "Maria Oliverira de Lima", telephone: "9999-3333", date: new Date(), operator: operators[1]},
  {id: 3, serial: "9KLQ", name: "Dhiego Gonçalves da Silva", telephone: "9999-9999", date: new Date(), operator: operators[2]}
];

app.interceptor(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.interceptor(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json;charset=UTF-8');
  next();
});

app.get('/operators', function (req, res) {
  res.write(JSON.stringify(operators));
  res.end();
});

app.get('/contacts', function (req, res) {
  res.write(JSON.stringify(contacts));
  res.end();
});

app.post('/contacts', function (req, res) {
  let contact = req.body;
  contacts.push(JSON.parse(contact));
  res.end();
});

app.post('/file', function (req, res) {
  console.log(req.body);
  res.end();
});

app.options('/file', function (req, res) {
  res.end();
});

app.options('/contacts', function (req, res) {
  res.end();
});