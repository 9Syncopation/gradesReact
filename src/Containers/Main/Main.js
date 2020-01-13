import React from 'react'
import Gradesinput from '../../components/gradesinput.js'
import Userdetails from '../../components/userdetails'
import SearchBar from '../../components/SearchBar'

import './main.css'

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
        
