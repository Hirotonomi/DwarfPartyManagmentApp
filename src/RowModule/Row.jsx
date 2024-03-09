import dwarf from '../assets/dwarf-paper-crafts.png'
import styles from './Row.module.css'
import PropTypes from 'prop-types'

function Row(props) {
    var g = "g"
    if (props.name == "Jyn Romper"){g=" grosze"}
    return (
        <div className={styles.row}>
            <img src={dwarf} className={styles.pfp}></img>
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