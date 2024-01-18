export interface IReservation {
  id: number;
  roomId: number;
  guestId: number;
  totalCost: number;
  guestsNum: number;
  checkInDate: Date;
  checkOutDate: Date;
  isPaid: boolean;
}
