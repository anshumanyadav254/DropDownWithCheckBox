import React from "react";
import { Dropdown } from "semantic-ui-react";
import '../App.css'
const options1 = [
  {
    key: "1",
    text: "Anshuman",
    value: "1",
    image: {
      avatar: true,
      src: "https://he-s3.s3.amazonaws.com/media/avatars/anshuman277/resized/160/0d2b744img_0223.jpg"
    }
  },
  {
    key: "2",
    text: "Prithvi sha",
    value: "2",
    image: {
      avatar: true,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwRqgKDwvp7GBxmVbrJAuYShPrP3WDygcIVQ&usqp=CAU"
    }
  },
  {
    key: "3",
    text: "Virat Kohali",
    value: "3",
    image: {
      avatar: true,
      src: "https://t1.gstatic.com/images?q=tbn:ANd9GcS5hCGSJyskVOR1qNQwuRzLsq99Qz60CqHIGsAZQ7Z-wooooD934jJM6979cpnD"
    }
  },
  {
    key: "4",
    text: "Rohit Sharma ",
    value: "4",
    image: {
      avatar: true,
      src: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170658/rohit-sharma.jpg"
    }
  },
  {
    key: "5",
    text: "Sikhar Dhawan",
    value: "5",
    image: {
      avatar: true,
      src: "https://st3.cricketcountry.com/wp-content/uploads/cricket/20140521024223.jpeg"
    }
  },
  {
    key: "6",
    text: "Rishabh Pant",
    value: "6",
    image: {
      avatar: true,
      src: "https://pbs.twimg.com/profile_images/1255017319635410944/lFsXKEs__400x400.jpg"
    }
  },
  {
    key: "7",
    text: "Pujara",
    value: "7",
    image: {
      avatar: true,
      src: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c153263/cheteshwar-pujara.jpg"
    }
  },
  {
    key: "8",
    text: "MS Dhoni",
    value: "8",
    image: {
      avatar: true,
      src: "https://s.ndtvimg.com/images/entities/300/ms-dhoni-700.png"
    }
  },
  {
    key: "9",
    text: "Bumrah",
    value: "9",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
    }
  },
  {
    key: "10",
    text: "Chahal",
    value: "10",
    image: {
      avatar: true,
      src: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c170690/yuzvendra-chahal.jpg"
    }
  },
  {
    key: "11",
    text: "Kuldeep",
    value: "11",
    image: {
      avatar: true,
      src: "https://static.indiatvnews.com/ins-web/images/kuldeep-yadav-1540550580.jpg"
    }
  },
  {
    key: "12",
    text: "Siraj",
    value: "12",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
    }
  },
  {
    key: "13",
    text: "Umesh Yadav",
    value: "13",
    image: {
      avatar: true,
      src: "https://m.cricbuzz.com/a/img/v1/192x192/i1/c153874/umesh-yadav.jpg"
    }
  },
  {
    key: "14",
    text: "Mayank Yadav",
    value: "14",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
    }
  },
  {
    key: "15",
    text: "Jadeja",
    value: "15",
    image: {
      avatar: true,
      src: "https://react.semantic-ui.com/images/avatar/small/elliot.jpg"
    }
  }
];

const DropDown = () => (
  <Dropdown
    placeholder=" Click or type To Select Team"
    fluid
    multiple
    selection
    icon
    search
    onMouseDown
    
    className="drop"
    checkbox
    options={options1}
  />
);

export default DropDown;
