import useStyles from "./Styles.js";
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
const Post = () =>
{
  const classes = useStyles();

  return <Card className={classes.card}>
    <CardMedia className={classes.media} image={post.selectedFile}></CardMedia>
  </Card>
};

export default Post;
