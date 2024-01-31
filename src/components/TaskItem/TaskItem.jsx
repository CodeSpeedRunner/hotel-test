import React from 'react';

function TaskItem({ task }) {
  return (
    <div className="">
      <strong>{`${task.name}:`}</strong>
      <p>Duration - {task.duration} hour</p>
      <p>Deadline - {task.deadline}</p>
      <p>Room - {task.room}</p>
    </div>
  );
}

export default TaskItem;
