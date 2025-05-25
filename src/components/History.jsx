
function History({history, deleteButton}) {
  return (
    <>
    <h2 className="mt-4 text-[20px] font-bold">History</h2>
   <section className="bg-white p-4 rounded-xl">
        {history.length < 0 ? (
          <h2 className="text-gray-700">Belum ada riwayat</h2>
        ) : (
          <ul className="list-disc list-inside text-gray-700 flex flex-col gap-2">
            {history.map((item, index) => (
              <li className="flex justify-between items-center" key={index}>
                <p>{item}</p>
                <button 
                onClick={() => deleteButton(index)} 
                className="ml-4 p-2 bg-cyan-700 text-white rounded hover:bg-red-600 transition">delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}

export default History