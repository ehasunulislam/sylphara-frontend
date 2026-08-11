export interface IProfile {
  github: string | null;
  linkedin: string | null;

  user: {
    id: string;
    name: string;
    email: string;
    profilePhoto: string;
    role: string;
  };
}