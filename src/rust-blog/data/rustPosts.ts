import GettingRustInstalled from "../posts/getting-rust-installed";
// import BorrowChecker from "../posts/borrow-checker";
// import FirstCliTool from "../posts/first-cli-tool";

export interface RustPost {
  id: number;
  title: string;
  slug: string;
  link: string; // add link here
  date: string;
  crabType: "normal" | "happy" | "gesture";
  blurb: string[];
  component: React.ComponentType;
}

const rustPosts: RustPost[] = [
  {
    id: 1,
    title: "Why rust?",
    slug: "getting-rust-installed",
    link: "/rust/getting-rust-installed",
    date: "March 3, 2026",
    crabType: "normal",
    blurb: [
      "Like why am I even doing this?"
    ],
    component: GettingRustInstalled,
  },

  // COMMENTS ARE HERE FOR EXAMPLE FUTURE POSTS AS A TEMPLATE
  // {
  //   id: 2,
  //   title: "Fighting the Borrow Checker",
  //   slug: "borrow-checker",
  //   link: "/rust/borrow-checker",
  //   date: "May 18, 2026",
  //   crabType: "gesture",
  //   blurb: [
  //     "Spent the day understanding ownership, borrowing, and lifetimes.",
  //     "Rewrote several small programs to satisfy the borrow checker and avoid cloning data unnecessarily.",
  //     "While frustrating at first, the system started to click once I visualized memory ownership more clearly.",
  //   ],
  //   component: BorrowChecker,
  // },

  // {
  //   id: 3,
  //   title: "Building My First Rust CLI Tool",
  //   slug: "first-cli-tool",
  //   link: "/rust/first-cli-tool",
  //   date: "May 25, 2026",
  //   crabType: "happy",
  //   blurb: [
  //     "Created a small command-line tool using clap to parse arguments.",
  //     "Learned how Rust crates work and how dependency management differs from npm.",
  //     "The resulting binary was extremely fast and compiled into a single portable executable.",
  //   ],
  //   component: FirstCliTool,
  // },
];

export default rustPosts;