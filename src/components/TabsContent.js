import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  makeStyles,
} from '@material-ui/core';

const TabsContent = (props) => {
  const classes = useStyles();
  const { activeTab, dataTopTrack, dataTopArtist, onChange } = props;

  const getList = (dataTopTrack) => {
    return dataTopTrack?.map((value) => {
      const imgSrc = value?.image[0];
      return (
        <List>
          <ListItem
            className={classes.listContainer}
            onClick={() => window.open(value.url, '_blank')}
          >
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src={imgSrc[Object.keys(imgSrc)[0]]} />
            </ListItemAvatar>
            <ListItemText primary={value.name} />
          </ListItem>
        </List>
      );
    });
  };

  const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box className={classes.boxWrapper}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  };

  return (
    <>
      <Box className={classes.boxContainer}>
        <Tabs value={activeTab} onChange={onChange} centered>
          <Tab label="Top Tracks" />
          <Tab label="Top Artist" />
        </Tabs>
      </Box>

      <TabPanel className={classes.tabContainer} value={activeTab} index={0}>
        <List dense={true}>{getList(dataTopTrack)}</List>
      </TabPanel>
      <TabPanel className={classes.tabContainer} value={activeTab} index={1}>
        <List dense={true}>{getList(dataTopArtist)}</List>
      </TabPanel>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  tabContainer: {
    width: '100%',
    maxWidth: 500,
    bgcolor: 'background.paper',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 500,
    padding: 0,
  },
  boxContainer: {
    width: '100%',
    bgcolor: 'background.paper',
  },
  boxWrapper: {
    padding: 3,
  },
  listContainer: {
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: 'rgb(7, 177, 77, 0.42)',
    },
  },
}));

export default TabsContent;
