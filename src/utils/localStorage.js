var taskStorage = {
  list: function(){
    var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return(tasks);
  },
  push: function(task){
    var currentTasks = this.list();
    currentTasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(currentTasks));
  },
  get: function(task_id){
    var currentTasks = this.list();
    return(currentTasks[this.getIndex(task_id)]);
  },
  set: function(task){
    var currentTasks = this.list();
    currentTasks[this.getIndex(task.id)] = task;
    localStorage.setItem("tasks", JSON.stringify(currentTasks));
    return true;
  },
  delete: function(task_id){
    var currentTasks = this.list();
    currentTasks.splice(this.getIndex(task_id),1);
    localStorage.setItem("tasks", JSON.stringify(currentTasks));
  },
  getIndex: function(task_id){
    var currentTasks = this.list();
    for(var i=0; i< currentTasks.length; i++){
      if(currentTasks[i].id === task_id){
        return(i);
      }
    }
  }
};

module.exports = taskStorage;