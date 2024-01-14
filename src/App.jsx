import './App.css'
import { Header } from './component/header'
import { MainCalculatorTip } from './component/main_calculator'

function App() {

  return (
    <body className='flex flex-col w-screen h-screen bg-[#C5E4E7] justify-center items-center gap-16 pt-16 md:pt-0'>
        <Header />
        <MainCalculatorTip /> 
    </body>
  )
}

export default App
