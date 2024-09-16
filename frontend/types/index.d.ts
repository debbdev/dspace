export interface SidebarLink {
  imgURL: string;
  route: string;
  label: string;
}
export interface Category {
  id: number;
  title: string;
  collection: string;
}
export interface AllCourses {
  id: number;
  title: string;
  description: string;
  category: Category[];
  image: string;
  videoSrc: string;
  studentTotal: string;
  author: string;
  oldPrice: string;
  newPrice: string;
}
export interface Blogs {
  id: number;
  heading: string;
  blogText: string;
  img: string;
  time: string;
}
// export interface Course {
//   id: number;
//   title: string;
//   description: string;
//   category: Category[];
//   image: string;
//   videoSrc: string;
//   studentTotal: string;
//   author: string;
//   oldPrice: string;
//   newPrice: string;
// }

export interface CourseBundle {
  id: number;
  title: string;
  description: string;
  image: string;
  packages: string[];
  date: string;
  oldPrice: string;
  newPrice: string;
}

// export interface ExploreCourse {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   image: string;
//   videoSrc: string;
//   studentTotal: string;
//   author: string;
//   oldPrice: string;
//   newPrice: string;
// }
export interface Instructor {
  img: string;
  heading: string;
  text: string;
}
