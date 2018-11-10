

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
  update: function(id, data) {
    console.log(id, 'di', data, 'data')
    console.log(`UPDATE todos SET crossed = ${data} WHERE id = ${id}`)
    return `UPDATE todos SET crossed = ${data} WHERE id = ${id}`;
  }
};

module.exports = queries;