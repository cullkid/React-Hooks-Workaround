// Import the necessary libraries
import React from 'react';
import { useDrag } from 'react-dnd';
import './Style.scss';

// Define the KanbanItem functional component
const KanbanItem = ({ item, onMove }) => {
  // useDrag is a hook from react-dnd, which enables drag functionality for the component
  // and returns an object containing the current dragging state and a ref to be attached to the component
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'kanbanItem', // A unique identifier for the draggable item type
    item: { id: item.id }, // The data associated with the draggable item
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(), // Indicates if the item is currently being dragged
    }),
    // end is called when the drag operation ends (e.g., when the item is dropped)
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
        // Call the onMove function to update the item's status
        onMove(item.id, dropResult.status);
      }
    },
  }));

  // Render the Kanban item with the drag ref and apply the dragging style
  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="kanban-item"
    >
      {item.content}
    </div>
  );
};

export default KanbanItem;
