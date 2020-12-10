import {useEffect} from "react"
import {Card} from "../../../styles/containers";
import {MainPhoto} from "../../../styles/img";
import {mainPhotoAnimation, mainPhotoShadowAnimation, mainPhotoInAnimation, mainShadowInAnimation, mainTitleAnimation,cardHoverAnimation, cardNotHoverAnimation } from "../animations";
import {Diamond, Shadow} from "../../../styles/effects"
import {Title} from "../../../styles/text"
import {Bubbles} from "../../../styles/effects/particles";


const url= "https://www.cpokemon.com/pokes/pokemon-artwork/131.png"

const View=({isHover, setIshover})=>{
    useEffect(() => {
        mainPhotoInAnimation(mainPhotoAnimation);
        mainShadowInAnimation(mainPhotoShadowAnimation);
        mainTitleAnimation();
    }, [])   
    const handleHoverIn = () => {
    cardHoverAnimation();
    setIshover(true);
  };
  const handleHoverOut = () => {  
    cardNotHoverAnimation();
    setIshover(false);
  }; 
    return (
    <Card className="anime-cardContainer" onPointerEnter={handleHoverIn} onPointerLeave={handleHoverOut}>
        <MainPhoto className="anime-card" src={url}/>
        <Diamond height="225px">
            {isHover?<Bubbles height="225px"/>:<></>}
        </Diamond>
        <Shadow className="anime-shadow"></Shadow>
        <Title className="anime-title">Lapras</Title>
    </Card>
    )
}
export default View;