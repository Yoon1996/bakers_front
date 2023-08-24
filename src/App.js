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
import { loginUser } from './store/user.store';
import { getPost } from './service/post.service';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    const accessToken = getAccessToken();
    if(accessToken){
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      tokenVerify()
      .then(res => {
        console.log('res: ', res);
        dispatch(loginUser(res.data))
        return getPost()
      })
      .then(res => {
        console.log('res: ', res);
        
      })
      .catch(error => {
        console.log(error)
        clearAccessToken()
      })
    }

  }, [])


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate replace to="/main/recipe_list"/>}></Route>
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
  );
}

export default App;
