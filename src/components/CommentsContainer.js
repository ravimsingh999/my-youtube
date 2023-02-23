import React from "react";

const commentsData = [
  {
    name: "Ravi Mohan Singh",
    text: "Lorem epsum text, this is a comments",
    replies: [],
  },
  {
    name: "Ravi Mohan Singh",
    text: "Lorem epsum text, this is a comments",
    replies: [
      {
        name: "Ravi Mohan Singh",
        text: "Lorem epsum text, this is a comments",
        replies: [],
      },
      {
        name: "Ravi Mohan Singh",
        text: "Lorem epsum text, this is a comments",
        replies: [
          {
            name: "Ravi Mohan Singh",
            text: "Lorem epsum text, this is a comments",
            replies: [],
          },
          {
            name: "Ravi Mohan Singh",
            text: "Lorem epsum text, this is a comments",
            replies: [
              {
                name: "Ravi Mohan Singh",
                text: "Lorem epsum text, this is a comments",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: "Ravi Mohan Singh",
        text: "Lorem epsum text, this is a comments",
        replies: [],
      },
      {
        name: "Ravi Mohan Singh",
        text: "Lorem epsum text, this is a comments",
        replies: [
          {
            name: "Ravi Mohan Singh",
            text: "Lorem epsum text, this is a comments",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ravi Mohan Singh",
    text: "Lorem epsum text, this is a comments",
    replies: [],
  },
  {
    name: "Ravi Mohan Singh",
    text: "Lorem epsum text, this is a comments",
    replies: [],
  },
  {
    name: "Ravi Mohan Singh",
    text: "Lorem epsum text, this is a comments",
    replies: [],
  },
  {
    name: "Ravi Mohan Singh",
    text: "Lorem epsum text, this is a comments",
    replies: [],
  },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex mt-2 mx-5 p-2 bg-gray-200 rounded-lg ">
      <img
        className="w-8 h-8 mt-1"
        alt="user-image"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7wrKjpbjvQzLHlQfvKO8gsopOJBvbCEXe1A&usqp=CAU"
      />
      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="border border-l-black ml-5 pl-5">
        <CommentList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="w-[900px]">
      <h1 className="mx-5 p-2 text-xl font-bold">Comments :</h1>
      <CommentList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
