import { useState } from "react"
import './Categorylist.css';

export default function Categorylistitems({item}){
    const [open, setOpen] = useState(false)

    
    if(item.childrens){
        return (
        <>
            
            <div className={open ? "categorylist-item open" : "categorylist-item"}>
                <div className="categorylist-title">
                    <span>
                       {item.title}    
                    </span> 
                    <i className="bi-chevron-down toggle-btn" onClick={() => setOpen(!open)}></i>
                </div>
                <div className="categorylist-content">
                    { item.childrens.map((child, index) => <Categorylistitems key={index} item={child} />) }
                </div>
            </div>
            </>
        )
    }else{
        return (
            <a href={item.path || "#"} className="categorylist-item plain">
               {item.title}
            </a>
        )
    }
}
