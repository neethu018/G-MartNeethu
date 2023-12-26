import items from "../data/Category.json"
import Categorylistitems from "./Categorylistitems";
import './Categorylist.css';


export default function Categorylist(){
    return (
        <div className="categorylist">
          { items.map((item, index) => <Categorylistitems key={index} item={item} />) }
        </div>
    )
}