import {Octokit} from "octokit";
const my_token="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";
const octokit = new Octokit({
  auth:my_token
});
async function getRequest(){

const{
    data:{login},
      } = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s",login);
// const data = await octokit.request("GET /users/{username}/repos" , {
//   username: "serajimaryam",
//   headers: {
//     'X-gitHub-Api-Version': '2022-11-28'
  // }
// });
return data;
console.log(data)
}