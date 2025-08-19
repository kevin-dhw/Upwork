import { create } from "zustand";

export interface ListItem {
  subtitle?: string;
  src: string;
}
export interface Item {
  title: string;
  list: ListItem[];
}

export interface SearchItem {
  title: string;
  subTitle: string;
  selected: boolean;
}
// job tab
export interface jobItem extends SearchItem {}

export interface State {
  tabData: Item[];
  searchData: SearchItem[];
  jobTabData: jobItem[];
}
export interface Action {
  changeSearchData: (idx: number) => void;
  changeJobData: (idx: number) => void;
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
  jobTabData: [
    {
      title: "Best Matches",
      subTitle: "apply to jobs11111",
      selected: true,
    },
    {
      title: "Most recent",
      subTitle: "apply to jobs22222",
      selected: false,
    },
    {
      title: "Saved Jobs",
      subTitle: "apply to jobs33333",
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
  changeJobData: (idx) => {
    set((state) => {
      state.jobTabData.forEach((item, index) => {
        if (idx === index) {
          item.selected = true;
        } else {
          item.selected = false;
        }
      });
      return { jobTabData: state.jobTabData };
    });
  },
}));

export default useHeaderStore;
