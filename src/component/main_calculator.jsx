import { useState,useEffect } from "react";

export function MainCalculatorTip() {
  const [bill, setBill] = useState(null)
  const [person, setPerson] = useState(null)
  const [alertZero, setAlertZero] = useState(null)
  const [isError, setIsError] = useState(false)
  const [selectedTip, setSelectedTip] = useState(null);
  const [inputTipCustom, setInputTipCustom] = useState(null)
  const [tipAmount, setTipAmount] = useState(0.00);
  const [total, setTotal] = useState(0.00)

  const percentTip = [5, 10, 15, 25, 50]

  const handleTipButtonClick = (percentage) => {
    if (selectedTip === percentage) {
      setSelectedTip('');
    } else {
      setSelectedTip(percentage);
      setInputTipCustom('')
    }
  };

  const handleChangeInputCustomTip = (event) => {
    setSelectedTip(event)
    setInputTipCustom(event)
  }

  const handleChangePerson = (event) => {
    if (event == 0) {
      setAlertZero("Can't be zero")
      setPerson(null)
      setIsError(true)
    } else{
      setAlertZero(null);
      setPerson(event);
      setIsError(false)
    }
  };

  const clickReset = () => {
    setBill('')
    setPerson('')
    setSelectedTip('')
    setInputTipCustom('')
  }

  const resultTipAmount = () =>{
    let result = 0; 
    person !== null && person !== '' ? result = total/person : result = 0
    setTipAmount(result.toFixed(2))
  }
  
  const resultTotal = () => {
    let result = 0;
    person !== null && person !== '' ? result = bill * (selectedTip) / 100 : result = 0
    setTotal(result.toFixed(2))
  }

  useEffect(() =>{
    resultTipAmount()
    resultTotal()
  }) 
    

  

  return (
    <div className="flex flex-col md:flex-row border p-10 rounded-3xl bg-white gap-14 md:max-w-[1400px]">
      <div className="flex flex-col gap-10 md:max-w-[645px]">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold text-teal-700">Bill</h2>
          <div class="relative mt-2 rounded-md shadow-sm h-14 bg-[#F3F8FB]">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span class=""><svg xmlns="http://www.w3.org/2000/svg" width="15" height="17"><path fill="#9EBBBD" d="M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"/></svg></span>
            </div>
            <input id="" type="number" value={bill} placeholder="0" className="border outline-[#26C2AD] bg-[#F3F8FB] text-end w-full rounded-md h-14 text-3xl font-bold p-5 text-[#00474B] " onChange={(e) => {setBill(e.target.value)}}/>
        </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-teal-700">Select Tip %</h2>
          <div className="flex flex-wrap gap-8">
            {
              percentTip.map((items, index)=> {
                return(
                <button key={index} className={`w-48 h-16 rounded-md ${
                  selectedTip === items ? "bg-[#26C2AD] text-[#00474B]" : "bg-[#00474B] text-white"
                } hover:bg-[#26C2AD] hover:text-[#00474B]`} onClick={() => handleTipButtonClick(items)}>
                  <p className=" text-3xl font-semibold">{items}%</p>
                </button>
                )
              })
            }
            <input id="" type="number" value={inputTipCustom}  placeholder="CUSTOM" className="border outline-[#26C2AD] w-48 h-16 rounded-md text-3xl font-medium text-center text-[#557976] bg-[#F3F8FB]" onChange={(e) => {handleChangeInputCustomTip(e.target.value)}} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold text-teal-700">Number of People</h2>
            <div className="text-xl font-medium text-red-700">{alertZero}</div>
          </div>  
          <div class="relative mt-2 rounded-md shadow-sm h-14 bg-[#F3F8FB]">
            <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span class=""><svg xmlns="http://www.w3.org/2000/svg" width="13" height="16"><path fill="#9EBBBD" d="M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"/></svg></span>
            </div>
            <input id="" type="number" value={person} placeholder="0" className={`border ${isError ? 'outline-red-700' : 'outline-[#26C2AD]'} bg-[#F3F8FB] text-end w-full rounded-md h-14 text-3xl font-bold p-5 text-[#00474B`} onChange={(e) => {handleChangePerson(e.target.value)}}/>
        </div>
        </div>      
      </div>
      <div className="flex flex-col border rounded-xl bg-[#00474B]  py-12 px-10 gap-16 md:gap-48 md:w-[620px]">
        <div className="flex flex-col gap-10">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white">Tip Amount</h3>
            <p className="text-xl text-gray-500 font-medium">/ person</p>
          </div>
            <p className="text-5xl font-bold text-[#26C2AD]">${tipAmount}</p>  
        </div>
        <div div className="flex justify-between items-center">
          <div>
            <h3 className="text-2xl font-semibold text-white">Total</h3>
            <p className="text-xl text-gray-500 font-medium">/ person</p>
          </div>
            <p className="text-5xl font-bold text-[#26C2AD]">${total}</p>
          </div>
        </div>
        <button className="border border-transparent rounded-xl h-16 bg-[#26C2AD]" onClick={clickReset} >
          <h2 className="text-3xl font-bold text-[#00474B]">Reset</h2>
        </button>
      </div>
    </div>
  );
}
