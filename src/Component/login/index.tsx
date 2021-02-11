import React, { FC, useState } from 'react';

import  {RouteComponentProps} from 'react-router-dom';

import 'antd/dist/antd.css';
import './login.css';

import { Drawer, Form, Col, Row, Input, Select,Checkbox, Carousel, DatePicker } from 'antd';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import {  Button, Avatar, Box, CssBaseline, FormControlLabel, Grid, Link, Paper, Typography } from '@material-ui/core';
// import express from 'express';
import moment from 'moment';



// const router = express.Router();
// router.use(express.json())
interface Props extends RouteComponentProps {}

const { RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Code Blank
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: '80vh',
    width: '80vw'
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random/?login)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'inherit',

    
  },
  paper: {
    margin: theme.spacing(1, 2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: 'inherit', // Fix IE 11 issue.
    marginTop: theme.spacing(5),
    height: 'inherit'
  },
  submit: {
    margin: theme.spacing(2, 0, 2),
  },
}));

  
const Login: React.FC<Props> = ({ history, location, match }) => {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const className = useStyles();
const [state, setState] = useState({visible:false});
const [firstName, setFirstName]=useState('');
const [lastName, setLastName]=useState('');
const [emailAddress, setEmailAddress]=useState('');
const [description, setDescription]=useState('');
const [registerPassword, setRegisterPassword]=useState('');


const classes = useStyles();

function showDrawer () {
  // alert("button clicked");
  setState({
    visible: true,
  });
};
  
function onClose() {
  setState({
    visible: false,
  });
};
  
function onSubmit (){
history.push('./Dashboard');
};

const onSubmitRegisterForm = async()=>{
    try {
    const body = { firstName, lastName, emailAddress, description,registerPassword };
      const response = await fetch(
        'http://localhost:3000/api/register/',
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );
    } catch (err) {
      console.error(err.message);
    }
};
  
// function onFinish (values: any){
//   console.log('Received values of form: ', values);
// };
  
function handleLogin (event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault()
  alert("good job ");
};

return (
   
  <div className="row">
   <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Form className={classes.form}>
          <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="email"
                      label="Email Id"
                      rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                    > 
                      <Input
                        style={{ width: '100%' }}
                        placeholder="Please enter email"
                      />
                    </Form.Item>
                  </Col>
                  
                </Row>
          <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                      name="password"
                      label="Password"
                      rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                      ]}
                    
                      >
                        
                      <Input.Password placeholder="Please enter password"  />
                    </Form.Item>
                  </Col>
                  
                </Row>
            <FormControlLabel
              control={<Checkbox value="remember"  />}
              label=" Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            
              onClick={onSubmit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick= {showDrawer}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </Form>
        </div>
      </Grid>
    </Grid>
    <Drawer
          title="Create a new account"
          width={720}
          onClose={onClose}
          visible={state.visible}
          bodyStyle={{ paddingBottom: 10, overflow:"-moz-hidden-unscrollable"}}
          footer={
            <div style={{ textAlign: 'right',}}>
                  {/* <Button onClick={onClose} style={{ marginRight: 8 }}>
                    Cancel
                  </Button>
                  <Button onClick={onSubmit}>
                    Submit
                  </Button> */}
                </div>
          }
        >
          <Form layout="vertical" 
                hideRequiredMark   
                className="register"
                // onFinish={onFinish}
                onFinish={onSubmitRegisterForm}
                scrollToFirstError>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                   
                      label="First Name"
                      rules={[{ required: true, message: 'Please enter your first-name' }]}

                    >
                      <Input placeholder="Enter your First Name" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      
                      label="Last Name"
                      rules={[{ required: true, message: 'Please enter your Last Name' }]}
                    >
                      <Input placeholder="Enter your last-name" />
                    </Form.Item>
                  </Col>
                </Row>  
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                      label="Email"
                      rules={[
                        {
                          type: 'email',
                          message: 'The input is not valid E-mail!',
                        },
                        {
                          required: true,
                          message: 'Please input your E-mail!',
                        },
                      ]}
                    >
                      <Input
                        style={{ width: '100%' }}
                        placeholder="Enter your email"
                     
                      />
                    </Form.Item>
                  </Col>
                  <Col span={6}>
                  <Form.Item label="Birth-Date">
                  <DatePicker defaultValue={moment('2015/01/01', dateFormat)} format={dateFormat} />
                </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={12}>
                    <Form.Item
                     
                      label="Password"
                      rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                      ]}
                      hasFeedback
                      >
                      <Input.Password placeholder="Enter your password"/>
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item
                      name="confirm"
                      label="Confirm Password"
                      dependencies={['password']}
                      hasFeedback
                      rules={[
                        {
                          required: true,
                          message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                          validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                              return Promise.resolve();
                            }
                            return Promise.reject('The two passwords that you entered do not match!');
                          },
                        }),
                      ]}
                    >
                      <Input.Password placeholder="Confirm your password"/>
                    </Form.Item>       
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col span={24}>
                    <Form.Item
                     
                      label="Description"
                      rules={[
                        {
                          required: true,
                          message: 'please enter url description',
                        },
                      ]}
                    >
                      <Input.TextArea rows={5} placeholder="please enter sescription"/>
                    </Form.Item>
                  </Col>
                </Row>
                <Button onClick={onClose} style={{ marginRight: 8 }}>
                    Cancel
                  </Button>
                  <Button>
                    Submit
                  </Button>
              </Form>
        </Drawer>
  </div>
)};
              
