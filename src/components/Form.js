import { getByPlaceholderText } from '@testing-library/react';
import React, { useState } from  'react';
    
    
const Form = (props) => {

    // const [Username, setUsername] = useState("");

    const [Firstname, setFirstname] = useState("");

    const [Lastname, setLastname] = useState("");

    const [Email, setEmail] = useState("");

    const [Password, setPassword] = useState("");

    const [Confirmpassword, setConfirmPassword] = useState("");

//     const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

    
//     const createUser = (e) => {

//         e.preventDefault();

//         const newUser = { username, email, password };

//         console.log("Welcome", newUser);

//         setHasBeenSubmitted( true );
//     };


//     const formMessage = () => {

//         if( hasBeenSubmitted ) {

// 	    return "Thank you for submitting the form!";

// 	} else {

// 	    return "Welcome, please submit the form";

// 	}
//     };
    
    return (

        <>
        {/* onSubmit={ createUser } */}
        <form                            >

            {/* <h3>{ formMessage() }</h3> */}

            

	{/*     <div>
                <label>Username: </label> 

                <input type="text" onChange={ (e) => setUsername(e.target.value) } />

            </div> */}


             <div>
                <label>First Name: </label> 

                <input type="text" onChange={ (e) => setFirstname(e.target.value) } value= {Firstname}  />

                {

                            Firstname.length<2 && Firstname.length >0?

                            <p className= "text-danger">First Name must be at least 2 character</p>

                            : <p>  </p>
                    }

            </div>


            <div>
                <label>Last Name: </label> 

                <input type="text" onChange={ (e) => setLastname(e.target.value) } value= {Lastname} />

                                    {

                    Lastname.length<2 && Lastname.length >0?

                    <p className= "text-danger">Last Name must be at least 2 character</p>

                    : <p>  </p>
                    
                    }


            </div>









            <div>
                <label>Email Address: </label> 

                <input type="text" onChange={ (e) => setEmail(e.target.value) } value= {Email} />

                {

                    Email.length<2 && Email.length >0?

                    <p className= "text-danger">Email must be at least 2 character</p>

                    : <p>  </p>
                    
                    }





            </div>



            <div>
                <label>Password: </label>

                <input type="text" onChange={ (e) => setPassword(e.target.value) }  value= {Password} />


                    {

                    Password.length<8 && Password.length >0?

                    <p className= "text-danger">Password must be at least 8 character</p>

                    : <p>  </p>
                    
                    }


            </div>


            <div>
                <label>Confirm Password: </label>

                <input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } value= {Confirmpassword}  />



                    
                    {

                    Confirmpassword.length<8 && Confirmpassword.length >0?

                    <p className= "text-danger">Password must be at least 8 character
                    
                    <br></br>

                    Password Must Match
                    
                    
                    </p>


                    : <p>  </p> 
                    }



            </div>

            {/* <input type="submit" value="Create User" /> */}

        </form>






                    <div>


                        <p>First Name: {Firstname} </p>

                        <p>Last Name: {Lastname} </p>

                        <p>Email Address: {Email} </p>

                        <p>Password: {Password} </p>

                        <p>Confirm Password : {Confirmpassword} </p>

                    </div>

</>


    );
};
    
export default Form;
