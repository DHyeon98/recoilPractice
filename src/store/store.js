import { atom, selector } from "recoil";
import { fetchUserData} from "../apis/apiShared";
import { folderUserData } from "../apis/apiFolder";

export const profileData = selector({
    key: "profile",
    get: async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/sample/folder`);
            if (response.ok) {
                const body = await response.json();
                return body.folder;
            }
        } catch (error) {
            console.error(error);
        }
        return null;
    }
});

export const userData = atom({
    key: "user",
    default: fetchUserData(),
})

export const folderUser = atom({
    key: "folderUser",
    default: folderUserData(),
})

