import React, { useState } from 'react'
import InformationList from '../../component/InformationList'
import './style.css'


function Information(props) {
    const [infor, setInfor] = useState('');
    const handleSubmit = (value) => {
        const newInfor = {
            name: value.name,
            level: value.level,
            address: value.address,
            check: value.check,
            date: value.date,
            radio: value.radio
        }

        const newInforList = [...infor, newInfor];
        setInfor(newInforList);
        console.log(newInforList)
    }


    return (
        <div className = "container">
            <InformationList onSubmit = {handleSubmit}/>
        </div>
    )
}

Information.propTypes = {

}

export default Information

