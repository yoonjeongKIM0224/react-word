import dummy from "../db/data.json"

export default function Day(){
    //dummy.words
    const day = 4;
    const wordList = dummy.words.filter(word => word.day === day);

    return <>
        <h2>Day {day}</h2>
        <table>
            <tbody>
                {wordList.map((item) => (
                    <tr key={item.id}>
                        <td>{item.kor}</td>
                        <td>{item.eng}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </>
}