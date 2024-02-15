import './UserTitle.css';
import { useRecoilValue } from "recoil";
import { profileData } from "../../store/store";

function UserTitle() { 
    const profile = useRecoilValue(profileData);
    return(
        <article className="userTitle">
            <div>
                <div className="titleTop">
                    <img src={profile.owner.profileImageSource} alt='사용자 이미지'/>
                    <p>{profile.owner.name}</p>
                </div>
                <div className="titleBottom">
                    <h2>{profile.name}</h2>
                </div>
            </div>
        </article>
    )
}

export default UserTitle;