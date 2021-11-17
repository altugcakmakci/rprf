import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import projects from './Projects.js';
import proficiencies from './Proficiencies.js';

const App = () => <PortfolioContainer projects={projects} proficiencies={proficiencies}/>;

export default App;
