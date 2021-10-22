import { Comment } from "./Comment";

export type Post = {
  id: string;
  title: string;
  comments: Comment[];
}