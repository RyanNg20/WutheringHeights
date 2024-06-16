import { Button, Typography } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import AddIcon from "@mui/icons-material/Add"

const Button1 = ({label, disabled, onClick}) => {
  return (
    <Button variant={disabled?"outlined":"contained"} className="w-[173px] h-[44px] rounded flex flex-row items-center justify-center" disabled={disabled} onClick={onClick}>
      <Typography variant="h3">
        {label}
      </Typography>
      <ArrowForwardIcon style={{height: 15, stroke: "white", strokeWidth: 1, color: "white"}}/>
    </Button>
  )
}

const Button2 = ({onClick}) => {
  return (
    <Button variant="contained" className="p-4 rounded px-8" onClick={onClick}>
      <AddIcon style={{height: 23, color: "white", stroke: "white", strokeWidth: 1}}/>
    </Button>
  )
}

export { Button1, Button2 }