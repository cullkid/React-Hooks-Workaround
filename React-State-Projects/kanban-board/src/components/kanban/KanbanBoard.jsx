// Import the necessary libraries
import React, { useState, useEffect } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import KanbanColumn from './KanbanColumn';
import './Style.scss';
import data from './data.json';

// Define the KanbanBoard functional component
const KanbanBoard = () => {
  // Set up the state to manage items and newTask input
  const [items, setItems] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Function to handle moving an item to a different column
  const handleMove = (id, newStatus) => {
    // Update the item's status in the items array
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, status: newStatus } : item
      )
    );
  };

  // Function to filter items by their status
  const getColumnItems = (status) =>
    items.filter((item) => item.status === status);

  // Function to add a new task
  const addNewTask = () => {
    if (newTask.trim() !== '') {
      setItems([
        ...items,
        {
          id: items.length + 1,
          content: newTask,
          status: 'notStarted',
        },
      ]);
      setNewTask('');
    }
  };

  // Function to handle adding a new task when the Enter key is pressed
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addNewTask();
    }
  };

  // Load the initial data from the JSON file when the component mounts
  useEffect(() => {
    setItems(data);
  }, []);

  // Render the Kanban board and its columns wrapped in a DndProvider
  return (
    <DndProvider backend={HTML5Backend}>
      <h1>Kanban Board</h1>
      <div className="kanban-board">
        <KanbanColumn
          title="Not Started"
          items={getColumnItems('notStarted')}
          status="notStarted"
          onMove={handleMove}
        />
        <KanbanColumn
          title="In Progress"
          items={getColumnItems('inProgress')}
          status="inProgress"
          onMove={handleMove}
        />
        <KanbanColumn
          title="Completed"
          items={getColumnItems('completed')}
          status="completed"
          onMove={handleMove}
        />
      </div>
      <div className="add-task-form">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter new task"
        />
        <button onClick={addNewTask}>Add Task</button>
      </div>
    </DndProvider>
  );
};

export default KanbanBoard;
