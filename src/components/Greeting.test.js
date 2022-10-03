import Greeting from "./Greeting";
import {render, screen} from '@testing-library/react'
test('greeting component test', () => {
	render(<Greeting />)
	const helloWorldElement = screen.getByText('Hello World!', {exact: false})	/*엘리먼트 존재유무, 정밀하지않고 포함되어있어도 검색가능*/
	/*테스트 결괏값을 전달할 수 있는 expect 함수
	* 이 함수는 숫자든 문자열이든 뭐든 될 수 있음*/
	expect(helloWorldElement).toBeInTheDocument()
	/*여러 가지 matcher 함수가 있는데 여기 toBeInTheDocument 함수는 여기에 있을 것으로 예상하는
	HTML 엘리먼트가 문서 안에 있는지 확인하는 함수임 matcher 함수인 toBeInTheDocument에 .not을 추가해
	반대로 확인할 수도 있음, 만약 이 엘리먼트가 문서 안에 없기를 바란다면 그런 경우에는 텍스트로 된
	query 함수를 사용하면 됨, 엘리먼트가 발견되지 않으면 getByText는 실패할 테니까요*/
	/*expect(helloWorldElement).not.toBeInTheDocument()*/
})