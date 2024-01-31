import React, { useState } from 'react';
import TaskList from '../TaskList/TaskList';

function ScheduleEditor() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [duration, setDuration] = useState(1);
  const [deadline, setDeadline] = useState('');
  const [room, setRoom] = useState('');

  const addTask = () => {
    const newTask = {
      name: taskName,
      duration,
      deadline,
      room,
      id: Math.random(),
    };
    setTasks([...tasks, newTask]);
    setTaskName('');
    setDuration(1);
    setDeadline('');
    setRoom('');
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center gap-[15px] mb-[50px]">
        <h2 className="text-center text-3xl underline underline-offset-2">
          Edit the schedule
        </h2>
        <div className="flex gap-[15px]">
          <div>
            <label className="mr-[5px] font-semibold">Task name:</label>
            <input
              type="text"
              className="p-[10px] rounded-lg"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>
          <div>
            <label className="mr-[5px] font-semibold">Duration (hour):</label>
            <input
              type="number"
              className="p-[10px] rounded-lg"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
          </div>
          <div>
            <label className="mr-[5px] font-semibold">Deadline:</label>
            <input
              type="text"
              className="p-[10px] rounded-lg"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
            />
          </div>
          <div>
            <label className="mr-[5px] font-semibold">Room in hotel:</label>
            <input
              type="text"
              className="p-[10px] rounded-lg"
              value={room}
              onChange={(e) => setRoom(e.target.value)}
            />
          </div>
        </div>
        <button
          onClick={addTask}
          className="bg-blue-300 hover:bg-blue-400 p-[10px] border-[1px] border-black rounded-xl w-[150px]"
        >
          Add Task
        </button>
      </div>
      <TaskList tasks={tasks} setTasks={setTasks} />
    </>
  );
}

export default ScheduleEditor;
