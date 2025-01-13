export interface User {
  login: string;
  avatar_url: string;
  location?: string;
  email?: string;
  company?: string;
  bio?: string;
}

export const fetchCandidates = async (): Promise<User[]> => {
  const response = await fetch("https://api.github.com/users?since=0");
  const data = await response.json();
  return data.map((user: any) => ({
    login: user.login,
    avatar_url: user.avatar_url,
    location: user.location || "Not provided",
    email: user.email || "Not provided",
    company: user.company || "Not provided",
    bio: user.bio || "No bio available",
  }));
};
