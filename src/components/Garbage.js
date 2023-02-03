import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Garbage = () => {
  const [name, setName] = useState("Raj");
  const [age, setAge] = useState(99);
  return (
    <div>Garbage
        <div>
            <button
            onClick={async () => {
                const person = {name, age};
                const response = fetch("/properties_menu",{
                    method : ["POST"],
                    headers : {
                        "Content-Type" : "application/json"
                    },
                    body: JSON.stringify(person)
                });
                if(response.ok){
                    console.log("response worked!");
                }
            }}>
                click me
            </button>
        </div>
    </div>
  )
}
// const url = "/garbage";
//     useEffect(() => {
//         const fetchPromise = fetch("/properties_menu");
//         fetchPromise.then(response => {
//             return response.json();
//         }).then(e => {
//             console.log(e);
//         })
//     })

// my code
// const url = "/properties_menu";
    // useEffect(() => {
    //     fetch(url)
    //     .then(response => response.json())
    //     .then(json => {
    //         console.log(json);
    //     })
    // },[])