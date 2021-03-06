import { css } from "aphrodite";
import styles from "./styles";
import { dataQcastersProfile,dataDavidJacob} from "fakeapi";
import { colors } from "@material-ui/core";

export const StyledImageCircle = (props) => {
  const { imgSrc, size, otherprops ,text, playButton, buttonEffect} = props
  return (
    <>
    
      <img
        src={imgSrc}
        alt={""}
        className={
          size === "small" ?
            css(styles.imgPopularSmall) :
            css(styles.imgPopularLarge)}
        {...otherprops}
      />
      {playButton == "small" &&
      <div className={css(styles.playButtonSmall)} onClick={buttonEffect}>▶</div>
      }
      {playButton == "large" &&
      <div className={css(styles.playButtonLarge)} onClick={buttonEffect}>▶</div>
      }
      <p className={css(styles.text)}>{text}</p>
    </>
  )
};

export const StyledImageCirclePlaylist = (props) => {
    const { imgSrc, otherprops ,text, playButton, buttonEffect} = props
    return (
        <>

            <img
                src={imgSrc}
                alt={""}
                className={css(styles.imgSmallPlaylist)}
                {...otherprops}
            />
            {playButton == "small" &&
            <div className={css(styles.playButtonSmall)} onClick={buttonEffect}>▶</div>
            }
            {playButton == "large" &&
            <div className={css(styles.playButtonLarge)} onClick={buttonEffect}>▶</div>
            }
            <p className={css(styles.text)}>{text}</p>
        </>
    )
};

export const StyledImageCircleRespAll = (props) => {
    const { imgSrc, size, otherprops ,text, playButton, buttonEffect} = props
    return (
        <>

            <img
                src={imgSrc}
                alt={""}
                className={css(styles.imgRespAll)}
                {...otherprops}
            />
            {playButton == "small" &&
            <div className={css(styles.playButtonSmall)} onClick={buttonEffect}>▶</div>
            }
            {playButton == "large" &&
            <div className={css(styles.playButtonLarge)} onClick={buttonEffect}>▶</div>
            }
            <p className={css(styles.text)}>{text}</p>
        </>
    )
};


export const StyledImageCircleSmall = (props) => {
    const { imgSrc, otherprops ,text, playButton, buttonEffect} = props
    return (
        <>

            <img
                src={imgSrc}
                alt={""}
                className={css(styles.imgSmall)}
                {...otherprops}
            />
            {playButton == "small" &&
            <div className={css(styles.playButtonSmall)} onClick={buttonEffect}>▶</div>
            }
            {playButton == "large" &&
            <div className={css(styles.playButtonLarge)} onClick={buttonEffect}>▶</div>
            }
            <p className={css(styles.text)}>{text}</p>
        </>
    )
};

export const StyledImageCircleDark = (props) => {
  const { imgSrc, size, otherprops,text,ImgIcon,variant } = props

  return (
    <>
   {ImgIcon && 
   <img  style={{display:'absolute' ,zIndex:"10",marginTop:'116px',marginLeft:'41px',width:'23px',height:'23px'}} src={ImgIcon}></img>
   }
   {variant!="two"&&
      <p style={{display:'absolute' ,zIndex:"10",marginTop:'116px',marginLeft:'3px', color:"white"}} >
      
      {text}</p>
    }
    {variant=="two"&&
      <p style={{display:'absolute' ,zIndex:"10",marginTop:'116px',marginLeft:'-38px', color:"white"}} >
      
      {text}</p>
    }
      <img
      style={{marginTop:"-135px"}}
        src={imgSrc}
        alt={""}
        className={
          size === "small" ?
            css(styles.imgPopularSmall) :
            css(styles.imgPopularLarge)}
        {...otherprops}
      />
    </>
  )
};

export const StyledImageFluid = (props) => {
  const { imgSrc, entry, otherprops } = props
  return (
    <>
    
      <img
        src={imgSrc}
        alt={""}
        entry={entry}
        className={css(styles.imgFluid)}
        {...otherprops}
      />
    </>
  )
};




export const StyledImageCirclePlaylists = (props) => {
    const { imgSrc, size, otherprops } = props
    return (
        <>

            <img
                src={imgSrc}
                alt={""}
                className={
                    size === "small" ?
                        css(styles.imgPlSmallMain) :
                        css(styles.imgPlSmallMain)}
                {...otherprops}
            />

            <img
                src={imgSrc}
                alt={""}
                className={
                    size === "small" ?
                        css(styles.imgPlSmall) :
                        css(styles.imgPlLarge)}
                {...otherprops}
            />

            <img
                src={imgSrc}
                alt={""}
                className={
                    size === "small" ?
                        css(styles.imgPlSmall1) :
                        css(styles.imgPlLarge1)}
                {...otherprops}
            />
        </>
    )
};
