import styled from 'styled-components';


const handleDesktopAvatarSize = (status) => {
  switch (status) {
    case "active":
      return "260px";
    default:
      return "200px";
  }
};

const handleMobileAvatarSize = (status) => {
  switch (status) {
    case "active":
      return "260px";
    case "next":
      return "85px";
    default:
      return "45px";
  }
};

const handleColorType = (status, theme) => {
  switch (status) {
    case "active":
      return theme.colors.green;
    case "next":
      return theme.colors.yellow;
    default:
      return theme.colors.grey;
  }
};

const handleStatusDisplayType = (status) => {
  switch (status) {
    case "":
      return "none";
    case "done":
      return "none";
    default:
      return "block";
  }
};

const handleStatusDesktopSize = (status) => {
  switch (status) {
    case "active":
      return "46px";
    default:
      return "36px";
  }
};

const handleStatusMobileSize = (status) => {
  switch (status) {
    case "active":
      return "46px";
    default:
      return "16px";
  }
};

const handleLabelDesktopPosition = (status) => {
  switch (status) {
    case "active":
      return '-27px';
    default:
      return '-20px';
  }
};

const handleLabelSizeType = (status) => {
  switch (status) {
    case "active":
      return '50px';
    case "next":
      return '50px';
    default:
      return '25px';
  }
};

const handleFontSizeType = (status) => {
  switch (status) {
    case "active":
      return '18px';
    case "next":
      return '18px';
    default:
      return "16px";
  }
};

const handleFontColorType = (status, theme) => {
  switch (status) {
    case "next":
      return theme.colors.black;
    default:
      return theme.colors.white;
  }
};

const handleFilterAvatar = (status) => {
  switch (status) {
    case "done":
      return "grayscale(100%)";
    default:
      return "none";
  }
}

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-width: 290px;
  height: 100%;

  @media (max-width: 768px) {
    border: ${({theme, status}) => status === "next" ?
      `2px solid ${theme.colors.yellow}` :
      status === "" || status === "done" ? `2px solid ${theme.colors.grey}` :
      "none"
    };
    border-radius: 8px;
    height: ${({status}) => status === "next" ?
      "105px" :
      status === "" || status === "done" ? "55px" :
      "100%"
    };
    width: 100%;
    max-width: 500px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 16px 0 0;
    margin: 0 auto;
    &:first-child {
      justify-content: center;
      flex-direction: column;
      padding: 0;
    }
  }
`;

export const AvatarWrapper = styled.div`
  height: ${({status}) => handleDesktopAvatarSize(status)};
  width: ${({status}) => handleDesktopAvatarSize(status)};
  min-width: ${({status}) => handleDesktopAvatarSize(status)};
  position: relative;
  filter: ${({status}) => handleFilterAvatar(status)};

  @media (max-width: 768px) {
    width: ${({status}) => handleMobileAvatarSize(status)};
    min-width: ${({status}) => handleMobileAvatarSize(status)};
    height: 100%;
    &:not(:first-child) {
      align-self: baseline;
    }
  }
`;

export const Status = styled.div`
  display: ${({status}) => handleStatusDisplayType(status)};
  width: ${({status}) => handleStatusDesktopSize(status)};
  height: ${({status}) => handleStatusDesktopSize(status)};
  background-color: ${({status, theme}) => handleColorType(status, theme)};
  border-radius: 50%;
  position: absolute;
  right: ${({status}) => status === "active" ? "60px" : "40px"};
  top: ${({status}) => status === "active" ? "40px" : "30px"};
  box-shadow: -1px 1px 2px 0px #000;

  @media (max-width: 768px) {
    width: ${({status}) => handleStatusMobileSize(status)};
    height: ${({status}) => handleStatusMobileSize(status)};
    right: ${({status}) => status === "active" ? "60px" : "22px"};
    top: ${({status}) => status === "active" ? "40px" : "14px"};
  }
`;

export const AvatarLabel = styled.div`
  height: ${({status}) => handleLabelSizeType(status)};
  width: fit-content;
  max-width: 200px;
  min-width: 130px;
  border-radius: 8px;
  background-color: ${({status, theme}) => handleColorType(status, theme)};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${({status}) => `${handleLabelDesktopPosition(status)} auto 0`};
  padding: 8px 16px;
  z-index: 1;

  @media (max-width: 768px) {
    margin: 0 auto;
  }
`;

export const AvatarText = styled.h2`
  color: ${({status, theme}) => handleFontColorType(status, theme)};
  font-size: ${({status}) => handleFontSizeType(status)};
  margin: 0;
  text-align: center;
`;

export const GreetingText = styled.p`
  display: ${({status}) => status !== "done" ? "none" : "block"};
  color: ${({theme}) => theme.colors.grey};
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  text-align: center;
  @media(max-width: 768px) {
    font-size: 13px;
  }
`;

export const CardTop = styled.div`
  width: fit-content;
  height: fit-content;
`;

export const CardBottom = styled.div`
  width: fit-content;
  height: fit-content;
  max-width: 200px;
  min-width: 130px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
