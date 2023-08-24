import React, { useEffect, useState } from "react"

export default function Form( { formData, handleChange, handleSkills, handleSubmit, clear } )
{



    return (
        <form className="enrollForm shadow w-100 my-3 rounded-4 card " >
            <h1 className="text-center m-2">Student Enrollment System</h1>

            <div className="d-flex m-2  " >
                <label style={ { width: "70px" } }>Name :</label>   <input type="text" name="name" value={ formData.name } onChange={ handleChange } className="" />
            </div>

            <div className="d-flex  m-2">
                <label style={ { width: "70px" } }>Email :</label>
                <span></span><input type="email" name="email" value={ formData.email } onChange={ handleChange } className="" />
            </div>

            <div className="d-flex m-2 ">
                <label>Website:&nbsp;</label>
                <input type="text" name="website" value={ formData.website } onChange={ handleChange } className="" />
            </div>

            <div className="d-flex m-2">
                <label>Image Link :</label>
                <input type="text" name="imageLink" value={ formData.imageLink } onChange={ handleChange } className="" />
            </div>

            <div className="d-flex">

                <label>Gender :
                    <input type="radio" name="gender" onChange={ handleChange } value="Male" className="m-3" /><label>Male</label>
                    <input type="radio" name="gender" onChange={ handleChange } value="Female" className="m-3" /><label>Female</label>
                </label>
            </div>
            <div>


                <label>Skills :
                    <input type="checkbox" name="skills" onChange={ handleSkills } value="HTML" className="skills m-3" /><label>HTML</label>
                    <input type="checkbox" name="skills" onChange={ handleSkills } value="CSS" className="skills m-3" /><label>CSS</label>
                    <input type="checkbox" name="skills" onChange={ handleSkills } value="Java" className="skills m-3" /><label>Java</label>
                </label>
            </div>
            <div className="d-flex justify-content-between">
                <button type="submit" onClick={ handleSubmit } className="btn btn-primary 
                 shadow w-25 m-4">Submit</button>
                <button type="submit" onClick={ clear } className="clear btn btn-danger
                 shadow w-25 m-4">Clear</button>
            </div>

        </form>
    )
}