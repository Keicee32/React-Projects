// This renders html on the browser
// ReactDOM.render(<h1>Hello World!</h1>, document.getElementById('root'))

// using components
// function Nav() {
//     return (
//         <div className="navbar">
//             <ul className='main-nav'>
//                 <li>List 1</li>
//             </ul>
//         </div>
//     )
// }

// ReactDOM.render(
//     <Nav />,
//     document.getElementById('root')
// )


// Plain React
const pages = (
    <div>
        <div className="header">
            <div className="logo-div">
                <img src="./React-icon.svg.png" width="40px"/>
                <p>ReactFacts</p>
            </div>
            <div className="other-div">
                <p>React Course - Project 1</p>
            </div>
        </div>
        <section className="main">
            <h1 className="white-heading">Fun facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </section>
    </div>
)

ReactDOM.render(pages, document.getElementById("root"))