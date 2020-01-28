import React from 'react'
import './Userdetails.css'


class userdetails extends React.Component {
    constructor(props) {
        super(props)        
        this.state =
        {
            tableDetails: [
                {
                name: "",
                email: "111111",
                password: "2222",
                id: "3333",
                grade: "4444",
                weedType: "",
                nameError: "",
                emailError: "",
                passwordError: "",
                idError: "",
                gradeError: "",
            },
            {
                name: "",
                email: "22222",
                password: "5555",
                id: "66666",
                grade: "99999",
                weedType: "",
                nameError: "",
                emailError: "",
                passwordError: "",
                idError: "",
                gradeError: "",
            },
            ]
    }
    
    }
    
    updateState  () {
        // debugger
        
    }
    
    renderTableData() {
        let currData = JSON.parse(this.props.parentState)
        let {tableDetails} = this.state
        tableDetails.push(currData)
        // this.setState({tableDetails})
        console.log('table details', tableDetails);
        console.log('table state', this.state.tableDetails);
        return this.state.tableDetails.map((tableDetail, index) => {
            
            const { name, email, id, grade } = tableDetail
            return (
                <tr  key = {index}> 
                    <td> {name} </td>
                    <td> {email} </td>
                    <td> {id} </td>
                    <td> {grade} </td>
                </tr >
            )}
        
        )
    }

    render() {
        return (

            <div className='userdetails'>
                <h1>
                    Student Grades Sheet
                    </h1>
                {this.props.parentState}
                <br/>
                <table className = 'tableBody'>
                    <tbody >
                        
                    {this.renderTableData()}
                    </tbody>
                </table>
                
                
                    
            
            </div>
        )
    }
    
}


export default userdetails