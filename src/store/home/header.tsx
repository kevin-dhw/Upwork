import { create } from "zustand";

export interface ListItem {
  subtitle?: string;
  src: string;
}
export interface Item {
  title: string;
  list: ListItem[];
}
export interface State {
  tabData: Item[];
}

const useHeaderStore = create(() => ({
  tabData: [
    {
      title: " find job",
      list: [
        {
          subtitle: "find work",
          src: "/",
        },
        {
          subtitle: "saved work",
          src: "/",
        },
        {
          subtitle: "proposal and offer",
          src: "/",
        },
      ],
    },
    {
      title: "reach more detail",
      list: [
        {
          subtitle: "your services",
          src: "/",
        },
        {
          subtitle: "promote with ads",
          src: "/",
        },
        {
          subtitle: "direct contarct",
          src: "/",
        },
      ],
    },
  ],
}));

export default useHeaderStore;
