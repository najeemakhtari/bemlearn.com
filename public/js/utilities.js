'use strict'


///// admin login
const adminLogin = async (userName, password)=>{
    const req = await fetch(`https://ben-ecommerce.dvlpr78.ir/api/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({
            'email': userName,
            'password': password
        })
        
    })
    const res = await req.json()
    return res
   
}
///// marketer login
const marketerLogin = async (userName, password)=>{
    const req = await fetch(`https://ben-ecommerce.dvlpr78.ir/api/marketer/auth/login`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },
        body:JSON.stringify({
            'whatsapp_phone_number': userName,
            'password': password
        })
        
    })
    const res = await req.json()
    console.log(res)
    return res
   
}



//// add new affiliate marketer
const addMarketer = async (affiliateUserData , token)=>{
    const req = await fetch(`https://ben-ecommerce.dvlpr78.ir/api/admin/marketers`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
        body:JSON.stringify(affiliateUserData)
    })
    const res = req.json()
    return res
}


//// get all marketers
const getAllMarketers = async (token) =>{
    const req = await fetch(`https://ben-ecommerce.dvlpr78.ir/api/admin/marketers`, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    })
    const res = await req.json()
    return res
}


//// edit marketer 
const editMarketer = async (affiliateUpdatedData, id, token)=>{
    const req = await fetch(`https://ben-ecommerce.dvlpr78.ir/api/admin/marketers/${id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
        body:JSON.stringify(affiliateUpdatedData)
    })
    const res = req.json()
    return res

}

/// get all admins 
const getAllAdmin = async (token)=>{
    const req = await fetch(`https://ben-ecommerce.dvlpr78.ir/api/admin/admins`, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
    })
    const res = await req.json()
    return res
}

//// add new admin
const addNewAdmin = async (newAdminData, token)=>{
    const req = await fetch(`https://ben-ecommerce.dvlpr78.ir/api/admin/admins`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
        body:JSON.stringify(newAdminData)
    })
    const res = req.json()
    return res
}

//// get all orders
const getOrders = async(token)=>{
    const req = await fetch(`https://ben-ecommerce.dvlpr78.ir/api/admin/orders`,{
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         }
    })
    const res = await req.json()
    return res
}

/// get all products 
const getProducts = async (token)=>{
    const req = await fetch(`https://ben-ecommerce.dvlpr78.ir/api/admin/products`, {
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         }
    })
   const res = await req.json()
   return res
}

//// add new product
const addNewProduct = async (newProductData, token)=>{
const req = await fetch(`https://ben-ecommerce.dvlpr78.ir/api/admin/products`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            'Authorization': `Bearer ${token}`
         },
        body:JSON.stringify(newProductData)
    })

    const res = await req.json()
    return res
}

    

export{adminLogin, marketerLogin, addMarketer, getAllMarketers, editMarketer, getAllAdmin, addNewAdmin, getOrders, getProducts, addNewProduct}