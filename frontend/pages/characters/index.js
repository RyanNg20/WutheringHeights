import { useState } from 'react';
import Navbar from '../../components/navbar';
import ContentWrapper from '../../components/contentWrapper'
import { Typography, useTheme, TextField } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import Modal from '../../components/modal';
import ClearIcon from '@mui/icons-material/Clear';
import { Button1, Button2 } from '../../components/buttons';
import Image from 'next/image';
import Dropdown from '../../components/dropdown';


import AddIcon from '@mui/icons-material/Add';

export default function Characters() {
  const theme = useTheme()
  const { sampleCharacters, attributeList } = getData()

  const [characters, setCharacters] = useState(sampleCharacters)

  const [selected, setSelected] = useState([])
  const [showModal, setShowModal] = useState(false)

  const [name, setName] = useState("")
  const [baseATK, setBaseATK] = useState("")
  const [attribute, setAttribute] = useState("")

  return (
    <ContentWrapper>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <form className='bg-background p-16 rounded-lg flex flex-col w-[892px] gap-6'>
          <div className='flex flex-row justify-between'>
            <Typography variant="h2">
              Create Character
            </Typography>
            <button onClick={() => {setShowModal(false)}}>
              <ClearIcon/>
            </button>
          </div>
          <div className='flex flex-row gap-8'>
            <TextField id="filled-basic" label="Name" variant="filled" value={name} onChange={(event) => {setName(event.target.value)}} required fullWidth/>
            <TextField id="filled-basic" label="Base ATK" variant="filled" value={baseATK} onChange={(event) => {setBaseATK(event.target.value)}} required fullWidth/>

            <Dropdown state={attribute} setState={setAttribute} label="Attribute" options={attributeList} optionVals={attributeList} required/>
          </div>

          {/* {dropSliderInfo.map((info, _) => {
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
          })} */}
          {/* <Button1 label={"Submit"} onClick={submitForm} disabled={}/> */}
        </form>
      </Modal>


      <Navbar/>
      <div className="flex flex-col">
        <Typography variant="h2" style={{marginTop: 50}}>
          Characters
        </Typography>
        <div className="flex flex-row justify-between">
          <Typography variant="p">
            View your characters here
          </Typography>
          <button>
            <DeleteIcon style={{height: 20}}/>
          </button>
        </div>
        
        {/* Line */}
        <div className="h-[1px] bg-lightGray my-8"/>
        {characters.map((character, i) => {
          return (
            <button key={character} style={{backgroundColor: i % 2 == 0?theme.colors.gray:""}} className="p-4 rounded px-8">
              <Typography variant='p'>
                <div className='text-lightGray flex flex-row gap-8 m-2'>
                  <Image src={`/${character.attribute}.png`} height={20} width={20} style={{objectFit: 'contain'}} alt="Character attribute icon"/>
                  <p className='text-white'>{character.name}</p>
                  <p>LVL {character.lvl}</p>
                  <p>Base ATK: {character.baseATK}</p>
                  <p>{character.ws}: {character.wsVal}</p>
                </div>
              </Typography>
            </button>
          )
        })}

        {/* New Character Button */}
        <Button2 onClick={() => {setShowModal(true)}}/>
      </div>

    </ContentWrapper>
  );
}

const getData = () => {
  const sampleCharacters = [
    { name: "Rover", attribute: "havoc", lvl: 90, baseATK: 871, ws: "ATK%", wsVal: ".25"},
    { name: "Lingyang", attribute: "glacio", lvl: 70, baseATK: 451, ws: "Energy Regen", wsVal: ".315"},
    { name: "Sanhua", attribute:"glacio", lvl: 70, baseATK: 451, ws: "Energy Regen", wsVal: ".315"},
  ]

  const attributeList = ["glacio", "havoc", "aero", "electro", "fusion", "spectro"]

  return { sampleCharacters, attributeList }
}