import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.scss';
import MainTemplate from './template/main.template';
import RecipeListpage from './page/recipe_list.page';
import CategoryListpage from './page/category_list.page';
import MyAccountTemplate from './template/my-account.template';
import MyInfoPage from './page/my_info.page';
import WithdrawPage from './page/withdraw_page';
import LoginTemplate from './template/login.template';
import JoinPage from './page/join.page';
import LoginPage from './page/login.page';
import { useEffect } from 'react';
import { clearAccessToken, getAccessToken } from './util/localstorage.util';
import axios from 'axios';
import { tokenVerify } from './service/user.service';
import { useDispatch } from 'react-redux';
import { loginUser, userInit } from './store/user.store';
import { getPost } from './service/post.service';
import AuthGaurdComponent from './component/auth_gaurd_component';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const accessToken = getAccessToken();

    if (!accessToken) dispatch(userInit({ isInit: true }))


    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
    tokenVerify()
      .then(res => {
        dispatch(loginUser({ ...res.data }))
      })
      .catch(error => {
        console.log(error)
        clearAccessToken()
      })
      .finally(() => {
        dispatch(userInit({ isInit: true }))
      })
  }, [])


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate replace to="/main/recipe_list" />}></Route>
        <Route path='/main' element={
          <AuthGaurdComponent>
            <MainTemplate></MainTemplate>
          </AuthGaurdComponent>}>
          <Route path='recipe_list' element={<RecipeListpage></RecipeListpage>}></Route>
        </Route>
        <Route path='/login' element={<LoginTemplate></LoginTemplate>}>
          <Route path='member_login' element={<LoginPage></LoginPage>}></Route>
          <Route path='member_join' element={<JoinPage></JoinPage>}></Route>
        </Route>
        <Route path='/my-account' element={<AuthGaurdComponent><MyAccountTemplate></MyAccountTemplate></AuthGaurdComponent>}>
          <Route path='category_list_page' element={<CategoryListpage></CategoryListpage>}></Route>
          <Route path='my_info_page' element={<MyInfoPage></MyInfoPage>}></Route>
          <Route path='withdraw_page' element={<WithdrawPage></WithdrawPage>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
