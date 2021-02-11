import React, { useState } from 'react';
import  {Link, RouteComponentProps} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme, Theme, createStyles } from '@material-ui/core/styles';
// import { Drawer, Form, Button, Col, Input, Select, DatePicker } from 'antd';
import DrawerRM from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import MenusIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import MailIcon from '@material-ui/icons/Mail';
import Menus from '@material-ui/core/Menu';
import MenusItem from '@material-ui/core/MenuItem';
import './dashboard.css';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined, DesktopOutlined,UserOutlined} from '@ant-design/icons';
// import { Hidden } from '@material-ui/core';
// import { render } from '@testing-library/react';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';

import TableRM from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
// import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import { Table, Tag, Space } from 'antd';
import { Typography } from 'antd';
import { Breadcrumb } from 'antd';
import { Select } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Tabs } from 'antd';
import { Avatar, Button} from 'antd';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
// import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import { Empty } from 'antd';

const { TabPane } = Tabs;
const { Paragraph } = Typography;

interface Props extends RouteComponentProps {}


const { SubMenu } = Menu;
// const { Paragraph } = Typography;

const drawerWidth = 240;

//commit table
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Last Commit',
    dataIndex: 'lCommit',
    key: 'age',
  },
  {
    title: 'Last Update',
    dataIndex: 'lUpdate',
    key: 'address',
  },
  {
    title: 'SMH',
    dataIndex: 'code',
    key: 'code',
  },
];

const data = [
  {
    key: '1',
    name: 'Repo 1',
    lCommit: 'Added task3.html',
    lUpdate: '3months ago',
    code:   <Paragraph copyable>SHA Value</Paragraph>
  },
  {
    key: '1',
    name: 'Repo 2',
    lCommit: 'Update tasks.css',
    lUpdate: '2 weeks ago',
    code:   <Paragraph copyable>SHA Value</Paragraph>

  },
  {
    key: '1',
    name: 'Repo 3',
    lCommit:'Removed node_modules',
    lUpdate: '30mins ago',
    code:   <Paragraph copyable>SHA Value</Paragraph>
  },
];
//commit table


const columnsCommit = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'age',
  },
  {
    title: 'Authored By',
    dataIndex: 'authored',
    key: 'address',
  },
  {
    title: 'SMH',
    dataIndex: 'code',
    key: 'code',
  },
];


const dataCommit = [
  {
    key: '1',
    name: 'Task3.html',
    date: '01 Feb, 2021',
    authored: 'Anamika',
    code:   <Paragraph copyable>SHA Value</Paragraph>
  },
  {
    key: '1',
    name: 'Tasks.css',
    date: '01 Feb, 2021',
    authored: 'Lakshay',
    code:   <Paragraph copyable>SHA Value</Paragraph>

  },
  {
    key: '1',
    name: 'node_modules',
    date: '01 Feb, 2021',
    authored: 'Anamika',
    code:   <Paragraph copyable>SHA Value</Paragraph>
  },
];
//repo table
function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];
//repo table

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      backgroundColor: 'white',
      minHeight: '100vh',
      minWidth: '100vw'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menusButton: {
      marginRight: theme.spacing(2),
    },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      // backgroundColor: '#2A265F',
      // backgroundColor: '#2A265F',
    },
    drawerPaper: {
      width: drawerWidth,
      // backgroundColor: '#2A265F',
      // backgroundColor: '#2A265F',
    },
    drawerHeader: {
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1),
      // fontFamily:'Arial',
      // fontSize:'16px',
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: 'flex-end',
   
    },
    content: {
      // flexGrow: 1,
      width: '80vw',
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginLeft: -drawerWidth,
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    },
    button:{
      position: 'absolute',
      float: 'right',
      right: '0',
      borderStyle: 'none',
      borderRadius: '50%',
      outline: 'none',
      marginRight: "10px",
      backgroundColor: '#2A265F',
    },
    toolbar:{
      backgroundColor: '#2A265F',
      color: "white"
      // backgroundColor: 'white',
    },
    download:{
      float: "right",
      right: 0,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    // Menu:{
    //   backgroundColor: '#2A265F',
    //   color: 'white'
    // },
    // table: {
    //   minWidth: 650,
    // },
    dashboard:{
      color:"white"
    }

  }),
);
const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

