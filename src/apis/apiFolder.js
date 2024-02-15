export async function folderUserData () {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/users/1`);
        if (response.ok) {
            const userProfileData = await response.json();
            return userProfileData;
        }
    } catch (error) {
        console.error(error);
    }
};