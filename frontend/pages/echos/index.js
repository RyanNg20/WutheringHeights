import { useState } from 'react';
import Navbar from '../../components/navbar';
import ContentWrapper from '../../components/contentWrapper'
import { Typography, useTheme, TextField, Slider } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Modal from '../../components/modal';
import Dropdown from '../../components/dropdown';
import DropSlider from '../../components/dropSlider';
import ClearIcon from '@mui/icons-material/Clear';
import { Button1, Button2 } from '../../components/buttons'


// ms: main stat, ss: substat
export default function Echos() {
  const theme = useTheme()
  
  // ssRanges: associates all possible substats with min value max value and step size
  // ssList: list of all possible substats
  // costToMsVals1: associates different cost echos and a mainstat with a mainstat value
  // costToMs1: associates different cost echos to a list of possible mainstats
  const { ssRanges, ssList, costToMsVals1, costToMs1, costToMsVals2, costToMs2, sampleEchos } = data()

  const [selected, setSelected] = useState([])
  const [showModal, setShowModal] = useState(false)

  // state for creation of new echo
  const [name, setName] = useState("")
  const [cost, setCost] = useState("")
  const [ms, setMs] = useState("")

  const [ss1, setSs1] = useState("")
  const [ss2, setSs2] = useState("")
  const [ss3, setSs3] = useState("")
  const [ss4, setSs4] = useState("")
  const [ss5, setSs5] = useState("")

  const [ss1Val, setSs1Val] = useState("")
  const [ss2Val, setSs2Val] = useState("")
  const [ss3Val, setSs3Val] = useState("")
  const [ss4Val, setSs4Val] = useState("")
  const [ss5Val, setSs5Val] = useState("")


  // List of created Echos
  const [echos, setEchos] = useState(sampleEchos)

  let dropSliderInfo = [
    { selectState: ss1, setSelectState: setSs1, sliderState: ss1Val, setSliderState: setSs1Val, label: "Substat 1" },
    { selectState: ss2, setSelectState: setSs2, sliderState: ss2Val, setSliderState: setSs2Val, label: "Substat 2" },
    { selectState: ss3, setSelectState: setSs3, sliderState: ss3Val, setSliderState: setSs3Val, label: "Substat 3" },
    { selectState: ss4, setSelectState: setSs4, sliderState: ss4Val, setSliderState: setSs4Val, label: "Substat 4" },
    { selectState: ss5, setSelectState: setSs5, sliderState: ss5Val, setSliderState: setSs5Val, label: "Substat 5" },
  ]

  const submitForm = () => {
    setShowModal(false)
    let newEcho = { name, cost, ms,msVal: costToMsVals1[cost][ms], ms2: costToMs2[cost], ms2Val: costToMsVals2[cost], ss1, ss2, ss3, ss4, ss5, ss1Val, ss2Val, ss3Val, ss4Val, ss5Val }

    setEchos([...echos, newEcho])
    setName("")
    setCost("")
    setMs("")
    setSs1("")
    setSs2("")
    setSs3("")
    setSs4("")
    setSs5("")
    setSs1Val("")
    setSs2Val("")
    setSs3Val("")
    setSs4Val("")
    setSs5Val("")
  }

  return (
    <ContentWrapper>
      
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form className='bg-background p-16 rounded-lg flex flex-col w-[892px] gap-6'>
          <div className='flex flex-row justify-between'>
            <Typography variant="h2">
              Create Echo
            </Typography>
            <button onClick={() => {setShowModal(false)}}>
              <ClearIcon/>
            </button>
          </div>
          <Typography variant="p">
            The app will assume the echo is rank 5 and level 25.
          </Typography>
          <div className='flex flex-row gap-8'>
            <TextField id="filled-basic" label="Name" variant="filled" value={name} onChange={(event) => {setName(event.target.value)}} required fullWidth/>

            <Dropdown state={cost} setState={setCost} label="Cost" options={[1,3,4]} optionVals={[1,3,4]} required/>
            <Dropdown state={ms} setState={setMs} label="Main stat" options={cost == ""?[]:costToMs1[cost]} optionVals={cost == ""?[]:costToMs1[cost]} disabled={cost==""} required/>
          </div>

          {dropSliderInfo.map((info, _) => {
            return (
              <DropSlider
                key={info.label}
                selectState={info.selectState} 
                setSelectState={info.setSelectState}
                sliderState={info.sliderState==""?0:info.sliderState}
                setSliderState={info.setSliderState}
                label={info.label} 
                options={ssList} 
                optionVals={ssList} 
                min={info.selectState==""?0:ssRanges[info.selectState][0]}
                max={info.selectState==""?0:ssRanges[info.selectState][1]}
                step={info.selectState==""?0:ssRanges[info.selectState][2]}
                disabled={info.selectState==""}
              />
            )
          })}
          <Button1 label={"Submit"} onClick={submitForm} disabled={name==""||cost==""||ms==""}/>
        </form>
      </Modal>

      <Navbar/>

      {/* Echos */}
      <div className="flex flex-col">
        {/* Title */}
        <Typography variant="h2" style={{marginTop: 50}}>
          ECHOS
        </Typography>
        <div className="flex flex-row justify-between">
          <Typography variant="p">
            View your echos here.
          </Typography>
          <button>
            <DeleteIcon style={{height: 20}}/>
          </button>
        </div>
        
        {/* Line */}
        <div className="h-[1px] bg-lightGray my-8"/>

        {/* List of Echos */}
        {echos.map((echo, i) => {
          return (
            <button key={i} style={{backgroundColor: i % 2 == 0?theme.colors.gray:""}} className="p-4 rounded px-8">
              <Typography variant='p'>
                <div className='text-lightGray flex flex-row gap-2 m-2'>
                  <p className='text-white'>{echo.name}</p>
                  <p>Cost: {echo.cost}</p>
                  <p>{echo.ms1}</p>
                  <p>{echo.ms2}</p>
                  <p>{echo.ss1}</p>
                  <p>{echo.ss2}</p>
                  <p>{echo.ss3}</p>
                  <p>{echo.ss4}</p>
                </div>
              </Typography>
            </button>
          )
        })}

        {/* New Echo Button */}
        <Button2 onClick={() => {setShowModal(true)}}/>
      </div>

    </ContentWrapper>
  );
}

