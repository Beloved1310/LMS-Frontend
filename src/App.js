import React from "react";
import "./App.css";
import { ChakraProvider, theme } from "@chakra-ui/react";
import Homepage from "./components/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoursePostingForm from "./Page/Course/Courses";
import Profile from "./components/Profile/Profile";
import AdminLogin from "./Page/admin/adminLog";
import Register from "./Page/Register/register";
import Wrapper from "./molecules/container/Wrapper";
import MyCourse from './Page/Course/getCourses';
import CoursePreview from './Page/Course/coursePreview';
import PurchaseCoursePage from "./Page/Course/purchase";
import Cart from './Page/cart/cart';
import BillingPage from './Page/cart/checkout';
import Searched from "./Page/Course/searchResult";
import NotifyPage from './Page/Course/notification';
import CourseOverview from './Page/admin/adminCourse';
import StudentOverview from './Page/admin/adminStudent';
import InstructorOverview from './Page/admin/adminInstructor';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={< Homepage/>} />
        <Route  path="/course" element={<CoursePostingForm />} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path='/adminLog' element={<AdminLogin/>}/>
        <Route path='/myCourses' element={<MyCourse/>}/>
        <Route path='/coursePreview' element={<CoursePreview/>}/>
        <Route path='/purchaseCourse' element={<PurchaseCoursePage/>}/>
        <Route path="/myCart" element={<Cart/>}/>
        <Route path="/checkout" element={<BillingPage/>}/>
        <Route path="/searched" element={<Searched/>}/>
        <Route path="/notification" element={<NotifyPage/>}/>
        <Route path="/admin/courseoverview" element={<CourseOverview/>}/>
        <Route path="/admin/studentoverview" element={<StudentOverview/>}/>
        <Route path="/admin/instructoroverview" element={<InstructorOverview/>}/>
      </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
