import { useState } from 'react';
import Navbar from '../../components/navbar';
import ContentWrapper from '../../components/contentWrapper'
import { Typography, useTheme } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

export default function Optimize() {
  const theme = useTheme()
  // ms: main stat, ss: substat, ws: weapon stat
  // const [characters, setCharacters] = useState([
  //   { name: "Rover", attribute: "havoc", lvl: 90, baseATK: 871, ws: "ATK%", wsVal: ".25"},
  //   { name: "Lingyang", attribute: "glacio", lvl: 70, baseATK: 451, ws: "Energy Regen", wsVal: ".315"},
  //   { name: "Sanhua", attribute:"glacio", lvl: 70, baseATK: 451, ws: "Energy Regen", wsVal: ".315"},
  // ])

  return (
    <ContentWrapper>
      <Navbar/>
      <div className="flex flex-col">
        <Typography variant="h2" style={{marginTop: 50}}>
          Optimize
        </Typography>
        <Typography variant="p">
          View your characters here
        </Typography>
        
        {/* Line */}
        <div className="h-[1px] bg-lightGray my-8"/>
      </div>
    </ContentWrapper>
  );
}
