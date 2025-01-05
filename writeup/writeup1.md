# 정리

## 왜 yarn이나 npm을 사용해 리액트 앱을 만드는가?

### 1. 편리한 기능 지원

- 하나의 앱 js파일에 사용할 여러 컴포넌트를 독립적으로 제작, 관리할 수 있게 한다.
- xx.module.css를 통해 css를 모듈화하여 메인 프로그램에 적용하기 편하게 해준다.

```JavaScript
import Button from "./Button";
import styles from "./App.module.css";

function App() {
  return (
    <div>
      <h1 className={styles.title}>Welcome Back!</h1>
      <Button text={"Continue"} />
    </div>
  );
}

export default App;
// <h1>의 className에 prop값은 title.module.css 파일에서 가져온 것이다.
// <Button> 컴포넌트의 text prop을 자동으로 감지해서 값을 적용하게 해준다.
```
