import React, { useState } from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

function TaskList({ tasks, setTasks }) {
  const [first, setFirst] = useState([]);
  const [second, setSecond] = useState([]);
  const [third, setThird] = useState([]);
  const [done, setDone] = useState([]);

  const handlerDragEnd = (result) => {
    const { source, destination, type, draggableId } = result;

    if (source.droppableId === destination.droppableId) return;

    // DELETED ITEM
    if (source.droppableId == 2) {
      setFirst(removeItemById(draggableId, first));
    } else if (source.droppableId == 1) {
      setTasks(removeItemById(draggableId, tasks));
    } else if (source.droppableId == 3) {
      setSecond(removeItemById(draggableId, second));
    } else if (source.droppableId == 4) {
      setThird(removeItemById(draggableId, third));
    } else {
      setDone(removeItemById(draggableId, done));
    }

    //GET ITEM
    const task = findItemById(draggableId, [
      ...tasks,
      ...first,
      ...second,
      ...third,
      ...done,
    ]);

    //ADD ITEM
    if (destination.droppableId == 2) {
      setFirst([{ ...task }, ...first]);
    } else if (destination.droppableId == 1) {
      setTasks([{ ...task }, ...tasks]);
    } else if (destination.droppableId == 3) {
      setSecond([{ ...task }, ...second]);
    } else if (destination.droppableId == 4) {
      setThird([{ ...task }, ...third]);
    } else {
      setDone([{ ...task }, ...done]);
    }

    //////////////

    function findItemById(id, array) {
      return array.find((item) => item.id == id);
    }

    function removeItemById(id, array) {
      return array.filter((item) => {
        console.log(item.id != id);
        return item.id != id;
      });
    }
  };

  return (
    <div>
      <h3 className="text-center text-xl font-semibold mb-[25px]">
        Tasks List
      </h3>
      <DragDropContext onDragEnd={handlerDragEnd}>
        <div className="flex gap-[15px]">
          <Droppable droppableId="1" type="group">
            {(provided, snapshot) => (
              <div
                className="bg-blue-300 flex flex-col gap-[10px] p-[15px] w-1/3 rounded-lg"
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <h2 className="text-center text-lg font-semibold">Tasks</h2>

                {tasks?.map((task, index) => {
                  console.log(task.id);
                  return (
                    <Draggable
                      draggableId={task.id.toString()}
                      key={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className="bg-orange-300 py-[15px] px-[5px] rounded-lg shadow-md"
                          isDragging={snapshot.isDragging}
                        >
                          <TaskItem key={index} task={task} />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="2" type="group">
            {(provided, snapshot) => (
              <div
                className="bg-blue-300 flex flex-col gap-[10px] p-[15px] w-1/3 rounded-lg"
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <h2 className="text-center text-lg font-semibold">
                  first housekeepers
                </h2>

                {first?.map((task, index) => {
                  console.log(task.id);
                  return (
                    <Draggable
                      draggableId={task.id.toString()}
                      key={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className="bg-pink-300 py-[15px] px-[5px] rounded-lg shadow-md"
                          isDragging={snapshot.isDragging}
                        >
                          <TaskItem key={index} task={task} />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="3" type="group">
            {(provided, snapshot) => (
              <div
                className="bg-blue-300 flex flex-col gap-[10px] p-[15px] w-1/3 rounded-lg"
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <h2 className="text-center text-lg font-semibold">
                  second housekeepers
                </h2>

                {second?.map((task, index) => {
                  console.log(task.id);
                  return (
                    <Draggable
                      draggableId={task.id.toString()}
                      key={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className="bg-red-300 py-[15px] px-[5px] rounded-lg shadow-md"
                          isDragging={snapshot.isDragging}
                        >
                          <TaskItem key={index} task={task} />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="4" type="group">
            {(provided, snapshot) => (
              <div
                className="bg-blue-300 flex flex-col gap-[10px] p-[15px] w-1/3 rounded-lg"
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <h2 className="text-center text-lg font-semibold">
                  third housekeepers
                </h2>

                {third?.map((task, index) => {
                  console.log(task.id);
                  return (
                    <Draggable
                      draggableId={task.id.toString()}
                      key={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className="bg-violet-300 py-[15px] px-[5px] rounded-lg shadow-md"
                          isDragging={snapshot.isDragging}
                        >
                          <TaskItem key={index} task={task} />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>

          <Droppable droppableId="5" type="group">
            {(provided, snapshot) => (
              <div
                className="bg-blue-300 flex flex-col gap-[10px] p-[15px] w-1/3 rounded-lg"
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                <h2 className="text-center text-lg font-semibold">Done</h2>

                {done?.map((task, index) => {
                  console.log(task.id);
                  return (
                    <Draggable
                      draggableId={task.id.toString()}
                      key={task.id}
                      index={index}
                    >
                      {(provided, snapshot) => (
                        <div
                          {...provided.dragHandleProps}
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          className="bg-green-300 py-[15px] px-[5px] rounded-lg shadow-md"
                          isDragging={snapshot.isDragging}
                        >
                          <TaskItem key={index} task={task} />
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>
      </DragDropContext>
    </div>
  );
}

export default TaskList;
