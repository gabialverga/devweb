import React from 'react';
import './App.css';
import logo from './img/bsoLogoWhite.png';

function Navbar() {
    return (
        <div>
            <nav className="db dt-l w-100 border-box pa3 ph5-l bg-navbar">
                <a className="db dtc-l v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#" title="Home">
                    <img src={logo} className="dib w3 h3 br-100" alt="Bora Se Organizar" />
                </a>
                <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                    <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Projetos">Projetos</a>
                    <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Colegas">Colegas</a>
                    <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Perfil">Perfil</a>
                    <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#" title="Logout">Logout</a>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;