import { useState } from 'react';
import Navbar from '../../components/navbar';
import ContentWrapper from '../../components/contentWrapper'
import { Typography, useTheme } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import Modal from '../../components/modal';
import Dropdown from '../../components/dropdown';

export default function Echos() {
  const theme = useTheme()

  const [selected, setSelected] = useState([])
  const [showModal, setShowModal] = useState(true)

  // ms: main stat, ss: substat
  const [echos, setEchos] = useState([
    { name: "BOAR", cost: 1, ms1: "ATK%", ms2: "ATK%", ss1: "ATK%", ss2: "HP", ss3: "ATK", ss4: "Crit Rate", ss5: "Crit Damage", ss1Val: 0.325, ss2Val: 0.123, ss3Val: 0.325, ss4Val: 0.932, ss5Val: 0.392},
    { name: "Tambourinist", cost: 4, ms1: "Glacio DMG Bonus", ms2: "ATK%", ss1: "ATK%", ss2: "HP", ss3: "ATK", ss4: "Crit Rate", ss5: "Crit Damage", ss1Val: 0.325, ss2Val: 0.123, ss3Val: 0.325, ss4Val: 0.932, ss5Val: 0.392},
    { name: "BOAR", cost: 1, ms1: "Crit Rate", ms2: "ATK%", ss1: "ATK%", ss2: "HP", ss3: "ATK", ss4: "Crit Rate", ss5: "Crit Damage", ss1Val: 0.325, ss2Val: 0.123, ss3Val: 0.325, ss4Val: 0.932, ss5Val: 0.392},
  ])


  return (
    <ContentWrapper>
      <Modal>
        <Typography variant="h2">
          Create Echo
        </Typography>
        <Typography variant="p">
          The app will assume the echo is rank 5 and level 25.
        </Typography>
        <Dropdown/>
      </Modal>
      <Navbar/>
      <div className="flex flex-col">
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
        {echos.map((echo, i) => {
          console.log(i)
          return (
            <button key={echo} style={{backgroundColor: i % 2 == 0?theme.colors.gray:""}} className="p-4 rounded px-8">
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
        <button className="p-4 rounded px-8 bg-sunset">
          <AddIcon style={{height: 23}}/>
        </button>
      </div>

    </ContentWrapper>
  );
}
