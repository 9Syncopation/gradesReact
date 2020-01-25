import React from 'react'
import './Userdetails.css'


class userdetails extends  React.Component {

    render() {
        return (

            <div className='userdetails'>
                <h1>
                    Student Grades Sheet
                    </h1>
                    {this.props.parentState}
                    
            
            </div>
        )
    }
    
}


export default userdetails