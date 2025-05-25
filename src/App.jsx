import { useState, useEffect } from "react";
import Header from "./components/Header";
import Summarize from "./components/Summarize";
import History from "./components/History";

function App() {
  const [inputText, setInputText] = useState("");
  const [summary, setSummary] = useState("");
  const [history, setHistory] = useState([]);
  const [model, setModel] = useState("deepseek/deepseek-chat-v3-0324:free");
  const [loading, setLoading] = useState(false);

  const ringkasButt = async ()=> {
    if(inputText.trim() === "") return;
  setSummary("");
  setLoading(true);

   try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify({
          model: model,
          messages: [
            {
              role: "user",
              content: `Summarize the following text without any addition answer. Answer in the language the user speaks:\n${inputText}`,
            },
          ],
        }),
      }
    );

    const data = await response.json();
    console.log(data);
    setSummary(data.choices[0].message.content);
    const newHistory = [...history, data.choices[0].message.content];
    setHistory(newHistory);
    localStorage.setItem("summaryHistory", JSON.stringify(newHistory));
  } catch (error) {
    console.error("Gagal mengambil data ringkasan:", error);
  } finally {
    setLoading(false);
  }
  }
  useEffect(() => {
    const storedHistory = localStorage.getItem("summaryHistory");
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
    localStorage.setItem("summaryHistory", JSON.stringify(newHistory));
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
    summarize={summary}
    model={model}
    setModel={setModel}
    loading={loading}
    />
    <History history={history} deleteButton={deleteHistory}/>
      </main>

</div>
    </>
  )
}

export default App
