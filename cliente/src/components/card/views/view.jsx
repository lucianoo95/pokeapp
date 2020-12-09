import {useEffect} from "react"
import {Card} from "../../../styles/containers";
import {MainPhoto} from "../../../styles/img";
import {mainPhotoAnimation, mainPhotoShadowAnimation} from "../animations";
import {Diamond, Shadow} from "../../../styles/effects"
const url= "https://www.cpokemon.com/pokes/pokemon-artwork/65.png"

const View=()=>{
    useEffect(() => {
        mainPhotoAnimation();
        mainPhotoShadowAnimation();
    }, [])
    
    return (
    <Card>
        <MainPhoto className="anime-card" src={url}/>
        <Diamond height="225px"></Diamond>
        <Shadow className="anime-shadow"></Shadow>
    </Card>
    )
}
export default View;