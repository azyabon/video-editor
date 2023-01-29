import classes from "./VideoPlayer.module.scss";
import preview from "../../../assets/img/not_video.jpg";

export const VideoPlayer = () => {
  return (
    <div className={classes.player_wrapper}>
      {/*TODO: make custom control panel*/}
      <video className={classes.player} poster={preview} controls={true}>
        <source src="../../../assets/video/test.mp4" type="video/mp4" />
      </video>
    </div>
  );
};
