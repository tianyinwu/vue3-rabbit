import httpInstance from "@/utils/http";

export function getCategoryAPI() {
  return httpInstance({
    // 写明接口配置
    url: "/home/category/head", // 默认get请求，就不用写了
  });
}