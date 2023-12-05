import useLoginModal from "@/hooks/useLoginModal"
import { useCallback } from "react";


export default function Home() {

  const loginModal = useLoginModal();

  const onClick = useCallback(() => { loginModal.onOpen() }, [loginModal]);
  return (
    <>
      <div
          className="
            h-screen
            flex
            flex-col
            justify-center
            items-center
          " 
        >
          <button
            onClick={onClick}
            className="
              bg-neutral-300
              rounded
              p-4
              text-3xl
              text-neutral-900
              w-5/6
              lg:w-1/3
            "
          >
            {`Click here to open `}
            <span className="font-semibold">LOGIN MODAL</span>
          </button>
        </div>
    </>
  )
}
