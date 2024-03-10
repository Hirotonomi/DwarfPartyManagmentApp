import dwarf from '../assets/dwarf-paper-crafts.png'
import styles from './Row.module.css'

function Row(props) {
    // funne easter egg
    var g = "g"
    if (props.name == "Jyn Romper"){g=" grosze"}
    // funkcjonalność związana z kursem
    function ImageClick(e){
        e.target.style.display = "none"
    }
    // co komponent zwraca
    return (
        <div className={styles.row}>
            {/* obrazek */}
            <img onClick={(e) => ImageClick(e)} src={dwarf} className={styles.pfp}></img>
            {/* info z tabeli */}
            <table className={styles.tableSection}>
                <tbody>
                    <tr>
                        <td>{props.name}</td>
                        <td>{props.DNDc}</td>
                        <td>{props.hp}hp</td>
                        <td>Bag</td>
                        <td className={styles.last}>{props.gold}{g} </td>
                    </tr>
                </tbody>
            </table>
            {/* przyciski */}
            <div className={styles.buttonSection}>
                <button>EQ</button>
                <button>DELETE</button>
            </div>
        </div>
    );
}
Row.defaultProps = {
    name: "Guest",
    DNDc: "meh",
    hp: 0,
    gold: 0,
};

export default Row