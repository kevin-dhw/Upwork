import { create } from "zustand";

export interface ListItem {
  subtitle?: string;
  src: string;
}
export interface Item {
  title: string;
  list: ListItem[];
}

export interface searchItem {
  title: string;
  subTitle: string;
  selected: boolean;
}
export interface State {
  tabData: Item[];
  searchData: searchItem[];
}
export interface Action {
  changeSearchData: (idx: number) => void;
}

const useHeaderStore = create<State & Action>((set) => ({
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
  searchData: [
    {
      title: "job",
      subTitle: "apply to jobs",
      selected: true,
    },
    {
      title: "Talent",
      subTitle: "find freelancer",
      selected: false,
    },
    {
      title: "Project",
      subTitle: "see project form",
      selected: false,
    },
  ],
  changeSearchData: (idx) => {
    set((state) => {
      state.searchData.forEach((item, index) => {
        if (idx === index) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
      return { searchData: state.searchData };
    });
  },
}));

export default useHeaderStore;
