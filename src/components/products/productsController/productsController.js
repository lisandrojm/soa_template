let database = ['Federico', 'Andres', 'Ema'];

class Products {
  get(req, res) {
    res.json(database);
  }
  create(req, res) {
    let { name } = req.body;
    database.push(name);
    res.json(database);
  }
}

module.exports = new Products();
