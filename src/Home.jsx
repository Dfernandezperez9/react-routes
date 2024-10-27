import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
    return (
        <>
            <h1>Home</h1>
            <p>Welcome to my portfolio</p>

            <Link to="/projects">Projects</Link>
            <Link to="/resume">Resume</Link>
        </>
    );
}

export default Home;