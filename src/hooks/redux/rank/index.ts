
import { useSelector } from "react-redux";
import { RootState } from "@/lib/redux/store";


export const useReduxRankGetter = () => {
  const rank = useSelector((state: RootState) => state.rank);
  return rank;
};
