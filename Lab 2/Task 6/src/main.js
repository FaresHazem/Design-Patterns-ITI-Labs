import { ToDoList } from "./state/ToDoState.js";

const toDoList = new ToDoList();

const taskA = toDoList.addTask("Implement login API");
const taskB = toDoList.addTask("Write unit tests");

taskA.markReadyForReview();
taskA.markDone();

taskB.markDone();
taskB.markReadyForReview();
taskB.markInProgress();

toDoList.printTasks();
