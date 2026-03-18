export type AuthorId = "andri";

export interface Author {
  id: AuthorId;
  name: string;
  avatarUrl: string;
}

export const AUTHORS: Record<AuthorId, Author> = {
  andri: {
    id: "andri",
    name: "Andri YS",
    avatarUrl: "https://ui-avatars.com/api/?name=AY&background=0D8ABC&color=fff",
  },
};

export function getAuthor(id: AuthorId | undefined): Author | undefined {
  if (!id) return undefined;
  return AUTHORS[id];
}

