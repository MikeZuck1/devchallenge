import "./App.css";
import Title from "./components/Title";
import Input from "./components/CustomInput";
function App() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <Title />
        <Input />
      </div>
    </>
  );
}

export default App;