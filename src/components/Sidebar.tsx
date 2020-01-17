import React from 'react';
import styled from '@emotion/styled'
//import  AccountLogout  from 'react-open-iconic-svg';

const SidebarContainer = styled.div`
    background:var(--sidebarBg);
	color: var(--sidebarText);
	height: 100vh;
	width: 220px;
	padding: 15px;
	//flex: 1 0 220px;
	display:flex;
	flex-direction: column;
    justify-content: space-between;
`;

export const Sidebar = (props) => {
    const playlists = ["test", "test2"];
    const logout = () => {
        console.log('logout');
    }
    return (
        <SidebarContainer>
            <div id="sidebar">
                <h1><span className="oi oi-fork"></span>CoLab</h1>
                <button title="Sign Out" onClick={logout} >logout</button>
                
                <h2>Playlists <span className="oi oi-circle-x" data-toggle="modal" data-target="#new-playist"></span></h2>
                <ul className="folders list-unstyled">
                    {playlists.map(p => {
                     return <li key={p}>{p}</li>
                    })
                    }
                </ul>
                
            </div>
            <div className="toolbar">
                {/* <app-media-player></app-media-player> */}
            </div>
        </SidebarContainer>
    )
}   