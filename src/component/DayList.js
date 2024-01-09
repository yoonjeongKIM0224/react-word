import { Link } from "react-router-dom"
import dummy from "../db/data.json"

export default function DayList(){
    return <>
        <ul className="list_day">
            {dummy.days.map((item) => (
                <li key={item.id}>
                    <Link to={"/day/" + item.id}>Day {item.day}</Link>
                </li>
            ))}
        </ul>
    </>
}