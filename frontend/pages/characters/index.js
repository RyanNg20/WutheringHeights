import { useState } from 'react';
import Navbar from '../../components/navbar';
import ContentWrapper from '../../components/contentWrapper'
import { Typography, useTheme } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import AddIcon from '@mui/icons-material/Add';

export default function Characters() {
  const theme = useTheme()
  // ms: main stat, ss: substat, ws: weapon stat
  const [characters, setCharacters] = useState([
    { name: "Rover", attribute: "havoc", lvl: 90, baseATK: 871, ws: "ATK%", wsVal: ".25"},
    { name: "Lingyang", attribute: "glacio", lvl: 70, baseATK: 451, ws: "Energy Regen", wsVal: ".315"},
    { name: "Sanhua", attribute:"glacio", lvl: 70, baseATK: 451, ws: "Energy Regen", wsVal: ".315"},
  ])

  return (
    <ContentWrapper>
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
            <DeleteForeverIcon style={{height: 20}}/>
          </button>
        </div>
        
        {/* Line */}
        <div className="h-[1px] bg-lightGray my-8"/>
        {characters.map((character, i) => {
          console.log(i)
          return (
            <button key={character} style={{backgroundColor: i % 2 == 0?theme.colors.gray:""}} className="p-4 rounded px-8">
              <Typography variant='p'>
                <div className='text-lightGray flex flex-row gap-2 m-2'>
                  <p className='text-white'>{character.name}</p>
                  <p>LVL {character.lvl}</p>
                  <p>Base ATK: {character.baseATK}</p>
                  <p>{character.ws}: {character.wsVal}</p>
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
