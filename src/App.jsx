import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { data } from 'autoprefixer'

function App() {
  const [addData, setAddData] = useState([])

  const [tempData, setTempData] = useState([])
  const [pauseData, setPauseData] = useState()
  const [position, setIndex] = useState(0)
  const [btnflag,setBtnFlag]=useState(true);
  let arr = [];
  let j = 0
  for (let i = 1; i <= 9; i++) {
    arr[j] = i;
    j++;
  }
  // when click on number button then get value in function and this value store in temp data for remenber the button click
  // and inside addData we add data for further use
  function onClickStoreData(numbers) {
    setTempData(numbers);

    setAddData([...addData, numbers]);
  }
// on click reset button remove all data from addData
  function onClickResetBtn() {
    setAddData([])
  }

// on click start button display all previous press buttons for that we store all data in addData inside this function use set interval function
// inside set inteval function check length of addData if condition true then add data to the tempData
// tempData is use for display data sequence wise
// here store the set interval value is imp
  function onClickStartBtn() {
    let index = position
const interval = setInterval(function () {
      if (index < addData.length) {

        setTempData(addData[index]);
        index++

        setIndex(index)
      } else {

        clearInterval(pauseData);
      }
    }, 1000)
    setPauseData(interval);
    setBtnFlag(false)
 }
// on click pause btn clerthe interval 
//and inside stat function by using index we again continue from that number
  function onClickPause() {

    clearInterval(pauseData);
    setBtnFlag(true)

  }

  return (

    <div>
      <div className="App">
        {arr.map((numbers) => <div className="child">

          <button className={numbers === tempData ? "w-20 h-20 rounded-full bg-yellow-300" : "w-20 h-20 rounded-full"}
            onClick={() => onClickStoreData(numbers)}>{numbers}</button>
        </div>)}

        <div className=" flex justify-between gap-20 mt-10">
          {btnflag?<button className='bg-lime-500' onClick={onClickStartBtn}>play</button>:
          <button className='bg-yellow-300' onClick={onClickPause}>pause</button>}
          <button className="bg-red-500" onClick={onClickResetBtn}>reset</button>
        </div>

      </div>
    </div>

  )
}

export default App
