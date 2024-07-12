import { useDispatch, useSelector } from "react-redux";
import { AppStore } from "../global/store";
import { updateModal } from "../global/states/modal";

interface Props {
  children: React.ReactNode;
}

export function ModalUtility({ children }: Props) {
  const modalState = useSelector((store: AppStore) => store.modal);
  const dispatch = useDispatch();

  const showModal = () => {
    dispatch(updateModal({ display: !modalState.display }));
  };

  return (
    <>
      {modalState.display && (
        <div
          className="absolute flex bg-white/20 w-full h-full z-20"
          onClick={showModal}
        >
          <div className="bg-black w-20 h-20 top-[50%] left-[50%] absolute">
            {children}
          </div>
        </div>
      )}
    </>
  );
}
export default ModalUtility;