export default Login;

  
    
  //   function showDrawer () {
  //     setState({
  //       visible: true,
  //     });
  //   };

  //   function onClose() {
  //     setState({
  //       visible: false,
  //     });
  //   };

  //   function onSubmit(){
  //     console.log('submitted');
  //   }

  //   function onFinish (values: any){
  //       console.log('Received values of form: ', values);
  //   };

  //   function handleLogin (event: React.FormEvent<HTMLFormElement>) {
  //     event.preventDefault()
  //     alert("good job ");
  //   };

  //   return (
  //     <div classNameName = {classNamees.root}>
  //       <Grid container component="main" >
  //       <CssBaseline />
  //       <Grid item xs={3} sm={4} md={7} >
  //       <Carousel autoplay classNameName='contentStyle'>     
  //        <div>
  //          <img src={c1} alt ='c1' classNameName="img1"/>
  //        </div>
  //        <div>
  //        <img src={c2} alt ='c2' classNameName="img2"/>
  //        </div>
  //        <div>
  //        <img src={c3} alt ='c3' classNameName="img3"/>
  //        </div>
  //        <div>
  //        <img src={c4} alt ='c4' classNameName="img4"/>
  //        </div>
  //        <div>
  //        <img src={c5} alt ='c5' classNameName="img5"/>
  //        </div>
  //      </Carousel>
  //       </Grid>
  //         <Grid item xs={3} sm={4} md={5} component={Paper} elevation={6} square>
  //           <div classNameName={classNamees.paper}>
  //           <Avatar classNameName={classNamees.avatar}>
  //             {/* <LockOutlinedIcon /> */}
  //           </Avatar>
  //           <Typography component="h1" variant="h5">
  //             Sign in
  //           </Typography>
  //           <form classNameName={classNamees.root}  autoComplete="off" onSubmit={handleLogin}>
  //             <TextField
  //               id='outlined-basic'   
  //               label='Enter Email'
  //               variant='outlined'
  //               type='email'
  //               placeholder='Required'
  //               value={email}
  //               onChange={event => setEmail(event.target.value)}
  //               classNameName='input'
  //               required
  //             />
  //             <TextField
  //               id='outlined-basic'
  //               label='Enter password'
  //               variant='outlined'
  //               type='password'
  //               placeholder='Required'
  //               value={password}
  //               onChange={event => setPassword(event.target.value)}
  //               classNameName='input'
  //               required
  //             />         
  //             <FormControlLabel
  //               control={<Checkbox value="remember"  />}
  //               label="Remember me"
  //             />
  //             <Button
  //               type="submit"
  //               fullWidth
  //               variant="contained"
  //               color="primary"
  //               classNameName={classNamees.submit}
  //               onClick={() => {
  //                 history.push('\Dashboard')
  //               }}
  //             >
  //               Sign In
  //             </Button>
  //             <Grid container>
  //               <Grid item xs>
  //                 <Link href="#" variant="body2">
  //                   Forgot password?
  //                 </Link>
  //               </Grid>
  //               <Grid item>
  //                 <Link href="#" variant="body2" onClick= {showDrawer}>
  //                   {"Don't have an account? Sign Up"}
  //                 </Link>
  //               </Grid>
  //             </Grid>
  //               <Box mt={5}>
  //                 <Copyright />
  //               </Box>
  //           </form>
  //         </div>
  //         </Grid>
  //       </Grid>
  //       <Drawer
  //         title="Create a new account"
  //         width={720}
  //         onClose={onClose}
  //         visible={state.visible}
  //         bodyStyle={{ paddingBottom: 10, overflow:"-moz-hidden-unscrollable"}}
  //         footer={
  //           <div style={{ textAlign: 'right',}}>
  //                 <Button onClick={onClose} style={{ marginRight: 8 }}>
  //                   Cancel
  //                 </Button>
  //                 <Button onClick={onSubmit}>
  //                   Submit
  //                 </Button>
  //               </div>
  //         }
  //       >
  //         <Form layout="vertical" 
  //               hideRequiredMark   
  //               classNameName="register"
  //               onFinish={onFinish}
  //               scrollToFirstError>
  //               <Row gutter={16}>
  //                 <Col span={12}>
  //                   <Form.Item
  //                     name="first-name"
  //                     label="First Name"
  //                     rules={[{ required: true, message: 'Please enter your first-name' }]}
  //                   >
  //                     <Input placeholder="Please enter your full-name" />
  //                   </Form.Item>
  //                 </Col>
  //                 <Col span={12}>
  //                   <Form.Item
  //                     name="last-name"
  //                     label="Last Name"
  //                     rules={[{ required: true, message: 'Please enter your last-name' }]}
  //                   >
  //                     <Input placeholder="Please enter your last-name" />
  //                   </Form.Item>
  //                 </Col>
  //               </Row>  
  //               <Row gutter={16}>
  //                 <Col span={12}>
  //                   <Form.Item
  //                     name="email"
  //                     label="Email"
  //                     rules={[
  //                       {
  //                         type: 'email',
  //                         message: 'The input is not valid E-mail!',
  //                       },
  //                       {
  //                         required: true,
  //                         message: 'Please input your E-mail!',
  //                       },
  //                     ]}
  //                   >
  //                     <Input
  //                       style={{ width: '100%' }}
  //                       placeholder="Please enter email"
  //                     />
  //                   </Form.Item>
  //                 </Col>
  //                 <Col span={12}>
  //                   <Form.Item
  //                     // name="phone-no"
  //                     label="Phone Number"
                    
  //                     rules={[
  //                       {
  //                         required: true,
  //                         message: 'The input is not valid Phone-no.',
  //                       },
  //                       {
  //                         required: true,
  //                         message: 'Please input your Phone no.!',
  //                       },
  //                     ]}
  //                   >
  //                     <Input
  //                       style={{ width: '100%' }}
  //                       placeholder="Please enter Phone no."
  //                     />
  //                   </Form.Item>
  //                 </Col>
  //               </Row>
  //               <Row gutter={16}>
  //                 <Col span={12}>
  //                   <Form.Item
  //                     name="password"
  //                     label="Password"
  //                     rules={[
  //                       {
  //                       required: true,
  //                       message: 'Please input your password!',
  //                       },
  //                     ]}
  //                     hasFeedback
  //                     >
  //                     <Input.Password />
  //                   </Form.Item>
  //                 </Col>
  //                 <Col span={12}>
  //                   <Form.Item
  //                     name="confirm"
  //                     label="Confirm Password"
  //                     dependencies={['password']}
  //                     hasFeedback
  //                     rules={[
  //                       {
  //                         required: true,
  //                         message: 'Please confirm your password!',
  //                       },
  //                       ({ getFieldValue }) => ({
  //                         validator(_, value) {
  //                           if (!value || getFieldValue('password') === value) {
  //                             return Promise.resolve();
  //                           }
  //                           return Promise.reject('The two passwords that you entered do not match!');
  //                         },
  //                       }),
  //                     ]}
  //                   >
  //                     <Input.Password />
  //                   </Form.Item>       
  //                 </Col>
  //               </Row>
  //               <Row gutter={16}>
  //                 <Col span={24}>
  //                   <Form.Item
  //                     name="description"
  //                     label="Description"
  //                     rules={[
  //                       {
  //                         required: true,
  //                         message: 'please enter url description',
  //                       },
  //                     ]}
  //                   >
  //                     <Input.TextArea rows={5} placeholder="please enter url description" />
  //                   </Form.Item>
  //                 </Col>
  //               </Row>
  //             </Form>
  //       </Drawer>





    //   <div classNameName ='page'>
    
    // <form classNameName='login' noValidate autoComplete="off">
     
        
    //   <div>
    //     <TextField
    //       required
    //       id="outlined-required"
    //       label="Required"
    //       variant="outlined"
    //     />
       
    
    //                  <TextField
    //       id="outlined-password-input"
    //       label="Password"
    //       type="password"
    //       autoComplete="current-password"
    //       variant="outlined"
    //     />
                  
    //               <TextField
    //       id="outlined-password-input"
    //       label="Password"
    //       type="password"
    //       autoComplete="current-password"
    //       variant="outlined"
          
    //     />
                  
    //   </div>
    // </form>
            {/* <Form
                  {...formItemLayout}
                  form={form}
                  classNameName="login"
                  onFinish={onFinish}
                  scrollToFirstError
                >
                  <Form.Item
                    name="email"
                    label="Enter Your E-mail"
                    rules={[
                      {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                      },
                      {
                        required: true,
                        message: 'Please input your E-mail!',
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
            
                  <Form.Item
                    name="password"
                    label="Enter Password"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your password!',
                      },
                    ]}
                    hasFeedback
                  >
                    <Input.Password />
                  </Form.Item>
            
                  <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                      {
                        required: true,
                        message: 'Please confirm your password!',
                      },
                      ({ getFieldValue }) => ({
                        validator(_, value) {
                          if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                          }
                          return Promise.reject('The two passwords that you entered do not match!');
                        },
                      }),
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                  <Form.Item>
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>

                  <a classNameName="login-form-forgot" href="">
                    Forgot password
                  </a>
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" classNameName="login-form-button">
                    Log in
                  </Button>
                  
                  <Button type="primary" classNameName="login-form-button" onClick={() => {
                          history.push('/Register')
                        }}>
                    Register
                  </Button>
                </Form.Item>
                </Form> */}
