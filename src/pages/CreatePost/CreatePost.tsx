import React from "react";
import style from "./CreatePost.module.scss";
import { CreatePostForm } from "./CreatePostForm/CreatePostForm";
import { CreatePostType, OnSubmit } from "./CreatePostTypes";

export const CreatePost: CreatePostType = ({
  createPost,
  successMessage,
  errorMessage,
}) => {
  const onSubmit: OnSubmit = (values: any) => {
    createPost(values);
  };

  return (
    <section className={style.section}>
      <CreatePostForm
        onSubmit={onSubmit}
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
    </section>
  );
};