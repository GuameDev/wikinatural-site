import { Episodes } from "./episodes";

export interface Character {
  name: string;
  img: string;
  actor: string[];
  episodes: Episodes[];
  occupation: string[];
  id: string;
}

