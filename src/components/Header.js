import './Header.css';
import styled from 'styled-components';
import { useRecoilValue } from "recoil";
import { userData } from "../store/store";
import { useEffect } from 'react';
import { getUser } from '../apis/apiShared';

const CommonHeader = styled.header`
    position: ${({fixed}) => fixed ? 'fixed' : 'static'};
`
function HeaderPrpfile({user, userImg}) {
    return(
        <>
            {
            user ? 
            <a className='profileText' href='https://www.naver.com/'>
                <img src={user[userImg]} alt='프로필 아이콘'/>{user.email}
            </a> 
            : 
            <a className='login' href="/signin">로그인</a>
            }
        </>
    )
}

function Header({fixed, userImg}) {
    const user = useRecoilValue(userData);
    return(
        <CommonHeader fixed={fixed ? 1 : 0}>
            <div>
                <h1>
                    <a style={{backgroundImage: `url(${process.env.PUBLIC_URL}/images/logo.png)`}} href="/">Linkbrary</a>
                </h1>
                <HeaderPrpfile user={user} userImg={userImg}/>
            </div>
        </CommonHeader>
    )
}

export default Header;