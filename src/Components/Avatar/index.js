import { BigHead } from '@bigheads/core'

import { 
  AvatarContainer,
  AvatarWrapper,
  Status,
  AvatarLabel,
  AvatarText,
  GreetingText,
  CardTop,
  CardBottom,
} from './styled';

const Avatar = ({
  gender="m",
  status="none",
  accessory="none",
  body= gender === "m" ? "chest" : "breasts",
  circleColor="blue",
  clothing="shirt",
  clothingColor="black",
  eyebrows="serious",
  eyes="simple",
  facialHair="none",
  graphic="react",
  hair= gender === 'm' ? "short" : "long",
  hairColor="brown",
  hat="none",
  hatColor="green",
  lashes="false",
  lipColor="purple",
  mask="true",
  faceMask="true",
  faceMaskColor="white",
  mouth="open",
  skinTone="light"
}) => (
  <AvatarContainer status={status}>
    {console.log(status)}
    <CardTop>
      <AvatarWrapper status={status}>
        <Status status={status}/>   
        <BigHead
          accessory={accessory}
          body={body}
          circleColor={circleColor}
          clothing={clothing}
          clothingColor={clothingColor}
          eyebrows={eyebrows}
          eyes={eyes}
          facialHair={facialHair}
          graphic={graphic}
          hair={hair}
          hairColor={hairColor}
          hat={hat}
          hatColor={hatColor}
          lashes={lashes}
          lipColor={lipColor}
          mask={mask}
          faceMask={faceMask}
          faceMaskColor={faceMaskColor}
          mouth={mouth}
          skinTone={skinTone}
        />
      </AvatarWrapper>
    </CardTop>
    <CardBottom>
      <AvatarLabel status={status}>
        <AvatarText status={status}>
          Renato
        </AvatarText>
      </AvatarLabel>
      <GreetingText status={status}>
        Obrigado por me ouvir
      </GreetingText>
    </CardBottom>
  </AvatarContainer>
);

export default Avatar;

// status state:
// "active",
// "next",
// "none"