import { useEffect, useState } from "react";
import Card from "./Card";

export default function Homepage(){
    const [petInfo,setPetInfo] = useState([]);
    useEffect(()=>{
        fetch("https://openapi.programming-hero.com/api/peddy/pets")
        .then(res => res.json())
        .then(data => setPetInfo(data.pets))
    },[]);
    return(

        <main className="w-10/12 mx-auto py-12">
            <div className="grid grid-cols-4 gap-6">
                {petInfo.map(petinfo => <Card pet ={petinfo}></Card>)}
            </div>
        </main>
    )

}