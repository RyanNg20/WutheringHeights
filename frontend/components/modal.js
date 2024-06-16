export default function Modal ({children, showModal, setShowModal}) {
  return (
    <div className={`absolute bg-[rgba(0,0,0,0.5)] w-[100svw] h-[100svh] top-0 left-0 z-10 flex items-center justify-center ${showModal?"":"hidden"}`}>
      {children}
    </div>
  )
}