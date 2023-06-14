// Import the necessary libraries
import React from 'react';
import { useDrop } from 'react-dnd';
import KanbanItem from './KanbanItem';
import './Style.scss';

// Define the KanbanColumn functional component
const KanbanColumn = ({ title, items, status, onMove }) => {
  // useDrop is a hook from react-dnd, which enables drop functionality for the component
  // and returns an object containing the current drop state and a ref to be attached to the component
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'kanbanItem', // The type of draggable item this component accepts
    drop: () => ({ status }), // Return the new status when an item is dropped
    collect: (monitor) => ({
      isOver: !!monitor.isOver(), // Indicates if the item is currently over the drop target
    }),
  }));

  // Render the Kanban column with the drop ref and apply the drop target style
  return (
    <div
      ref={drop}
      style={{ backgroundColor: isOver ? '#e0e0e0' : 'white' }}
      className="kanban-column"
    >
      <h3>{title}</h3>
      {/* Render all Kanban items in this column */}
      {items.map((item) => (
        <KanbanItem key={item.id} item={item} onMove={onMove} />
      ))}
    </div>
  );
};

export default KanbanColumn;
