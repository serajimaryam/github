import {Octokit, App} from "octokit";

const my_token="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";
const octokit = new Octokit({auth:my_token});
const{
    data:{login},
      } = await octokit.rest.users.getAuthenticated();
    console.log("Hello, %s",login);