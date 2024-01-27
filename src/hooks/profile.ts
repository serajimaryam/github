import React, { useEffect, useState } from 'react';
import {getUser, User} from "../api/user";
import { getRepos , Repositoryes} from '../api/repos';

export function useProfile() {
const [user, setUser] = useState<User>();
const [repo, setrepo] = useState<Array<Repositoryes>>();

useEffect(() => {
    getUser().then((data) =>{
      setUser(data);
    });
  }, []);
  
  useEffect(() => {
    getRepos().then((data:any) =>{
      setrepo(data);
      console.log("repo" , repo)
    });
  }, []);

  return {
    user:user,
    repo:repo
  }
}

