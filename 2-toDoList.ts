type Task = {
  id: number;
  title: string;
  isDone: Status;
};
type Status = 'Done' | boolean;

interface ToDoList {
  addTask: (title: string) => Task;
  showTasks: () => Task[];
  filter: (fn: unknown) => Task[];
  //in filter method, it runs based on to find a property if true,return the task
  deleteTask: (id: number) => void;
  changeStatus: (id: number, status: Status) => void;
  search: (text: string) => Task[];
}

class MyToDoList implements ToDoList {
  private Tasks: Array<Task> = []; // store tasks of todo list

  addTask = (title: string) => {
    const task: Task = {
      id: this.Tasks.length + 1, //when the task add, how much is the length of todo list
      title: title,
      isDone: false,
    };
    this.Tasks.push(task);
    return task;
  };
  showTasks = () => this.Tasks;
  // filter = (fn: number | string | boolean) => {
  //   if (typeof fn === 'string') {
  //     for (let task of this.Tasks) {
  //       task.title === fn;
  //       return task;
  //     }
  //   }
  //   if (typeof fn === 'number') {
  //     for (let task of this.Tasks) {
  //       task.id === fn;
  //       return task;
  //     }
  //   }
  //   if (typeof fn === 'boolean') {
  //     for (let task of this.Tasks) {
  //       task.isDone === fn;
  //       return task;
  //     }
  //   }
  // };
  deleteTask = (id: number) => {
    const choosenTask: number | undefined = this.Tasks.findIndex(
      (task) => task.id === id
    );
    if (choosenTask) {
      return this.Tasks.splice(choosenTask, 1);
    } else {
      throw new Error('Task does not exist');
    }
  };
  changeStatus = (id: number, status: Status) => {
    const choosenTask: Task | undefined = this.Tasks.find(
      (task) => task.id === id
    );
    if (choosenTask) {
      choosenTask.isDone = status;
    } else {
      throw new Error('Task not found!');
    }
  };
  search = (text: string) => {
    let findedTask: Task[] = [];
    for (let task of this.Tasks) {
      const title: string = task.title;
      for (let el of title) {
        for (let elt of text) {
          el === elt;
        }
      }
      findedTask.push(task);
    }
    return findedTask;
  };
}
const TodoListNew = new MyToDoList();
TodoListNew.addTask('running');
TodoListNew.addTask('programming');
TodoListNew.addTask('programming2');
// TodoListNew.filter((t: number) => t.id === 1);
// console.log(TodoListNew.deleteTask(2));
// console.log(TodoListNew.deleteTask(3));
console.log(TodoListNew.addTask('writing'));
// TodoListNew.changeStatus(1, 'Done');
console.log(TodoListNew.search('wr'));
console.log(TodoListNew.showTasks());
