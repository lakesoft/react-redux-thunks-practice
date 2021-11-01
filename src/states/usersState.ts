export type User = {
  id: number;
  name: string;
};
export type UsersState = {
  users: User[];
  isLoading: boolean;
  errorMessage?: string;
};
