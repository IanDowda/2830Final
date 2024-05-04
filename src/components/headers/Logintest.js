import React, { useState } from 'react';
///https://www.robinwieruch.de/react-button/
const Logintest = ({OnLogin}) => {
    const [Username, setUserName] = useState()
    const [Pwd, setPwd] = useState()
    const [loggedin, setloggedin] = useState(false);
    const [error, seterror] = useState('');
    const Logout = () => {
        setloggedin(false);
        setUserName("")
        setPwd("")
    }
    

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:3001/login`, {
            method: 'Post',
            headers:{
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({username: Username, password: Pwd})
        })      //https://stackoverflow.com/questions/44996357/react-fetch-post-request and https://www.freecodecamp.org/news/how-to-fetch-data-from-an-api-using-the-fetch-api-in-javascript/#:~:text=Basic%20Syntax%20of%20the%20Fetch%20API&text=Here's%20a%20simple%20example%20of,json())%20.
        .then(reponse => {
            if (reponse.ok){
                return reponse.json();
            }
            throw new error("Server ain't connected")
        })
        .then(data => {
            console.log(data);
            if (data.success) {
                setloggedin(true);
                seterror('');
                OnLogin(true);
            } else{
                throw new error("Not able to login")
            }
        })
        .catch(error => {
            console.error(error);
            seterror(error.message);
            setloggedin(false);
            OnLogin(false)
        });


        
        if (loggedin) {
            return(
                <div>
                    <button type='button' onClick={Logout}></button>
                </div>
            )
        }

        console.log(`Username submitted, ${Username}`);
        console.log(`Password submitted, ${Pwd}`);
        alert(`Username and Password submitted logging in, ${Username}`);
    }
    return(
        <header>
            <h1>Login</h1> 
            {loggedin ? (       // logged in ? works by having the first statement only work when being true
                <div>           
                    <button type='button' onClick={Logout}>Logout</button>
                </div>
            ) : (       //which is the logout button and it works because loggedin starts off as false
                <main>
                    <form onSubmit={handleSubmit}>
                        UserName<input onChange={(e) => setUserName(e.target.value)} value={Username}></input><br></br>
                        Password <input onChange={(e) => setPwd(e.target.value)} value={Pwd}></input><br></br>
                        <button type='submit'>Login</button>
                    </form>
                </main>
            )}
        </header>
    )

}

export default Logintest