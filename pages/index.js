import { Col, ToggleBtn } from "../styles/components";
import useDarkMode from "../components/useDarkMode";

export default function Home() {
  const [theme, themeToggler] = useDarkMode();
  return (
    <div>
      hi
      <Col>
        <ToggleBtn mode={theme} onClick={() => themeToggler()} />
      </Col>
    </div>
  );
}
