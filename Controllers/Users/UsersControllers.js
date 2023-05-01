const DataModel = require('../../Models/Users/UsersModel')
const OTPModel = require('../../Models/Users/OTPModel')
const UserCreateServices = require('../../Services/User/UserCreateServices')
const UserLoginServices = require('../../Services/User/UserLoginServices')
const UserUpdateServices = require('../../Services/User/UserUpdateServices')
const UserDetailsServices = require('../../Services/User/UserDetailsServices')
const UserVerifyEmailServices = require('../../Services/User/UserVerifyEmailServices')
const UserVerifyOtpServices = require('../../Services/User/UserVerifyOtpServices')
const UserResetPassServices = require('../../Services/User/UserResetPassServices')
// REGISTRATION API 
exports.Registration = async(req,res) =>{
    let Result = await UserCreateServices(req,DataModel)
    res.status(200).json(Result)
}

// LOGIN API 
exports.Login = async(req,res) =>{
    let Result = await UserLoginServices(req,DataModel)
    res.status(200).json(Result)
}

// UPDATE API 
exports.ProfileUpdate = async(req,res) =>{
    let Result = await UserUpdateServices(req,DataModel)
    res.status(200).json(Result)
}

// DETAILS API 
exports.ProfileDetails = async(req,res) =>{
    let Result = await UserDetailsServices(req,DataModel)
    res.status(200).json(Result)
}

// RECOVER VERIFY EMAIL API 
exports.RecoverVerifyEmail = async(req,res) =>{
    let Result = await UserVerifyEmailServices(req , DataModel)
    res.status(200).json(Result)
}

// RECOVER VERIFY OTP API  
exports.RecoverVerifyOTP = async(req,res) =>{
    let Result = await UserVerifyOtpServices(req,OTPModel)
    res.status(200).json(Result)
}

// RECOVER RESET PASSWORD API 
exports.RecoverResetPass = async(req,res) =>{
    let Result = await UserResetPassServices(req,DataModel)
    res.status(200).json(Result)
}




