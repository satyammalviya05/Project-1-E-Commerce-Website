// components/VideoEmbed.js
import { Box, Typography } from '@mui/material';

const VideoEmbed = ({ videoUrl }) => {
  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6">Product Demo Video</Typography>
      <Box sx={{ mt: 2, position: 'relative', paddingBottom: '56.25%', height: 0 }}>
        <iframe
          src={videoUrl}
          title="Product Demo Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        />
      </Box>
    </Box>
  );
};

export default VideoEmbed;
