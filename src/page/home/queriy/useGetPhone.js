import { useQuery } from "@tanstack/react-query";
import { request } from "../../../config/data/data";

export default function useGetPhone(path) {
  return useQuery({
    queryKey: ["phones", path],
    queryFn: () => request.get(`/${path}`).then((res) => res.data),
  });
}
