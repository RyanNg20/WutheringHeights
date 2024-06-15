export default function Modal (props) {
  return (
    <div className="absolute bg-[rgba(0,0,0,0.5)] w-[100svw] h-[100svh] top-0 left-0 z-10 flex items-center justify-center">
      <div className="bg-background p-16 rounded-lg flex flex-col w-[892px] gap-6">
        {props.children}
      </div>
    </div>
  )
}