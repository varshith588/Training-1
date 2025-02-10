import React, { useEffect, useState} from 'react';
const UseEffectEx = () => {
    // const [ count ,setCount] = useState(0);
    // useEffect(()=>{
    //     setTimeout(()=>{
    //         setCount(1000);
    //     },5000);

    //     document.title = count;
    // },[count])
    //! api fetching
    const [users, setUsers]= useState([]);
    console.log(users);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json().then(data=>{
            setUsers(data);
        }))    
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='paraent'>UseEffectEx
            {/* <h1>{count}</h1> */}
            {
                users.map((user , index)=>{
                    return(
                        <React.Fragment key={index}>
                            <h1>{user.name}</h1>
                            <h1>{user.email}</h1>
                        </React.Fragment>
                    )
                })
             }
             </div>
  )
}

export default UseEffectEx;