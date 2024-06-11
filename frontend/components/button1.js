import { Typography } from "@mui/material"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"

const Button1 = () => {
  return (
    <button class="bg-sunset w-[173px] h-[44px] rounded flex flex-row items-center justify-center">
      <Typography variant="h3">
        Optimize
      </Typography>
      <ArrowForwardIcon style={{height: 15, stroke: "white", strokeWidth: 1}}/>
    </button>
  )
}

export default Button1