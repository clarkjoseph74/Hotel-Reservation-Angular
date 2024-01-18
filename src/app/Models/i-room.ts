export interface IRoom {
  id: number;
  roomType: string;
  pricePerNight: number;
  maxOccupancy: number;
  isAvailable: boolean;
}
