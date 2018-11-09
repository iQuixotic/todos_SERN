

let queries = {

  getAll: () => {
    return "SELECT * FROM todos";
  },
  // The variables cols and vals are arrays.
  create: function(arg) {
    // let act = req.body.action;
    // console.log('THIS IS THE ACT prease', arg)
    return `INSERT INTO todos (crossed, action) VALUES (false, '${arg}')`;
  },
  update: function(objColVals, condition, cb) {
    orm.update("users", objColVals, condition, (res) => {
      cb(res);
    });
  }
};

module.exports = queries;