export interface Todo {
  id?: number;
  name: string;
  description: string;
  status: string;
  userID: number;
  categoryID: number;
  created_at?: string;
  updated_at?: string;
}