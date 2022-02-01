import React from "react";
import styles from "./video_item.module.css";

const VideoItem = ({ video, video: { mainBaseEntity } }) => {
    return (
        <div className={styles.content}>
            <iframe
                title={video.mainBaseEntity.title}
                className={styles.video}
                type="text/html"
                width="150%"
                src={`https://www.youtube.com/embed/${video.videoId}`}
                frameBorder="0"
                allowFullScreen
            ></iframe>
            <div className={styles.text}>
                <h2 className={styles.title}>{mainBaseEntity.channelId}</h2>
                <span className={styles.channel}>{mainBaseEntity.channelName}</span>
            </div>
        </div>
    );
};

export default VideoItem;