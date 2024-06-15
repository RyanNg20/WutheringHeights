export default function Modal (props) {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] w-[100svw] h-[100svh] top-0 left-0 z-10 flex flex row items-center justify-center">
      <div className="bg-background p-8 rounded-lg">
        {props.children}
      </div>
    </div>
  )
}