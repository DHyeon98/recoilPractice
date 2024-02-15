import SharedSearch from "./SharedSearch";
import SharedContents from "./SharedContents";
import Header from "../../components/Header";
import UserTitle from "./UserTitle";

function Shared() {
    return(
        <>
            <Header fixed={true} userImg="profileImageSource"/>
            <UserTitle/>
            <main>
                <div className='container'>
                    <SharedSearch/>
                    <SharedContents/>
                </div>
            </main>
        </>
    )
}
export default Shared;