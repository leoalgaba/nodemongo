import Task from "../models/Task"

export const renderTasks = async (req, res) => {
    const tasks = await Task.find().lean();
    res.render("index", { tasks });
};
export const createTask = async (req, res) => {
    const tasks = Task(req.body);
    await tasks.save();
    res.redirect("/");
};
export const renderTaskEdit = async (req, res) => {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task });
};
export const editTask = async (req, res) => {
    await Task.findByIdAndUpdate(req.params.id, req.body);
    res.redirect("/");
};
export const deleteTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndDelete(id);
  res.redirect("/");
};
export const doneTask = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findById(id);
  task.hecho = !task.hecho;
  await task.save();
  res.redirect("/");
};