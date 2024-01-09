import dummy from "../db/data.json"

export default function DayList(){
    console.log(dummy)
    return <>
        <ul className="list_day">
            {dummy.days.map((item) => (
                <li key={item.id}>Day {item.day}</li>
            ))}
        </ul>
    </>
}