const data = () => {

  const sampleEchos = [
    { 
      name: "BOAR", 
      cost: 1, 
      ms1: "ATK%", 
      ms1Val: "0.33", 
      ms2: "HP", 
      msVal2: 2280, 
      ss1: "ATK%", 
      ss2: "HP", 
      ss3: "ATK", 
      ss4: "Crit Rate", 
      ss5: "Crit Damage", 
      ss1Val: 0.325, 
      ss2Val: 0.123, 
      ss3Val: 0.325, 
      ss4Val: 0.932, 
      ss5Val: 0.392
    },
    { 
      name: "Tambourinist", 
      cost: 3, 
      ms1: "Glacio DMG Bonus", 
      ms2: "ATK", 
      msVal2: 100, 
      ss1: "ATK%", 
      ss2: "HP", 
      ss3: "ATK", 
      ss4: "Crit Rate", 
      ss5: "Crit Damage", 
      ss1Val: 0.325, 
      ss2Val: 0.123, 
      ss3Val: 0.325, 
      ss4Val: 0.932, 
      ss5Val: 0.392
    },
    { 
      name: "BOAR", 
      cost: 1, 
      ms1: "Crit Rate", 
      ms2: "HP", 
      msVal2: 2280, 
      ss1: "ATK%", 
      ss2: "HP", 
      ss3: "ATK", 
      ss4: "Crit Rate", 
      ss5: "Crit Damage", 
      ss1Val: 0.325, 
      ss2Val: 0.123, 
      ss3Val: 0.325, 
      ss4Val: 0.932, 
      ss5Val: 0.392
    },
  ]

  // All possible mainstats that 4, 3, 1 costs can have respectively
  const msVals4 = {
    "ATK%": 0.33, 
    "HP%": 0.33, 
    "DEF%": 0.418, 
    "Crit Rate": 0.22, 
    "Crit DMG": 0.44, 
    "Healing Bonus": 0.264,
  }
  const msList4 = Object.keys(msVals4)

  const msVals3 = {
    "ATK%": 0.3, 
    "HP%": 0.3, 
    "DEF%": 0.38, 
    "Glacio DMG Bonus": .3,
    "Fusion DMG Bonus": .3,
    "Electro DMG Bonus": .3,
    "Aero DMG Bonus": .3,
    "Spectro DMG Bonus": .3,
    "Havoc DMG Bonus": .3,
    "Energy Regen": .32, 
  }
  const msList3 = Object.keys(msVals3)

  const msVals1 = {
    "ATK%": 0.33, 
    "HP%": 0.33, 
    "DEF%": 0.418, 
  }
  const msList1 = Object.keys(msVals1)

  // All possible substats that echos can have
  // [min, max, step]
  const ssRanges = {
    "HP": [320, 580, 10],
    "ATK": [30, 70, 1],
    "DEF": [30, 70, 1],
    "HP%": [.064, .116, .001],
    "ATK%": [0.064, .116, .001],
    "DEF%": [.081, .147, .001],
    "Crit Rate": [.063, .105, .001],
    "Crit DMG": [.126, 0.210, .001],
    "Energy Regen": [.056, .149, .001],
    "Resonance Skill DMG Bonus": [.064, .124, .001],
    "Basic ATK DMG Bonus": [.064, .116, .001],
    "Heavy ATK DMG Bonus": [.064, .116, .001],
    "Resonance Liberation DMG Bonus": [.064, .116, .001],
  }
  const ssList = Object.keys(ssRanges)

  const costToMsVals1 = {
    4: msVals4,
    3: msVals3,
    1: msVals1,
  }
  const costToMs1 = {
    4: msList4,
    3: msList3,
    1: msList1,
  }

  const costToMsVals2 = {
    4: 150,
    3: 100,
    1: 2280,
  }
  const costToMs2 = {
    4: "ATK",
    3: "ATK",
    1: "HP",
  }

  return {
    ssRanges,
    ssList,
    costToMsVals1,
    costToMs1,
    costToMsVals2,
    costToMs2,
    sampleEchos
  }
}
