import React from "react";
import { ImageCard } from "../components/ImageCardComponent/ImageCard";
import { IoMdContacts } from "react-icons/io";
import { MdLeaderboard, MdContentCopy, MdArchive } from "react-icons/md";
import { SlCalender } from "react-icons/sl";
import {
  BsFilterLeft,
  BsFillPersonPlusFill,
  BsArrowRight,
  BsShare,
} from "react-icons/bs";
import { IoReloadOutline, IoRocketSharp } from "react-icons/io5";
import { ImPower } from "react-icons/im";
import { AiOutlinePlus, AiOutlineEye, AiOutlineMinus } from "react-icons/ai";
import { CgTemplate } from "react-icons/cg";

const icons = {
  BsFilterLeft: <BsFilterLeft className="icon" />,
  IoMdContacts: <IoMdContacts className="icon" />,
  MdLeaderboard: <MdLeaderboard className="icon" />,
  SlCalender: <SlCalender className="icon" />,
  IoRocketSharp: <IoRocketSharp className="icon" />,
  ImPower: <ImPower className="icon" />,
  BsFillPersonPlusFill: <BsFillPersonPlusFill className="icon" />,
  AiOutlinePlus: <AiOutlinePlus className="icon" />,
  BsArrowRight: <BsArrowRight className="icon" />,
  MdContentCopy: <MdContentCopy className="icon" />,
  CgTemplate: <CgTemplate className="icon" />,
  AiOutlineEye: <AiOutlineEye className="icon" />,
  MdArchive: <MdArchive className="icon" />,
  IoReloadOutline: <IoReloadOutline className="icon" />,
  AiOutlineMinus: <AiOutlineMinus className="icon" />,
  BsShare: <BsShare />,
};

const images = {
  image1: "https://images.alphacoders.com/480/thumbbig-480661.webp",
  image2: "https://images2.alphacoders.com/871/thumbbig-87120.webp",
  image3: "https://images4.alphacoders.com/177/thumbbig-177604.webp",
  image4: "https://images6.alphacoders.com/673/thumbbig-673051.webp",
  image5: "https://images2.alphacoders.com/480/thumbbig-480530.webp",
};

export default {
  title: "Image Card",
  component: ImageCard,
  argTypes: {
    icon: {
      options: [...Object.keys(icons)],
      mapping: {
        ...icons,
      },
    },
    images: {
      options: [...Object.keys(images)],
      mapping: {
        ...images,
      },
    },
  },
  parameters: {
    Layout: "centered",
  },
};

const ImageCardComponent = (args) => <ImageCard {...args} />;

export const ImageCards = ImageCardComponent.bind({});

ImageCardComponent.args = {
  images: images.image1,
  ImageCardCaption: "Built by developers",
  ImageCardTitle: "Complex Documentation",
  ImageCardContent:
    "From colors, cards, typography to complex elements, you will find the full documentation. Play with the utility classes and you will create unlimited combinations for our components.",
  ImageCardButton: "Read More",
  icon: <BsArrowRight />,
  size : 'large',
};
