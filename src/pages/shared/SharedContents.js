import './SharedContents.css';
import { dateChange, timeChange } from '../../dateFunction';
import { useRecoilValue } from "recoil";
import { profileData } from "../../store/store";

function SharedContents() {
    const profile = useRecoilValue(profileData);
    return(
        <article>
            <ul>
                {
                    profile.links.map(({ id, title, imageSource, createdAt, url, description }) => {
                        return(
                            <li key={id}>
                                <a href={url} target='_blank' rel="noreferrer">
                                    <div className='imgBox'>
                                        <img src={imageSource ? imageSource : `${process.env.PUBLIC_URL}/images/noImage.jpg`} alt={title}/>
                                    </div>
                                    <div className='textBox'>
                                        <span>{timeChange(createdAt)}</span>
                                        <p className='description'>{description}</p>
                                        <p className='date'>{dateChange(createdAt)}</p>
                                    </div>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </article>
    )
}

export default SharedContents;