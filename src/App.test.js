import React from 'react'
import {render, screen} from '@testing-library/react';
import App from './App';

/*첫 번째 인자는 테스트에대한 설명
* 두 번째 인자는 함수(실제 테스트 및 코드를 포함하는 포인트인 익명함수)*/
/*
test('renders learn react link', () => {
  render(<App/>)
  const linkElement = screen.getByText(/learn react/i);/!*내부에서 렌더링된 텍스트를 사용해 엘리먼트를 식별함*!/
  /!*문서에서 learn react 가 있다면 테스트는 성공함*!/
  expect(linkElement).toBeInTheDocument();/!*문서에있는지 확인*!/
});
*/
