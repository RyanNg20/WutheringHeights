import { Typography } from "@mui/material"
import Image from "next/image"
import { useTheme } from "@mui/material"
import Link from "next/link"

const Navbar = () => {
  const theme = useTheme()
  return (
    <div className="bg-darkGray h-[92px] flex flex-row justify-between">
      <div className="bg-darkGray h-[92px] w-[100svw] flex flex-row justify-between absolute top-0 left-0 z-[-1]"/>
      <button>
        <Link href="/">
          <Image src={"/logo.png"} width={96} height={54} style={{objectFit: 'contain'}}/>
        </Link>
      </button>

      {/* Right Side of Navbar */}
      <div className="flex flex-row gap-12 items-center justify-center">
        <button>
          <Link href="/echos">
            <Typography variant="h3" style={{color: theme.colors.lightGray}}>
              Echos
            </Typography>
          </Link>
        </button>
        <button>
          <Link href="/characters">
            <Typography variant="h3" style={{color: theme.colors.lightGray}}>
              Characters
            </Typography>
          </Link>
        </button>
        <button>
          <Link href="/optimize">
            <Typography variant="h3" style={{color: theme.colors.lightGray}}>
              Optimize
            </Typography>
          </Link>
        </button>
      </div>
    </div>
  )
}

export default Navbar