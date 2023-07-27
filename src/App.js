import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Button, Calendar, DatePicker, Space, version } from "antd";
import MainTemplate from './template/main.template';
import RecipeListpage from './page/recipe_list.page';
import CategoryListpage from './page/category_list.page';
import "tailwindcss/tailwind.css";
import MyAccountTemplate from './template/my-account.template';
import MyInfoPage from './page/my_info.page';
import WithdrawPage from './page/withdraw_page';
import LoginTemplate from './template/login.template';
import JoinPage from './page/join.page';
import LoginPage from './page/login.page';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate replace to="/main"/>}></Route>
      <Route path='/main' element={<MainTemplate></MainTemplate>}>
        <Route path='recipe_list' element={<RecipeListpage></RecipeListpage>}></Route>
      </Route>
      <Route path='/login' element={<LoginTemplate></LoginTemplate>}>
        <Route path='member_login' element={<LoginPage></LoginPage>}></Route>
        <Route path='member_join' element={<JoinPage></JoinPage>}></Route>
      </Route>
      <Route path='/my-account' element={<MyAccountTemplate></MyAccountTemplate>}>
        <Route path='category_list_page' element={<CategoryListpage></CategoryListpage>}></Route>
        <Route path='my_info_page' element={<MyInfoPage></MyInfoPage>}></Route>
        <Route path='withdraw_page' element={<WithdrawPage></WithdrawPage>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>

    // <div className="App">
    //     <DatePicker />
    //     <Button danger={true}>Button</Button>
    //     <div className='calendar_wrap'>
    //     <Calendar></Calendar>
    //     </div>
    // </div>
  );
}

export default App;
