import React from 'react';
import './App.css';


function Project(project) {
    return (
        <div className="mh3">
            <div className="fl w-50-ns w-100-m pa2">
                <article className="border-bso">
                    <div class="border-project-bottom dt w-100 mt1 mv0 pv2 ph3">
                        <div class="dtc">
                            <h1 class="f5 f4-ns mv0">{project.name}</h1>
                        </div>
                        <div class="dtc tr">
                            <h2 class="f5 mv0">$1,000</h2>
                        </div>
                    </div>
                    <div class="pa3 h4">
                        <p class="f6 f5-ns lh-copy measure mv0">Final da Sprint: {project.endSprint}</p>
                        <p class="f6 f5-ns lh-copy measure mv0">Início: {project.startProject}</p>
                        <p class="f6 f5-ns lh-copy measure mv0">Membros: {project.members.length}</p>
                        {project.members.map(m => (
                            <img src="http://tachyons.io/img/avatar_1.jpg" class="br-100 h2 w2 dib mr2" title="Photo of a kitty staring at you"></img>
                        ))}
                    </div>
                </article>
            </div>
        </div>
    );
}

export default Project;