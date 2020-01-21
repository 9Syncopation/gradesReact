import React from 'react'
import Gradesinput from '../../Components/Gradesinput'
import Userdetails from '../../Components/Userdetails'
import SearchBar from '../../Components/SearchBar'

import './Main.css'

const main = (props) => (
    <div >
        <div>
        <SearchBar></SearchBar>
        </div>
        <div className='main'>
        <Gradesinput></Gradesinput>
        <Userdetails></Userdetails>
        
        </div>
        </div>
        )
        

export default main
        
