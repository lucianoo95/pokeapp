import {Card} from "../../../styles/containers/";
import {MainPhoto} from "../../../styles/img";
import {mainPhotoAnimation} from "../animations"
const url= "https://www.cpokemon.com/pokes/pokemon-artwork/130.png"

const View=()=>{
    mainPhotoAnimation();
    return (
    <Card>
        <MainPhoto className="anime-card" src={url}/>
    </Card>
    )
}
export default View;