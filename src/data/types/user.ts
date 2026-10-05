export interface User {
  id: number;
  email: string;
  google_id: string;
  name?: string | null;
  given_name?: string | null;
  family_name?: string | null;
  picture?: string | null;
  created_at: string;
}
