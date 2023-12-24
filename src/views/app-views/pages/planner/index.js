import React, { useState } from 'react';

const RoomEditor = () => {
  const [roomSize, setRoomSize] = useState({ width: 500, height: 300 });
  const [furniture, setFurniture] = useState([]);
  const [draggedItemId, setDraggedItemId] = useState(null);

  const handleRoomSizeChange = (e) => {
    const { name, value } = e.target;
    setRoomSize((prevSize) => ({
      ...prevSize,
      [name]: parseInt(value),
    }));
  };

  const handleAddFurniture = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;

    const newFurniture = {
      id: Date.now(),
      type: e.target.dataset.type,
      position: { x: offsetX, y: offsetY },
    };

    setFurniture((prevFurniture) => [...prevFurniture, newFurniture]);
    setDraggedItemId(newFurniture.id);
  };

  const handleFurnitureMove = (id, deltaX, deltaY) => {
    if (draggedItemId === id) {
      setFurniture((prevFurniture) =>
        prevFurniture.map((item) =>
          item.id === id ? { ...item, position: { x: item.position.x + deltaX, y: item.position.y + deltaY } } : item
        )
      );
    }
  };

  const handleFurnitureRemove = (id) => {
    setFurniture((prevFurniture) => prevFurniture.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h2>Планировщик</h2>
      <div>
        <label htmlFor="width">Ширина:</label>
        <input type="number" id="width" name="width" value={roomSize.width} onChange={handleRoomSizeChange} />
      </div>
      <div>
        <label htmlFor="height">Высота:</label>
        <input type="number" id="height" name="height" value={roomSize.height} onChange={handleRoomSizeChange} />
      </div>
      <button data-type="someType" onClick={handleAddFurniture}>
        Добавить квадрат
      </button>
      <div
        style={{
          border: '1px solid black',
          width: roomSize.width,
          height: roomSize.height,
          position: 'relative',
          display: 'grid',
          gridTemplateColumns: `repeat(${Math.floor(roomSize.width / 50)}, 50px)`,
          gridTemplateRows: `repeat(${Math.floor(roomSize.height / 50)}, 50px)`,
        }}
      >
        {furniture.map((item) => (
          <div
            key={item.id}
            style={{
              gridColumn: `span 1`,
              gridRow: `span 1`,
              position: 'absolute',
              left: item.position.x,
              top: item.position.y,
              width: 50,
              height: 50,
              background: 'red',
              cursor: 'move',
            }}
            draggable
            onDragStart={(e) => {
              setDraggedItemId(parseInt(e.target.dataset.id));
            }}
            onDragEnd={() => {
              setDraggedItemId(null);
            }}
            onDrag={(e) => {
              const deltaX = e.clientX - e.nativeEvent.offsetX - item.position.x;
              const deltaY = e.clientY - e.nativeEvent.offsetY - item.position.y;
              handleFurnitureMove(item.id, deltaX, deltaY);
            }}
          >
            <button
              style={{ position: 'absolute', top: -10, right: -10 }}
              onClick={() => handleFurnitureRemove(item.id)}
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoomEditor;