import React, { memo } from "react";
import VideoItem from './VideoItem';
import styles from "./video_list.module.css";
import { Row } from 'react-bootstrap';

const VideoList = memo(({ videos, onVideoClick, selectedVideo }) => {
    return (
        <ul className={styles.videos}>
            {videos.map(video => (
                <Row>
                    <VideoItem
                        key={video.videoId}
                        video={video}
                        onVideoClick={onVideoClick}
                        selectedVideo={selectedVideo}
                    ></VideoItem>
                </Row>
            ))}
        </ul>
    );
});

export default VideoList;

