import { useState, ChangeEvent } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('#ffffff');

  const handleColorChange = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  const hexToRgb = (hex: string) => {
    let r = 0, g = 0, b = 0;

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
  };

  const rgbToHsl = (r: number, g: number, b: number) => {
    r /= 255;
    g /= 255;
    b /= 255;

    let max = Math.max(r, g, b), min = Math.min(r, g, b);
    let h = 0, s, l = (max + min) / 2;

    if(max !== min){
      let d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch(max){
        case r: h = (g - b) / d + (g < b ? 6 : 0); break;
        case g: h = (b - r) / d + 2; break;
        case b: h = (r - g) / d + 4; break;
      }
      h /= 6;
    }

    return {
      'h': h,
      's': s,
      'l': l
    }
  };

  const rgb = hexToRgb(color);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 bg-current" style={{ backgroundColor: color }}></div>
      <input type="color" value={color} onChange={handleColorChange} className="mt-4" />
      <div className="mt-4">
        <p>RGBA: rgba({rgb.r}, {rgb.g}, {rgb.b}, 1)</p>
        <p>RGB: rgb({rgb.r}, {rgb.g}, {rgb.b})</p>
        <p>HSL: hsl({hsl.h}, {hsl.s}, {hsl.l})</p>
        <p>HSLA: hsla({hsl.h}, {hsl.s}, {hsl.l}, 1)</p>
        <p>HEX: {color}</p>
      </div>
    </div>
  );
};

export default ColorPicker;