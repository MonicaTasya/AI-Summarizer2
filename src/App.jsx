import { useState, useEffect } from "react";
import Header from "./components/Header";
import Summarize from "./components/Summarize";
import History from "./components/History";

function App() {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [history, setHistory] = useState([]);

  const ringkasButt = ()=> {
    if(inputText.trim() === "") return;

    setSummary(inputText);

    const newHistory = [inputText, ...history].slice(0, 10);
    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  }
  useEffect(() => {
    const storedHistory = localStorage.getItem("history");
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  },[])
  const resetButt = () => {
    setInputText("");
    setSummary("");
  }
  const deleteHistory= (index)=>{
    const newHistory = history.filter((_, i) => i !== index);
    setHistory(newHistory);
    localStorage.setItem("history", JSON.stringify(newHistory));
  }

  return (
    <>
     <div className="bg-gray-100 font-sans min-h-screen">
    <Header title="AI Summarizer"/>
      <main className="w-[80vw] p-[10px] mx-auto">
    <Summarize 
    inputText={inputText} 
    setInputText={setInputText} 
    ringkasButt={ringkasButt} 
    resetButt={resetButt} 
    summarize={summary}/>
    <History history={history} deleteButton={deleteHistory}/>
      </main>

</div>
    </>
  )
}

export default App
