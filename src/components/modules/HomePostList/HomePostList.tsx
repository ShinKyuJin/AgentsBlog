import React, { FC, useEffect } from "react";
import styled from "styled-components";
import {
  seeLatestPostData,
  seeTrendyPostData,
  QUERY_LATEST_POST,
  QUERY_TRENDY_POST,
} from "./HomePostListQueries";
import HomePostCard from "../../atoms/post/HomePostCard";
import { toast } from "react-toastify";
import { HomePostProps } from "../../../models/post";
import { ApolloError, useQuery } from "@apollo/client";

interface HomePostListProps {
  postType: "trend" | "recent";
}

const HomePostList: FC<HomePostListProps> = ({ postType }) => {
  const {
    data: trendData,
    loading: trendLoading,
    error: trendError,
  } = useQuery<seeTrendyPostData>(QUERY_TRENDY_POST, {
    skip: postType === "recent",
  });
  const {
    data: recentData,
    loading: recentLoading,
    error: recentError,
  } = useQuery<seeLatestPostData>(QUERY_LATEST_POST, {
    skip: postType === "trend",
  });

  let post: HomePostProps[] | undefined,
    loading: boolean | undefined,
    error: ApolloError | undefined;
  if (postType === "trend") {
    [post, loading, error] = [
      trendData?.seeTrendyPost,
      trendLoading,
      trendError,
    ];
  } else if (postType === "recent") {
    [post, loading, error] = [
      recentData?.seeLatestPost,
      recentLoading,
      recentError,
    ];
  }
  useEffect(() => {
    if (error) {
      //window.location.reload();
      setTimeout(() => window.location.reload(), 2000);
      toast.error("포스트를 가져오던 중 문제가 발생했습니다.");
    }
  }, [error]);

  const loadingCard = Array.from({ length: 20 }, (x, i) => i).map((i) => (
    <HomePostCard key={i} />
  ));
  const mappingCard = post
    ? post.map((postInfo) => (
        <HomePostCard key={postInfo.id} postInfo={postInfo} />
      ))
    : null;

  return (
    <Main>
      <Container>
        {loading || !post || error ? loadingCard : mappingCard}
      </Container>
    </Main>
  );
};

const Container = styled.section`
  @media (max-width: 768px) {
    margin: 0px;
  }
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  margin: -1rem;
`;

const Main = styled.main`
  width: 100%;
`;

export default HomePostList;
