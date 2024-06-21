import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  /*
    <React.StrictMode>
      - 개발 모드일 때 잠재적인 버그를 찾을 수 있게 해주는 모드이다.
      - 개발 모드에서 Strict Mode를 사용하게 되면, 컴포넌트를 unmount 시켰다가 다시 한 번 remount 시키게 된다.
      - 주로 개발 중에 발생하는 문제를 조기에 발견하고 수정하기 위한 것이다.
      - 이를 통해 더 안정적이고 유지보수하기 쉬운 애플리케이션을 만들 수 있다.
  */
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
