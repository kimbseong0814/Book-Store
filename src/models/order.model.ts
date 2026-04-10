export interface Order {
  id: number;
  createdAt: string;
  address: string;
  receiver: string;
  contact: string;
  bookTitle: string;
  totalQuntity: number;
  totalPrice: number;
}