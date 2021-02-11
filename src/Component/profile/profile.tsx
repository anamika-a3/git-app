import React, {useState} from 'react';
import  {RouteComponentProps} from 'react-router-dom';
import { Theme, createStyles, makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import './profile.css'
import dp from '../../assets/c1.jpg';
import { Upload } from 'antd';
import ImgCrop from 'antd-img-crop';
import { AnyARecord } from 'dns';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

interface Props extends RouteComponentProps {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      height: '50vh',
      width: 'inherit',
      background : 'linear-gradient(to right, white 80%, blue 20%)',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
      margin: '10px',
      border: 'red solid 5px',

    },
    // controls: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   paddingLeft: theme.spacing(1),
    //   paddingBottom: theme.spacing(1),
    // },
    // playIcon: {
    //   height: 38,
    //   width: 38,
    // },
  }),
);

const Profile: React.FC<Props> = ({ history, location, match }) => {
    const classes = useStyles();
  const theme = useTheme();
    return (
    <div>
     <div className="container">
	<div className="course">
		<div className="preview">
        <Avatar shape="square" size={84} icon={<UserOutlined />} />
		</div>
		<div className="info">
		
			<h4>Last Name</h4>
			<h2>Name</h2>
            <h5>email</h5>
			<button className="btn">Update Profile</button>
		</div>
	</div>
</div>   
<button className="floating-btn" onClick={() => {
                                history.push('\Dashboard')
                              }}>
	View Dashboard
</button>
    </div>
    )
}
export default Profile; 
    //    <div className="row">
    //       <Card className={classes.root}>
    //   <div className={classes.details}>
    //     <CardContent className={classes.content}>
    //       <Typography component="h5" variant="h5">
    //         Live From Space
    //       </Typography>
    //       <Typography variant="subtitle1" color="textSecondary">
    //         Mac Miller
    //       </Typography>
    //     </CardContent>
    //   </div>
    //   <CardMedia
    //     className={classes.cover}
    //     image="/static/images/cards/live-from-space.jpg"
    //     title="Live from space album cover"
    //   />
    // </Card>
    //    </div>
