<template>
  <div>
    <new-article-card :author="author" :article="article" />
  </div>
</template>

<script>
import NewArticleCard from "../components/NewArticleCard";

import { FakeData } from "../utils/utils";

export default {
  mounted: function() {},
  components: {
    NewArticleCard
  },
  data: function() {
    return {
      author: FakeData.author,
      article: FakeData.article
    };
  }
};
</script>

<style>
</style>
