class TaskState {
  constructor(task) {
    this.task = task;
  }

  getName() {
    return "";
  }

  markInProgress() {
    console.log(`Task \"${this.task.title}\" is already ${this.getName()}`);
  }

  markReadyForReview() {
    console.log(
      `Cannot move task \"${this.task.title}\" to STATE_READY_FOR_REVIEW from ${this.getName()}`,
    );
  }

  markDone() {
    console.log(
      `Cannot move task \"${this.task.title}\" to STATE_DONE from ${this.getName()}`,
    );
  }
}

class InProgressState extends TaskState {
  getName() {
    return "STATE_IN_PROGRESS";
  }

  markReadyForReview() {
    this.task.setState(new ReadyForReviewState(this.task));
    console.log(`Task \"${this.task.title}\" moved to STATE_READY_FOR_REVIEW`);
  }
}

class ReadyForReviewState extends TaskState {
  getName() {
    return "STATE_READY_FOR_REVIEW";
  }

  markInProgress() {
    this.task.setState(new InProgressState(this.task));
    console.log(`Task \"${this.task.title}\" moved back to STATE_IN_PROGRESS`);
  }

  markDone() {
    this.task.setState(new DoneState(this.task));
    console.log(`Task \"${this.task.title}\" moved to STATE_DONE`);
  }
}

class DoneState extends TaskState {
  getName() {
    return "STATE_DONE";
  }

  markInProgress() {
    this.task.setState(new InProgressState(this.task));
    console.log(`Task \"${this.task.title}\" reopened as STATE_IN_PROGRESS`);
  }

  markReadyForReview() {
    console.log(
      `Task \"${this.task.title}\" is completed and cannot be sent to review directly`,
    );
  }

  markDone() {
    console.log(`Task \"${this.task.title}\" is already STATE_DONE`);
  }
}

class ToDoTask {
  constructor(title) {
    this.title = title;
    this.state = new InProgressState(this);
  }

  setState(state) {
    this.state = state;
  }

  markInProgress() {
    this.state.markInProgress();
  }

  markReadyForReview() {
    this.state.markReadyForReview();
  }

  markDone() {
    this.state.markDone();
  }

  getState() {
    return this.state.getName();
  }
}

class ToDoList {
  constructor() {
    this.tasks = [];
  }

  addTask(title) {
    const task = new ToDoTask(title);
    this.tasks.push(task);
    return task;
  }

  printTasks() {
    this.tasks.forEach((task, index) => {
      console.log(`${index + 1}. ${task.title} -> ${task.getState()}`);
    });
  }
}

export { ToDoList, ToDoTask, InProgressState, ReadyForReviewState, DoneState };
