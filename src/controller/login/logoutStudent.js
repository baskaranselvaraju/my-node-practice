import express from 'express';
import Student from '../../models/student.js';

const logoutStudent = async (req, res) => {
    try {
        res.clearCookie('token',{
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
        });
        res.status(200).json({success:true,message:'Logout successful'});
    } catch(error){
        console.log('Error during logout:', error);
        res.status(500).json({success:false,message:'Server error', error: error.message});
    }
};
export default logoutStudent;