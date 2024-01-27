import { Octokit } from "octokit";
import { token } from "../constant";
export interface User{
    avatar_url: string ,
    name: string | null,
    company: string | null,
    blog: string | null,
    bio: string | null,
    followers: number,
    following: number
}
async function getUser(): Promise<User> {
 
  const octokit = new Octokit({
    auth: token,
  })
  
  const response = await octokit.request('GET /users/{username}', {
    username: "serajimaryam",
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  console.log("useeeeer",  response.data)
return response.data;
}
export {getUser};