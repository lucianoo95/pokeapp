import {OneCharButton} from "../../../styles/buttons"
import {Card} from "../../../styles/containers/"
import SvgGraph from "./svgGraph"

const points='35.387,219 2.887,110.7525 65.387,2.5   190.3855,2.5 252.8855,110.7525 190.3855,219.005 '

const SideB=({changeSide})=>{
    return(
        <Card>
            <SvgGraph points={points} ></SvgGraph>
            <OneCharButton onClick={changeSide}>
            Back
            </OneCharButton>
        </Card>
    )
}
export default SideB;