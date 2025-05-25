
const Summarize = ({inputText, setInputText, ringkasButt, resetButt, summarize, model, setModel}) => {
  return (
     <>
         <p className="mb-[5px] text-[15px] font-semibold">Masukkan teks untuk diringkas:</p>
         <select
         value={model}
         onChange={(e) => setModel(e.target.value)}
         className="mb-4 p-2 border border-gray-300 rounded"
      >
        <option value="deepseek/deepseek-chat-v3-0324:free">DeepSeek V3</option>
        <option value="meta-llama/llama-3.3-70b-instruct:free">
          Llama 3.3 70B Instruct (Meta)
        </option>
        <option value="google/gemini-2.0-flash-exp:free">
          Gemini Flash 2.0 Experimental (Google)
        </option>
            </select>

            <div className="flex flex-col md:flex-row md:gap-[5vw] xl:gap-[8vw]">
                <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                rows="5"
                cols="80"
                title="Input text area"
                placeholder="Masukkan teks di sini"
                className="p-[5px] rounded-xl shadow-lg"
                ></textarea>
            <div className="flex flex-col p-[10px] my-[5px] gap-[10px]">
                <button
                className="bg-cyan-700 px-[15px] rounded-md hover:bg-cyan-500 text-white transition duration-300 xl:px-[8vw]"
                onClick={ringkasButt}>Ringkas</button>
                <button
                className="bg-cyan-700 px-[15px] rounded-md hover:bg-red-600 text-white transition duration-300 xl:px-[8vw]"
                onClick={resetButt}>Reset</button>
            </div></div>

            <h2 className="mt-8 text-[20px] font-bold">Hasil Ringkasan</h2>
          <section className="bg-white p-4 rounded-xl">
            <p
            className="bg-white text-gray-400 rounded-xl">
              {summarize || "Hasil Ringkasan akan muncul disini"}
            </p>
          </section>
     </>
  );
};

export default Summarize;