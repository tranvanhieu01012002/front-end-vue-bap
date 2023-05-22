export default interface SetQuestion {
  id: number;
  name?: string;
  questions_count: number;
  user_id?: string;
  favorite?: boolean;
}
