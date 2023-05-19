import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/getHeaderAPI";

export const useCategoryStore = defineStore("category", () => {
  // 导航列表的数据逻辑
  const categoryList = ref([]);
  const getCategory = async () => {
    const res = await getCategoryAPI();
    categoryList.value = res.result;
    // 目前是服务器崩了
  };
    return {
        categoryList,
        getCategory
    }
});
