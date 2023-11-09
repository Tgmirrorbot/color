import React from 'react';

const hexToRgb = (hex: string) => {
  let r, g, b;
  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex[1] + hex[2], 16);
    g = parseInt(hex[3] + hex[4], 16);
    b = parseInt(hex[5] + hex[6], 16);
  }

  return {
    'r': r,
    'g': g,
    'b': b
  }
}

const ColorPicker = () => {
  return (
    <div className="p-4 bg-white rounded shadow-lg">
      <h2 className="mb-2 text-lg font-bold text-gray-700">Color Picker</h2>
      <input className="w-full p-2 border rounded" type="color" />
    </div>
  );
};

export default ColorPicker;