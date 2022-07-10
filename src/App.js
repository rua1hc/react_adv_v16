// import logo from "./logo.svg";
import "./App.css";

// import Movie from "./hoc/movie";
// import Counter from "./hooks/counter";
// import Users from "./hooks/Users";

// function App() {
//     return (
//         // <div className="App">
//         //   <header className="App-header">
//         //     <img src={logo} className="App-logo" alt="logo" />
//         //     <p>
//         //       Edit <code>src/App.js</code> and save to reload.
//         //     </p>
//         //     <a
//         //       className="App-link"
//         //       href="https://reactjs.org"
//         //       target="_blank"
//         //       rel="noopener noreferrer"
//         //     >
//         //       Learn React
//         //     </a>
//         //   </header>
//         // </div>
//         <div>
//             <Movie id={1} />
//             <Counter />
//             <Users />
//         </div>
//     );
// }
// export default App;

import React, { Component } from "react";

import { MoviePage } from "./context/MoviePage";
import UserContext from "./context/userContext";

export default class App extends Component {
    state = {
        currentUser: { name: "rua1hc" },
    };

    render() {
        return (
            <UserContext.Provider value={this.state.currentUser}>
                <div>
                    <MoviePage />
                </div>
            </UserContext.Provider>
        );
    }
}
