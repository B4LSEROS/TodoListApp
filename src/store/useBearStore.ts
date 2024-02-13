import create from "zustand";

interface Task {
  id: string;
  title: string;
  description: string;
  status: string;
  backgroundImage?: string;
}

interface TasksState {
  tasks: Task[];
  addTask: (task: Task) => void;
  removeTask: (taskId: string) => void;
  updateTaskStatus: (taskId: string, newStatus: string) => void; 
}

const useTasksStore = create<TasksState>((set) => ({
  tasks: [],
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
  updateTaskStatus: (taskId: string, newStatus: string) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      ),
    })),
}));

export default useTasksStore;
