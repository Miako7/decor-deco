export interface Furniture {
  id: string;
  name: string;
  type: 'bed' | 'wardrobe' | 'table' | 'chair' | 'lamp' | 'rug' | 'mirror' | 'decoration';
  width: number;
  height: number;
  color: string;
  price: number;
  image: string;
}

export interface RoomItem {
  id: string;
  furnitureId: string;
  x: number;
  y: number;
  rotation: number;
  color: string;
}

export interface Room {
  id: string;
  name: string;
  width: number;
  height: number;
  wallColor: string;
  floorColor: string;
  items: RoomItem[];
  createdAt: string;
  updatedAt: string;
}

export interface Theme {
  name: string;
  description: string;
  colors: {
    wall: string;
    floor: string;
    furniture: string[];
  };
}
