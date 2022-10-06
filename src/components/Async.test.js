import { render, screen } from '@testing-library/react';
import Async from './Async';

describe('Async component test', () => {
  test('요청 성공 시 포스트 가 렌더링 되는지 테스트', async () => {
    /*fetch Fn 은 window.fetch 로 사용*/
    window.fetch = jest.fn()/*fn method 는 더미 함수를 만들어줌*/
    /*mockResolvedValue() fetch 함수가 호출되었을 때 결정되어야 하는 값을 설정할 수 있게 해줌*/
    /*내장 fetch 함수를 더미 fetch 함수로 덮어쓰고 있는 것*/
    window.fetch.mockResolvedValue({
      json: async()=>[{id: 'p1',title: 'First post'}]
    })
    render(<Async />);
    const listItemElement = await screen.findAllByRole('listitem');
    /*기대하는 바는 listItemElements 가 빈 배열이 아니란 것*/
    /*만약 이 아이템의 배열이 비어있다면 어떤 아이템도 렌더링 되지 않은 것이며
		이는 바람직한 결과가 아닙니다. 이것이 빈 배열이 아닌지 확인하고자 길이가 0이 아닌지를 확인합시다.
		toHaveLength를 사용하면 배열의 길이를 확인할 수 있죠*/
    expect(listItemElement).not.toHaveLength(0);
  });
});
