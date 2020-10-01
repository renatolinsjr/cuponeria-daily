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
      return "140px";
    default:
      return "70px";
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

const handleDisplayType = (status) => {
  switch (status) {
    case "none":
      return 'none';
    default:
      return 'block';
  }
};

const handleStatusSizeType = (status) => {
  switch (status) {
    case "active":
      return '46px';
    default:
      return '36px';
  }
};

const handleLabelSizeType = (status) => {
  switch (status) {
    case "none":
      return '25px';
    default:
      return '50px';
  }
};

const handleAvatarLabelPosition = (status) => {
  switch (status) {
    case "none":
      return '-3px';
    default:
      return '-28px';
  }
};

const handleFontSizeType = (status) => {
  switch (status) {
    case "none":
      return '16px';
    default:
      return '18px';
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

export const AvatarWrapper = styled.div`
  height: 100%;
  width: ${({status}) => handleDesktopAvatarSize(status)};
  position: relative;

  @media (max-width: 768px) {
    width: ${({status}) => handleMobileAvatarSize(status)};
  }
`;

export const Status = styled.div`
  display: ${({status}) => handleDisplayType(status)};
  width: ${({status}) => handleStatusSizeType(status)};
  height: ${({status}) => handleStatusSizeType(status)};
  background-color: ${({status, theme}) => handleColorType(status, theme)};
  border-radius: 50%;
  position: absolute;
  right: 40px;
  top: 30px;
`;

export const AvatarLabel = styled.div`
  height: ${({status}) => handleLabelSizeType(status)};
  width: 150px;
  border-radius: 8px;
  background-color: ${({status, theme}) => handleColorType(status, theme)};
  position: absolute;
  bottom: ${({status}) => handleAvatarLabelPosition(status)};
  left: 25px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const AvatarText = styled.h2`
  color: ${({status, theme}) => handleFontColorType(status, theme)};
  font-size: ${({status}) => handleFontSizeType(status)};
  margin: 0;
  text-align: center;
`;

