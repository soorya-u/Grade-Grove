import { setRank } from "@/lib/redux/slices/rank";

export const setReduxRank = (rank: number, dispatch: any) => {
    dispatch(setRank(rank));
  };