import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Button, Calendar, DatePicker, Space, version } from "antd";
import MainTemplate from './tamplate/main.template';
import RecipeListpage from './page/recipe_list.page';
import CategoryListpage from './page/category_list.page';
import "tailwindcss/tailwind.css";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainTemplate></MainTemplate>}>
        <Route path='recipe_list' element={<RecipeListpage></RecipeListpage>}></Route>
        <Route path='category_list' element={<CategoryListpage></CategoryListpage>}></Route>
      </Route>
      <Route path='/login'></Route>
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
