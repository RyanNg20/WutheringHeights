import Dropdown from "./dropdown"
import { Slider } from "@mui/material"

export default function DropSlider({selectState, setSelectState, sliderState, setSliderState, label, options, optionVals, min, max, step, disabled}) {
  return (
    <div className='flex flex-row items-center gap-12'>
      <div className="grow-1">
        <Dropdown 
          state={selectState} 
          setState={setSelectState} 
          label={label} 
          options={options} 
          optionVals={optionVals}
        />
      </div>
      <div className="grow-3">
        <Slider 
          value={sliderState} 
          onChange={(event) => {setSliderState(event.target.value)}} 
          size="small" 
          valueLabelDisplay='auto' 
          min={min} 
          max={max} 
          step={step} 
          disabled={disabled}
        />
      </div>
    </div>
  )
}