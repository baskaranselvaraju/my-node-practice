import express from 'express';
import Room from '../../models/room.js';        

const getRoom = async (req, res) => {
    try {
        const rooms =  await Room.find({}); 
        if(rooms.length===0){
            return res.status(200).json({success:true,message:'No rooms found'});
        }
        res.status(200).json({success:true,message:'Room data received successfully',data:rooms});
    } catch(error){
        console.log('Error fetching rooms:', error);
        res.status(500).json({success:false,message:'Server error', error: error.message});

    }
};
export default getRoom;