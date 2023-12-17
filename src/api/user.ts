import { Octokit } from "octokit";
const token="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";
export interface User{
    avatar_url: string;
    name: string | null;
    company: string | null;
    blog: string | null;
    bio: string | null;
    followers: number;
    following: number;
}
async function getUser(): Promise<User> {
 
  const octokit = new Octokit({
    auth: token
  })
  
  const response = await octokit.request('GET /users/{username}', {
    username: "serajimaryam",
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
return response;
}
export {getUser};