const fs = require(fs);
const matter = require(gray-matter);
const path = require(path);

function loadPosts() {
  const dir = path.resolve(__dirname, data, posts);
  const files = fs.readdirSync(dir).filter(f=>f.endsWith(.md));
  const posts = files.map(f => {
    const full = path.join(dir,f);
    const raw = fs.readFileSync(full,utf8);
    const m = matter(raw);
    return { slug: path.basename(f,.md), frontmatter: m.data, content: m.content };
  });
  return posts.sort((a,b)=> new Date(b.frontmatter.date||0) - new Date(a.frontmatter.date||0));
}
