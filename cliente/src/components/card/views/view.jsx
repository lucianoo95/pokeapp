import {useEffect} from "react"
import {Card, GenericContainer} from "../../../styles/containers";
import {MainPhoto} from "../../../styles/img";
import {mainPhotoAnimation, mainPhotoShadowAnimation, mainPhotoInAnimation, mainShadowInAnimation, mainTitleAnimation,cardHoverAnimation, cardNotHoverAnimation, cardFlipAnimation, buttonsInAnimation } from "../animations";
import {Diamond, Shadow} from "../../../styles/effects"
import {Title, Ability} from "../../../styles/text"
import {Bubbles} from "../../../styles/effects/particles";
import {TransparentButton, ImgButton} from "../../../styles/buttons"
import SideB from "./sideB";
 
const url= "https://www.cpokemon.com/pokes/pokemon-artwork/131.png"
const abilities=[
    {name:"Water-absorb"},
    {name:"Shell-armour"},
    {name:"Hydration"},
]
const src="https://www.cpokemon.com/pokes/swsh/sprites/items/4.png"

const View=({isHover, setIshover, side, setSide})=>{
    useEffect(() => {
        mainPhotoInAnimation(mainPhotoAnimation);
        mainShadowInAnimation(mainPhotoShadowAnimation);
        mainTitleAnimation();
        buttonsInAnimation();
    }, [])   
    const handleHoverIn = () => {
    cardHoverAnimation();
    setIshover(true);
  };
  const handleHoverOut = () => {  
    cardNotHoverAnimation();
    setIshover(false);
  };
  const changeSide = () => {
    cardFlipAnimation();
    setSide(!side);
  };
   return (
    <Card className="anime-cardContainer" onPointerEnter={handleHoverIn} onPointerLeave={handleHoverOut}>
        {side?
        <Card>
        <MainPhoto className="anime-card" src={url}/>
        <Diamond height="225px">
            {isHover?<Bubbles height="225px"/>:<></>}
        </Diamond>
        <Shadow className="anime-shadow"></Shadow>
        <Title className="anime-title" mgTop="25px">Lapras</Title>
        <GenericContainer>
        {abilities.map((e,i)=>{
            return (
                <Ability className="anime-title" key={`ability_${i}`}>{e.name}</Ability>
                )
        })}
        </GenericContainer>
        <GenericContainer>
        <ImgButton className="anime-button"  src={src}/>
        <Title className="anime-title">|</Title>
        <TransparentButton className="anime-button"  onClick={changeSide}>stats</TransparentButton>
        </GenericContainer>
        </Card>
        :
        <Card>
            <SideB/>
        </Card>
        }
    </Card>
    )} 
export default View;