import fs from "fs";
import path from "path";
import matter from "gray-matter";
//process.cwd() points to the root of the project not the lib folder...
const postsDirectory = path.join(process.cwd(), "posts");

function getPostData(fileName) {
  const filePath = path.join(postsDirectory, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);
}

function getAllPosts() {
  //postFiles is an array of file name strings
  const postFiles = fs.readdirSync(postsDirectory);
}
