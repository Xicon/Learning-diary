// UI Components
import moment from 'moment';
import 'moment/locale/zh-cn';
import 'antd/dist/antd.css';
import Index from './pages/Index';

moment.locale('zh-cn');

function App(){
  return (
      <>
        <Index />
      </>
  );
}

export default App;