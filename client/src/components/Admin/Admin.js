import React from 'react';
import "./Admin.css"
import { useDispatch } from 'react-redux/es/exports';
import { adminData } from '../../Redux/AdminSlice';

const Admin = () => {
    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        const productUrl = e.target.elements[0].value;
        const productName = e.target.elements[1].value;
        const productPrice = e.target.elements[2].value;
        dispatch(adminData({productName,productPrice,productUrl}));
        e.target.elements[0].value = "";
        e.target.elements[1].value = "";
        e.target.elements[2].value = "";
    }
    return (
        <div className='form-container'>
            {
                <form className='form-data' onSubmit={handleSubmit}>
                    <label htmlFor="inp-1">Image Url</label>
                    <input type="text" id='inp-1' placeholder='Enter product image url' />
                    <label htmlFor="inp-2">Product Name</label>
                    <input type="text" id='inp-2' placeholder='Enter product name' />
                    <label htmlFor="inp-3">Product Price</label>
                    <input type="number" id='inp-3' placeholder='Enter product price' />
                    <button>Submit</button>
                </form>
            }
        </div>
    )
}

export default Admin
