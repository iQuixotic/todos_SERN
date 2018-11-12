
let queries = {

  getAll: () => {
    return "SELECT * FROM todos";
  },

  
  getHistory: () => {
    return "SELECT * FROM todosHistory";
  },
  // The variables cols and vals are arrays.
  create: function(arg) {
    // let act = req.body.action;
    // console.log('THIS IS THE ACT prease', arg)
    return `INSERT INTO todos (crossed, action) VALUES (false, '${arg}')`;
  },
  
  createHistory: function(id, action) {
    // let data = req.body.datas
    // console.log('THIS IS THE ACT prease', arg)

    return `INSERT INTO todosHistory (id, crossed, action) VALUES ('${id}', false, '${action}')`;
  },
  update: function(id, data) {
    console.log(id, 'di', data, 'data')
    console.log(`UPDATE todos SET crossed = ${data} WHERE id = ${id}`)
    return `UPDATE todos SET crossed = ${data} WHERE id = ${id}`;
  }
};

module.exports = queries;