

let queries = {

  getAll: () => {
    return "SELECT * FROM todos";
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("users", cols, vals, (res) => {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("users", objColVals, condition, (res) => {
      cb(res);
    });
  }
};

module.exports = queries;