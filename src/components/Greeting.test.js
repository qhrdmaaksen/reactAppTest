import Greeting from './Greeting';
import { render, screen } from '@testing-library/react';

/*이 테스트를 이 describe 에 추가해줍니다. 이렇게 하나의 suite에 한 테스트가 옵니다. suite를 여러 개 가질 수도 있으며
suite마다 테스트도 여러 개 가질 수 있습니다. 이제 이걸 저장하면 이 설명 텍스트가 아직도 있는 게 보이실 텐데
이건 이제 테스트 그룹 이름... 그러니까 테스트 suite 이름 하에 들어가 있으며 이제 하나의 테스트 suite와
하나의 테스트가 있는 게 보이실 겁니다. 전처럼 분명한 세트 suite가 없다면 자동으로 suite 하나를 갖게 될 테지만
지금은 명확하게 이름 붙여진 suite가 있죠. 이게 괜찮은 방법인 게 여러분의 애플리케이션이 점점 커질수록 아마 테스트들을 이렇게 그룹화함*/
describe('Greeting component', () => {
  test('greeting component test', () => {
    render(<Greeting />);
    const helloWorldElement = screen.getByText('Hello World!', {
      exact: false,
    }); /*엘리먼트 존재유무, 정밀하지않고 포함되어있어도 검색가능*/
    /*테스트 결괏값을 전달할 수 있는 expect 함수
     * 이 함수는 숫자든 문자열이든 뭐든 될 수 있음*/
    expect(helloWorldElement).toBeInTheDocument();
    /*여러 가지 matcher 함수가 있는데 여기 toBeInTheDocument 함수는 여기에 있을 것으로 예상하는
		HTML 엘리먼트가 문서 안에 있는지 확인하는 함수임 matcher 함수인 toBeInTheDocument에 .not을 추가해
		반대로 확인할 수도 있음, 만약 이 엘리먼트가 문서 안에 없기를 바란다면 그런 경우에는 텍스트로 된
		query 함수를 사용하면 됨, 엘리먼트가 발견되지 않으면 getByText는 실패할 테니까요*/
    /*expect(helloWorldElement).not.toBeInTheDocument()*/
  });
});
