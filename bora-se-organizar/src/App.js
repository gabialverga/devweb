import React, { useState } from 'react';
import Navbar from './navbar'
import Project from './project'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {

  const projects = [{
    name: "Projeto 01",
    endSprint: "23/03/2020",
    startProject: "01/01/2020",
    members: ["A", "B", "C", "D"]
  }, {
    name: "Projeto 02s asd adsa asd adsaksd apsd asd asd apsd asd asd apsd asd asd apsd asd asd apsd asd asd",
    endSprint: "30/03/2020",
    startProject: "01/01/2020",
    members: ["A", "B"]
  }, {
    name: "Projeto 01",
    endSprint: "12/04/2020",
    startProject: "01/01/2020",
    members: ["A"]
  }, {
    name: "Projeto 01",
    endSprint: "12/04/2020",
    startProject: "01/01/2020",
    members: ["A"]
  }, {
    name: "Projeto 01",
    endSprint: "12/04/2020",
    startProject: "01/01/2020",
    members: ["A"]
  }, {
    name: "Projeto 02s asd adsa asd adsaksd apsd asd asd",
    endSprint: "30/03/2020",
    startProject: "01/01/2020",
    members: ["A", "B"]
  }];

  return (
    <div>
      <Navbar></Navbar>
      <div class="tc mv4">
        <h1>Projetos</h1>
        {/* <FontAwesomeIcon icon={faCoffee} />
        <i class="fas fa-edit"></i>
        <i class="fa fa-pencil-square-o" aria-hidden="true"></i> */}
      </div>
      {projects.map(proj => (
        <Project name={proj.name}
          endSprint={proj.endSprint}
          startProject={proj.startProject}
          members={proj.members}></Project>
      ))}
    </div>
  );
}

export default App;
