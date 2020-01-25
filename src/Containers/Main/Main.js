import React from 'react'
import Gradesinput from '../../Components/Gradesinput'
import Userdetails from '../../Components/Userdetails'
import SearchBar from '../../Components/SearchBar'

import './Main.css'

class Main extends React.Component {

    state = {
        message: "no students assigned yet",
        // formInput: [
        //     { name: "" },
        //     {email: "1111111"},
        //     { password: "" },
        //     { id: "" },
        //     { grade: "" },
        //     { weedType: "" },
        //     { nameError: "" },
        //     { emailError: "" },
        //     { passwordError: "" },
        //     { idError: "" },
        //     { gradeError: "" }
        // ]
        formInput: {
            name: "",
            email: "111111",
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
    }

    showInputs = (childstate) => {
        console.log('childstate', childstate);

        let oldstate = this.state
        let newstate = childstate
        console.log('old state', oldstate);
        console.log('new state', newstate);

        this.setState({ formInput: newstate })
        
        // this.setState((prevState) => {
        //     return { formInput: prevState.childstate }

        // })
        
        console.log('parent message', this.state);
    }

    render() { 
    
        return ( 
            <div >
                <div>
                <SearchBar></SearchBar>
                </div>
                <div className='main'>
                <Gradesinput updateMainComponent = {this.showInputs}/>
                    <Userdetails parentState={JSON.stringify(this.state.formInput)} />

                
                </div>
                </div>
            
    
        )
        
    
    }
}


        
        

export default Main
        
