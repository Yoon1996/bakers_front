import './App.css';
import { Button, Calendar, DatePicker, Space, version } from "antd";


function App() {
  return (
    <div className="App">
        <DatePicker />
        <Button danger={true}>Button</Button>
        <div className='calendar_wrap'>
        <Calendar></Calendar>
        </div>
    </div>
  );
}

export default App;