const Dashboard: React.FC<Props> = ({ history, location, match }) => {
  const classes = useStyles();
  const theme = useTheme();
  const { Option } = Select;
  const [open, setOpen] = useState(true);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [state, setState] = useState({visible:false});
  const [component, setComponent] =useState({
    visible: true,
    whichMenu: "folders"
  })
  const [dense, setDense] = React.useState(true);
  const [secondary, setSecondary] = React.useState(true);
  // const [sizing,setSizing] = useState({
  //   size: 'large',
  // });
  // const handleSizeChange = (e:any) => {
  //   setSizing({ size: e.target.value });
  // };
  const folders =()=>{
    setComponent({visible:true ,whichMenu: "folders"});
  }
  const commits =()=>{
    setComponent({visible:true ,whichMenu: "commits"});
  }
  const changes =()=>{
    setComponent({visible:true ,whichMenu: "changes"});
  }
  const branches =()=>{
    setComponent({visible:true ,whichMenu: "branches"});
  }
  const repos=()=>{
    const val =document.getElementsByTagName('a')[0].getAttribute('value');
      history.push(`/repos/`+val);
    }
    function onChange(value:any) {
      console.log(`selected ${value}`);
    }
    
    function onBlur() {
      console.log('blur');
    }
    
    function onFocus() {
      console.log('focus');
    }
    
    function onSearch(val:any) {
      console.log('search:', val);
    }
  let content:any;
 
  //tabs
  function callback(key:any) {
    console.log(key);
  }
  
  //list
  function generate(element: React.ReactElement) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  
  //list
  
  if(component.whichMenu=="folders")
  content= <div> 
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Repositories</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="">Folders</a>
          </Breadcrumb.Item>
      </Breadcrumb>
      <Divider /><br></br>
        <Select
        showSearch
        style={{ width: 200,}}
        placeholder="Branch"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
      >
        <Option value="master">Master</Option>
        <Option value="task02">Task02</Option>
        <Option value="task03">Task03</Option>
      </Select>
      <Button className="{classes.download}">History </Button>
      <Button className="{classes.download}">Find File </Button>
      <Button className="{classes.download}">Web IDE </Button>
        <Button type="primary" shape="circle" className={classes.download} icon={<DownloadOutlined />} />
        {/* <Button type="primary" shape="round" icon={<DownloadOutlined />}/>
        <Button type="primary" shape="round" icon={<DownloadOutlined />}>
          Download
        </Button> */}
        <br></br><br></br>
        <Table columns={columns} dataSource={data} />
  </div>
  else if(component.whichMenu=="commits")
  content= <div>
    <Breadcrumb>
    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Repositories</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Commits</a>
      </Breadcrumb.Item>
  </Breadcrumb>
  <Divider /><br></br>

  <Table columns={columnsCommit} dataSource={dataCommit} />
  </div>
  else if(component.whichMenu=="changes")
  content=<div>
    <Breadcrumb>
      <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Repositories</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Changes</a>
      </Breadcrumb.Item>
    </Breadcrumb>
    <Divider/>
    {/* <div>
      <h4>
      Locks give the ability to lock specific file or folder.
      </h4>
    </div> */}
    <Divider/>
    <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
  </div>
  else if(component.whichMenu=="branches")
  content=<div><Breadcrumb>
  <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Repositories</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Branches</a>
      </Breadcrumb.Item>
  </Breadcrumb>
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Overview" key="1">
      <Button type="primary" className={classes.download} >New Branch</Button>
      <Button danger className={classes.download}>Delete Merged Branches</Button>
    </TabPane>
    <TabPane tab="Active" key="2">
      Active
    </TabPane>
    <TabPane tab="All" key="3">
      All
    </TabPane>
  </Tabs>
    <div>
      <h4>
      Protected branches can be managed in <a>project settings</a>
      </h4>
    </div>
    <div>
      <Grid container>
        <Grid item xs={12} >
          <div className={classes.demo}>
            <List dense={dense}>
              {generate(
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Branch name"
                    secondary={secondary ? 'last commit' : null}
                  />
                  
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete">
                    <Button>Merge Request</Button>
                    <Button>Compare</Button>
                    {/* <Button>Default Button</Button> */}
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>,
              )}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  </div>


  function showDrawer () {
    alert("button clicked");
    setState({
      visible: true,
    });
  };
  function onClose() {
    setState({
      visible: false,
    });
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleClick = (event:any) =>  {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
  // setAnchorEl(null);
  history.push('/');
  };
  return (

    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menusButton, open && classes.hide)}
          >
            <MenusIcon />
          </IconButton>
            <h3 className={classes.dashboard}>DASHBOARD</h3>
                     
            <button onClick={handleClick} className={classes.button}>
              <Avatar
              size={{ xs: 24, sm: 32, md: 40, lg: 40, xl: 50, xxl: 60 }}
              icon={<UserOutlined />}
              aria-controls="simple-menu" aria-haspopup="true" 
              />
            </button>
          <Menus
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        // onClose={handleClose}
      >
        <MenusItem  onClick={() => {
                                history.push('\Profile')
                              }}>Profile</MenusItem>
        <MenusItem onClick={handleClose}>Logout</MenusItem>
      </Menus>
        </Toolbar>
      
      </AppBar>
      <DrawerRM
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
        {/* <h2>CODE MENUS</h2> */}
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        
        <Menu
        onClick={handleClick}
        style={{ width: 237}}
        defaultSelectedKeys={['3']}
        defaultOpenKeys={['sub2','sub1']}
        mode="inline"
        // className={classes.Menu}
      >
        <SubMenu key="sub1" icon={<DesktopOutlined />} title="Profile">
        <Divider />
            <Menu.Item key="1"  onClick={() => {
                                history.push('\Profile')
                              }}>View</Menu.Item>
            
            <Menu.Item key="2" onClick={() => {
                                history.push('\Profile')
                              }}>Update</Menu.Item>  
                 
        </SubMenu>
        <Divider />
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Repositories">
        <Divider />
          
        
          <Menu.Item key="3" onClick={folders}>Folders</Menu.Item>
         
          <Menu.Item key="4" onClick={commits}>Commits</Menu.Item>
          
          <Menu.Item key="5" onClick={changes}>Changes</Menu.Item>
         
          <Menu.Item key="6" onClick={branches}>Branches</Menu.Item>
       
          <Menu.Item key="7" onClick={branches}>Merge Requests</Menu.Item>
          <Menu.Item key="8" onClick={changes}>Tags</Menu.Item>
        </SubMenu>
        <Divider />
        <Menu.Item  icon={<SettingOutlined />} title="Settings">Settings</Menu.Item>
        <Divider />
      </Menu>
        {/* <List>
          {['Profile', 'Repository', 'Commits', 'Logout'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </DrawerRM>
      
      
        <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        
        <div className="content">
          {content}
          
        </div>
      </main>
          
      
    </div>
  );
}

export default Dashboard;