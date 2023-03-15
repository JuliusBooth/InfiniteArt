<?php
$videos_dir = 'videos';
$videos = glob($videos_dir . '/*.mp4');

if (count($videos) > 0) {
    $random_video = $videos[array_rand($videos)];
    echo json_encode(array('path' => $random_video));
} else {
    http_response_code(404);
    echo json_encode(array('error' => 'No MP4 files found.'));
}
