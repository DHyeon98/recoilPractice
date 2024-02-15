import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { folderUserData } from "../../apis/apiFolder";

function Folder() {
    const [profileData, setProfileData] = useState([]);
    useEffect(() => {
        folderUserData(setProfileData);
    }, [])
    return(
        <>
            <Header profileData={profileData} userImg='image_source'/>
        </>
    )
}

export default Folder;