import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

export default function HomeButton() {
  return (
    <Router>
        <div className="home-btn">
            <Link to="/">Strona Główna</Link>
        </div>
    </Router>
  )
}
