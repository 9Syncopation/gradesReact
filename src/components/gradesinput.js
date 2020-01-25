import React from 'react'
import './Gradesinput.css'


const initialState = {
    name: "",
    email: "",
    password: "",
    id: "",
    grade: "",
    weedType: "",
    nameError: "",
    emailError: "",
    passwordError: "",
    idError: "",
    gradeError: "",
}

class Gradesinput extends React.Component { 

    state = initialState
    
    handleChange = (event) => {
        // console.log(event.target.name);
        
        this.setState({ [event.target.name]: event.target.value })
        // console.log(event.target.name);
        
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const isValid = this.validate()
        if (isValid) {
            console.log('submit details', this.state);
            this.props.updateMainComponent(this.state)
            this.setState(initialState)
            }
    }
    
    validate = () => {
        let nameError = ""
        let emailError= ""
        let passwordError= ""
        let idError= ""
        let gradeError= ""
        
        if (!this.state.name) { nameError = "Name cannot be blank"; }
        // if (!this.state.email) { emailError = "Email cannot be blank"; }
        // if (!this.state.email.includes("@")) { emailError = " Email cannot be blank and must contain '@' sign" }
        if (!this.state.password) {passwordError = "Must enter a password";}
        // if (!this.state.password.includes('!')) passwordError ="password must include '!' sign"

        // TODO how to validate a number
        //TODO how to validate 2 digits at the grade
        // if (this.state.id.includes('A')) idError ="Id cannot include letters"
        // if (this.state.grade.includes('A')) gradeError ="grade cannot include letters"
        
        if (nameError || emailError || passwordError || idError|| gradeError) {
            this.setState({ nameError, emailError, passwordError, gradeError })
            return false
        }

        return true
    }
    
    render() {
        // console.log('start state', this.state);
        return ( 
            <form onSubmit={this.handleSubmit} className = 'gradesinput'>
                <h1> Enter Student Details</h1>
                
                Name: <input 
                name="name"
                placeholder="Student Name"
                value={this.state.name}
                onChange={this.handleChange}
                // onChange={event => { this.handleChange(event, "name") }}
                />
                <br />
                <div className = "errorInput">{this.state.nameError}</div>
                Email: <input
                    type="email"
                    placeholder="Email"
                    onChange={this.handleChange}
                />
                <br />
                <div className = "errorInput">{this.state.emailError}</div>

                Psword: <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleChange}
                />
                <br />
                <div className = "errorInput">{this.state.passwordError}</div>

                S.. N.  : <input
                    name="id"
                    type="Number"
                    placeholder="social Number"
                    onChange={this.handleChange}
                />
                <br />
                <div className = "errorInput">{this.state.idError}</div>

                Grade: <input
                    name="grade"
                    type="Number"
                    placeholder="History Grade"
                    onChange={this.handleChange}
                />
                <br />
                <div className = "errorInput">{this.state.gradeError}</div>

                
                Weed : <select
                        name= "weedType"
                        value={this.state.weedType}
                        onChange={this.handleChange} >
                        <option> Sativa</option>
                        <option> Indica</option>
                </select><br />
                <br />
                
                <button type="submit">Submit</button>
                
                
                <div> {this.state.state} </div>
               
            </form>
                )
            }
           
}



export default Gradesinput