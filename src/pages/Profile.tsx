
import { useProfile } from '../hooks/profile';
import { Map } from 'typescript';
import GitHubCalendar from "react-github-calendar";



export function Profile() {

  
  interface repo{
    map : "map"
  }

   const {user,repo}=useProfile()
   

  const profile_picture = user?.avatar_url;
  const name = user?.name;
  const bio = user?.bio;

  return (
    <div className="profile">
      <header className="nav">
        <div className="nav-left">
          <a href="#">
            <svg
              height="32"
              aria-hidden="true"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="octicon octicon-mark-github v-align-middle color-fg-default"
            >
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
            </svg>
          </a>
          <a href="#">Product</a>
          <a href="#">Solutions</a>
          <a href="#">Open Source</a>
        </div>
        <div className="nav-right">
          <div className="search-input">
            <input type="text" placeholder="search..." />
          </div>
            <a href="/" className="button">Sign In</a>
            <a href="/" className="button outlined">Sign Up</a>
        </div>
      </header>
      <div className="main">
        <div className="sidebar">
          <div className="profile-picture">
            <img src={profile_picture}  alt="" />
          </div>
          <div className="info">
            <div className="name">{name}</div>
            <div className="username">serajimaryam</div>
          </div>
          <div className="actions">
            <button>Follow</button>
          </div>
          <div className="bio">
            {bio}
          </div>
          <div className="subscribers">
            <a href="#">{user?.followers} followers</a>
            <a href="#">{} following</a>
          </div>
          <div className="links">
            <a href="#">not linked</a>
          </div>
        </div>
        <div className="activity">
          <div className="pinned-repositories">
            <h3>Pinned Repositoriy</h3>
            <div className="repositories">    
            {
             (repo)?.map((item,index)=>{
               if (index<6) {
                return (
                  <div className="repository">
                     <div className="sub-rep">
                       <div className="title">
                      {item.name}
                       </div>
                    <div className="description">{item.visibility}</div>
                    </div>
                      <div className="repo-info">
                         <div>{item!.language}</div>
                         <div> </div>
                         {/* <div>{item.forks_count} fork</div> */}
                       </div>
            
                    </div>
               )}})}
                   </div>
          </div>
        </div>
      </div>
      <div  className="flex justify-center border py-2 graph-before-activity-overview">
      { <GitHubCalendar username={"serajimaryam"} /> }
      </div>
    </div>
  );
}

