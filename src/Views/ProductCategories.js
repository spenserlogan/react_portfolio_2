import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Container from '@material-ui/core/Container';
import Typography from '../components/Typography';

const styles = (theme) => ({
  root: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(4),
  },
  images: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexWrap: 'wrap',
  },
  imageWrapper: {
    position: 'relative',
    display: 'block',
    padding: 0,
    borderRadius: 0,
    height: '40vh',
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
      height: 100,
    },
    '&:hover': {
      zIndex: 1,
    },
    '&:hover $imageBackdrop': {
      opacity: 0.15,
    },
    '&:hover $imageMarked': {
      opacity: 0,
    },
    '&:hover $imageTitle': {
      border: '4px solid currentColor',
    },
  },
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px 14px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        'https://www.thecoderschool.com/blog/wp-content/uploads/2019/01/Modern-Computer-programming-Code-942607124_2122x1416.jpeg',
      title: 'Investment Wizard',
      width: '40%',
      link: "https://github.com/spenserlogan/investment-wizard"
    },
    {
      url:
        'https://g.foolcdn.com/editorial/images/631778/stack-of-one-hundred-dollar-bills-cash-money-invest-retire-getty.jpg',
      title: 'Bill Reminder',
      width: '20%',
      link: "https://github.com/spenserlogan/bill_reminder",
    },
    {
      url:
        'https://s3.us-east-1.amazonaws.com/co-assets/assets/image-transforms/images/963014/team-meeting3_d88e4f0344a8f3f0bf6d644a30195abc.jpg',
      title: 'Employee Directory',
      width: '40%',
      link: "https://github.com/spenserlogan/employee_directory",
    },
    {
      url:
        'https://www.techrepublic.com/a/hub/i/r/2019/05/23/3ccea40e-275c-412c-bedb-b263f7ab5e18/resize/1200x/11d38e4edf30b428c5d26e16f47bba97/man-at-work-istock-1137735798.jpg',
      title: 'E Commerce',
      width: '38%',
      link: "https://github.com/spenserlogan/e_commerce",
    },
    {
      url:
        'https://www.bitofclarity.com/wp-content/uploads/2020/04/ipad-note-taking-tips-study-digital.jpg',
      title: 'Express Notes',
      width: '38%',
      link: "https://github.com/spenserlogan/express-notes",
    },
    {
      url:
        'https://iso.500px.com/wp-content/uploads/2014/08/IMG_4288a.jpg',
      title: 'Weather API',
      width: '24%',
      link: "https://github.com/spenserlogan/Weather_API",
    },
  ];
const handleClick = (image) => {
window.location.href = image.link;
}
  return (
    <Container className={classes.root} component="section">
      <Typography variant="h4" marked="center" align="center" component="h2">
        My work
      </Typography>
      <div className={classes.images}>
        {images.map((image) => (
      
          <ButtonBase
            onClick={()=> {
                handleClick(image)
            }}
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width,
            }}
          >
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
      
        ))}
      </div>
    </Container>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProductCategories);
