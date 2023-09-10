import React, {  useState } from 'react'
import axios from "axios"
const Contactss = () => {


    const [inputBook, setInputBook] = useState({
        name: ""
        , email: ""
        , phone: ""
        , message: ""
    })


    const inputHandler = (e) => {
        setInputBook({
            ...inputBook,
            [e.target.name]: e.target.value

        })
    }

    const submitHandler = async(e) => {
        e.preventDefault()
      console.log(inputBook)
        await axios.post("https://portfoliobackend-c73n.onrender.com", {
            name: inputBook.name
            , phone: inputBook.phone
            , message: inputBook.message,
            email: inputBook.email,
        }).then((res) => {

            setInputBook({
                 name: ""
                , phone: ""
                , message: "",
                  email: "",
            })
            alert("successFully Addded")
        }).catch((err)=>{
            console.log(err)
        })

    }



    return (


    <>
    <div className="container-fluid mt-5 about-style" id="aboutid">
    <div className="row">
        <div className="col-md-10 col-12 mx-auto">
            <h1 className="text-center main-heading">Contact Us</h1>
            <p className="text-center main-heading">We'll be happy to help you</p>
            <div className="row">
                <div className="col-md-6 col-12 hero-text ">

                    <form  onSubmit={submitHandler} >
                        <div className="form-group">
                            <label for="formGroupExampleInput">Name</label>
                            <input  value={inputBook.name} onChange={inputHandler} 
 type="text" className="form-control" id="formGroupExampleInput" placeholder="Enter Name" name="name"/>
                              
                        </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput2">Email</label>
                            <input  value={inputBook.email} onChange={inputHandler} 
 type="email" className="form-control" id="exampleInputEmail"
                                placeholder="Enter Email" name="email"/>
                        </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput2">Phone</label>
                            <input  value={inputBook.phone} onChange={inputHandler} 
  type="number" className="form-control" id="formGroupExampleInput2"
                                placeholder="Enter Phone" name="phone"/>
                        </div>
                        <div className="form-group">
                            <label for="formGroupExampleInput2">Message</label>
                            <input  value={inputBook.message} onChange={inputHandler} 
 type="text" className="form-control" id="formGroupExampleInput2"
                                placeholder="Enter Message" name="message"/>
                        </div>
                        <button type="submit" className="btn-style btn-primary">Submit</button>

                    </form>




                </div>
            </div>
        </div>
    </div>
</div>
    
    </>
  )
}

export default Contactss